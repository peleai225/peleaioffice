"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSiteContent } from "@/components/providers/site-content-provider"

function projectImageClass(name: string) {
  if (name === "Khara Consulting" || name === "Master Class IA & Codage") {
    return "h-full w-full object-contain object-center bg-muted/40 p-3"
  }
  return "h-full w-full object-cover object-top"
}

export function PortfolioMajorProjects() {
  const { content } = useSiteContent()
  const projects = content.portfolio.projects

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Projets Majeurs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Les solutions que j&apos;ai créées pour transformer les entreprises africaines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element -- SVG / visuels locaux
                  <img
                    src={project.image}
                    alt={project.name}
                    className={projectImageClass(project.name)}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <span className="text-4xl font-bold text-primary/30">{project.name}</span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  {project.link.startsWith("http") ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Voir le site
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link href={project.link}>
                      Voir le projet
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
