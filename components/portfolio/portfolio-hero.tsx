"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Award,
  Mic,
  MapPin,
  Calendar,
  Linkedin,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/components/providers/site-content-provider"
import { SocialPlatformIcon } from "@/components/site/social-icons"

export function PortfolioHero() {
  const { content } = useSiteContent()
  const p = content.portfolio
  const portrait = p.heroPortraitUrl?.trim()
  const portraitAlt = `Portrait professionnel de ${p.heroName} ${p.heroNameHighlight}, fondateur de PeleAI`

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <Briefcase className="h-4 w-4" />
              {p.heroBadge}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {p.heroName}{" "}
              <span className="text-primary">{p.heroNameHighlight}</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">{p.heroBio}</p>

            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{p.heroLocationLine}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{p.heroExperienceLine}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Me contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {p.linkedinButtonUrl.trim() ? (
                <Button asChild variant="outline" size="lg">
                  <a href={p.linkedinButtonUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              ) : null}
            </div>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              {content.social.map((s) => (
                <a
                  key={s.platform + s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <SocialPlatformIcon platform={s.platform} className="h-5 w-5" />
                </a>
              ))}
              <a
                href={`mailto:${content.contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-muted">
                  {portrait ? (
                    <>
                      <Image
                        src={portrait}
                        alt={portraitAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 28rem"
                        priority
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent px-4 pb-6 pt-20">
                        <p className="text-center text-xl font-semibold text-foreground">
                          {p.heroName} {p.heroNameHighlight}
                        </p>
                        <p className="mt-1 text-center text-sm text-muted-foreground">{p.heroSubtitle}</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                        <span className="text-5xl font-bold text-primary">
                          {p.heroNameHighlight
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 3)
                            .toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xl font-semibold text-foreground">
                        {p.heroName} {p.heroNameHighlight}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground px-2">{p.heroSubtitle}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute -right-4 top-1/4 rounded-lg bg-background p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Projets réalisés</p>
                    <p className="text-sm font-semibold text-foreground">15+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 rounded-lg bg-background p-3 shadow-lg border border-border max-w-[11rem]">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
                    <Mic className="h-4 w-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Masterclass</p>
                    <p className="text-sm font-semibold text-foreground leading-tight">Organisées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
