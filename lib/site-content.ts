/**
 * Contenu éditable du site (portfolio, solutions, partenaires, contact, marque).
 * Persistance côté client : localStorage (clé SITE_CONTENT_STORAGE_KEY).
 * Remplaçable par une API / base de données plus tard.
 */

export const SITE_CONTENT_STORAGE_KEY = "peleai-site-content-v12"

/** Logos partenaires servis en local (fiable vs hotlink + localStorage). */
export const TRUSTED_PARTNER_LOGOS: Record<string, string> = {
  MenuPro: "/realisations/logos/menupro-official.png",
  "Grand Bazar": "/realisations/logos/grand-bazar-official.png",
}

export type SocialPlatform =
  | "linkedin"
  | "twitter"
  | "facebook"
  | "instagram"
  | "github"
  | "youtube"
  | "tiktok"

export interface SocialLink {
  platform: SocialPlatform
  url: string
}

export interface DevelopedSolution {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  /** Affichage section d'accueil : couleur de carte */
  color: "primary" | "accent"
  /** Textes des puces (icône Check côté UI) */
  features: string[]
}

export interface PortfolioProject {
  id: string
  name: string
  category: string
  description: string
  link: string
  /** Visuel carte (URL absolue ou chemin /public), ex. /realisations/menupro.svg */
  image?: string
}

/** Partenaire du bandeau « Ils nous font confiance » (nom + logo optionnel). */
export interface PartnerEntry {
  name: string
  /** Chemin public (ex. /realisations/menupro.svg) ou URL absolue */
  logo?: string
}

/** Logos par défaut pour les noms connus (rétrocompatibilité ancien format string[]). */
export const KNOWN_PARTNER_LOGOS: Record<string, string> = {
  MenuPro: TRUSTED_PARTNER_LOGOS.MenuPro,
  "BOUA GROUP":
    "https://bouagroup.com/_next/image?url=%2Fimages%2Flogo.jpg&w=256&q=75",
  "Charm's":
    "https://charms-ci.com/storage/settings/xWFzbkU9zvi7tuyNZU0tKhINyP1EIfk15TpcEY2m.jpg",
  "Grand Bazar": TRUSTED_PARTNER_LOGOS["Grand Bazar"],
  "Khara Consulting": "/realisations/khara.svg",
}

export interface SiteContent {
  brand: {
    siteName: string
    /** Logo lisible sur fond blanc / clair (header, zones claires) */
    logoOnWhiteBg: string
    /** Logo lisible sur fond sombre (footer noir, bandeaux foncés) */
    logoOnBlueBg: string
    faviconUrl: string
    footerTagline: string
    defaultTitle: string
    defaultDescription: string
  }
  contact: {
    email: string
    phoneDisplay: string
    phoneTelHref: string
    whatsappDigits: string
    address: string
    openingHoursWeekdays: string
    openingHoursSaturday: string
    openingHoursSunday: string
  }
  social: SocialLink[]
  partners: PartnerEntry[]
  partnersSectionTitle: string
  developedSolutions: DevelopedSolution[]
  featuredSolutionsSection: {
    badgeLabel: string
    title: string
    subtitle: string
  }
  portfolio: {
    heroBadge: string
    heroName: string
    heroNameHighlight: string
    /** Sous-titre sous la carte photo (hero portfolio) */
    heroSubtitle: string
    /** Photo du hero (chemin public, ex. /images/portfolio/… ) */
    heroPortraitUrl: string
    /** Titre section « À propos » (page portfolio) */
    aboutSectionTitle: string
    /** Texte long « À propos de moi » */
    aboutSectionBody: string
    heroBio: string
    heroLocationLine: string
    heroExperienceLine: string
    linkedinButtonUrl: string
    projects: PortfolioProject[]
  }
}

