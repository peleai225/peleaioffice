---
name: peleai-site-premium
description: Méthode complète pour concevoir et construire le site vitrine premium de l'agence PeleAI (Next.js). À utiliser pour tout travail de design, de rédaction, de code, de SEO ou de revue sur le site PeleAI. Impose l'identité de marque, un processus par étapes validées et une checklist qualité stricte.
---

# PeleAI : skill de création de site premium

Objectif : un site qui fait dire au visiteur « cette agence est sérieuse, experte et à la pointe » en moins de cinq secondes, puis qui l'amène à contacter l'agence. Chaque décision doit servir ces deux buts : la crédibilité et la conversion.

Principe directeur : **la retenue est le luxe.** Un site premium n'empile pas des effets, il en choisit peu et les exécute parfaitement.

---

## 1. Identité de marque (non négociable)

- Nom exact : **PeleAI** (P, A, I en majuscules, sans espace, sans accent). Vérifier partout : titres, metadata, alt, footer, mentions légales, données structurées, emails.
- Slogan officiel : « L'Innovation par l'intelligence Artificielle ». Ne pas le reformuler dans le logo ; ailleurs, un sous-titre plus court est possible.
- Activité : agence de transformation digitale basée en Côte d'Ivoire. Services : création de contenu, formation, création de sites internet, création de solutions IA, accompagnement en transformation digitale.
- Cibles : PME, institutions, entrepreneurs d'Afrique francophone.
- Logos dans `/public/brand/` : `logo-bleu.svg` (fonds clairs), `logo-clair.svg` (fonds sombres), `icone-p.svg` (favicon, petits formats). Ne jamais déformer, pivoter, recolorer ou ajouter d'effet au logo. Respecter une zone de protection égale à la hauteur du « P » / 4 autour du logo.
- Couleur de marque : le bleu du logo, environ `#345796`. **Extraire la valeur exacte du fichier SVG** (attribut `fill`) avant de définir la palette.
- Le logo est un monogramme « P » arrondi surmonté de deux arcs de cercle (signal, onde), à côté du mot en police géométrique grasse.

## 2. Processus obligatoire (ne jamais sauter une étape)

Chaque étape se termine par une présentation à l'utilisateur et une validation explicite avant de passer à la suivante.

1. **Cadrage** : relire ce skill, lister les contenus manquants (photos, réalisations, témoignages, chiffres, coordonnées, numéro WhatsApp) et les demander.
2. **Direction artistique** : proposer palette complète, typographies, usage des arcs, grille, échelle d'espacement, ton. Donner 2 options pour le hero. Justifier chaque choix en une phrase.
3. **Design system** : tokens (couleurs, typo, espacements, rayons, ombres, mouvements), composants de base (Button, Container, Section, Heading, Card, Input, Badge, Logo). Page de démonstration `/design-system` (non indexée).
4. **Accueil** complète, vérifiée en mobile, tablette, desktop.
5. **Pages secondaires** une par une, en réutilisant les composants.
6. **Finitions** : SEO, accessibilité, performance, 404, états vides, pages légales.
7. **Revue finale** avec la checklist de la section 10, corrections, puis rapport.

## 3. Design : règles

