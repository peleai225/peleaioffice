'use server'

import { headers } from 'next/headers'
import { contactSchema, subjectLabel, type ContactFields, type ContactState } from '@/lib/contact'

/** Limitation de débit simple, en mémoire : 5 envois par adresse IP sur 10 minutes. */
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch] ?? ch)
}

const FALLBACK = 'Vous pouvez aussi nous écrire directement sur WhatsApp au +225 05 06 80 53 82.'

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const raw = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    company: String(formData.get('company') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(formData.get('message') ?? ''),
  }

  // Anti-spam 1 : champ piège invisible rempli → réponse « succès » silencieuse, rien n'est envoyé.
  if (String(formData.get('site_web') ?? '') !== '') {
    return { status: 'success', name: raw.name }
  }

  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'inconnue'
  if (rateLimited(ip)) {
    return { status: 'error', message: `Trop de demandes envoyées en peu de temps. Réessayez dans quelques minutes. ${FALLBACK}`, values: raw }
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactFields, string>> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactFields
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return { status: 'error', message: 'Certains champs sont à corriger.', fieldErrors, values: raw }
  }

  // Anti-spam 2 : formulaire valide rempli en moins de 3 secondes (robot) → succès silencieux.
  // Vérifié APRÈS la validation, pour qu'un humain rapide voie toujours ses erreurs.
  const startedAt = Number(formData.get('started_at') ?? 0)
  if (startedAt > 0 && Date.now() - startedAt < 3000) {
    return { status: 'success', name: parsed.data.name }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return { status: 'error', message: `L’envoi par email n’est pas encore activé sur ce site. ${FALLBACK}`, values: raw }
  }

  const d = parsed.data
  const rows: [string, string][] = [
    ['Nom', d.name],
    ['Email', d.email || '—'],
    ['Téléphone', d.phone || '—'],
    ['Entreprise', d.company || '—'],
    ['Objet', subjectLabel(d.subject)],
  ]
  const html = `
    <h2 style="font-family:sans-serif;color:#345594">Nouvelle demande depuis peleai.ci</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#556079">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`).join('')}
    </table>
    <p style="font-family:sans-serif;white-space:pre-wrap;border-left:3px solid #345594;padding-left:12px">${escapeHtml(d.message)}</p>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email || undefined,
        subject: `[Site PeleAI] ${subjectLabel(d.subject)} — ${d.name}`,
        html,
        text: `${rows.map(([k, v]) => `${k} : ${v}`).join('\n')}\n\n${d.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) throw new Error(`Resend ${res.status}`)
  } catch {
    return { status: 'error', message: `Votre message n’a pas pu être envoyé. ${FALLBACK}`, values: raw }
  }

  return { status: 'success', name: d.name }
}
