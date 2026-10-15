/** Identité, coordonnées et navigation. Source unique : aucun de ces textes n’est répété dans les composants. */

export const site = {
  name: 'PeleAI',
  slogan: "L’Innovation par l’intelligence Artificielle",
  description:
    "PeleAI accompagne les PME, institutions et entrepreneurs d’Afrique francophone : sites internet, création de contenu, formations, solutions d’intelligence artificielle et transformation digitale. Basée à Abidjan.",
  city: 'Abidjan',
  country: "Côte d’Ivoire",
  /** À confirmer : délai de réponse annoncé sur le site. */
  responseTime: 'Réponse sous 24 h ouvrées',
} as const

export const contact = {
  email: 'peleai.ci@gmail.com',
  phoneDisplay: '+225 05 06 80 53 82',
  phoneHref: 'tel:+2250506805382',
  whatsappDigits: '2250506805382',
  /** [À REMPLACER : adresse précise du siège (commune, quartier)] */
  address: "Abidjan, Côte d’Ivoire",
  hours: [
    { days: 'Lundi – vendredi', time: '9 h – 18 h' },
    { days: 'Samedi', time: '9 h – 13 h' },
  ],
} as const

export function whatsappUrl(message = 'Bonjour PeleAI, je souhaite parler de mon projet.') {
  return `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(message)}`
}

/** [À REMPLACER : pages officielles PeleAI] — ces liens pointent aujourd’hui vers des comptes personnels. */
export const social = [
  { platform: 'linkedin', label: 'LinkedIn', url: 'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278' },
  { platform: 'facebook', label: 'Facebook', url: 'https://web.facebook.com/junior.kone.3192' },
  { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@pelechokone' },
] as const

export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
] as const

export const legalNav = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
] as const

export const primaryCta = { label: 'Demander un devis', href: '/contact?objet=devis' } as const
