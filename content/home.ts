/**
 * Contenus propres à l’accueil. Règle : aucun chiffre, client ou témoignage inventé.
 * Tout ce qui manque porte `todo` et s’affiche comme [À REMPLACER : …].
 */

export const hero = {
  eyebrow: 'Agence de transformation digitale · Abidjan',
  title: "Faites travailler l’IA pour votre entreprise.",
  lead: "Sites internet, contenus, formations et outils d’intelligence artificielle, conçus pour les PME, les institutions et les entrepreneurs d’Afrique francophone.",
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
}

export type Stat = { figure: string; label: string; gauge: number; todo?: string }

export const stats: Stat[] = [
  // Source : bio du fondateur (« plus de dix entreprises accompagnées »). À confirmer.
  { figure: '10+', label: 'entreprises accompagnées', gauge: 0.8 },
  { figure: '60+', label: 'personnes formées', gauge: 0.65 },
  { figure: '11', label: 'restaurants équipés de MenuPro', gauge: 0.55 },
]

/** Clients et projets réels cités sur l’ancien site. [À CONFIRMER : accord de chaque client pour être cité] */
export const clients = ['MenuPro', 'Grand Bazar', 'BOUA GROUP', "Charm’s", 'Khara Consulting', 'UVCI', 'IUA']

export const valuePoints = [
  {
    title: 'Nous partons de votre métier',
    text: "Avant de parler d’outils, nous regardons comment vous travaillez, ce qui vous fait perdre du temps et ce que vos clients attendent.",
  },
  {
    title: 'Nous livrons du concret',
    text: 'Un site en ligne, un assistant qui répond, une équipe formée : chaque mission se termine par un résultat que vous utilisez.',
  },
  {
    title: 'Vous restez autonomes',
    text: 'Nous formons les personnes qui utiliseront les outils, et nous restons joignables sur WhatsApp après la livraison.',
  },
]

/** Une vraie séquence : la numérotation est une information. */
export const method = [
  {
    title: 'Écouter',
    text: 'Un premier échange, gratuit, pour comprendre votre activité, vos objectifs et votre budget.',
  },
  {
    title: 'Proposer',
    text: 'Un devis clair : ce que nous livrons, en combien de temps, à quel prix. Sans jargon.',
  },
  {
    title: 'Construire',
    text: 'Des points réguliers pour valider chaque étape. Vous voyez le travail avancer.',
  },
  {
    title: 'Transmettre',
    text: 'Mise en ligne, formation de vos équipes, puis un suivi pour ajuster après le lancement.',
  },
]

export type Testimonial = { quote: string; name: string; role: string; company: string }

/** [À REMPLACER : 2 à 4 témoignages réels, avec accord de publication] */
export const testimonials: Testimonial[] = []

export const training = {
  eyebrow: 'Formations',
  title: "Vos équipes à l’aise avec l’IA, sur leurs propres dossiers.",
  text: "Ateliers en entreprise et masterclass ouvertes : on part de vos tâches réelles (rédiger, analyser, répondre aux clients) et chacun repart avec des méthodes qu’il applique dès le lendemain.",
  points: ['En entreprise ou en session ouverte', 'En présentiel à Abidjan', 'Supports remis à chaque participant'],
  lastSession: 'Dernière masterclass « IA & codage » : 6 décembre 2025',
  trainer: { name: 'Pelecho Junior Koné', role: 'Fondateur de PeleAI, formateur', photo: '/images/portfolio/pelecho-junior-kone-portrait.png' },
}

export const finalCta = {
  title: 'Parlons de votre projet.',
  text: "Décrivez votre besoin en quelques lignes : nous revenons vers vous avec des questions précises, puis un devis.",
}
