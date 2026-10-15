/**
 * Formations. Seule la masterclass « IA & codage » est attestée (affiche du 6 décembre 2025).
 * Les autres programmes décrivent le format proposé dans le service Formation : à valider (todo).
 */

export type Program = {
  slug: string
  title: string
  format: string
  audience: string
  duration: string
  price: string
  summary: string
  topics: string[]
  todo?: string
}

export const programs: Program[] = [
  {
    slug: 'masterclass-ia-codage',
    title: 'Masterclass IA & codage',
    format: 'Session ouverte · présentiel',
    audience: 'Étudiants, jeunes professionnels, curieux',
    duration: 'Un samedi, à partir de 8 h',
    price: '15 000 FCFA (édition de décembre 2025)',
    summary:
      'Une session intensive pour comprendre ce que l’intelligence artificielle sait faire, l’utiliser pour apprendre et produire plus vite, et écrire ses premières lignes de code avec son aide.',
    topics: [
      'Comprendre comment fonctionnent les outils d’IA actuels',
      'Bien formuler une demande et vérifier une réponse',
      'Utiliser l’IA pour apprendre et réviser',
      'Premiers pas en code, assistés par l’IA',
    ],
    todo: 'programme détaillé et prix de la prochaine édition',
  },
  {
    slug: 'atelier-ia-entreprise',
    title: 'Atelier IA pour les équipes',
    format: 'En entreprise · présentiel',
    audience: 'Équipes administratives, commerciales, direction',
    duration: 'Sur mesure',
    price: 'Sur devis',
    summary:
      'Un atelier préparé à partir de vos documents et de vos situations réelles, pour que chaque participant reparte avec des méthodes applicables le lendemain.',
    topics: [
      'Rédiger et reformuler emails, comptes rendus et offres',
      'Résumer et analyser des documents',
      'Préparer des réponses types pour le service client',
      'Règles de confidentialité et de vérification',
    ],
    todo: 'durée type et fourchette de prix',
  },
  {
    slug: 'formation-sur-mesure',
    title: 'Formation sur mesure',
    format: 'En entreprise ou en institution',
    audience: 'Selon votre besoin',
    duration: 'Sur mesure',
    price: 'Sur devis',
    summary:
      'Outils numériques, réseaux sociaux, prise en main d’un nouvel outil après un projet : nous construisons le programme avec vous.',
    topics: ['Analyse des besoins du groupe', 'Programme validé avec vous', 'Supports remis aux participants', 'Point de suivi après la formation'],
  },
]

export const formats = [
  { title: 'En entreprise', text: 'Dans vos locaux à Abidjan, sur vos documents et vos outils.' },
  { title: 'Sessions ouvertes', text: 'Masterclass accessibles à tous, annoncées sur nos réseaux et sur WhatsApp.' },
  { title: 'Après un projet', text: 'Prise en main des outils que nous avons livrés, pour que vos équipes restent autonomes.' },
]

export const pastSessions = [{ date: '6 décembre 2025', title: 'Masterclass IA & codage', place: 'Abidjan' }]