export const defaultSiteContent: SiteContent = {
  brand: {
    siteName: "PeleAI",
    logoOnWhiteBg: "/images/peleai-logo-on-white.png",
    logoOnBlueBg: "/images/peleai-logo-on-blue.png",
    faviconUrl: "/images/peleai-icon-dark.png",
    footerTagline:
      "L'Innovation par l'Intelligence Artificielle. Transformez votre entreprise avec des solutions digitales sur-mesure.",
    defaultTitle: "PeleAI - L'Innovation par l'Intelligence Artificielle",
    defaultDescription:
      "Agence digitale spécialisée dans la création de sites web, marketing digital, branding et solutions IA. Transformez votre entreprise avec PeleAI.",
  },
  contact: {
    email: "peleai.ci@gmail.com",
    phoneDisplay: "+225 05 08 05 382",
    phoneTelHref: "+225050805382",
    whatsappDigits: "225050805382",
    address: "Abidjan, Côte d'Ivoire",
    openingHoursWeekdays: "9h00 - 18h00",
    openingHoursSaturday: "9h00 - 13h00",
    openingHoursSunday: "Fermé",
  },
  social: [
    {
      platform: "linkedin",
      url: "https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278",
    },
    { platform: "facebook", url: "https://web.facebook.com/junior.kone.3192" },
    {
      platform: "instagram",
      url: "https://www.instagram.com/p/DIgPPqRN1vi/?utm_source=ig_web_copy_link",
    },
    { platform: "tiktok", url: "https://www.tiktok.com/@pelechokone" },
  ],
  partners: [
    {
      name: "MenuPro",
      logo: TRUSTED_PARTNER_LOGOS.MenuPro,
    },
    {
      name: "BOUA GROUP",
      logo: "https://bouagroup.com/_next/image?url=%2Fimages%2Flogo.jpg&w=256&q=75",
    },
    {
      name: "Charm's",
      logo:
        "https://charms-ci.com/storage/settings/xWFzbkU9zvi7tuyNZU0tKhINyP1EIfk15TpcEY2m.jpg",
    },
    {
      name: "Grand Bazar",
      logo: TRUSTED_PARTNER_LOGOS["Grand Bazar"],
    },
  ],
  partnersSectionTitle: "Ils nous font confiance",
  developedSolutions: [
    {
      id: "peleai360",
      name: "PeleAI360",
      tagline: "Plateforme de gestion d'entreprise tout-en-un",
      description:
        "CRM, facturation, automatisation marketing et reporting : une interface pensée pour centraliser l'activité des équipes et des PME. Produit PeleAI lancé en 2025.",
      href: "/peleai360",
      color: "primary",
      features: [
        "CRM et suivi des opportunités",
        "Devis, facturation et trésorerie",
        "Reporting et automatisation",
      ],
    },
    {
      id: "menupro",
      name: "MenuPro",
      tagline: "Digitalisez votre restaurant (Côte d'Ivoire)",
      description:
        "SaaS déployé sur menupro.ci (lancement 2025) : menu en ligne, commandes, paiements Orange Money, MTN MoMo, Wave et Moov Money, QR par table et notifications WhatsApp pour les clients.",
      href: "https://menupro.ci/",
      color: "accent",
      features: [
        "Paiements Mobile Money intégrés",
        "QR code par table & commandes",
        "Notifications clients via WhatsApp",
      ],
    },
  ],
  featuredSolutionsSection: {
    badgeLabel: "Nos solutions phares",
    title: "Des produits conçus pour les entreprises africaines",
    subtitle:
      "Découvrez nos solutions SaaS innovantes, développées pour répondre aux besoins spécifiques des PME et startups en Afrique.",
  },
  portfolio: {
    heroBadge: "Consultant · MIRIGROUP · Fondateur PeleAI",
    heroName: "Pelecho Junior",
    heroNameHighlight: "Kone",
    heroSubtitle:
      "Consultant en transformation numérique & innovation technologique (MenuPro, 2025)",
    heroPortraitUrl: "/images/portfolio/pelecho-junior-kone-portrait.png",
    aboutSectionTitle: "À propos de moi",
    aboutSectionBody:
      "Je suis un consultant spécialisé en transformation numérique, aidant les entreprises à surmonter leurs défis technologiques en proposant des solutions innovantes et en facilitant leur déploiement efficace. J’ai accompagné plus de dix entreprises dans leurs projets.\n\nJ’organise des masterclass (IA, codage, numérique) et j’assure moi-même la formation sur place. J’interviens comme consultant en transformation numérique et innovation technologique, et j’ai développé MenuPro (lancé en 2025) pour digitaliser la restauration en Côte d’Ivoire.",
    heroBio:
      "Consultant en transformation numérique : j’ai accompagné plus de dix entreprises ; j’organise des masterclass IA & digital et je donne la formation. J’ai aussi développé MenuPro (2025) pour digitaliser la restauration.",
    heroLocationLine: "Côte d'Ivoire",
    heroExperienceLine: "Français · Anglais",
    linkedinButtonUrl: "https://ci.linkedin.com/in/pelecho-junior-kone-0b569a278",
    projects: [
      {
        id: "p1",
        name: "MenuPro",
        category: "SaaS · Restauration",
        description:
          "Plateforme de commande en ligne pour restaurants : menu digital, Mobile Money, QR par table — menupro.ci.",
        link: "https://menupro.ci/",
        image: TRUSTED_PARTNER_LOGOS.MenuPro,
      },
      {
        id: "p2",
        name: "BOUA GROUP",
        category: "Site vitrine · Conseil",
        description:
          "Site institutionnel : conseil stratégique, solutions technologiques et accompagnement pour entreprises africaines.",
        link: "https://bouagroup.com/",
        image:
          "https://bouagroup.com/_next/image?url=%2Fimages%2Flogo.jpg&w=384&q=75",
      },
      {
        id: "p3",
        name: "Charm's",
        category: "E-commerce",
        description: "Boutique en ligne multi-catégories — charms-ci.com.",
        link: "https://charms-ci.com/",
        image:
          "https://charms-ci.com/storage/settings/xWFzbkU9zvi7tuyNZU0tKhINyP1EIfk15TpcEY2m.jpg",
      },
      {
        id: "p4",
        name: "Grand Bazar",
        category: "E-commerce",
        description: "Marketplace / e-commerce — legrandbazar.ci.",
        link: "https://legrandbazar.ci/",
        image: TRUSTED_PARTNER_LOGOS["Grand Bazar"],
      },
      {
        id: "p5",
        name: "PeleAI360",
        category: "SaaS · Gestion",
        description:
          "Suite métier : CRM, facturation et pilotage — présentation sur ce site.",
        link: "/peleai360",
        image: "/realisations/peleai360.svg",
      },
      {
        id: "p6",
        name: "Laboratoire virtuel UVCI",
        category: "EdTech · E-learning",
        description:
          "Laboratoires virtuels pour l’Université Virtuelle de Côte d’Ivoire (UVCI) : TP, environnements et contenus pédagogiques accessibles en ligne.",
        link: "https://www.uvci.edu.ci/",
        image: "/realisations/uvci-lab.svg",
      },
      {
        id: "p7",
        name: "Laboratoire virtuel IUA",
        category: "EdTech · E-learning",
        description:
          "Laboratoires virtuels pour l’Institut Universitaire d’Abidjan (IUA) : accès aux séances pratiques et ressources numériques pour les étudiants.",
        link: "https://www.iua-ci.com/",
        image: "/realisations/iua-lab.svg",
      },
      {
        id: "p8",
        name: "Master Class IA & Codage",
        category: "Formation · Événement",
        description:
          "Masterclass IA & codage : organisation et animation assurées par Pelecho Kone (PeleAI) — conception pédagogique, formation en présentiel, supports et communication (ex. samedi 6 déc. 2025, 8 h GMT, 15 000 FCFA). Infos : +225 05 01 86 26 40.",
        link: "/contact",
        image: "/realisations/showcase/masterclass-ia-codage-peleai.png",
      },
      {
        id: "p9",
        name: "Khara Consulting",
        category: "Site vitrine & conseil",
        description:
          "Réalisation du site internet pour Khara Consulting (cabinet de conseil) : présentation de l’offre, identité en ligne et prise de contact — visuel : extrait de la charte (logo KC).",
        link: "https://kharaconsulting.com/",
        image: "/realisations/khara.svg",
      },
    ],
  },
}

