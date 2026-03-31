import { getSiteUrl } from '@/lib/site-url'

const DEFAULT_OG_PATH = '/images/peleai-logo-on-white.png'

export function OrganizationJsonLd() {
  const base = getSiteUrl()

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${base}/#organization`,
    name: 'PeleAI',
    alternateName: 'Pele AI',
    url: base,
    logo: {
      '@type': 'ImageObject',
      url: `${base}${DEFAULT_OG_PATH}`,
      width: 400,
      height: 112,
    },
    image: `${base}${DEFAULT_OG_PATH}`,
    description:
      "PeleAI est une agence digitale basée à Abidjan, Côte d'Ivoire. Spécialisée dans la création de sites web, marketing digital, branding et solutions d'intelligence artificielle pour PME et startups africaines.",
    slogan: "L'Innovation par l'Intelligence Artificielle",
    foundingDate: '2023',
    founder: {
      '@type': 'Person',
      name: 'Pelecho Junior Kone',
      jobTitle: 'Fondateur & Consultant en Transformation Numérique',
      url: `${base}/portfolio`,
      sameAs: [
        'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278',
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
      addressRegion: 'Lagunes',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+225050805382',
        contactType: 'customer service',
        availableLanguage: ['French'],
        contactOption: 'TollFree',
      },
    ],
    email: 'peleai.ci@gmail.com',
    telephone: '+225 05 08 05 382',
    areaServed: [
      { '@type': 'Country', name: "Côte d'Ivoire" },
      { '@type': 'Country', name: 'Sénégal' },
      { '@type': 'Country', name: 'Bénin' },
      { '@type': 'Country', name: 'Togo' },
      { '@type': 'Continent', name: 'Afrique' },
    ],
    serviceType: [
      'Création de sites web',
      'Marketing digital',
      'Branding & Identité visuelle',
      'Solutions Intelligence Artificielle',
      'Automatisation de processus',
      'Développement SaaS',
    ],
    knowsAbout: [
      'Intelligence Artificielle',
      'Transformation Digitale',
      'Marketing Digital',
      'Développement Web',
      'Branding',
      'SEO',
    ],
    sameAs: [
      'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278',
      'https://web.facebook.com/junior.kone.3192',
      'https://www.instagram.com/p/DIgPPqRN1vi/',
      'https://www.tiktok.com/@pelechokone',
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services PeleAI',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création de Sites Web',
            description: 'Sites vitrine, e-commerce et applications web sur-mesure.',
            url: `${base}/services#web`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing Digital',
            description: 'Publicité Meta & Google, SEO, gestion réseaux sociaux.',
            url: `${base}/services#marketing`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branding & Identité Visuelle',
            description: 'Logo, charte graphique, supports marketing.',
            url: `${base}/services#branding`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Solutions IA',
            description: 'Chatbots, automatisation et intégrations intelligence artificielle.',
            url: `${base}/services#ia`,
          },
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: base,
    name: 'PeleAI',
    description: "Agence digitale & IA — Abidjan, Côte d'Ivoire",
    publisher: { '@id': `${base}/#organization` },
    inLanguage: 'fr-CI',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${base}/services` },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
