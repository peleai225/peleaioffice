import type { Metadata } from 'next'
import { LegalPage } from '@/components/sections/legal-page'
import { privacy } from '@/content/legal'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment PeleAI collecte, utilise et protège vos données personnelles, conformément à la loi ivoirienne n° 2013-450.',
  alternates: { canonical: '/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      href="/politique-de-confidentialite"
      lead="Quelles données nous recueillons, pourquoi, combien de temps, et comment exercer vos droits."
      sections={privacy}
      updated="15 octobre 2026"
    />
  )
}
