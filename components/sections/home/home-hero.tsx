import type { CSSProperties } from 'react'
import { Button, Eyebrow, Heading, HeroTitleWords, Lead, Magnetic, Section } from '@/components/ds'
import { hero } from '@/content/home'
import { primaryCta, site } from '@/content/site'
import { HeroWaves } from './hero-waves'

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties

/**
 * Hero : le monogramme se construit, son arc s'illumine, les ondes émettent ;
 * le titre monte mot par mot. Au défilement, la composition s'éloigne.
 */
export function HomeHero() {
  return (
    <Section tone="paper" space="none" aria-labelledby="hero-titre" className="pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="grid gap-7 lg:col-span-7">
          <Eyebrow className="rise">{hero.eyebrow}</Eyebrow>
          <Heading level={1} size="display" id="hero-titre" split={false} className="max-w-[12ch]">
            <HeroTitleWords text={hero.title} />
          </Heading>
          <div className="rise" style={delay(0.55)}>
            <Lead className="max-w-[46ch]">{hero.lead}</Lead>
          </div>
          <div className="rise flex flex-wrap items-center gap-3 pt-1" style={delay(0.7)}>
            <Magnetic>
              <Button href={primaryCta.href} size="lg" arrow>
                {primaryCta.label}
              </Button>
            </Magnetic>
            <Button href={hero.secondaryCta.href} variant="outline" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="rise text-small text-ink-soft" style={delay(0.85)}>
            {site.responseTime} · Devis gratuit
          </p>
        </div>
        <HeroWaves className="hero-scroll-art ml-auto w-full max-w-[280px] sm:mx-auto sm:max-w-[420px] lg:col-span-5 lg:mr-0 lg:max-w-[500px] lg:translate-x-6" />
      </div>
    </Section>
  )
}
