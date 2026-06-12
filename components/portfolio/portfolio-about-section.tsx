"use client"

import { useSiteContent } from "@/components/providers/site-content-provider"

export function PortfolioAboutSection() {
  const { content } = useSiteContent()
  const { aboutSectionTitle, aboutSectionBody } = content.portfolio

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-card border border-border/50 p-8 sm:p-12 shadow-sm">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            À propos
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            {aboutSectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {aboutSectionBody}
          </p>
        </div>
      </div>
    </section>
  )
}
