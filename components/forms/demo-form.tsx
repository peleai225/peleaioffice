'use client'

import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useSiteContent } from '@/components/providers/site-content-provider'
import {
  buildDemoFormWhatsAppMessage,
  isValidEmail,
  openWhatsAppWithMessage,
} from '@/lib/whatsapp-form'

export function DemoForm() {
  const { content } = useSiteContent()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

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

    const digits = content.contact.whatsappDigits.replace(/\D/g, '')
    if (!digits) {
      setError('Numéro WhatsApp non configuré.')
      setIsSubmitting(false)
      return
    }

    const text = buildDemoFormWhatsAppMessage({ name, email, phone, company, message })
    openWhatsAppWithMessage(digits, text)
    setIsSuccess(true)
    e.currentTarget.reset()
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
          Votre demande de démo a été préparée dans WhatsApp. Envoyez le message pour que nous
          puissions vous recontacter.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setIsSuccess(false)}
        >
          Nouvelle demande
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6')}>
      {error && (
        <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="demo-name">Nom complet *</Label>
          <Input
            id="demo-name"
            name="name"
            placeholder="Votre nom"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-email">Email *</Label>
          <Input
            id="demo-email"
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
          <Label htmlFor="demo-phone">Téléphone</Label>
          <Input
            id="demo-phone"
            name="phone"
            type="tel"
            placeholder="+225 05 06 80 53 82"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-company">Entreprise</Label>
          <Input
            id="demo-company"
            name="company"
            placeholder="Nom de votre entreprise"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-message">Message (optionnel)</Label>
        <Textarea
          id="demo-message"
          name="message"
          placeholder="Décrivez brièvement vos besoins..."
          rows={4}
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Ouverture…
          </>
        ) : (
          'Demander une démo sur WhatsApp'
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Un message prérempli s'ouvre dans WhatsApp ; validez l'envoi dans l'application.
      </p>
    </form>
  )
}