### Couleur
- Dériver toute la palette du bleu du logo : une échelle 50 à 950 (générer des teintes cohérentes, tester les contrastes).
- Rôles : bleu marque (titres, boutons principaux, liens), bleu nuit très foncé (sections sombres, footer), bleu très clair (fonds alternés), blanc cassé (fond principal), neutres teintés de bleu pour les textes secondaires.
- **Un seul accent vif**, rare, réservé aux appels à l'action et aux éléments à mettre en valeur. Soumettre 2 options à l'utilisateur : bleu électrique plus lumineux, ou touche chaude ambre/corail.
- Jamais de dégradé bleu-violet. Les dégradés, s'il y en a, restent dans la famille bleue et très discrets.
- Contrastes WCAG AA minimum partout (4.5:1 texte courant, 3:1 grands textes et éléments d'interface).

### Typographie
- Deux familles maximum via `next/font` (auto-hébergées, `display: swap`). Titres dans une géométrique expressive en écho au logo (candidats : Outfit, Sora, Plus Jakarta Sans, Poppins ; choisir et justifier). Texte courant très lisible.
- Interdit : Inter, Roboto, Arial, system-ui par défaut.
- Échelle fluide avec `clamp()`. Titre hero très grand (jusqu'à 5 à 7rem desktop), interlignage serré (1.0 à 1.1) ; texte courant 1.125rem, interlignage 1.6, largeur de ligne 60 à 70 caractères.
- Hiérarchie forte : un seul H1 par page, contraste net entre titres et texte.

### Espacement et grille
- Échelle de base 4/8 px. Sections avec de grandes respirations verticales (96 à 160 px desktop, 64 à 96 px mobile).
- Grille 12 colonnes, conteneur max 1200 à 1280 px. Alterner pleine largeur et colonnes étroites pour créer du rythme. Casser la symétrie de temps en temps (décalages, colonnes asymétriques).

### Motif signature : les arcs du logo
- Les arcs du logo sont l'élément graphique récurrent du site : ondes animées dans le hero, séparateurs de sections, filigranes en arrière-plan, loader, états de survol, motif de la page 404.
- Les construire en SVG vectoriel à partir de la géométrie réelle du logo (mêmes proportions, mêmes terminaisons plates), jamais en images raster.
- Usage subtil : opacité basse, grande taille, rognés par les bords. Pas plus d'une occurrence animée à l'écran à la fois.

### Formes et profondeur
- Reprendre les angles arrondis généreux du monogramme pour boutons et cartes, avec un système de rayons cohérent (2 ou 3 valeurs, pas plus).
- Ombres rares et douces, bordures fines. Surfaces plates et nettes plutôt que « glassmorphism » généralisé.

### Photographie et visuels
- Priorité aux vrais visuels : équipe, réalisations, captures d'écran de projets, contexte ivoirien et africain authentique.
- Interdit : photos de stock génériques (poignées de main, robots 3D, cerveaux lumineux, réseaux de neurones bleus clichés).
- À défaut de photos, produire des visuels typographiques, des maquettes de projets en SVG/CSS, des illustrations géométriques basées sur les arcs.
- Toute image : `next/image`, dimensions explicites, `alt` descriptif, formats AVIF/WebP, `priority` uniquement pour l'image au-dessus de la ligne de flottaison.

### Mouvement
- Bibliothèque : Framer Motion (Motion). Durées 200 à 400 ms pour les micro-interactions, 500 à 800 ms pour les entrées de section, courbes `easeOut` ou ressorts amortis.
- Entrées au scroll sobres (fondu + léger déplacement de 16 à 24 px), déclenchées une seule fois, décalage échelonné pour les listes.
- Survols : changement d'état net (couleur, soulignement animé, léger déplacement de l'icône). Pas de rebonds ni de rotations gratuites.
- Respecter `prefers-reduced-motion` : toute animation non essentielle est désactivée ou réduite à un simple fondu.
- Ne jamais bloquer le contenu derrière une animation ; ne jamais animer `width/height/top/left` (utiliser `transform` et `opacity`).

## 4. Moment signature du hero

Le hero doit être mémorable sans nuire à la performance. Proposer 2 concepts, par exemple :
- **Ondes vivantes** : les arcs du logo émettent des ondes concentriques lentes qui réagissent légèrement au curseur (ou à l'inclinaison sur mobile) et se transforment en motif de fond.
- **Monogramme qui se construit** : le « P » se dessine, les arcs s'allument, puis le titre apparaît mot par mot.

Contraintes : rendu au premier paint sans attendre le JS lourd, repli statique propre si l'animation est désactivée, aucun impact sur le LCP (texte du H1 visible immédiatement), fonctionne sur un téléphone d'entrée de gamme.

## 5. Architecture de l'information

- Accueil : hero (promesse claire + 2 CTA : « Demander un devis » et « Voir nos réalisations »), bande de preuve (chiffres, logos clients), services (présentation hiérarchisée, pas 5 cartes identiques), méthode de travail en étapes, réalisations phares, témoignages, formations, CTA final.
- Services : une page par service (problème client, solution, livrables, processus, résultats attendus, FAQ, CTA).
- Réalisations : études de cas structurées (contexte, défi, solution, résultats chiffrés si disponibles).
- Formations : programmes, publics, formats, calendrier, inscription.
- À propos : mission, valeurs, équipe, histoire, ancrage ivoirien.
- Blog : structure complète, 2 articles d'exemple de qualité réelle.
- Contact : formulaire, WhatsApp, email, téléphone, carte, horaires.
- Pages légales : mentions légales, politique de confidentialité, adaptées au contexte ivoirien.
- Navigation : header collant discret, CTA permanent, menu mobile plein écran accessible, footer riche (plan du site, contact, réseaux).

## 6. Rédaction (copywriting)

- Français soigné, phrases courtes, verbes d'action, bénéfices avant fonctionnalités. Parler du client (« vous ») plus que de l'agence (« nous »).
- Chaque service : le problème du client, le résultat concret, la preuve. Pas de jargon creux (« solutions innovantes », « synergie », « leader »).
- Titres : une promesse précise (ex. « Vos processus, automatisés par l'IA. Vos équipes, concentrées sur l'essentiel. »). Éviter les titres génériques.
- CTA : verbes précis (« Parler de mon projet », « Demander un devis gratuit »), jamais « Cliquez ici » ni « En savoir plus » seul.
- Ton : expert, chaleureux, direct, sûr de lui sans arrogance.
- **Honnêteté** : ne jamais inventer de clients, de chiffres, de témoignages ou de logos. Si les vraies données manquent, utiliser des emplacements clairement marqués `[À REMPLACER : ...]` et les lister dans le rapport final.

## 7. Contexte local et conversion

- Mobile-first : la majorité du trafic vient de téléphones, souvent en 3G/4G instable.
- WhatsApp est un canal de conversion central : bouton flottant discret, lien `wa.me` avec message pré-rempli, présent dans le header mobile et sur la page contact.
- Prévoir des repères de prix cohérents avec le marché local (FCFA) si l'utilisateur le souhaite ; sinon proposer un parcours « devis gratuit ».
- Réduire la friction : formulaire court (nom, contact, besoin), réponse sous 24 h annoncée, confirmation claire après envoi.
- Éléments de confiance : réalisations réelles, témoignages vérifiables, équipe visible, adresse, certifications éventuelles.

## 8. Stack et qualité du code

- Next.js (App Router), TypeScript strict, Tailwind CSS avec tokens définis comme variables CSS et dans la config, Framer Motion, `next/font`, `next/image`.
- Composants Server par défaut ; `"use client"` uniquement pour l'interactivité et l'animation, au plus près des feuilles.
- Contenu centralisé dans `/content` ou `/data` (services, réalisations, témoignages, FAQ) : aucun texte dispersé dans les composants.
- Formulaire : Server Action, validation Zod côté serveur, honeypot + limitation de débit, envoi via Resend, messages d'erreur accessibles, aucune clé secrète côté client (`.env.local`, `.env.example` fourni).
- Structure : `/app`, `/components/ui`, `/components/sections`, `/lib`, `/content`, `/public/brand`.
- Pas de dépendance inutile ; chaque bibliothèque ajoutée est justifiée. Pas de code mort, pas de `any`, pas de `console.log` restant.
- Consulter la documentation à jour (Context7 si disponible) plutôt que de se fier à la mémoire pour les API de Next.js, Tailwind, Motion.

## 9. SEO, accessibilité, performance

**SEO** : `metadata` par page (titre unique, description, canonical), Open Graph et Twitter avec image de partage générée, `sitemap.xml`, `robots.txt`, données structurées JSON-LD (Organization avec logo, WebSite, Service, BreadcrumbList, Article), `lang="fr"`, URLs propres en français, maillage interne, un H1 par page, balise `hreflang` si une version anglaise est ajoutée.

**Accessibilité** (WCAG 2.2 AA) : HTML sémantique (header, nav, main, footer, section), lien « Aller au contenu », focus visible et stylé, navigation clavier complète, menu mobile avec piégeage du focus, formulaires avec labels explicites et erreurs annoncées, `alt` pertinents, cibles tactiles d'au moins 44 px, animations réduites si demandé, aucune information portée par la seule couleur.

**Performance** : objectifs Lighthouse mobile 90+ partout, LCP < 2,5 s, CLS < 0,1, INP < 200 ms. Polices limitées et préchargées, images dimensionnées, JS minimal côté client, imports dynamiques pour les éléments lourds, pas de scripts tiers bloquants, cache et en-têtes appropriés.

## 10. Checklist qualité avant de conclure

Vérifier réellement (avec un navigateur automatisé, ex. skill `webapp-testing`, captures à 375, 768, 1024 et 1440 px) et non de mémoire.

- [ ] Le nom « PeleAI » est exact partout ; le logo est intact et jamais déformé.
- [ ] Le bleu du logo est la couleur dominante ; un seul accent, utilisé avec parcimonie.
- [ ] Aucune police interdite, aucun emoji, aucun dégradé bleu-violet, aucune photo de stock clichée.
- [ ] Les arcs du logo servent de motif cohérent, sans surcharge.
- [ ] Aucun débordement horizontal, aucun texte coupé, aucun chevauchement à 375 px.
- [ ] Espacements réguliers, alignements propres, hiérarchie typographique nette.
- [ ] Tous les liens, boutons, menus et formulaires fonctionnent ; états de chargement, d'erreur et de succès traités.
- [ ] Contrastes AA validés, navigation clavier complète, `prefers-reduced-motion` respecté.
- [ ] Lighthouse mobile 90+ (performance, accessibilité, bonnes pratiques, SEO).
- [ ] Metadata, Open Graph, sitemap, robots, JSON-LD présents et valides.
- [ ] Pages 404 et légales présentes ; favicon et icônes d'application générés depuis `icone-p.svg`.
- [ ] `npm run build` sans erreur ni avertissement, lint et typage propres.
- [ ] Tous les contenus fictifs sont signalés `[À REMPLACER : ...]` et listés.

Faire ensuite une **passe de directeur artistique exigeant** : regarder chaque page comme un client, puis chercher ce qui paraît générique, chargé ou incohérent, et corriger. Recommencer tant qu'un défaut visible subsiste.

## 11. Anti-patterns (à ne jamais produire)

- Cinq cartes identiques alignées avec icône, titre, paragraphe.
- Hero avec dégradé violet, orbes floues et phrase vague sur « l'avenir ».
- Compteurs, logos clients ou témoignages inventés.
- Animations qui ralentissent la page ou masquent le contenu.
- Texte gris clair sur fond blanc, boutons sans état de survol ou de focus.
- Surabondance d'effets (ombres, flous, bordures lumineuses, parallaxe) sans intention.
- Textes génériques interchangeables avec n'importe quelle agence.

## 12. Rapport final attendu

À la fin, livrer un compte rendu court : pages construites, choix de design et leur justification, scores Lighthouse mesurés, liste des contenus à remplacer, variables d'environnement à renseigner, étapes de déploiement (Vercel), et trois améliorations possibles pour la suite.
