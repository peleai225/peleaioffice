import type { Metadata } from 'next'
import { LegalPage } from '@/components/sections/legal-page'
import { mentions } from '@/content/legal'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site PeleAI : éditeur, hébergement, propriété intellectuelle et droit applicable.',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      href="/mentions-legales"
      lead="Qui édite ce site, qui l’héberge, et les règles qui s’y appliquent."
      sections={mentions}
      updated="15 octobre 2026"
    />
  )
}