/** Anciens noms factices encore présents dans le localStorage — on repasse aux partenaires réels. */
const LEGACY_DEMO_PARTNER_NAMES = new Set([
  "TechCorp Africa",
  "InnovateBJ",
  "DigiServe",
  "AfriTrade",
  "SmartBiz",
  "CloudNet Africa",
  "PaySafe",
])

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v)
}

function defaultPartnersClone(): PartnerEntry[] {
  return defaultSiteContent.partners.map((p) => ({ ...p }))
}

function defaultSocialClone(): SocialLink[] {
  return defaultSiteContent.social.map((s) => ({ ...s }))
}

function defaultPortfolioProjectsClone(): PortfolioProject[] {
  return defaultSiteContent.portfolio.projects.map((p) => ({ ...p }))
}

function isPartnerEntry(v: unknown): v is PartnerEntry {
  return isRecord(v) && typeof v.name === "string"
}

/** Ancien format localStorage : une ligne = un nom ; nouveau : { name, logo? }. */
export function normalizePartners(raw: unknown): PartnerEntry[] {
  if (!Array.isArray(raw)) return defaultPartnersClone()
  if (raw.length === 0) return defaultPartnersClone()
  const first = raw[0]
  let out: PartnerEntry[]
  if (typeof first === "string") {
    out = (raw as string[]).map((name) => {
      const displayName = name === "Hara Consulting" ? "Khara Consulting" : name
      return {
        name: displayName,
        logo: KNOWN_PARTNER_LOGOS[displayName] ?? KNOWN_PARTNER_LOGOS[name],
      }
    })
  } else {
    out = (raw as unknown[]).map((item) => {
      if (!isPartnerEntry(item)) return { name: "Partenaire" }
      let { name, logo } = item
      if (name === "Hara Consulting") name = "Khara Consulting"
      const trimmed = typeof logo === "string" ? logo.trim() : ""
      logo = trimmed || undefined
      if (!logo) {
        logo = KNOWN_PARTNER_LOGOS[name]
      }
      return { name, logo }
    })
  }
  const withTrustedLogos = out.map((p) => {
    const trusted = TRUSTED_PARTNER_LOGOS[p.name]
    return trusted ? { ...p, logo: trusted } : p
  })
  if (withTrustedLogos.some((p) => LEGACY_DEMO_PARTNER_NAMES.has(p.name))) {
    return defaultPartnersClone()
  }
  return withTrustedLogos
}

