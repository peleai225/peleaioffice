/**
 * Articles du blog. Contenu structuré en blocs (pas de HTML brut) : rendu par app/blog/[slug].
 * Règle : aucune statistique sans source. Les conseils s'appuient sur l'expérience terrain, pas sur des chiffres inventés.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'tip'; title: string; text: string }

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  author: string
  blocks: Block[]
  relatedService: string
}

export const posts: Post[] = [
  {
    slug: 'ia-pme-5-taches-a-confier',
    title: 'IA en entreprise : 5 tâches à lui confier dès cette semaine',
    excerpt:
      'Pas besoin d’un grand projet pour commencer avec l’intelligence artificielle. Voici cinq tâches du quotidien qu’une PME peut lui confier tout de suite, et les précautions à prendre.',
    category: 'Intelligence artificielle',
    date: '2026-10-06',
    author: 'Pelecho Junior Kone',
    relatedService: 'solutions-ia',
    blocks: [
      {
        type: 'p',
        text: 'Beaucoup de dirigeants que nous rencontrons à Abidjan ont la même réaction face à l’intelligence artificielle : « ça a l’air puissant, mais je ne sais pas par où commencer ». La bonne nouvelle, c’est qu’il n’est pas nécessaire de lancer un grand projet. Les assistants comme ChatGPT, Gemini ou Claude peuvent déjà prendre en charge une partie des tâches répétitives de vos équipes, à condition de savoir lesquelles leur confier.',
      },
      { type: 'h2', text: '1. Rédiger les premiers jets de vos emails et courriers' },
      {
        type: 'p',
        text: 'Relance d’un client, réponse à une réclamation, courrier à un partenaire : l’IA produit en quelques secondes un premier jet propre, que vous relisez et ajustez. Le gain ne vient pas de la qualité du texte, mais du fait de ne plus partir d’une page blanche.',
      },
      {
        type: 'tip',
        title: 'La bonne façon de demander',
        text: 'Donnez le contexte, le ton et le résultat attendu : « Rédige une relance courtoise pour un client qui n’a pas réglé une facture de 30 jours. Ton cordial, phrases courtes, propose un paiement par Mobile Money. »',
      },
      { type: 'h2', text: '2. Résumer les documents longs' },
      {
        type: 'p',
        text: 'Appels d’offres, rapports, comptes rendus de réunion : demandez un résumé en cinq points, puis la liste des dates et des obligations. Vous savez en deux minutes si le document mérite une lecture complète.',
      },
      { type: 'h2', text: '3. Préparer des réponses types pour WhatsApp' },
      {
        type: 'p',
        text: 'Horaires, prix, délais de livraison, moyens de paiement : vos équipes répondent sans cesse aux mêmes questions. Faites rédiger une dizaine de réponses claires, validez-les, et enregistrez-les comme réponses rapides dans WhatsApp Business. C’est souvent la première étape avant un véritable assistant automatique.',
      },
      { type: 'h2', text: '4. Mettre en forme vos données' },
      {
        type: 'p',
        text: 'Une liste de clients copiée depuis des messages, des montants mal alignés, des dates dans des formats différents : l’IA sait remettre tout cela en tableau propre, ou vous écrire la formule Excel dont vous avez besoin.',
      },
      { type: 'h2', text: '5. Trouver des idées de publications' },
      {
        type: 'p',
        text: 'Pour vos réseaux sociaux, demandez dix idées de publications adaptées à votre activité et à la saison, puis choisissez-en trois. L’IA propose, vous gardez la voix de votre marque.',
      },
      { type: 'h2', text: 'Trois règles à respecter' },
      {
        type: 'ul',
        items: [
          'Relisez toujours : l’IA peut se tromper avec beaucoup d’assurance, surtout sur les chiffres et les noms.',
          'Ne collez jamais d’informations sensibles (données de clients, contrats confidentiels) dans un outil grand public sans en connaître les conditions d’utilisation.',
          'Gardez la décision : l’IA prépare, un humain valide ce qui part au nom de l’entreprise.',
        ],
      },
      {
        type: 'quote',
        text: 'Commencez par une seule tâche, celle qui vous agace le plus. Quand l’équipe a pris l’habitude, passez à la suivante.',
      },
      {
        type: 'p',
        text: 'Quand une tâche revient tous les jours et suit toujours les mêmes règles, il devient intéressant d’aller plus loin : un assistant branché sur votre WhatsApp ou votre site, qui répond seul aux questions simples et transmet le reste à votre équipe. C’est exactement le type d’outil que nous construisons avec nos clients.',
      },
    ],
  },
  {
    slug: 'site-internet-mobile-10-secondes',
    title: 'Votre site sur mobile : ce que vos clients vérifient en quelques secondes',
    excerpt:
      'Un visiteur décide très vite s’il reste sur votre site ou s’il repart. Voici ce qu’il cherche sur son téléphone, et comment le lui donner sans effort.',
    category: 'Sites internet',
    date: '2026-09-22',
    author: 'Pelecho Junior Kone',
    relatedService: 'sites-internet',
    blocks: [
      {
        type: 'p',
        text: 'Vos clients découvrent votre entreprise sur leur téléphone, souvent avec une connexion mobile qui n’est pas toujours stable. En quelques secondes, sans même s’en rendre compte, ils se posent quatre questions. Si votre site n’y répond pas immédiatement, ils repartent, et vous ne saurez jamais qu’ils étaient là.',
      },
      { type: 'h2', text: '« Est-ce que la page s’affiche ? »' },
      {
        type: 'p',
        text: 'Avant tout le reste : la vitesse. Une page qui reste blanche pendant que de grandes images se chargent fait fuir. Allégez les photos, évitez les vidéos en arrière-plan, et testez votre site sur un téléphone d’entrée de gamme, en 4G, pas seulement sur l’ordinateur du bureau.',
      },
      {
        type: 'tip',
        title: 'Un test simple',
        text: 'Ouvrez votre site sur votre téléphone, en dehors du Wi-Fi, en comptant dans votre tête. Si vous arrivez à cinq avant de lire quelque chose d’utile, c’est trop long.',
      },
      { type: 'h2', text: '« Est-ce que je suis au bon endroit ? »' },
      {
        type: 'p',
        text: 'Le premier écran doit dire ce que vous faites, pour qui, et où. « Pâtisserie artisanale à Cocody, livraison à Abidjan » est plus efficace que « Bienvenue sur notre site ». Le visiteur ne doit pas avoir à faire défiler la page pour comprendre.',
      },
      { type: 'h2', text: '« Est-ce que c’est sérieux ? »' },
      {
        type: 'p',
        text: 'Les signes de confiance comptent beaucoup : de vraies photos de vos produits ou de votre équipe, des réalisations, des avis de clients, une adresse, un numéro qui répond. Une seule photo de banque d’images peut suffire à rendre l’ensemble moins crédible.',
      },
      { type: 'h2', text: '« Comment je vous contacte ? »' },
      {
        type: 'p',
        text: 'Sur mobile, le contact doit tenir en un geste : un bouton WhatsApp visible, un numéro qui lance l’appel quand on le touche, un formulaire de trois ou quatre champs au maximum. Chaque champ en plus est une raison d’abandonner.',
      },
      { type: 'h2', text: 'La liste à vérifier sur votre site' },
      {
        type: 'ul',
        items: [
          'La page d’accueil s’affiche rapidement en 4G.',
          'Le premier écran dit ce que vous faites, pour qui et où.',
          'Les boutons sont assez grands pour être touchés du pouce.',
          'Un bouton WhatsApp ou d’appel est visible sur chaque page.',
          'Les photos sont réelles et légères.',
          'Le formulaire de contact tient en quelques champs.',
          'Vos horaires et votre adresse sont faciles à trouver.',
        ],
      },
      {
        type: 'quote',
        text: 'Un bon site ne cherche pas à impressionner. Il répond aux questions de vos clients avant qu’ils aient à les poser.',
      },
      {
        type: 'p',
        text: 'Si votre site actuel coche moins de la moitié de cette liste, il vous fait probablement perdre des clients sans que vous le sachiez. Nous pouvons le regarder avec vous et vous dire, simplement, ce qui mérite d’être corrigé en priorité.',
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function readingTime(post: Post) {
  const words = post.blocks
    .map((b) => ('text' in b ? b.text : b.type === 'ul' ? b.items.join(' ') : ''))
    .join(' ')
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso))
}
