'use client'

import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSiteContent } from '@/components/providers/site-content-provider'
import {
  buildContactFormWhatsAppMessage,
  isValidEmail,
  openWhatsAppWithMessage,
} from '@/lib/whatsapp-form'

const subjects = [
  { value: 'web', label: 'Création de site web' },
  { value: 'marketing', label: 'Marketing digital' },
  { value: 'branding', label: 'Branding & identité visuelle' },
  { value: 'ia', label: 'Solutions IA' },
  { value: 'peleai360', label: 'PeleAI360 - Demande de démo' },
  { value: 'other', label: 'Autre demande' },
]

export function ContactForm() {
  const { content } = useSiteContent()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [subject, setSubject] = React.useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const company = String(formData.get('company') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (name.length < 2) {
      setError('Le nom doit contenir au moins 2 caractères.')
      setIsSubmitting(false)
      return
    }
    if (!isValidEmail(email)) {
      setError('Adresse e-mail invalide.')
      setIsSubmitting(false)
      return
    }
    if (!subject) {
      setError('Veuillez sélectionner un sujet.')
      setIsSubmitting(false)
      return
    }
    if (message.length < 10) {
      setError('Le message doit contenir au moins 10 caractères.')
      setIsSubmitting(false)
      return
    }

    const digits = content.contact.whatsappDigits.replace(/\D/g, '')
    if (!digits) {
      setError('Numéro WhatsApp non configuré. Contactez-nous par e-mail.')
      setIsSubmitting(false)
      return
    }

    const text = buildContactFormWhatsAppMessage({
      name,
      email,
      phone,
      company,
      subjectKey: subject,
      message,
    })

    openWhatsAppWithMessage(digits, text)
    setIsSuccess(true)
    e.currentTarget.reset()
    setSubject('')
    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">WhatsApp ouvert</h3>
        <p className="text-sm text-green-700">
          Votre message a été préparé dans WhatsApp. Vérifiez le texte puis appuyez sur
          « Envoyer » dans l’application pour nous le transmettre.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setIsSuccess(false)}
        >
          Remplir à nouveau
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nom complet *</Label>
          <Input
            id="contact-name"
            name="name"
            placeholder="Votre nom"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Téléphone</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+225 05 06 80 53 82"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-company">Entreprise</Label>
          <Input
            id="contact-company"
            name="company"
            placeholder="Nom de votre entreprise"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Sujet *</Label>
        <Select value={subject} onValueChange={setSubject} required disabled={isSubmitting}>
          <SelectTrigger id="contact-subject">
            <SelectValue placeholder="Sélectionnez un sujet" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Décrivez votre projet ou votre demande..."
          rows={5}
          required
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting || !subject}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Ouverture…
          </>
        ) : (
          'Envoyer sur WhatsApp'
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        En soumettant ce formulaire, un message prérempli s’ouvre dans WhatsApp vers notre numéro.
        Validez l’envoi dans l’application WhatsApp.
      </p>
    </form>
  )
}