function normalizePortfolioProjects(projects: PortfolioProject[]): PortfolioProject[] {
  return projects.map((p) => {
    let { image, name, description } = p
    if (image === "/realisations/hara.svg") image = "/realisations/khara.svg"
    if (name === "Hara Consulting") name = "Khara Consulting"
    if (description.includes("Hara Consulting")) {
      description = description.replace(/\bHara Consulting\b/g, "Khara Consulting")
    }
    return { ...p, image, name, description }
  })
}

const SOCIAL_PLATFORMS: readonly SocialPlatform[] = [
  "linkedin",
  "twitter",
  "facebook",
  "instagram",
  "github",
  "youtube",
  "tiktok",
]

function isSocialPlatform(p: string): p is SocialPlatform {
  return (SOCIAL_PLATFORMS as readonly string[]).includes(p)
}

export function normalizeSocial(raw: unknown): SocialLink[] {
  if (!Array.isArray(raw)) return defaultSocialClone()
  if (raw.length === 0) return defaultSocialClone()
  const out: SocialLink[] = []
  for (const item of raw) {
    if (!isRecord(item)) continue
    const platform = item.platform
    const url = item.url
    if (typeof platform !== "string" || typeof url !== "string") continue
    if (!isSocialPlatform(platform)) continue
    out.push({ platform, url: url.trim() })
  }
  return out.length > 0 ? out : defaultSocialClone()
}

function normalizeLinkedinButtonUrl(url: unknown): string {
  if (typeof url !== "string") return ""
  return url.trim()
}

type BrandInput = SiteContent["brand"] & { logoUrl?: string }

function normalizeBrand(brand: BrandInput | undefined): SiteContent["brand"] {
  const d = defaultSiteContent.brand
  if (!brand) return { ...d }
  const legacy =
    typeof brand.logoUrl === "string" && brand.logoUrl.trim() ? brand.logoUrl.trim() : ""
  const white = brand.logoOnWhiteBg?.trim() || legacy || d.logoOnWhiteBg
  const blue = brand.logoOnBlueBg?.trim() || legacy || d.logoOnBlueBg
  return {
    siteName: brand.siteName?.trim() || d.siteName,
    logoOnWhiteBg: white,
    logoOnBlueBg: blue,
    faviconUrl: brand.faviconUrl?.trim() || d.faviconUrl,
    footerTagline: brand.footerTagline ?? d.footerTagline,
    defaultTitle: brand.defaultTitle?.trim() || d.defaultTitle,
    defaultDescription: brand.defaultDescription?.trim() || d.defaultDescription,
  }
}

const LEGACY_CONTACT_EMAIL = "pelechojuniorkone@gmail.com"

