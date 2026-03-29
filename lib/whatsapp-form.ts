import { buildWhatsAppUrl } from "@/lib/site-content"

export const CONTACT_SUBJECT_LABELS: Record<string, string> = {
  web: "Création de site web",
  marketing: "Marketing digital",
  branding: "Branding & identité visuelle",
  ia: "Solutions IA",
  peleai360: "PeleAI360 - Demande de démo",
  other: "Autre demande",
}

export function buildContactFormWhatsAppMessage(params: {
  name: string
  email: string
  phone: string
  company: string
  subjectKey: string
  message: string
}): string {
  const subjectLabel =
    CONTACT_SUBJECT_LABELS[params.subjectKey] ?? params.subjectKey
  const lines = [
    "Bonjour,",
    "",
    "Message envoyé depuis le formulaire du site PeleAI :",
    "",
    `Nom : ${params.name.trim()}`,
    `Email : ${params.email.trim()}`,
    params.phone.trim() ? `Téléphone : ${params.phone.trim()}` : null,
    params.company.trim() ? `Entreprise : ${params.company.trim()}` : null,
    `Sujet : ${subjectLabel}`,
    "",
    "Message :",
    params.message.trim(),
    "",
    "---",
  ]
  return lines.filter((l) => l !== null).join("\n")
}

export function buildDemoFormWhatsAppMessage(params: {
  name: string
  email: string
  phone: string
  company: string
  message: string
}): string {
  const lines = [
    "Bonjour,",
    "",
    "Demande de démo PeleAI360 (formulaire site) :",
    "",
    `Nom : ${params.name.trim()}`,
    `Email : ${params.email.trim()}`,
    params.phone.trim() ? `Téléphone : ${params.phone.trim()}` : null,
    params.company.trim() ? `Entreprise : ${params.company.trim()}` : null,
    "",
    params.message.trim()
      ? `Message :\n${params.message.trim()}`
      : "(Pas de message complémentaire)",
    "",
    "---",
  ]
  return lines.filter((l) => l !== null).join("\n")
}

export function openWhatsAppWithMessage(digits: string, message: string): void {
  const url = buildWhatsAppUrl(digits, message)
  window.open(url, "_blank", "noopener,noreferrer")
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}
