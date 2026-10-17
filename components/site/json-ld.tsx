import { services } from '@/content/services'
import { contact, site } from '@/content/site'
import { founderSchema } from '@/lib/schema'
import { getSiteUrl } from '@/lib/site-url'
import { JsonLd } from './structured-data'

/** Organisation (avec logo) et site web, présents sur toutes les pages. */
export function OrganizationJsonLd() {
  const base = getSiteUrl()
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': `${base}/#organization`,
          name: site.name,
          slogan: site.slogan,
          foundingDate: '2023',
          description: site.description,
          url: base,
          logo: { '@type': 'ImageObject', url: `${base}/brand/logo-bleu.png`, width: 1200, height: 515 },
          image: `${base}/brand/logo-bleu.png`,
          email: contact.email,
          telephone: contact.phoneDisplay,
          address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'CI' },
          areaServed: { '@type': 'Country', name: site.country },
          founder: founderSchema(),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services',
            itemListElement: services.map((s) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: s.title, url: `${base}/services/${s.slug}` },
            })),
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${base}/#website`,
          name: site.name,
          url: base,
          inLanguage: 'fr',
          publisher: { '@id': `${base}/#organization` },
        }}
      />
    </>
  )
}
