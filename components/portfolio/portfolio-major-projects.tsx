"use client"

import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/components/providers/site-content-provider"

function projectImageClass(name: string) {
  if (name === "Khara Consulting" || name === "Master Class IA & Codage") {
    return "h-full w-full object-contain object-center bg-secondary p-3"
  }
  return "h-full w-full object-cover object-top"
}

export function PortfolioMajorProjects() {
  const { content } = useSiteContent()
  const projects = content.portfolio.projects

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Réalisations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projets majeurs
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Les solutions que j&apos;ai créées pour transformer les entreprises africaines.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-accent/[0.05] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-secondary">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`${projectImageClass(project.name)} group-hover:scale-105 transition-transform duration-500`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <span className="text-4xl font-bold text-primary/30">{project.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg hover:border-accent hover:text-accent">
                  {project.link.startsWith("http") ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Voir le site
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link href={project.link}>
                      Voir le projet
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
