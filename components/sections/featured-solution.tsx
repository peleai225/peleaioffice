"use client"

import Link from "next/link"
import { ArrowRight, Check, Zap, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/components/providers/site-content-provider"

const solutionColors: Record<string, string> = {
  menupro: '#C1440E',
  peleai360: '#2E5A9C',
}

function SolutionIcon({ id }: { id: string }) {
  const Icon = id === "menupro" ? UtensilsCrossed : Zap
  return <Icon className="h-5 w-5" />
}

export function FeaturedSolution() {
  const { content } = useSiteContent()
  const { featuredSolutionsSection: fs } = content

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#2E5A9C' }}>
            {fs.badgeLabel}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0D1B2E' }}>
            {fs.title}
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            {fs.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {content.developedSolutions.map((solution) => {
            const accent = solutionColors[solution.id] ?? '#2E5A9C'
            return (
              <div
                key={solution.id}
                className="rounded-2xl p-8 bg-white transition-shadow duration-200 hover:shadow-md"
                style={{ border: '1px solid #E2E8F0' }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${accent}15`, color: accent }}
                >
                  <SolutionIcon id={solution.id} />
                </div>

                <h3 className="text-xl font-bold mb-1" style={{ color: '#0D1B2E' }}>
                  {solution.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: accent }}>
                  {solution.tagline}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748B' }}>
                  {solution.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {solution.features.map((text) => (
                    <li key={text} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 shrink-0" style={{ color: accent }} />
                      <span className="text-sm" style={{ color: '#374151' }}>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 font-semibold text-white"
                    style={{ backgroundColor: accent, border: 'none' }}
                  >
                    <Link
                      href={solution.href}
                      {...(solution.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      Découvrir {solution.name}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    style={{ borderColor: '#E2E8F0', color: '#374151' }}
                  >
                    <Link href={`/contact?demo=${encodeURIComponent(solution.name.toLowerCase())}`}>
                      Demander une démo
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {[
            { value: '10+', label: 'Entreprises accompagnées' },
            { value: '98%', label: 'Clients satisfaits' },
            { value: '2', label: 'Solutions SaaS' },
            { value: '24/7', label: 'Support disponible' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold" style={{ color: '#2E5A9C' }}>{s.value}</p>
              <p className="mt-1 text-xs" style={{ color: '#64748B' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
