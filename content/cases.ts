/**
 * Études de cas. Seuls les faits déjà publiés sur l’ancien site sont repris.
 * Contexte, défi et solution sont rédigés à partir de ces faits ; les résultats chiffrés
 * manquent et portent `todo`, affiché comme [À REMPLACER : …].
 */

export type CaseStudy = {
  slug: string
  client: string
  sector: string
  year?: string
  title: string
  summary: string
  services: string[]
  /** Slugs de content/services.ts */
  serviceSlugs: string[]
  context: string
  challenge: string
  solution: string[]
  results: string[]
  /** Visuel carré ou promotionnel (cartes, mise en avant). */
  image?: { src: string; alt: string; width: number; height: number }
  /** Capture d'écran du site ou de l'application livré (affichée dans un cadre de navigateur). */
  screenshot?: { src: string; alt: string; width: number; height: number }
  logo?: { src: string; width: number; height: number }
  gallery?: { src: string; alt: string; width: number; height: number }[]
  url?: string
  todo?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'menupro',
    client: 'MenuPro',
    sector: 'Restauration · SaaS',
    year: '2025',
    title: 'Des restaurants où l’on commande et paie depuis sa table.',
    summary:
      'Menu en ligne, QR code par table, paiement Orange Money, MTN MoMo, Wave et Moov Money, notifications WhatsApp : une plateforme conçue et lancée en 2025 pour les restaurants ivoiriens.',
    services: ['Produit SaaS', 'Paiement Mobile Money', 'Création de contenu'],
    serviceSlugs: ['solutions-ia', 'creation-de-contenu', 'sites-internet'],
    context:
      'Dans beaucoup de restaurants d’Abidjan, les clients attendent la carte, attendent pour commander, puis attendent encore l’addition. Le personnel court entre les tables et les erreurs de commande coûtent cher.',
    challenge:
      'Permettre à un client de consulter le menu, commander et payer depuis son téléphone, avec les moyens de paiement réellement utilisés en Côte d’Ivoire, sans application à installer.',
    solution: [
      'Un menu en ligne accessible en scannant le QR code de la table',
      'La commande envoyée directement au restaurant',
      'Le paiement par Orange Money, MTN MoMo, Wave et Moov Money',
      'Des notifications WhatsApp pour tenir le client informé',
      'Un restaurant mis en ligne en 15 minutes, sans commission sur ses ventes',
      'Des visuels de lancement pour faire connaître le service',
    ],
    results: ['11 restaurants actifs sur la plateforme', 'En ligne sur menupro.ci depuis 2025'],
    image: {
      src: '/realisations/showcase/menupro-promo-scan-qr.png',
      alt: 'Visuel de lancement MenuPro : un client commande depuis son téléphone après avoir scanné le QR code de sa table.',
      width: 1024,
      height: 1024,
    },
    screenshot: {
      src: '/realisations/captures/menupro-site.jpg',
      alt: 'Page d’accueil de menupro.ci : « La plateforme restaurants qui fait vendre », avec les paiements Wave, Orange, MTN et Moov.',
      width: 1910,
      height: 861,
    },
    logo: { src: '/realisations/logos/menupro.png', width: 1400, height: 482 },
    gallery: [
      {
        src: '/realisations/showcase/menupro-promo-menu-digitale.png',
        alt: 'Visuel MenuPro présentant le menu digital',
        width: 1024,
        height: 1024,
      },
      {
        src: '/realisations/showcase/menupro-promo-encaissez-momo.png',
        alt: 'Visuel MenuPro sur l’encaissement par Mobile Money',
        width: 1024,
        height: 1024,
      },
      {
        src: '/realisations/showcase/menupro-promo-brunch.png',
        alt: 'Visuel promotionnel MenuPro pour un brunch',
        width: 1024,
        height: 1024,
      },
    ],
    url: 'https://menupro.ci/',
    todo: 'captures de l’application (menu client, commande, tableau de bord restaurateur)',
  },
  {
    slug: 'laboratoires-virtuels-uvci-iua',
    client: 'UVCI et IUA',
    sector: 'Enseignement supérieur',
    title: 'Des travaux pratiques que les étudiants suivent à distance.',
    summary:
      'Laboratoires virtuels pour l’Université Virtuelle de Côte d’Ivoire et l’Institut Universitaire d’Abidjan : environnements de TP et ressources pédagogiques en ligne.',
    services: ['Plateforme web', 'Transformation digitale'],
    serviceSlugs: ['transformation-digitale', 'sites-internet'],
    context:
      'Les travaux pratiques demandent des équipements et des salles. Pour une université à distance comme l’UVCI, ou pour des étudiants qui ne peuvent pas toujours se déplacer, c’est un frein réel. Le sujet est familier à PeleAI : le mémoire de master de son fondateur (UVCI, 2025) portait sur la réalisation d’un laboratoire virtuel pour l’apprentissage des sciences expérimentales.',
    challenge:
      'Donner accès aux séances pratiques et aux ressources pédagogiques en ligne, sans dépendre d’une salle ni d’un matériel coûteux.',
    solution: [
      'Des laboratoires virtuels accessibles depuis un navigateur',
      'Des environnements de travaux pratiques en ligne',
      'Des ressources pédagogiques centralisées pour les étudiants',
    ],
    results: [],
    todo: 'nombre d’étudiants concernés, captures d’écran et accord des établissements',
  },
  {
    slug: 'khara-consulting',
    client: 'Khara Consulting',
    sector: 'Conseil',
    title: 'Un site qui présente clairement l’offre d’un cabinet de conseil.',
    summary: 'Site internet de Khara Consulting : présentation de l’offre, identité en ligne et prise de contact.',
    services: ['Site internet'],
    serviceSlugs: ['sites-internet'],
    context: 'Un cabinet de conseil vend d’abord de la confiance. Sans site, il est difficile de rassurer un prospect qui vient de recevoir une recommandation.',
    challenge: 'Présenter une offre de conseil de façon claire et crédible, et faciliter la prise de contact.',
    solution: ['Présentation structurée de l’offre', 'Identité en ligne cohérente avec la charte', 'Parcours de prise de contact simple'],
    results: ['Site en ligne sur kharaconsulting.com'],
    url: 'https://kharaconsulting.com/',
    todo: 'capture d’écran du site',
  },
  {
    slug: 'grand-bazar',
    client: 'Grand Bazar',
    sector: 'Commerce · E-commerce',
    title: 'Une boutique en ligne pour « trouver tout ici ».',
    summary: 'Marketplace et boutique en ligne pour Grand Bazar, enseigne de Cocody Angré : un large catalogue accessible depuis le téléphone.',
    services: ['E-commerce', 'Création de contenu'],
    serviceSlugs: ['sites-internet', 'creation-de-contenu'],
    context: 'Grand Bazar propose un très large choix d’articles pour toute la famille, de l’électroménager aux vêtements, dans son magasin de Cocody Angré.',
    challenge: 'Rendre ce catalogue consultable et achetable en ligne, simplement, depuis un téléphone.',
    solution: ['Boutique en ligne avec catalogue par catégories', 'Visuels promotionnels aux couleurs de l’enseigne'],
    results: ['Boutique en ligne sur legrandbazar.ci'],
    image: {
      src: '/realisations/showcase/grand-bazar-promo.png',
      alt: 'Visuel promotionnel Grand Bazar « Tout pour toute la famille »',
      width: 1024,
      height: 621,
    },
    url: 'https://legrandbazar.ci/',
    todo: 'résultats (ventes en ligne, trafic) et capture d’écran',
  },
  {
    slug: 'boua-group',
    client: 'BOUA GROUP',
    sector: 'Conseil · Institutionnel',
    title: 'Un site institutionnel pour un groupe qui connecte institutions et entreprises.',
    summary:
      'Site institutionnel de BOUA GROUP (Business Of Unified Africa Group) : présentation des activités du groupe, espace presse, prise de rendez-vous et demande de devis.',
    services: ['Site internet'],
    serviceSlugs: ['sites-internet'],
    context:
      'BOUA GROUP connecte institutions, entreprises et territoires pour accélérer le développement en Afrique, à travers le conseil stratégique et les solutions technologiques.',
    challenge: 'Présenter des activités variées sous une seule identité, crédible pour des décideurs publics et privés, et transformer les visites en rendez-vous.',
    solution: [
      'Une page d’accueil qui pose la promesse du groupe : « Innovation, résilience et croissance durable »',
      'Un univers BOUA qui présente chaque pôle d’activité',
      'Un espace presse',
      'Prise de rendez-vous et demande de devis accessibles sur chaque page',
      'Recherche, sélecteur de langue et mode sombre',
    ],
    results: ['Site en ligne sur bouagroup.com'],
    screenshot: {
      src: '/realisations/captures/boua-group-site.jpg',
      alt: 'Page d’accueil de bouagroup.com : « Innovation, résilience et croissance durable », avec les boutons Démarrer un projet et Découvrir le groupe.',
      width: 1902,
      height: 908,
    },
    url: 'https://bouagroup.com/',
    todo: 'accord du client pour être cité',
  },
  {
    slug: 'charms',
    client: 'Charm’s',
    sector: 'Commerce · E-commerce',
    title: 'Une boutique en ligne multi-catégories.',
    summary: 'Boutique en ligne Charm’s : un catalogue multi-catégories accessible sur charms-ci.com.',
    services: ['E-commerce'],
    serviceSlugs: ['sites-internet'],
    context: 'Charm’s vend des produits de plusieurs catégories et souhaitait les rendre accessibles en ligne.',
    challenge: 'Organiser un catalogue varié pour qu’un client trouve vite ce qu’il cherche sur mobile.',
    solution: ['Boutique en ligne organisée par catégories'],
    results: ['Boutique en ligne sur charms-ci.com'],
    url: 'https://charms-ci.com/',
    todo: 'capture d’écran et accord du client',
  },
]

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug)
}
