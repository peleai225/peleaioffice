"use client"

import Link from "next/link"
import { ArrowRight, Check, Zap, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/components/providers/site-content-provider"

const solutionAccents: Record<string, { primary: string; bg: string }> = {
  menupro: { primary: '#C1440E', bg: '#FFF5F0' },
  peleai360: { primary: '#2E5A9C', bg: '#F0F4FC' },
}

function SolutionIcon({ id }: { id: string }) {
  const Icon = id === "menupro" ? UtensilsCrossed : Zap
  return <Icon className="h-6 w-6" />
}

function DiamondOrnament({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
      <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points="10,5 15,10 10,15 5,10" fill={color} opacity="0.3" />
    </svg>
  )
}

export function FeaturedSolution() {
  const { content } = useSiteContent()
  const { featuredSolutionsSection: fs } = content

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#FFFAF4' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondOrnament color="#D4891A" />
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#C1440E' }}>
              {fs.badgeLabel}
            </p>
            <DiamondOrnament color="#D4891A" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
            {fs.title}
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#6B4423' }}>
            {fs.subtitle}
          </p>
          {/* Kente underline */}
          <div className="flex justify-center gap-px mt-5 mx-auto w-40 h-1.5 overflow-hidden rounded">
            {['#C1440E', '#D4891A', '#1B3A6B', '#C1440E', '#D4891A', '#8B5A00', '#C1440E', '#D4891A'].map((c, i) => (
              <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Solution cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {content.developedSolutions.map((solution) => {
            const colors = solutionAccents[solution.id] ?? { primary: '#C1440E', bg: '#FFF5F0' }
            return (
              <div
                key={solution.id}
                className="relative rounded-xl overflow-hidden border transition-shadow duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: 'white',
                  borderColor: `${colors.primary}22`,
                  borderWidth: '1.5px',
                }}
              >
                {/* Top accent bar */}
                <div className="h-1.5" style={{ backgroundColor: colors.primary }} />

                <div className="p-6 lg:p-8">
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl relative"
                    style={{ backgroundColor: `${colors.primary}15` }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl rotate-[8deg]"
                      style={{ border: `1.5px solid ${colors.primary}30` }}
                    />
                    <span style={{ color: colors.primary }}>
                      <SolutionIcon id={solution.id} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1" style={{ color: '#1a0a00' }}>
                    {solution.name}
                  </h3>
                  <p className="text-base font-medium mb-4" style={{ color: colors.primary }}>
                    {solution.tagline}
                  </p>
                  <p className="mb-6 leading-relaxed" style={{ color: '#6B4423' }}>
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((text) => (
                      <li key={text} className="flex items-center gap-3">
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${colors.primary}15` }}
                        >
                          <Check className="h-4 w-4" style={{ color: colors.primary }} />
                        </div>
                        <span className="text-sm" style={{ color: '#3a1a00' }}>{text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="default"
                      className="gap-2 font-semibold text-white"
                      style={{ backgroundColor: colors.primary, border: 'none' }}
                    >
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
                    <Button
                      asChild
                      variant="outline"
                      size="default"
                      className="gap-2"
                      style={{
                        borderColor: `${colors.primary}50`,
                        color: colors.primary,
                        background: `${colors.primary}08`,
                      }}
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

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { value: "10+", label: "Entreprises accompagnées", accent: '#C1440E' },
            { value: String(content.developedSolutions.length), label: "Solutions SaaS", accent: '#D4891A' },
            { value: "98%", label: "Clients satisfaits", accent: '#C1440E' },
            { value: "Plusieurs", label: "Masterclass organisées", accent: '#D4891A' },
            { value: "24/7", label: "Support disponible", accent: '#1B3A6B' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold" style={{ color: stat.accent }}>{stat.value}</p>
              <p className="mt-1 text-sm" style={{ color: '#6B4423' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
