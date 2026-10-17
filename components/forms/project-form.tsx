'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { sendContact } from '@/app/contact/actions'
import { Arc, ArcLoader, Button, Field, Input, Select, Textarea } from '@/components/ui'
import { WhatsAppIcon } from '@/components/site/icons'
import { whatsappUrl } from '@/content/site'
import { contactSubjects, type ContactFields, type ContactState } from '@/lib/contact'

const initial: ContactState = { status: 'idle' }

/** Formulaire de contact : court, accessible, anti-spam discret, confirmation claire. */
export function ProjectForm({ defaultSubject = 'devis' }: { defaultSubject?: string }) {
  const [state, action, pending] = useActionState(sendContact, initial)
  const [startedAt, setStartedAt] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => setStartedAt(Date.now()), [])

  // Après une erreur : focus sur le premier champ en faute (ou sur le message général).
  useEffect(() => {
    if (state.status !== 'error') return
    const first = state.fieldErrors && (Object.keys(state.fieldErrors)[0] as ContactFields | undefined)
    const target = first ? formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`) : statusRef.current
    target?.focus()
  }, [state])

  useEffect(() => {
    if (state.status === 'success') statusRef.current?.focus()
  }, [state])

  if (state.status === 'success') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="grid gap-5 py-6 outline-none">
        <Arc size={56} className="text-cta" />
        <h2 className="font-display text-h2 font-semibold text-brand">Merci{state.name ? `, ${state.name.split(' ')[0]}` : ''}.</h2>
        <p className="text-measure text-lead text-ink-soft">
          Votre demande est bien arrivée. Nous revenons vers vous rapidement avec quelques questions, puis une proposition.
        </p>
        <div>
          <Button href={whatsappUrl('Bonjour PeleAI, je viens de vous envoyer une demande depuis le site.')} variant="outline" icon={<WhatsAppIcon className="size-4" />}>
            Compléter sur WhatsApp
          </Button>
        </div>
      </div>
    )
  }

  const errors = state.status === 'error' ? state.fieldErrors ?? {} : {}
  const values = state.status === 'error' ? state.values ?? {} : {}
  const subject = values.subject ?? (contactSubjects.some((s) => s.value === defaultSubject) ? defaultSubject : 'devis')

  return (
    <form ref={formRef} action={action} noValidate className="grid gap-6" aria-describedby="form-aide">
      <p id="form-aide" className="text-small text-ink-soft">
        Les champs marqués d’un astérisque sont obligatoires. Laissez au moins un email ou un numéro.
      </p>

      {state.status === 'error' && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="rounded-field bg-[#fbe7e5] px-4 py-3 text-small font-semibold text-danger outline-none">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="cf-nom" label="Votre nom" required error={errors.name}>
          {(a) => <Input {...a} name="name" autoComplete="name" defaultValue={values.name} />}
        </Field>
        <Field id="cf-entreprise" label="Entreprise ou organisation" error={errors.company}>
          {(a) => <Input {...a} name="company" autoComplete="organization" defaultValue={values.company} />}
        </Field>
        <Field id="cf-email" label="Email" error={errors.email}>
          {(a) => <Input {...a} name="email" type="email" autoComplete="email" inputMode="email" defaultValue={values.email} />}
        </Field>
        <Field id="cf-tel" label="Téléphone ou WhatsApp" error={errors.phone}>
          {(a) => <Input {...a} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+225" defaultValue={values.phone} />}
        </Field>
      </div>
      <Field id="cf-objet" label="Objet de votre demande" required error={errors.subject}>
        {(a) => (
          <Select {...a} name="subject" defaultValue={subject}>
            {contactSubjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </Select>
        )}
      </Field>
      <Field id="cf-message" label="Votre besoin" required hint="Quelques lignes suffisent : votre activité, ce que vous voulez obtenir, vos délais." error={errors.message}>
        {(a) => <Textarea {...a} name="message" defaultValue={values.message} />}
      </Field>

      {/* Anti-spam : champ invisible pour les humains, et horodatage du début de saisie. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-site">Ne pas remplir</label>
        <input id="cf-site" name="site_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="started_at" value={startedAt} />

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" arrow={!pending} disabled={pending} aria-disabled={pending}>
          {pending ? 'Envoi en cours…' : 'Envoyer ma demande'}
        </Button>
        {pending && <ArcLoader size={28} label="Envoi en cours" />}
      </div>
      <p className="text-small text-ink-soft">
        Vos informations servent uniquement à répondre à votre demande. Voir notre{' '}
        <a href="/politique-de-confidentialite" className="text-brand underline underline-offset-4">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  )
}
