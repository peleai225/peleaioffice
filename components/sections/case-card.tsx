import Image from 'next/image'
import { ArcWatermark, Card, Tilt, Todo } from '@/components/ui'
import type { CaseStudy } from '@/content/cases'

/** Visuel d'une étude de cas : l'image réelle si elle existe, sinon une vignette typographique aux arcs du logo. */
export function CaseVisual({ c, sizes, className }: { c: CaseStudy; sizes: string; className?: string }) {
  return (
    <div className={`relative isolate grid place-items-center overflow-hidden bg-tint ${className ?? ''}`}>
      {c.image ? (
        <Image src={c.image.src} alt={c.image.alt} fill sizes={sizes} className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]" />
      ) : (
        <>
          <ArcWatermark className="-bottom-16 -left-10 w-72 text-brand transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-110" peak={0.12} />
          <span className="px-6 text-center font-display text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] font-bold tracking-tight text-brand">{c.client}</span>
        </>
      )}
    </div>
  )
}

export function CaseCard({ c, showTodo = true }: { c: CaseStudy; showTodo?: boolean }) {
  return (
    <Tilt>
      <Card href={`/realisations/${c.slug}`} padding="sm" className="grid h-full content-start gap-5">
        <CaseVisual c={c} sizes="(min-width: 768px) 600px, 100vw" className="aspect-[16/10] rounded-[14px]" />
        <div className="grid gap-3 px-1 pb-1 pr-8">
          <p className="font-display text-label font-medium uppercase text-ink-soft">
            {c.client} · {c.sector}
          </p>
          <h3 className="font-display text-h3 font-semibold text-brand">{c.title}</h3>
          <p className="text-small text-ink-soft">{c.summary}</p>
          {showTodo && c.todo && (
            <span>
              <Todo>{c.todo}</Todo>
            </span>
          )}
        </div>
      </Card>
    </Tilt>
  )
}
