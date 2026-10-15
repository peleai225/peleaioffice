import Image from 'next/image'
import { ArcWatermark, Badge, Button, Card, Reveal, Section, SectionHeader, Tilt, Todo } from '@/components/ds'
import { cases } from '@/content/cases'

/** Réalisations : une étude mise en avant en grand, deux plus courtes. */
export function FeaturedCases() {
  const [featured, ...others] = cases
  if (!featured) return null

  return (
    <Section tone="white" aria-labelledby="realisations-titre">
      <div className="grid gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader id="realisations-titre" eyebrow="Réalisations" title="Des projets en ligne, utilisés chaque jour." />
          <Button href="/realisations" variant="link">
            Toutes les réalisations
          </Button>
        </div>

        <Reveal>
          <article className="grid overflow-hidden rounded-card border border-line bg-paper lg:grid-cols-12">
            {featured.image && (
              <div className="curtain relative aspect-square overflow-hidden lg:col-span-6 lg:aspect-auto lg:min-h-[520px]">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="parallax-img object-cover"
                />
              </div>
            )}
            <div className="grid content-center gap-6 p-7 sm:p-10 lg:col-span-6 lg:p-14">
              <p className="font-display text-label font-medium uppercase text-ink-soft">
                {featured.client} · {featured.sector}
              </p>
              <h3 className="max-w-[18ch] font-display text-h2 font-semibold text-brand">{featured.title}</h3>
              <p className="text-measure text-ink-soft">{featured.summary}</p>
              <ul className="flex flex-wrap gap-2" aria-label="Services mobilisés">
                {featured.services.map((s) => (
                  <li key={s}>
                    <Badge>{s}</Badge>
                  </li>
                ))}
              </ul>
              {featured.todo && (
                <span>
                  <Todo>{featured.todo}</Todo>
                </span>
              )}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                <Button href={`/realisations/${featured.slug}`} variant="secondary" arrow>
                  Lire l’étude de cas
                </Button>
                {featured.url && (
                  <Button href={featured.url} variant="link">
                    Voir {featured.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </Button>
                )}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Tilt>
              <Card href={`/realisations/${c.slug}`} padding="sm" className="grid h-full content-start gap-5">
                <div className="relative isolate grid aspect-[16/9] place-items-center overflow-hidden rounded-[14px] bg-tint">
                  {c.image ? (
                    <Image src={c.image.src} alt={c.image.alt} width={220} height={220} className="h-3/4 w-auto object-contain" />
                  ) : (
                    <>
                      <ArcWatermark className="-bottom-16 -left-10 w-64 text-brand" peak={0.12} />
                      <span className="font-display text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] font-bold tracking-tight text-brand">
                        {c.client}
                      </span>
                    </>
                  )}
                </div>
                <div className="grid gap-3 px-1 pb-1 pr-8">
                  <p className="font-display text-label font-medium uppercase text-ink-soft">
                    {c.client} · {c.sector}
                  </p>
                  <h3 className="font-display text-h3 font-semibold text-brand">{c.title}</h3>
                  <p className="text-small text-ink-soft">{c.summary}</p>
                  {c.todo && (
                    <span>
                      <Todo>{c.todo}</Todo>
                    </span>
                  )}
                </div>
              </Card>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