function normalizeContactPatch(contact: SiteContent["contact"]): SiteContent["contact"] {
  const d = defaultSiteContent.contact
  const wa = contact.whatsappDigits?.replace(/\D/g, "") ?? ""
  const phoneTel = contact.phoneTelHref?.replace(/\s/g, "").trim() ?? ""
  let email = contact.email?.trim() || d.email
  if (email === LEGACY_CONTACT_EMAIL) email = d.email
  return {
    ...contact,
    email,
    phoneDisplay: contact.phoneDisplay?.trim() || d.phoneDisplay,
    phoneTelHref: phoneTel || d.phoneTelHref,
    whatsappDigits: wa || d.whatsappDigits,
    address: contact.address?.trim() || d.address,
    openingHoursWeekdays: contact.openingHoursWeekdays ?? d.openingHoursWeekdays,
    openingHoursSaturday: contact.openingHoursSaturday ?? d.openingHoursSaturday,
    openingHoursSunday: contact.openingHoursSunday ?? d.openingHoursSunday,
  }
}

export function normalizeSiteContent(content: SiteContent): SiteContent {
  const linkedinRaw = normalizeLinkedinButtonUrl(content.portfolio?.linkedinButtonUrl)
  const linkedinButtonUrl =
    linkedinRaw || defaultSiteContent.portfolio.linkedinButtonUrl
  return {
    ...content,
    brand: normalizeBrand(content.brand as BrandInput),
    contact: normalizeContactPatch(content.contact),
    social: normalizeSocial(content.social as unknown),
    partners: normalizePartners(content.partners as unknown),
    portfolio: {
      ...content.portfolio,
      heroPortraitUrl:
        content.portfolio?.heroPortraitUrl?.trim() ||
        defaultSiteContent.portfolio.heroPortraitUrl,
      heroSubtitle:
        content.portfolio?.heroSubtitle?.trim() ||
        defaultSiteContent.portfolio.heroSubtitle,
      aboutSectionTitle:
        content.portfolio?.aboutSectionTitle?.trim() ||
        defaultSiteContent.portfolio.aboutSectionTitle,
      aboutSectionBody:
        content.portfolio?.aboutSectionBody?.trim() ||
        defaultSiteContent.portfolio.aboutSectionBody,
      linkedinButtonUrl,
      projects: normalizePortfolioProjects(content.portfolio?.projects),
    },
  }
}

function deepMergeRecords(
  base: Record<string, unknown>,
  patch: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...base }
  for (const key of Object.keys(patch)) {
    const pv = patch[key]
    const bv = base[key]
    if (pv === undefined) continue
    if (Array.isArray(pv)) {
      out[key] = pv
    } else if (isRecord(pv) && isRecord(bv)) {
      out[key] = deepMergeRecords(bv, pv)
    } else {
      out[key] = pv
    }
  }
  return out
}

export function mergeSiteContent(partial: Partial<SiteContent> | null | undefined): SiteContent {
  if (!partial || !isRecord(partial)) return normalizeSiteContent(defaultSiteContent)
  const merged = deepMergeRecords(
    defaultSiteContent as unknown as Record<string, unknown>,
    partial as unknown as Record<string, unknown>
  ) as unknown as SiteContent
  return normalizeSiteContent(merged)
}

/** Fusionne un patch partiel dans l’état courant (sans repartir des valeurs par défaut). */
export function mergeIntoSiteContent(
  current: SiteContent,
  patch: Partial<SiteContent>
): SiteContent {
  const merged = deepMergeRecords(
    current as unknown as Record<string, unknown>,
    patch as unknown as Record<string, unknown>
  ) as unknown as SiteContent
  return normalizeSiteContent(merged)
}

export function loadSiteContentFromStorage(): SiteContent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (!isRecord(parsed)) return null
    return mergeSiteContent(parsed as Partial<SiteContent>)
  } catch {
    return null
  }
}

export function saveSiteContentToStorage(content: SiteContent): void {
  if (typeof window === "undefined") return
  window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(content))
}

export function clearSiteContentStorage(): void {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(SITE_CONTENT_STORAGE_KEY)
}

export function buildWhatsAppUrl(digits: string, message: string): string {
  const d = digits.replace(/\D/g, "")
  const q = encodeURIComponent(message)
  return `https://wa.me/${d}?text=${q}`
}

