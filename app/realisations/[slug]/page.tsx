import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Arc, ArcList, Button, Heading, Reveal, Section, Todo } from '@/components/ui'
import { BrowserFrame, CaseVisual } from '@/components/sections/case-card'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@/components/site/structured-data'
import { cases, getCase } from '@/content/cases'
import { getService } from '@/content/services'
import { getSiteUrl } from '@/lib/site-url'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) return {}
  return {
    title: `${c.client} : étude de cas`,
    description: c.summary,
    alternates: { canonical: `/realisations/${c.slug}` },
    openGraph: c.image ? { images: [{ url: c.image.src, alt: c.image.alt }] } : undefined,
  }
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-line pt-4">
      <dt className="font-display text-label font-medium uppercase text-ink-soft">{label}</dt>
      <dd className="text-ink">{children}</dd>
    </div>
  )
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) notFound()

  const index = cases.findIndex((x) => x.slug === c.slug)
  const next = cases[(index + 1) % cases.length]
  const linkedServices = c.serviceSlugs.map(getService).filter((s) => s !== undefined)
  const base = getSiteUrl()

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${c.client} : ${c.title}`,
          description: c.summary,
          url: `${base}/realisations/${c.slug}`,
          creator: { '@type': 'Organization', '@id': `${base}/#organization`, name: 'PeleAI' },
          ...(c.image ? { image: `${base}${c.image.src}` } : {}),
        }}
      />

      <PageHero
        crumbs={[
          { label: 'Réalisations', href: '/realisations' },
          { label: c.client, href: `/realisations/${c.slug}` },
        ]}
        eyebrow={`${c.client} · ${c.sector}`}
        title={c.title}
        lead={c.summary}
      >
        {c.url && (
          <Button href={c.url} variant="outline" size="lg">
            Voir le projet en ligne
          </Button>
        )}
      </PageHero>

      <Section tone="white" space="none" className="pb-4" aria-label="Visuel du projet">
        {c.screenshot ? (
          <div className="rise mx-auto max-w-[1100px]" style={{ '--d': '0.5s' } as React.CSSProperties}>
            <BrowserFrame shot={c.screenshot} url={c.url} sizes="(min-width: 1180px) 1100px, 100vw" priority />
          </div>
        ) : (
          <div className="curtain overflow-hidden rounded-card">
            <CaseVisual c={c} sizes="(min-width: 1280px) 1240px, 100vw" className="aspect-[16/9] max-h-[640px] w-full" />
          </div>
        )}
      </Section>

      <Section tone="white" aria-labelledby="histoire-titre">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-6">
          <aside className="lg:col-span-4">
            <dl className="grid gap-5 lg:sticky lg:top-28">
              <Fact label="Client">
                {c.logo ? (
                  <Image src={c.logo.src} alt={c.client} width={c.logo.width} height={c.logo.height} sizes="160px" className="mt-1 h-10 w-auto" />
                ) : (
                  c.client
                )}
              </Fact>
              <Fact label="Secteur">{c.sector}</Fact>
              {c.year && <Fact label="Année">{c.year}</Fact>}
              <Fact label="Services">
                <ul className="grid gap-1">
                  {linkedServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-brand underline decoration-brand-200 underline-offset-4 hover:decoration-brand">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Fact>
              {c.url && (
                <Fact label="En ligne">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-brand underline decoration-brand-200 underline-offset-4 hover:decoration-brand">
                    {c.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </Fact>
              )}
            </dl>
          </aside>

          <div className="grid gap-16 lg:col-span-7 lg:col-start-6">
            <Reveal className="grid gap-4">
              <h2 id="histoire-titre" className="font-display text-label font-medium uppercase text-ink-soft">
                Le contexte
              </h2>
              <p className="text-measure font-display text-[clamp(1.375rem,1.15rem+0.9vw,1.875rem)] font-medium leading-snug tracking-tight text-ink">
                {c.context}
              </p>
            </Reveal>
            <Reveal className="grid gap-4">
              <h2 className="font-display text-label font-medium uppercase text-ink-soft">Le défi</h2>
              <p className="text-measure text-lead text-ink">{c.challenge}</p>
            </Reveal>
            <Reveal className="grid gap-5">
              <h2 className="font-display text-label font-medium uppercase text-ink-soft">Ce que nous avons fait</h2>
              <ArcList items={c.solution} className="text-lead" />
            </Reveal>
            <Reveal className="relative isolate grid gap-5 overflow-hidden rounded-card bg-night p-8 text-white sm:p-10">
              <Arc size={140} corner="bl" className="absolute -right-6 -top-6 -z-10 text-brand-800" />
              <h2 className="font-display text-label font-medium uppercase text-brand-300">Résultats</h2>
              {c.results.length > 0 && (
                <ul className="grid gap-3">
                  {c.results.map((r) => (
                    <li key={r} className="font-display text-[1.375rem] font-semibold leading-snug">
                      {r}
                    </li>
                  ))}
                </ul>
              )}
              {c.todo && (
                <span>
                  <Todo>{c.todo}</Todo>
                </span>
              )}
            </Reveal>
          </div>
        </div>
      </Section>

      {c.gallery && c.gallery.length > 0 && (
        <Section tone="tint" aria-labelledby="galerie-titre">
          <div className="grid gap-10">
            <Heading id="galerie-titre">Quelques visuels du projet.</Heading>
            <ul className="grid gap-6 sm:grid-cols-3">
              {c.gallery.map((g, i) => (
                <li key={g.src}>
                  <Reveal delay={i * 90} className="overflow-hidden rounded-card">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={g.width}
                      height={g.height}
                      sizes="(min-width: 640px) 400px, 100vw"
                      className="h-auto w-full transition-transform duration-700 ease-[var(--ease-out)] hover:scale-[1.04]"
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {next && next.slug !== c.slug && (
        <Section tone="paper" space="sm" aria-label="Étude de cas suivante">
          <Link href={`/realisations/${next.slug}`} className="group grid gap-3 rounded-card py-6">
            <span className="font-display text-label font-medium uppercase text-ink-soft">Étude de cas suivante</span>
            <span className="flex items-center justify-between gap-6">
              <span className="font-display text-h2 font-semibold text-brand transition-colors group-hover:text-brand-700">{next.client}</span>
              <span
                aria-hidden="true"
                className="grid size-14 shrink-0 place-items-center rounded-full bg-cta text-night transition-transform duration-300 group-hover:translate-x-2"
              >
                <svg viewBox="0 0 20 20" className="size-6">
                  <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </span>
          </Link>
        </Section>
      )}

      <FinalCta title="Un projet similaire en tête ?" />
    </>
  )
}
