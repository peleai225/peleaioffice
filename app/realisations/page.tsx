import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Sites web, SaaS et formations (masterclass IA & codage animées par Pelecho Kone) par PeleAI : MenuPro, Grand Bazar, site Khara Consulting, PeleAI360, laboratoires UVCI & IUA.",
  alternates: { canonical: '/realisations' },
  openGraph: { url: '/realisations' },
}

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  url: string
  isExternal: boolean
  image: string
}

function projectCardImageClass(title: string) {
  if (title === "Khara Consulting" || title === "Master Class IA & Codage") {
    return "h-full w-full object-contain object-center bg-muted/40 p-4"
  }
  return "h-full w-full object-cover object-top"
}

const projects: Project[] = [
  {
    title: "MenuPro",
    category: "Produit SaaS",
    description:
      "Plateforme de digitalisation des restaurants en Côte d'Ivoire : menu en ligne, commandes, paiements Orange Money, MTN MoMo, Wave, Moov Money, QR par table et notifications WhatsApp — déployée sur menupro.ci.",
    tags: ["SaaS", "Restauration", "Mobile Money", "WhatsApp"],
    url: "https://menupro.ci/",
    isExternal: true,
    image: "/images/menupro-showcase.png",
  },
  {
    title: "PeleAI360",
    category: "Produit SaaS",
    description:
      "Solution digitale 360° pour le e-commerce : boutique professionnelle clé en main avec hébergement et nom de domaine inclus, à partir de 350.000 FCFA.",
    tags: ["SaaS", "E-commerce", "Boutique en ligne"],
    url: "/peleai360",
    isExternal: false,
    image: "/images/peleai360-showcase.png",
  },
  {
    title: "BOUA GROUP",
    category: "Site vitrine & conseil",
    description:
      "Site institutionnel pour le conseil stratégique et les solutions technologiques : présentation des services, partenaires et prise de contact.",
    tags: ["Next.js", "Institutionnel", "Multilingue"],
    url: "https://bouagroup.com/",
    isExternal: true,
    image:
      "https://bouagroup.com/_next/image?url=%2Fimages%2Flogo.jpg&w=384&q=75",
  },
  {
    title: "Charm's",
    category: "E-commerce",
    description:
      "Boutique en ligne multi-catégories avec catalogue produits, promotions et paiements adaptés au marché local.",
    tags: ["E-commerce", "Catalogue", "Mobile Money"],
    url: "https://charms-ci.com/",
    isExternal: true,
    image:
      "https://charms-ci.com/storage/settings/xWFzbkU9zvi7tuyNZU0tKhINyP1EIfk15TpcEY2m.jpg",
  },
  {
    title: "Grand Bazar",
    category: "E-commerce",
    description:
      "Marketplace / grande surface en ligne pour la vente de produits variés.",
    tags: ["Marketplace", "E-commerce", "Afrique"],
    url: "https://legrandbazar.ci/",
    isExternal: true,
    image: "/realisations/logos/grand-bazar-official.png",
  },
  {
    title: "Master Class IA & Codage",
    category: "Formation · Événement",
    description:
      "Masterclass IA & codage : organisation et formation assurées par Pelecho Kone (PeleAI) — pédagogie, animation en présentiel.",
    tags: ["Formation", "IA", "PeleAI", "Animation"],
    url: "/contact",
    isExternal: false,
    image: "/realisations/showcase/masterclass-ia-codage-peleai.png",
  },
  {
    title: "Khara Consulting",
    category: "Site vitrine & conseil",
    description:
      "Site internet réalisé pour Khara Consulting : vitrine du cabinet de conseil, services et contact.",
    tags: ["Site web", "Conseil", "Branding"],
    url: "https://kharaconsulting.com/",
    isExternal: true,
    image: "/realisations/showcase/khara-consulting-logo.png",
  },
  {
    title: "Laboratoire virtuel UVCI",
    category: "EdTech · E-learning",
    description:
      "Laboratoires virtuels pour l'Université Virtuelle de Côte d'Ivoire : TP et contenus pédagogiques accessibles en ligne.",
    tags: ["UVCI", "E-learning", "Formation"],
    url: "https://www.uvci.edu.ci/",
    isExternal: true,
    image: "/realisations/uvci-lab.svg",
  },
  {
    title: "Laboratoire virtuel IUA",
    category: "EdTech · E-learning",
    description:
      "Laboratoires virtuels pour l'Institut Universitaire d'Abidjan : environnements pratiques et ressources numériques.",
    tags: ["IUA", "E-learning", "Formation"],
    url: "https://www.iua-ci.com/",
    isExternal: true,
    image: "/realisations/iua-lab.svg",
  },
]

const categories = [
  "Tous",
  "Produit SaaS",
  "Site vitrine & conseil",
  "E-commerce",
  "Formation · Événement",
  "EdTech · E-learning",
]

export default function RealisationsPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-accent/[0.08] blur-[80px]" />
          <div className="absolute bottom-[10%] left-[15%] h-[200px] w-[200px] rounded-full bg-accent/[0.05] blur-[60px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Nos <span className="text-accent">réalisations</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Une sélection de produits SaaS et de sites web que nous avons conçus — dont{" "}
              <span className="text-white/80 font-medium">MenuPro</span> et{" "}
              <span className="text-white/80 font-medium">PeleAI360</span>.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-accent">Réalisations</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 50L1440 50L1440 15C1440 15 1200 0 720 0C240 0 0 15 0 15L0 50Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((category, i) => (
              <button
                key={category}
                type="button"
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  i === 0
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-secondary text-foreground/70 hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.05] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`Aperçu ${project.title}`}
                    className={`${projectCardImageClass(project.title)} transition-transform duration-500 group-hover:scale-105`}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg w-full hover:bg-accent hover:text-white hover:border-accent transition-all">
                    {project.isExternal ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Voir le site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link href={project.url}>
                        Découvrir
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-5">Un projet similaire en tête ?</p>
            <Button asChild className="gap-2 rounded-lg bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20">
              <Link href="/contact">
                Parlons-en
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
