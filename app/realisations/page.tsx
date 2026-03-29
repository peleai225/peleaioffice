import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    image: "/realisations/showcase/menupro-promo-scan-qr.png",
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
    image: "/realisations/showcase/grand-bazar-promo.png",
  },
  {
    title: "Master Class IA & Codage",
    category: "Formation · Événement",
    description:
      "Masterclass IA & codage : organisation et formation assurées par Pelecho Kone (PeleAI) — pédagogie, animation en présentiel, affiche et infos pratiques (ex. déc. 2025, 8 h GMT).",
    tags: ["Formation", "IA", "PeleAI", "Animation"],
    url: "/contact",
    isExternal: false,
    image: "/realisations/showcase/masterclass-ia-codage-peleai.png",
  },
  {
    title: "Khara Consulting",
    category: "Site vitrine & conseil",
    description:
      "Site internet réalisé pour Khara Consulting : vitrine du cabinet de conseil, services et contact — illustration : élément de charte (logo KC).",
    tags: ["Site web", "Conseil", "Branding"],
    url: "https://kharaconsulting.com/",
    isExternal: true,
    image: "/realisations/showcase/khara-consulting-logo.png",
  },
  {
    title: "PeleAI360",
    category: "Produit SaaS",
    description:
      "Suite de gestion d'entreprise : CRM, facturation, automatisation marketing et reporting — développée par PeleAI.",
    tags: ["SaaS", "CRM", "Facturation"],
    url: "/peleai360",
    isExternal: false,
    image: "/realisations/peleai360.svg",
  },
  {
    title: "Laboratoire virtuel UVCI",
    category: "EdTech · E-learning",
    description:
      "Laboratoires virtuels pour l’Université Virtuelle de Côte d’Ivoire : TP et contenus pédagogiques accessibles en ligne.",
    tags: ["UVCI", "E-learning", "Formation"],
    url: "https://www.uvci.edu.ci/",
    isExternal: true,
    image: "/realisations/uvci-lab.svg",
  },
  {
    title: "Laboratoire virtuel IUA",
    category: "EdTech · E-learning",
    description:
      "Laboratoires virtuels pour l’Institut Universitaire d’Abidjan : environnements pratiques et ressources numériques pour les étudiants.",
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
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Nos <span className="text-primary">réalisations</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Une sélection de produits SaaS et de sites web que nous avons conçus ou que nous
              maintenons — dont la solution{" "}
              <a
                href="https://menupro.ci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                MenuPro
              </a>{" "}
              et la plateforme{" "}
              <Link href="/peleai360" className="text-primary underline-offset-4 hover:underline">
                PeleAI360
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, i) => (
              <button
                key={category}
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  {/* img : meilleure compatibilité SVG que next/image */}
                  <img
                    src={project.image}
                    alt={`Aperçu ${project.title}`}
                    className={projectCardImageClass(project.title)}
                  />
                </div>

                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-1">{project.category}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="secondary" size="sm" className="gap-2 w-full sm:w-auto">
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
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Un projet similaire en tête ?</p>
            <Button asChild>
              <Link href="/contact">
                Parlons-en
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

