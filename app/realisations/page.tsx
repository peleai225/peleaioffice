import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Réalisations — Sites Web, SaaS & Formations | PeleAI Abidjan",
  description:
    "Découvrez les réalisations PeleAI : MenuPro (SaaS restauration), Grand Bazar, Khara Consulting, PeleAI360, laboratoires virtuels UVCI & IUA, masterclass IA. Agence digitale Abidjan.",
  keywords: ["réalisations agence digitale Abidjan", "MenuPro", "PeleAI360", "site web Côte d'Ivoire", "portfolio digital Afrique"],
  alternates: { canonical: '/realisations' },
  openGraph: {
    url: '/realisations',
    title: "Réalisations PeleAI — Sites Web, SaaS & Formations | Abidjan",
    description: "Projets réalisés par PeleAI : SaaS, e-commerce, EdTech, formations IA à Abidjan.",
  },
}

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  url: string
  isExternal: boolean
  image: string
  accent: string
}

const projects: Project[] = [
  {
    title: "MenuPro",
    category: "Produit SaaS",
    description: "Plateforme de digitalisation des restaurants en Côte d'Ivoire : menu en ligne, commandes, paiements Orange Money, MTN MoMo, Wave, Moov Money, QR par table et notifications WhatsApp — déployée sur menupro.ci.",
    tags: ["SaaS", "Restauration", "Mobile Money", "WhatsApp"],
    url: "https://menupro.ci/",
    isExternal: true,
    image: "/realisations/logos/menupro-official.png",
    accent: "#C1440E",
  },
  {
    title: "BOUA GROUP",
    category: "Site vitrine & conseil",
    description: "Site institutionnel pour le conseil stratégique et les solutions technologiques : présentation des services, partenaires et prise de contact.",
    tags: ["Next.js", "Institutionnel", "Multilingue"],
    url: "https://bouagroup.com/",
    isExternal: true,
    image: "https://bouagroup.com/_next/image?url=%2Fimages%2Flogo.jpg&w=384&q=75",
    accent: "#1B3A6B",
  },
  {
    title: "Charm's",
    category: "E-commerce",
    description: "Boutique en ligne multi-catégories avec catalogue produits, promotions et paiements adaptés au marché local.",
    tags: ["E-commerce", "Catalogue", "Mobile Money"],
    url: "https://charms-ci.com/",
    isExternal: true,
    image: "https://charms-ci.com/storage/settings/xWFzbkU9zvi7tuyNZU0tKhINyP1EIfk15TpcEY2m.jpg",
    accent: "#D4891A",
  },
  {
    title: "Grand Bazar",
    category: "E-commerce",
    description: "Marketplace / grande surface en ligne pour la vente de produits variés.",
    tags: ["Marketplace", "E-commerce", "Afrique"],
    url: "https://legrandbazar.ci/",
    isExternal: true,
    image: "/realisations/logos/grand-bazar-official.png",
    accent: "#8B5A00",
  },
  {
    title: "Master Class IA & Codage",
    category: "Formation · Événement",
    description: "Masterclass IA & codage : organisation et formation assurées par Pelecho Kone (PeleAI) — pédagogie, animation en présentiel, affiche et infos pratiques.",
    tags: ["Formation", "IA", "PeleAI", "Animation"],
    url: "/contact",
    isExternal: false,
    image: "/realisations/showcase/masterclass-ia-codage-peleai.png",
    accent: "#C1440E",
  },
  {
    title: "Khara Consulting",
    category: "Site vitrine & conseil",
    description: "Site internet réalisé pour Khara Consulting : vitrine du cabinet de conseil, services et contact.",
    tags: ["Site web", "Conseil", "Branding"],
    url: "https://kharaconsulting.com/",
    isExternal: true,
    image: "/realisations/showcase/khara-consulting-logo.png",
    accent: "#1B3A6B",
  },
  {
    title: "PeleAI360",
    category: "Produit SaaS",
    description: "Suite de gestion d'entreprise : CRM, facturation, automatisation marketing et reporting — développée par PeleAI.",
    tags: ["SaaS", "CRM", "Facturation"],
    url: "/peleai360",
    isExternal: false,
    image: "/realisations/peleai360.svg",
    accent: "#D4891A",
  },
  {
    title: "Laboratoire virtuel UVCI",
    category: "EdTech · E-learning",
    description: "Laboratoires virtuels pour l'Université Virtuelle de Côte d'Ivoire : TP et contenus pédagogiques accessibles en ligne.",
    tags: ["UVCI", "E-learning", "Formation"],
    url: "https://www.uvci.edu.ci/",
    isExternal: true,
    image: "/realisations/uvci-lab.svg",
    accent: "#8B5A00",
  },
  {
    title: "Laboratoire virtuel IUA",
    category: "EdTech · E-learning",
    description: "Laboratoires virtuels pour l'Institut Universitaire d'Abidjan : environnements pratiques et ressources numériques.",
    tags: ["IUA", "E-learning", "Formation"],
    url: "https://www.iua-ci.com/",
    isExternal: true,
    image: "/realisations/iua-lab.svg",
    accent: "#C1440E",
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  "Produit SaaS": "#C1440E",
  "Site vitrine & conseil": "#1B3A6B",
  "E-commerce": "#D4891A",
  "Formation · Événement": "#8B5A00",
  "EdTech · E-learning": "#C1440E",
}

function projectCardImageClass(title: string) {
  if (title === "Khara Consulting" || title === "Master Class IA & Codage") {
    return "h-full w-full object-contain object-center p-4"
  }
  return "h-full w-full object-cover object-top"
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero — dark navy African */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20" style={{ backgroundColor: '#0D1B2E' }}>
        {/* Kente top */}
        <div className="absolute top-0 left-0 right-0 flex overflow-hidden h-1">
          {['#C1440E','#D4891A','#1B3A6B','#C1440E','#D4891A','#8B5A00','#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A'].map(
            (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
          )}
        </div>
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="real-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polyline points="0,12 10,0 20,12 30,0 40,12 50,0 60,12 70,0 80,12" fill="none" stroke="white" strokeWidth="1.2"/>
                <line x1="0" y1="34" x2="80" y2="34" stroke="white" strokeWidth="0.5"/>
                <polygon points="40,38 52,50 40,62 28,50" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="10" cy="75" r="1.8" fill="white"/><circle cx="30" cy="75" r="1.8" fill="white"/>
                <circle cx="50" cy="75" r="1.8" fill="white"/><circle cx="70" cy="75" r="1.8" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#real-geo)"/>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4891A]"/>
              <div className="h-2 w-2 rotate-45 bg-[#D4891A]"/>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4891A]"/>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F5A470' }}>Portfolio</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
              Nos <span style={{ color: '#F5A470' }}>réalisations</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Une sélection de produits SaaS et de sites web conçus par PeleAI —{' '}
              <a href="https://menupro.ci/" target="_blank" rel="noopener noreferrer" style={{ color: '#F5A470' }} className="underline underline-offset-4">MenuPro</a>,{' '}
              <Link href="/peleai360" style={{ color: '#F5A470' }} className="underline underline-offset-4">PeleAI360</Link>{' '}
              et bien plus.
            </p>
            {/* Category pills */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${color}22`, border: `1px solid ${color}55`, color: color === '#1B3A6B' ? '#7BA7E8' : '#F5A470' }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFAF4' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: 'white', border: `1.5px solid ${project.accent}22` }}
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden" style={{ backgroundColor: `${project.accent}0D` }}>
                  <img
                    src={project.image}
                    alt={`Aperçu ${project.title}`}
                    className={projectCardImageClass(project.title)}
                  />
                  {/* Category badge overlay */}
                  <div
                    className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: project.accent }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Top accent bar */}
                <div className="h-1" style={{ backgroundColor: project.accent }} />

                <div className="p-5">
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-200 group-hover:text-[#C1440E]"
                    style={{ color: '#1a0a00' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B4423' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 w-full text-white font-semibold"
                    style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)`, border: 'none' }}
                  >
                    {project.isExternal ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title === "MenuPro" ? "Ouvrir menupro.ci" : "Voir le site"}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : project.title === "PeleAI360" ? (
                      <Link href={project.url}>
                        Découvrir PeleAI360
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <Link href={project.url}>
                        Nous contacter
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center rounded-2xl p-10" style={{ background: 'linear-gradient(135deg, #0D1B2E, #1B3A6B)' }}>
            {/* Kente strip */}
            <div className="flex overflow-hidden h-1 rounded mb-6 mx-auto max-w-xs">
              {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E','#D4891A'].map(
                (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
              )}
            </div>
            <p className="text-white/70 mb-3 text-lg">Un projet similaire en tête ?</p>
            <h2 className="text-2xl font-bold text-white mb-6">Parlons de votre vision</h2>
            <Button
              asChild
              size="lg"
              className="gap-2 font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #C1440E, #E05A20)', border: 'none' }}
            >
              <Link href="/contact">
                Démarrer votre projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
