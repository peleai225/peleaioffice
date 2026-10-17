/** Page À propos. Faits repris de l’ancien site (bio du fondateur) ; le reste porte `todo`. */

export const mission = {
  title: 'Rendre le digital et l’IA utiles, concrètement, aux entreprises d’Afrique francophone.',
  text: 'Les outils existent. Ce qui manque souvent, c’est quelqu’un qui comprenne votre métier, choisisse ce qui vous sera vraiment utile, le mette en place et forme vos équipes. C’est notre travail.',
}

export const values = [
  { title: 'Clarté', text: 'Pas de jargon. Vous comprenez ce que nous proposons, ce que cela coûte et ce que vous allez recevoir.' },
  { title: 'Concret', text: 'Chaque mission se termine par quelque chose qui fonctionne et que vous utilisez : un site, un outil, une équipe formée.' },
  { title: 'Transmission', text: 'Nous formons les personnes qui utiliseront les outils. Votre autonomie fait partie du résultat.' },
  { title: 'Proximité', text: 'Basés à Abidjan, joignables sur WhatsApp, nous connaissons les réalités locales : Mobile Money, connexions mobiles, habitudes de vos clients.' },
]

export { founder } from './founder'

export const timeline: { year: string; title: string; text: string; todo?: string }[] = [
  { year: '2025', title: 'Création de PeleAI', text: 'Lancement de l’agence à Abidjan, aux côtés de MenuPro.' },
  { year: '2025', title: 'Lancement de MenuPro', text: 'Une plateforme de commande et de paiement Mobile Money pour les restaurants.' },
  { year: '2025', title: 'Masterclass IA & codage', text: 'Une session ouverte pour apprendre à utiliser l’IA et à coder avec elle.' },
]

export const anchoring = {
  title: 'Ivoiriens, et fiers de l’être.',
  text: 'Nous concevons pour les téléphones d’entrée de gamme et les connexions 3G et 4G instables, nous intégrons les paiements que vos clients utilisent vraiment, et nous parlons le langage de vos équipes. Nos projets sont pensés ici, pour ici.',
}
