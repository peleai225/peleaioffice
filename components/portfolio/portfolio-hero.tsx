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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] h-[300px] w-[300px] rounded-full bg-accent/[0.04] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm text-accent mb-6">
              <Briefcase className="h-4 w-4" />
              {p.heroBadge}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              {p.heroName}{" "}
              <span className="text-accent">{p.heroNameHighlight}</span>
            </h1>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">{p.heroBio}</p>

            <div className="mt-6 flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{p.heroLocationLine}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span>{p.heroExperienceLine}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25">
                <Link href="/contact">
                  Me contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {p.linkedinButtonUrl.trim() ? (
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-lg border-white/20 text-white hover:bg-white/10">
                  <a href={p.linkedinButtonUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              ) : null}
            </div>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              {content.social.map((s) => (
                <a
                  key={s.platform + s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-white/60 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <SocialPlatformIcon platform={s.platform} className="h-4 w-4" />
                </a>
              ))}
              <a
                href={`mailto:${content.contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-white/60 hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-white/10 p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-primary/50">
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
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent px-4 pb-6 pt-20">
                        <p className="text-center text-xl font-semibold text-white">
                          {p.heroName} {p.heroNameHighlight}
                        </p>
                        <p className="mt-1 text-center text-sm text-white/60">{p.heroSubtitle}</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-accent/20">
                        <span className="text-5xl font-bold text-accent">
                          {p.heroNameHighlight
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 3)
                            .toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xl font-semibold text-white">
                        {p.heroName} {p.heroNameHighlight}
                      </p>
                      <p className="mt-2 text-sm text-white/60 px-2">{p.heroSubtitle}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 rounded-xl bg-white p-3 shadow-xl border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Projets</p>
                    <p className="text-sm font-bold text-foreground">15+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 rounded-xl bg-white p-3 shadow-xl border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mic className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Masterclass</p>
                    <p className="text-sm font-bold text-foreground">Organisées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 50L1440 50L1440 15C1440 15 1200 0 720 0C240 0 0 15 0 15L0 50Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
