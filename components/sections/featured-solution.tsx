"use client"

import Link from "next/link"
import { ArrowRight, Check, Zap, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSiteContent } from "@/components/providers/site-content-provider"

function CardIcon({ id }: { id: string }) {
  const Icon = id === "menupro" ? UtensilsCrossed : Zap
  return <Icon className="h-6 w-6" />
}

export function FeaturedSolution() {
  const { content } = useSiteContent()
  const { featuredSolutionsSection: fs } = content

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent mb-6">
            <Zap className="h-4 w-4" />
            {fs.badgeLabel}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {fs.title}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{fs.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {content.developedSolutions.map((solution, index) => (
            <Card
              key={solution.id}
              className="group relative overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color === "primary" ? "from-primary/5 to-primary/10" : "from-accent/5 to-accent/10"} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <CardHeader className="relative">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${solution.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"} mb-4`}
                >
                  <CardIcon id={solution.id} />
                </div>
                <CardTitle className="text-2xl">{solution.name}</CardTitle>
                <CardDescription className="text-base text-primary font-medium">
                  {solution.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-muted-foreground mb-6">{solution.description}</p>

                <ul className="space-y-3 mb-6">
                  {solution.features.map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${solution.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-foreground">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="gap-2">
                    <Link
                      href={solution.href}
                      {...(solution.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      Découvrir {solution.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/contact?demo=${encodeURIComponent(solution.name.toLowerCase())}`}>
                      Demander une démo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { value: "10+", label: "Entreprises accompagnées" },
            { value: String(content.developedSolutions.length), label: "Solutions SaaS" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "Plusieurs", label: "Masterclass organisées" },
            { value: "24/7", label: "Support disponible" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
