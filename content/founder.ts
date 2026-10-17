/**
 * Fiche du fondateur : source unique pour la page /a-propos/pelecho-junior-kone, la page À propos,
 * la signature des articles et les données structurées (Person).
 *
 * Règle : seuls les faits déjà publics (ancien site, LinkedIn, MarTech Africa) sont publiés.
 * Tout ce que le dossier du 17/10/2026 marque « à confirmer » porte `todo`.
 */

export const founder = {
  slug: 'pelecho-junior-kone',
  /** Forme principale retenue pour le référencement. */
  name: 'Pelecho Junior Koné',
  givenName: 'Pelecho Junior',
  familyName: 'Koné',
  /** Variantes sous lesquelles on le cherche (données structurées « alternateName »). */
  alternateNames: ['Pelecho Junior Kone', 'Pelecho Koné', 'Pelecho Kone', 'Koné Pelecho Junior', 'KONE PELECHO JUNIOR'],
  role: 'Fondateur de PeleAI · Consultant en transformation numérique',
  jobTitle: 'Fondateur de PeleAI, consultant en transformation numérique',
  photo: '/images/portfolio/pelecho-junior-kone-portrait.png',
  photoSize: { width: 682, height: 1024 },
  location: 'Abidjan, Côte d’Ivoire',
  languages: 'Français · Anglais',
  /** Résumé court : page À propos, signature d'article, llms.txt. */
  summary:
    'Pelecho Junior Koné est le fondateur de PeleAI, agence de transformation numérique basée à Abidjan. Consultant en transformation numérique et titulaire d’un master en design 3D et animation de l’Université Virtuelle de Côte d’Ivoire, il accompagne entreprises, entrepreneurs et organisations dans le développement web, le commerce en ligne et l’intelligence artificielle, et forme leurs équipes aux outils numériques.',
  bio: [
    'Consultant spécialisé en transformation numérique, Pelecho Junior Koné aide les entreprises à surmonter leurs défis technologiques en proposant des solutions adaptées et en facilitant leur déploiement. Il a accompagné plus de dix entreprises dans leurs projets.',
    'À travers PeleAI, il conçoit et déploie des solutions digitales pour les entreprises ivoiriennes : sites internet, boutiques en ligne, outils métier et solutions d’intelligence artificielle. Il est à l’origine de MenuPro, une plateforme lancée en 2025 qui équipe aujourd’hui 11 restaurants en Côte d’Ivoire.',
    'Avant PeleAI, il a dirigé MIRIGROUP, une startup spécialisée dans le métavers, récompensée par le prix spécial de la meilleure initiative de l’année académique 2022-2023 pour sa contribution à la vulgarisation du numérique. À l’Université Virtuelle de Côte d’Ivoire, il a développé des environnements virtuels et des espaces de métavers.',
    'Formé à l’Université Virtuelle de Côte d’Ivoire, il est titulaire d’une licence en développement d’applications et e-services et d’un master en design 3D et animation (2025), obtenu avec un mémoire sur la réalisation d’un laboratoire virtuel pour l’apprentissage des sciences expérimentales. Il prépare aujourd’hui un doctorat.',
    'Il organise des masterclass sur l’IA, le code et le numérique, et assure lui-même la formation.',
  ],
  /** Domaines d'expertise (données structurées « knowsAbout »). */
  expertise: [
    'Transformation numérique',
    'Intelligence artificielle',
    'Développement web',
    'Métavers et environnements virtuels',
    'Design 3D et animation',
    'Laboratoires virtuels',
    'Commerce en ligne',
    'Formation aux outils numériques',
  ],
  /** Projets portés ou réalisés (slugs de content/cases.ts quand ils existent). */
  highlights: [
    { title: 'MenuPro', text: 'Plateforme de commande et de paiement Mobile Money pour les restaurants, lancée en 2025 : 11 restaurants actifs.', href: '/realisations/menupro' },
    { title: 'Laboratoires virtuels UVCI et IUA', text: 'Travaux pratiques en ligne pour l’enseignement supérieur.', href: '/realisations/laboratoires-virtuels-uvci-iua' },
    { title: 'Masterclass IA & codage', text: 'Sessions ouvertes pour apprendre à utiliser l’IA et à coder avec elle (décembre 2025).', href: '/formations' },
  ],
  /** Parcours professionnel. */
  career: [
    { org: 'PeleAI', role: 'Fondateur', period: '[À CONFIRMER]', text: 'Agence de transformation numérique à Abidjan.', todo: 'année de création de PeleAI' },
    {
      org: 'UVCI',
      role: 'Développeur d’environnements virtuels et métavers',
      period: '[À CONFIRMER]',
      text: 'Conception et développement d’environnements virtuels 3D pour l’Université Virtuelle de Côte d’Ivoire.',
      todo: 'dates de début et de fin',
    },
    {
      org: 'MIRIGROUP',
      role: 'Gérant',
      period: '[À CONFIRMER]',
      text: 'Startup spécialisée dans le métavers. Prix spécial de la meilleure initiative de l’année académique 2022-2023.',
      todo: 'dates de début et de fin',
    },
  ],
  /** Formation universitaire. */
  education: [
    { degree: 'Doctorat', field: '[À CONFIRMER]', school: '[À CONFIRMER]', year: 'En cours', todo: 'établissement et sujet de thèse' },
    {
      degree: 'Master',
      field: 'Design 3D et animation',
      school: 'Université Virtuelle de Côte d’Ivoire (UVCI)',
      year: '2025',
      note: 'Mémoire : réalisation d’un laboratoire virtuel pour l’apprentissage des sciences expérimentales.',
    },
    { degree: 'Licence', field: 'Développement d’applications et e-services', school: 'Université Virtuelle de Côte d’Ivoire (UVCI)', year: '[À CONFIRMER]', todo: 'année d’obtention' },
  ],
  /** Prix et certificats. */
  awards: [
    {
      title: 'Prix spécial de la meilleure initiative de l’année académique 2022-2023',
      detail: 'Décerné à MIRIGROUP en reconnaissance de son excellence et de sa contribution à la vulgarisation du numérique.',
      year: '2022-2023',
    },
    {
      title: 'Certificat de participation : organisation de l’Africa CEO Tech Day',
      detail: 'Club des DSI, 13 et 14 juin 2024.',
      year: '2024',
    },
    { title: 'Certificat de participation, Abidjan Business School', detail: '', year: '[À CONFIRMER]', todo: 'intitulé de la formation et année' },
  ],
  /** Profils publics vérifiés : alimentent « sameAs » (essentiel pour Google et les IA). */
  profiles: [
    { label: 'LinkedIn', url: 'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278' },
    { label: 'MarTech Africa', url: 'https://martechafrica.com/experts/pelecho-junior-kone/' },
  ],
  linkedin: 'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278',
  todo: 'interventions publiques (dates et lieux) et photos en situation',
}
