import { getSiteUrl } from '@/lib/site-url'

const DEFAULT_OG_PATH = '/images/peleai-logo-on-white.png'

export function OrganizationJsonLd() {
  const base = getSiteUrl()
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PeleAI',
    url: base,
    logo: `${base}${DEFAULT_OG_PATH}`,
    description:
      "Agence digitale spécialisée dans la création de sites web, marketing digital, branding et solutions IA.",
    areaServed: {
      '@type': 'Country',
      name: "Côte d'Ivoire",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
