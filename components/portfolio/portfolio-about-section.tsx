"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSiteContent } from "@/components/providers/site-content-provider"

export function PortfolioAboutSection() {
  const { content } = useSiteContent()
  const { aboutSectionTitle, aboutSectionBody } = content.portfolio

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 via-background to-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5 bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.06]">
          <CardHeader className="pb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              Portfolio
            </p>
            <CardTitle className="text-2xl sm:text-3xl text-balance">{aboutSectionTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {aboutSectionBody}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
