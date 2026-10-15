/**
 * Les cinq services. L’ordre est celui de l’accueil : du plus demandé au plus stratégique.
 * Règle : aucun chiffre ni résultat inventé. Les durées sont des fourchettes indicatives à confirmer.
 */

export type Service = {
  slug: string
  title: string
  /** Le résultat pour le client, en une phrase. */
  promise: string
  /** Ce que le client reçoit concrètement (résumé pour les listes). */
  deliverables: string[]
  metaDescription: string
  /** Titre de la page détaillée : une promesse précise. */
  headline: string
  intro: string
  problems: string[]
  solution: { title: string; text: string }[]
  included: string[]
  process: { title: string; text: string }[]
  outcomes: string[]
  faq: { q: string; a: string }[]
  /** Études de cas liées (slugs de content/cases.ts). */
  cases: string[]
}

export const services: Service[] = [
  {
    slug: 'sites-internet',
    title: 'Sites internet',
    promise: 'Un site rapide sur mobile, clair pour vos clients, qui transforme les visites en demandes de devis.',
    deliverables: ['Site vitrine ou e-commerce', 'Paiement Mobile Money', 'Référencement de base'],
    metaDescription:
      'Création de sites internet à Abidjan : sites vitrines et boutiques en ligne rapides sur mobile, paiement Mobile Money, référencement. Devis gratuit.',
    headline: 'Un site qui travaille pour vous, même quand votre boutique est fermée.',
    intro:
      'Vos clients vous cherchent d’abord sur leur téléphone. En quelques secondes, ils décident si vous êtes sérieux. Nous construisons des sites qui chargent vite sur une connexion mobile, qui disent clairement ce que vous faites, et qui donnent envie de vous contacter.',
    problems: [
      'Vous n’avez pas de site, ou il date et ne s’affiche pas bien sur téléphone.',
      'Les visiteurs arrivent, puis repartent sans vous contacter.',
      'Vous vendez sur WhatsApp et Facebook, mais tout se perd dans les messages.',
      'Vous ne savez pas si quelqu’un trouve votre entreprise sur Google.',
    ],
    solution: [
      {
        title: 'Un message clair dès le premier écran',
        text: 'Nous écrivons avec vous ce que vous proposez, à qui, et pourquoi vous choisir. Le visiteur comprend en cinq secondes.',
      },
      {
        title: 'Pensé pour le téléphone et la 4G',
        text: 'Images légères, pages courtes, boutons faciles à toucher : le site reste rapide même avec une connexion instable.',
      },
      {
        title: 'Des contacts, pas seulement des visites',
        text: 'Bouton WhatsApp, formulaire court, appel en un geste, paiement Mobile Money pour les boutiques : chaque page mène à une action.',
      },
    ],
    included: [
      'Rédaction des textes avec vous',
      'Design sur mesure à vos couleurs',
      'Version mobile soignée',
      'Bouton WhatsApp et formulaire de contact',
      'Paiement Orange Money, MTN MoMo, Wave ou Moov Money (boutiques)',
      'Référencement de base sur Google',
      'Nom de domaine et hébergement configurés',
      'Formation pour modifier vos contenus',
    ],
    process: [
      { title: 'Cadrage', text: 'Un échange pour fixer vos objectifs, vos pages et vos contenus.' },
      { title: 'Maquette', text: 'Vous validez l’apparence de la page d’accueil avant tout développement.' },
      { title: 'Développement', text: 'Nous construisons le site et vous le montrons au fur et à mesure.' },
      { title: 'Mise en ligne', text: 'Vérifications sur téléphone, mise en ligne, puis prise en main avec vous.' },
    ],
    outcomes: [
      'Une présence professionnelle qui rassure vos prospects',
      'Des demandes de contact qui arrivent directement sur WhatsApp ou par email',
      'Un site que vous savez mettre à jour vous-même',
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour créer un site ?',
        a: 'Cela dépend du nombre de pages et des contenus disponibles. Nous vous donnons un délai précis dans le devis, après le premier échange.',
      },
      {
        q: 'Est-ce que je pourrai modifier mon site moi-même ?',
        a: 'Oui. Nous vous formons à la mise à jour des textes, des images et des produits, et nous restons joignables si vous bloquez.',
      },
      {
        q: 'Pouvez-vous intégrer le paiement Mobile Money ?',
        a: 'Oui, pour les boutiques en ligne : Orange Money, MTN MoMo, Wave et Moov Money, selon le prestataire de paiement retenu avec vous.',
      },
      {
        q: 'Je n’ai pas encore de textes ni de photos. Est-ce un problème ?',
        a: 'Non. Nous rédigeons les textes avec vous, et notre service de création de contenu peut produire les visuels.',
      },
    ],
    cases: ['khara-consulting', 'grand-bazar', 'boua-group'],
  },
  {
    slug: 'solutions-ia',
    title: 'Solutions IA',
    promise: 'Des assistants et automatisations qui prennent en charge les tâches répétitives de vos équipes.',
    deliverables: ['Assistant WhatsApp ou web', 'Automatisation de documents', 'Outils sur mesure'],
    metaDescription:
      'Solutions d’intelligence artificielle pour les entreprises en Côte d’Ivoire : assistants WhatsApp, automatisation de documents, outils sur mesure.',
    headline: 'Vos tâches répétitives, prises en charge par l’IA. Vos équipes, concentrées sur l’essentiel.',
    intro:
      'Répondre cent fois aux mêmes questions, recopier des informations d’un fichier à l’autre, préparer des devis à la main : ces tâches prennent des heures chaque semaine. Nous identifions celles qu’un outil d’intelligence artificielle peut faire à votre place, puis nous le construisons et le connectons à vos outils.',
    problems: [
      'Votre équipe répond toute la journée aux mêmes questions sur WhatsApp.',
      'Des documents (devis, comptes rendus, rapports) sont rédigés à la main, un par un.',
      'Les informations sont éparpillées entre fichiers Excel, emails et messages.',
      'Vous entendez parler d’IA sans savoir par où commencer.',
    ],
    solution: [
      {
        title: 'On part d’une tâche précise',
        text: 'Pas de projet flou : nous choisissons ensemble une tâche répétitive, mesurable, et nous l’automatisons en premier.',
      },
      {
        title: 'Un outil branché sur vos usages',
        text: 'Assistant sur WhatsApp ou sur votre site, génération de documents, tri d’informations : l’outil s’intègre là où votre équipe travaille déjà.',
      },
      {
        title: 'Un humain garde la main',
        text: 'Les réponses sensibles sont validées par une personne. Vous gardez le contrôle de ce que l’IA envoie en votre nom.',
      },
    ],
    included: [
      'Atelier d’identification des tâches à automatiser',
      'Prototype testé sur vos vrais cas',
      'Assistant conversationnel (WhatsApp ou web)',
      'Automatisation de documents et de saisies',
      'Connexion à vos outils (tableurs, CRM, email)',
      'Formation des utilisateurs',
      'Suivi et ajustements après lancement',
    ],
    process: [
      { title: 'Diagnostic', text: 'Nous observons vos tâches et chiffrons le temps qu’elles prennent.' },
      { title: 'Prototype', text: 'Une première version testée sur vos exemples réels.' },
      { title: 'Déploiement', text: 'Mise en service progressive, avec vos équipes.' },
      { title: 'Amélioration', text: 'Nous ajustons à partir des retours et des cas non prévus.' },
    ],
    outcomes: [
      'Moins de temps passé sur les tâches sans valeur ajoutée',
      'Des réponses plus rapides à vos clients',
      'Une équipe qui sait utiliser et faire évoluer l’outil',
    ],
    faq: [
      {
        q: 'Mes données sont-elles en sécurité ?',
        a: 'Nous choisissons avec vous les outils et les réglages adaptés à la sensibilité de vos données, et nous documentons où elles sont traitées.',
      },
      {
        q: 'Faut-il des compétences techniques dans mon équipe ?',
        a: 'Non. Les outils sont conçus pour être utilisés sans connaissances techniques, et nous formons les utilisateurs.',
      },
      {
        q: 'Combien coûte une solution IA ?',
        a: 'Cela dépend de la tâche et des outils à connecter. Nous commençons souvent par un prototype à budget limité, pour vérifier le gain avant d’aller plus loin.',
      },
    ],
    cases: ['menupro'],
  },
  {
    slug: 'creation-de-contenu',
    title: 'Création de contenu',
    promise: 'Des visuels, vidéos et textes réguliers qui donnent à votre marque une présence cohérente.',
    deliverables: ['Calendrier éditorial', 'Visuels et vidéos courtes', 'Textes pour le web'],
    metaDescription:
      'Création de contenu pour les entreprises à Abidjan : visuels, vidéos courtes, textes et calendrier éditorial pour vos réseaux sociaux et votre site.',
    headline: 'Une marque qui publie régulièrement, avec une image cohérente.',
    intro:
      'Publier une fois par mois, avec des visuels qui changent de style à chaque fois, ne construit pas la confiance. Nous préparons avec vous un calendrier, puis nous produisons des visuels, des vidéos courtes et des textes qui parlent à vos clients, dans un style reconnaissable.',
    problems: [
      'Vos réseaux sociaux sont irréguliers, faute de temps.',
      'Chaque visuel a un style différent : votre marque n’est pas reconnaissable.',
      'Vous ne savez pas quoi publier, ni pour qui.',
    ],
    solution: [
      {
        title: 'Un calendrier, pas de l’improvisation',
        text: 'Chaque mois, un plan de publications validé avec vous : thèmes, formats, dates.',
      },
      {
        title: 'Un style reconnaissable',
        text: 'Une charte de visuels déclinée sur chaque publication, pour que vos clients vous reconnaissent au premier coup d’œil.',
      },
      {
        title: 'Des contenus qui mènent à une action',
        text: 'Chaque publication a un objectif : informer, faire venir en boutique, déclencher un message WhatsApp.',
      },
    ],
    included: [
      'Calendrier éditorial mensuel',
      'Visuels pour réseaux sociaux',
      'Vidéos courtes (Reels, TikTok)',
      'Textes de publications et articles',
      'Visuels de lancement de produit',
      'Adaptation de votre charte graphique',
    ],
    process: [
      { title: 'Ligne éditoriale', text: 'Vos cibles, vos messages, votre ton.' },
      { title: 'Calendrier', text: 'Le plan du mois, validé avant production.' },
      { title: 'Production', text: 'Visuels, vidéos et textes, avec un tour de corrections.' },
      { title: 'Bilan', text: 'Ce qui a fonctionné, et ce qu’on ajuste le mois suivant.' },
    ],
    outcomes: [
      'Une présence régulière sans y passer vos soirées',
      'Une image de marque cohérente sur tous vos canaux',
      'Des publications pensées pour générer des contacts',
    ],
    faq: [
      {
        q: 'Gérez-vous aussi la publication ?',
        a: 'Oui, si vous le souhaitez. Nous pouvons aussi vous livrer les contenus prêts à publier.',
      },
      {
        q: 'Faut-il un engagement sur plusieurs mois ?',
        a: 'Nous recommandons au moins trois mois pour voir des résultats, mais nous en discutons dans le devis.',
      },
    ],
    cases: ['menupro', 'grand-bazar'],
  },
  {
    slug: 'formation',
    title: 'Formation',
    promise: 'Vos équipes apprennent à utiliser l’IA et les outils numériques sur leurs propres dossiers.',
    deliverables: ['Ateliers en entreprise', 'Masterclass', 'Supports réutilisables'],
    metaDescription:
      'Formations à l’intelligence artificielle et aux outils numériques à Abidjan : ateliers en entreprise et masterclass, sur vos cas réels.',
    headline: 'Vos équipes à l’aise avec l’IA, sur leurs propres dossiers.',
    intro:
      'Une formation générale sur « l’IA » s’oublie en une semaine. Nos ateliers partent des tâches réelles de vos équipes : rédiger, résumer, analyser, répondre aux clients. Chaque participant repart avec des méthodes qu’il applique dès le lendemain.',
    problems: [
      'Vos équipes utilisent l’IA au hasard, sans méthode, ou pas du tout.',
      'Les formations suivies étaient trop théoriques.',
      'Vous craignez les erreurs et les fuites de données.',
    ],
    solution: [
      {
        title: 'Vos cas, pas des exemples génériques',
        text: 'Nous préparons l’atelier à partir de documents et de situations de votre entreprise.',
      },
      {
        title: 'Pratique avant tout',
        text: 'Chaque notion est suivie d’un exercice sur ordinateur ou sur téléphone.',
      },
      {
        title: 'Les bons réflexes',
        text: 'Vérifier une réponse, protéger les données, savoir quand ne pas utiliser l’IA.',
      },
    ],
    included: [
      'Préparation sur vos cas réels',
      'Ateliers pratiques en présentiel',
      'Supports remis à chaque participant',
      'Fiches de méthodes réutilisables',
      'Questions-réponses après la formation',
    ],
    process: [
      { title: 'Besoins', text: 'Qui forme-t-on, à quoi, avec quel niveau de départ.' },
      { title: 'Programme', text: 'Un programme sur mesure, validé avec vous.' },
      { title: 'Atelier', text: 'Une ou plusieurs sessions pratiques.' },
      { title: 'Suivi', text: 'Un point après quelques semaines pour lever les blocages.' },
    ],
    outcomes: [
      'Des équipes qui utilisent l’IA avec méthode',
      'Moins de temps perdu sur la rédaction et la recherche',
      'Des règles claires sur les données et la vérification',
    ],
    faq: [
      {
        q: 'Faut-il un niveau particulier ?',
        a: 'Non. Nous adaptons le programme au niveau du groupe, du débutant au profil technique.',
      },
      {
        q: 'Où se déroulent les formations ?',
        a: 'En présentiel dans vos locaux à Abidjan, ou en session ouverte pour les masterclass.',
      },
    ],
    cases: [],
  },
  {
    slug: 'transformation-digitale',
    title: 'Transformation digitale',
    promise: 'Un diagnostic de vos processus, puis une feuille de route réaliste que nous mettons en œuvre avec vous.',
    deliverables: ['Diagnostic', 'Feuille de route', 'Accompagnement au déploiement'],
    metaDescription:
      'Accompagnement en transformation digitale pour PME et institutions en Côte d’Ivoire : diagnostic, feuille de route et mise en œuvre.',
    headline: 'Moins de papier, moins de ressaisies, des décisions prises sur des chiffres fiables.',
    intro:
      'Digitaliser ne veut pas dire acheter un logiciel de plus. Nous commençons par regarder comment votre organisation fonctionne vraiment, puis nous proposons une feuille de route par étapes, à votre rythme et dans votre budget, et nous vous accompagnons dans la mise en œuvre.',
    problems: [
      'Les mêmes informations sont saisies plusieurs fois, dans plusieurs outils.',
      'Les décisions se prennent sans tableau de bord fiable.',
      'Des logiciels ont été achetés, mais personne ne les utilise vraiment.',
    ],
    solution: [
      {
        title: 'Un diagnostic concret',
        text: 'Entretiens avec vos équipes, cartographie de vos processus et de vos outils.',
      },
      {
        title: 'Une feuille de route par étapes',
        text: 'Des actions priorisées par impact et par coût, avec des premiers résultats rapides.',
      },
      {
        title: 'Un accompagnement jusqu’au bout',
        text: 'Choix des outils, mise en place, formation et suivi de l’adoption.',
      },
    ],
    included: [
      'Entretiens et observation des processus',
      'Cartographie des outils existants',
      'Feuille de route priorisée et chiffrée',
      'Choix et mise en place des outils',
      'Formation et conduite du changement',
      'Points de suivi réguliers',
    ],
    process: [
      { title: 'Diagnostic', text: 'Comprendre votre organisation et ses irritants.' },
      { title: 'Feuille de route', text: 'Prioriser les chantiers par impact et par coût.' },
      { title: 'Mise en œuvre', text: 'Déployer les premiers chantiers avec vos équipes.' },
      { title: 'Suivi', text: 'Mesurer, ajuster, passer au chantier suivant.' },
    ],
    outcomes: [
      'Une vision claire de ce qu’il faut digitaliser, et dans quel ordre',
      'Des outils réellement adoptés par vos équipes',
      'Des indicateurs pour piloter votre activité',
    ],
    faq: [
      {
        q: 'Travaillez-vous avec les institutions publiques ?',
        a: 'Oui. Nous avons notamment travaillé sur des laboratoires virtuels pour l’enseignement supérieur.',
      },
      {
        q: 'Peut-on commencer par un seul service de l’entreprise ?',
        a: 'Oui, c’est même souvent recommandé : un premier périmètre réussi facilite la suite.',
      },
    ],
    cases: ['laboratoires-virtuels-uvci-iua'],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
