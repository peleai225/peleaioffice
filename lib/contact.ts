import { z } from 'zod'

/** Objets de demande proposés dans le formulaire (la valeur correspond au paramètre ?objet=). */
export const contactSubjects = [
  { value: 'devis', label: 'Demande de devis' },
  { value: 'sites-internet', label: 'Site internet' },
  { value: 'solutions-ia', label: 'Solution IA' },
  { value: 'creation-de-contenu', label: 'Création de contenu' },
  { value: 'formation', label: 'Formation' },
  { value: 'transformation-digitale', label: 'Transformation digitale' },
  { value: 'autre', label: 'Autre demande' },
] as const

const subjectValues = contactSubjects.map((s) => s.value) as [string, ...string[]]

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, 'Indiquez votre nom (2 caractères minimum).').max(100),
    email: z.string().trim().max(150).email('Cette adresse email ne semble pas valide.').or(z.literal('')),
    phone: z
      .string()
      .trim()
      .max(30)
      .regex(/^[+\d\s().-]*$/, 'Utilisez uniquement des chiffres, espaces et le signe +.'),
    company: z.string().trim().max(120),
    subject: z.enum(subjectValues, { errorMap: () => ({ message: 'Choisissez l’objet de votre demande.' }) }),
    message: z.string().trim().min(10, 'Décrivez votre besoin en quelques mots (10 caractères minimum).').max(4000),
  })
  .refine((d) => d.email !== '' || d.phone.replace(/\D/g, '').length >= 8, {
    message: 'Laissez au moins un email ou un numéro de téléphone pour que nous puissions vous répondre.',
    path: ['email'],
  })

export type ContactFields = 'name' | 'email' | 'phone' | 'company' | 'subject' | 'message'

export type ContactState =
  | { status: 'idle' }
  | { status: 'success'; name: string }
  | { status: 'error'; message: string; fieldErrors?: Partial<Record<ContactFields, string>>; values?: Partial<Record<ContactFields, string>> }

export function subjectLabel(value: string) {
  return contactSubjects.find((s) => s.value === value)?.label ?? value
}
