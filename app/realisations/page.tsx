import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge, Button, Reveal, Section } from '@/components/ui'
import { CaseCard, CaseVisual } from '@/components/sections/case-card'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { cases } from '@/content/cases'

export const metadata: Metadata = {
  title: 'Réalisations',
  description:
    'Études de cas PeleAI : MenuPro, laboratoires virtuels UVCI et IUA, sites et boutiques en ligne pour des entreprises de Côte d’Ivoire.',
  alternates: { canonical: '/realisations' },
}

export default function RealisationsPage() {
  const [featured, ...others] = cases
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Réalisations', href: '/realisations' }]}
        eyebrow="Réalisations"
        title="Des projets en ligne, utilisés chaque jour."
        lead="Plateformes, sites et boutiques en ligne : voici ce que nous avons construit avec nos clients, et ce que chaque projet a changé pour eux."
      />

      <Section tone="white" aria-label="Études de cas">
        <div className="grid gap-8">
          {featured && (
            <Reveal>
              <Link
                href={`/realisations/${featured.slug}`}
                className="group grid overflow-hidden rounded-card border border-line bg-paper transition-shadow duration-500 hover:shadow-lift lg:grid-cols-12"
              >
                <div className="curtain relative aspect-square lg:col-span-6 lg:aspect-auto lg:min-h-[540px]">
                  <CaseVisual c={featured} sizes="(min-width: 1024px) 620px, 100vw" className="absolute inset-0" />
                </div>
                <div className="grid content-center gap-6 p-7 sm:p-10 lg:col-span-6 lg:p-14">
                  <p className="font-display text-label font-medium uppercase text-ink-soft">
                    {featured.client} · {featured.sector}
                    {featured.year ? ` · ${featured.year}` : ''}
                  </p>
                  <h2 className="max-w-[18ch] font-display text-h2 font-semibold text-brand">{featured.title}</h2>
                  <p className="text-measure text-ink-soft">{featured.summary}</p>
                  <ul className="flex flex-wrap gap-2" aria-label="Services mobilisés">
                    {featured.services.map((s) => (
                      <li key={s}>
                        <Badge>{s}</Badge>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 font-display font-semibold text-brand">
                    Lire l’étude de cas
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 80} className="h-full">
                <CaseCard c={c} />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <p className="text-ink-soft">Votre projet pourrait être le prochain.</p>
            <Button href="/contact?objet=devis" variant="secondary" arrow>
              Parler de mon projet
            </Button>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  )
}
