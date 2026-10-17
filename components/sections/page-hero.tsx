import type { CSSProperties, ReactNode } from 'react'
import { ArcWatermark, Eyebrow, Heading, HeroTitleWords, Lead, Section } from '@/components/ui'
import { Breadcrumbs, type Crumb } from '@/components/site/structured-data'

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties

/**
 * En-tête des pages intérieures : fil d'Ariane, étiquette, H1 qui monte mot par mot,
 * introduction et actions. Les arcs du logo se déploient depuis le coin haut droit.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  aside,
}: {
  eyebrow?: string
  title: string
  lead?: ReactNode
  crumbs: Crumb[]
  children?: ReactNode
  aside?: ReactNode
}) {
  return (
    <Section tone="paper" space="none" aria-labelledby="page-titre" className="pb-16 pt-6 sm:pt-10 lg:pb-24 lg:pt-12">
      <ArcWatermark className="bloom-in -right-24 -top-24 w-[min(80vw,620px)] text-brand" corner="bl" count={4} peak={0.08} />
      <div className="grid gap-10">
        <div className="rise">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="grid gap-6 lg:col-span-8">
            {eyebrow && <Eyebrow className="rise">{eyebrow}</Eyebrow>}
            <Heading level={1} id="page-titre" split={false} className="max-w-[18ch]">
              <HeroTitleWords text={title} />
            </Heading>
            {lead && (
              <div className="rise" style={delay(0.45)}>
                <Lead className="max-w-[58ch]">{lead}</Lead>
              </div>
            )}
            {children && (
              <div className="rise flex flex-wrap items-center gap-3 pt-1" style={delay(0.6)}>
                {children}
              </div>
            )}
          </div>
          {aside && (
            <div className="rise lg:col-span-4" style={delay(0.7)}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
