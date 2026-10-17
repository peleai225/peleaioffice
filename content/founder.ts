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
    'Pelecho Junior Koné est le fondateur de PeleAI, agence de transformation numérique basée à Abidjan. Consultant en transformation numérique, il accompagne entreprises, entrepreneurs et organisations dans le développement web, le commerce en ligne et l’intelligence artificielle, et forme leurs équipes aux outils numériques.',
  bio: [
    'Consultant spécialisé en transformation numérique, Pelecho Junior Koné aide les entreprises à surmonter leurs défis technologiques en proposant des solutions adaptées et en facilitant leur déploiement. Il a accompagné plus de dix entreprises dans leurs projets.',
    'À travers PeleAI, il conçoit et déploie des solutions digitales pour les entreprises ivoiriennes : sites internet, boutiques en ligne, outils métier et solutions d’intelligence artificielle. Il est à l’origine de MenuPro, une plateforme lancée en 2025 pour digitaliser la restauration en Côte d’Ivoire.',
    'Il organise des masterclass sur l’IA, le code et le numérique, et assure lui-même la formation. Son parcours comprend également des projets autour des technologies immersives et de la formation aux outils numériques dans l’enseignement supérieur.',
  ],
  /** Domaines d'expertise (données structurées « knowsAbout »). */
  expertise: [
    'Transformation numérique',
    'Intelligence artificielle',
    'Développement web',
    'Commerce en ligne',
    'Formation aux outils numériques',
    'Technologies immersives',
  ],
  /** Projets portés ou réalisés (slugs de content/cases.ts quand ils existent). */
  highlights: [
    { title: 'MenuPro', text: 'Plateforme de commande et de paiement Mobile Money pour les restaurants, lancée en 2025.', href: '/realisations/menupro' },
    { title: 'Laboratoires virtuels UVCI et IUA', text: 'Travaux pratiques en ligne pour l’enseignement supérieur.', href: '/realisations/laboratoires-virtuels-uvci-iua' },
    { title: 'Masterclass IA & codage', text: 'Sessions ouvertes pour apprendre à utiliser l’IA et à coder avec elle (décembre 2025).', href: '/formations' },
  ],
  /** Parcours : intitulés et dates à confirmer avant publication détaillée. */
  career: [
    { org: 'PeleAI', role: 'Fondateur', period: '[À CONFIRMER]', todo: 'année de création de PeleAI' },
    { org: 'MIRIGROUP', role: 'Consultant', period: '[À CONFIRMER]', todo: 'intitulé exact du poste et dates' },
    { org: 'UVCI', role: 'Projets numériques et formation', period: 'Depuis 2024 [À CONFIRMER]', todo: 'fonction exacte et dates' },
  ],
  /** Profils publics vérifiés : alimentent « sameAs » (essentiel pour Google et les IA). */
  profiles: [
    { label: 'LinkedIn', url: 'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278' },
    { label: 'MarTech Africa', url: 'https://martechafrica.com/experts/pelecho-junior-kone/' },
  ],
  linkedin: 'https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278',
  todo: 'études, diplômes, certifications, interventions publiques (dates et lieux), photos en situation',
}
