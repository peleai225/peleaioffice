"use client"

import Link from "next/link"
import { ArrowRight, Check, Zap, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/components/providers/site-content-provider"

function CardIcon({ id }: { id: string }) {
  const Icon = id === "menupro" ? UtensilsCrossed : Zap
  return <Icon className="h-6 w-6" />
}

const SOLUTION_ACCENTS: Record<string, string> = {
  peleai360: '#C1440E',
  menupro: '#D4891A',
}

export function FeaturedSolution() {
  const { content } = useSiteContent()
  const { featuredSolutionsSection: fs } = content

  return (
    <section className="py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: '#FFFAF4' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6"
            style={{ backgroundColor: 'rgba(212,137,26,0.15)', border: '1px solid rgba(212,137,26,0.35)', color: '#8B5A00' }}
          >
            <Zap className="h-4 w-4" style={{ color: '#D4891A' }} />
            {fs.badgeLabel}
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
            {fs.title}
          </h2>

          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#6B4423' }}>
            {fs.subtitle}
          </p>

          {/* Kente underline */}
          <div className="flex justify-center gap-px mt-5 mx-auto w-40 h-1.5 overflow-hidden rounded">
            {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E','#D4891A'].map((c, i) => (
              <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Solution cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {content.developedSolutions.map((solution) => {
            const accent = SOLUTION_ACCENTS[solution.id] ?? '#C1440E'
            return (
              <div
                key={solution.id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ backgroundColor: 'white', border: `1.5px solid ${accent}22` }}
              >
                {/* Top accent bar with kente pattern */}
                <div className="flex overflow-hidden h-1.5 rounded-t-2xl">
                  {[accent, '#D4891A', '#1B3A6B', accent, '#8B5A00', '#D4891A', accent, '#D4891A'].map((c, i) => (
                    <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top right, ${accent}08, transparent 60%)` }}
                />

                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl mb-5 relative"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <div className="absolute inset-0 rotate-45 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: accent }} />
                    <span style={{ color: accent }}>
                      <CardIcon id={solution.id} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1" style={{ color: '#1a0a00' }}>{solution.name}</h3>
                  <p className="text-base font-medium mb-4" style={{ color: accent }}>{solution.tagline}</p>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: '#6B4423' }}>{solution.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((text) => (
                      <li key={text} className="flex items-center gap-3">
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${accent}18` }}
                        >
                          <Check className="h-4 w-4" style={{ color: accent }} />
                        </div>
                        <span className="text-sm" style={{ color: '#3a1a00' }}>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="gap-2 text-white font-semibold"
                      style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, border: 'none' }}
                    >
                      <Link
                        href={solution.href}
                        {...(solution.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        Découvrir {solution.name}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      style={{ borderColor: `${accent}50`, color: accent }}
                    >
                      <Link href={`/contact?demo=${encodeURIComponent(solution.name.toLowerCase())}`}>
                        Demander une démo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mini stats row */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { value: "10+", label: "Entreprises accompagnées" },
            { value: String(content.developedSolutions.length), label: "Solutions SaaS" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "Plusieurs", label: "Masterclass organisées" },
            { value: "24/7", label: "Support disponible" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center rounded-xl py-4 px-3"
              style={{ backgroundColor: i % 2 === 0 ? 'rgba(193,68,14,0.06)' : 'rgba(212,137,26,0.06)', border: `1px solid ${i % 2 === 0 ? '#C1440E' : '#D4891A'}22` }}
            >
              <p className="text-2xl font-bold" style={{ color: i % 2 === 0 ? '#C1440E' : '#D4891A' }}>{stat.value}</p>
              <p className="mt-1 text-xs" style={{ color: '#6B4423' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
