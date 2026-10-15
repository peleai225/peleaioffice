/**
 * Pages légales, adaptées au droit ivoirien (loi n° 2013-450 du 19 juin 2013 relative à la protection
 * des données à caractère personnel ; autorité de contrôle : ARTCI).
 * Les informations d’immatriculation manquent : elles portent [À REMPLACER : …].
 * À faire relire par un juriste avant la mise en ligne.
 */

export type LegalSection = { title: string; paragraphs: string[]; todo?: string[] }

export const mentions: LegalSection[] = [
  {
    title: 'Éditeur du site',
    paragraphs: [
      'Le présent site est édité par PeleAI, agence de transformation digitale.',
      'Siège : Abidjan, Côte d’Ivoire.',
      'Téléphone : +225 05 06 80 53 82 · Email : peleai.ci@gmail.com',
    ],
    todo: [
      'forme juridique et capital social',
      'adresse complète du siège',
      'numéro RCCM',
      'numéro de compte contribuable (NCC)',
    ],
  },
  {
    title: 'Directeur de la publication',
    paragraphs: ['Le directeur de la publication est le représentant légal de PeleAI.'],
    todo: ['nom du directeur de la publication'],
  },
  {
    title: 'Hébergement',
    paragraphs: ['Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis — vercel.com.'],
    todo: ['confirmer l’hébergeur retenu pour la mise en ligne'],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'Le nom PeleAI, son logo, les textes, visuels et éléments graphiques de ce site sont la propriété de PeleAI ou de leurs auteurs respectifs. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.',
      'Les logos et visuels des projets présentés dans les réalisations restent la propriété de leurs titulaires respectifs.',
    ],
  },
  {
    title: 'Responsabilité',
    paragraphs: [
      'PeleAI s’efforce de fournir des informations exactes et à jour, sans pouvoir garantir l’absence d’erreur. Les liens vers des sites externes sont fournis à titre d’information : PeleAI n’est pas responsable de leur contenu.',
    ],
  },
  {
    title: 'Droit applicable',
    paragraphs: ['Le présent site et ses mentions légales sont régis par le droit ivoirien. Tout litige relève de la compétence des juridictions d’Abidjan.'],
  },
]

export const privacy: LegalSection[] = [
  {
    title: 'Responsable du traitement',
    paragraphs: [
      'PeleAI, Abidjan, Côte d’Ivoire, est responsable des traitements de données personnelles réalisés via ce site. Contact : peleai.ci@gmail.com.',
      'Les traitements sont réalisés conformément à la loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel.',
    ],
    todo: ['numéro de déclaration ou d’autorisation auprès de l’ARTCI, le cas échéant'],
  },
  {
    title: 'Données collectées',
    paragraphs: [
      'Via le formulaire de contact : votre nom, votre email et/ou votre numéro de téléphone, le nom de votre entreprise (facultatif), l’objet et le contenu de votre message.',
      'Via WhatsApp : les informations que vous choisissez de nous écrire.',
      'Mesure d’audience : des statistiques de visite anonymes (pages vues, type d’appareil, pays), sans cookie publicitaire.',
    ],
  },
  {
    title: 'Finalités',
    paragraphs: [
      'Vos données servent uniquement à répondre à votre demande, à vous adresser un devis et, si un contrat est conclu, à l’exécuter. Elles ne sont ni vendues ni utilisées à des fins publicitaires.',
    ],
  },
  {
    title: 'Destinataires et transferts',
    paragraphs: [
      'Vos données sont destinées à l’équipe de PeleAI. Pour fonctionner, le site s’appuie sur des prestataires techniques : l’hébergeur du site, un service d’envoi d’emails (Resend) et un service de mesure d’audience. Ces prestataires peuvent traiter des données en dehors de la Côte d’Ivoire, notamment aux États-Unis.',
      'La page Contact affiche une carte Google Maps : si vous la consultez, Google peut collecter des données de navigation selon sa propre politique.',
    ],
  },
  {
    title: 'Durée de conservation',
    paragraphs: ['Les demandes de contact sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées.'],
    todo: ['durée de conservation précise (par exemple 3 ans après le dernier échange)'],
  },
  {
    title: 'Vos droits',
    paragraphs: [
      'Vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données. Pour l’exercer, écrivez à peleai.ci@gmail.com en précisant votre demande. Nous répondons dans les meilleurs délais.',
      'Vous pouvez également adresser une réclamation à l’Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire (ARTCI), autorité de protection des données personnelles.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Ce site n’utilise pas de cookies publicitaires. La mesure d’audience est anonyme. Des services tiers intégrés (carte Google Maps) peuvent déposer leurs propres cookies lorsque vous les utilisez.',
    ],
  },
]
