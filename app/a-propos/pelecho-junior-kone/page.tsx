import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Arc, ArcList, ArcWatermark, Button, Reveal, Section, SectionHeader, Todo } from '@/components/ui'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@/components/site/structured-data'
import { posts } from '@/content/blog'
import { founder } from '@/content/founder'
import { founderSchema, schemaIds } from '@/lib/schema'

const title = `${founder.name} — Fondateur de PeleAI, Abidjan`
const description = `${founder.name} (${founder.alternateNames[0]}) est le fondateur de PeleAI à Abidjan : consultant en transformation numérique, développement web, intelligence artificielle et formation aux outils numériques.`

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `/a-propos/${founder.slug}` },
  openGraph: {
    type: 'profile',
    title,
    description,
    firstName: founder.givenName,
    lastName: founder.familyName,
    images: [{ url: founder.photo, width: founder.photoSize.width, height: founder.photoSize.height, alt: `Portrait de ${founder.name}` }],
  },
}

/** Page de profil du fondateur : la page que Google et les IA doivent associer à son nom. */
export default function FounderPage() {
  const ids = schemaIds()
  const articles = posts.filter((p) => p.author === founder.name)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${ids.founderUrl}#page`,
          url: ids.founderUrl,
          name: title,
          inLanguage: 'fr',
          isPartOf: { '@id': ids.website },
          mainEntity: founderSchema(),
        }}
      />

      <PageHero
        crumbs={[
          { label: 'À propos', href: '/a-propos' },
          { label: founder.name, href: `/a-propos/${founder.slug}` },
        ]}
        eyebrow={founder.role}
        title={founder.name}
        lead={founder.summary}
        aside={
          <div className="curtain relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-card bg-night">
            <Image src={founder.photo} alt={`Portrait de ${founder.name}`} fill priority sizes="320px" className="object-cover" />
          </div>
        }
      >
        <Button href="/contact?objet=devis" size="lg" arrow>
          Travailler avec lui
        </Button>
        <Button href={founder.linkedin} variant="outline" size="lg">
          LinkedIn
        </Button>
      </PageHero>

      <Section tone="white" aria-labelledby="bio-titre">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <aside className="lg:col-span-4">
            <dl className="grid gap-5 lg:sticky lg:top-28">
              {[
                ['Fonction', founder.jobTitle],
                ['Basé à', founder.location],
                ['Langues', founder.languages],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-t border-line pt-4">
                  <dt className="font-display text-label font-medium uppercase text-ink-soft">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
              <div className="grid gap-1 border-t border-line pt-4">
                <dt className="font-display text-label font-medium uppercase text-ink-soft">Aussi connu comme</dt>
                <dd className="text-ink">{founder.alternateNames.slice(0, 3).join(' · ')}</dd>
              </div>
            </dl>
          </aside>
          <div className="grid gap-6 lg:col-span-7 lg:col-start-6">
            <h2 id="bio-titre" className="font-display text-label font-medium uppercase text-ink-soft">
              Biographie
            </h2>
            {founder.bio.map((p, i) => (
              <Reveal key={i}>
                <p className={i === 0 ? 'text-measure font-display text-[clamp(1.25rem,1.1rem+0.6vw,1.625rem)] font-medium leading-snug text-ink' : 'text-measure text-lead text-ink'}>
                  {p}
                </p>
              </Reveal>
            ))}
            <span>
              <Todo>{founder.todo}</Todo>
            </span>
          </div>
        </div>
      </Section>

      <Section tone="night" aria-labelledby="expertise-titre">
        <ArcWatermark className="-right-24 -top-24 w-[520px] text-brand-400" corner="bl" peak={0.1} />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <SectionHeader id="expertise-titre" eyebrow="Domaines d’expertise" title="Là où il intervient." titleTone="inherit" />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {founder.expertise.map((e, i) => (
              <li key={e} className="bg-night">
                <Reveal delay={i * 60} className="flex items-center gap-4 p-6">
                  <Arc size={20} className="text-cta" />
                  <span className="font-display text-[1.1875rem] font-medium text-white">{e}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="projets-titre">
        <div className="grid gap-12">
          <SectionHeader id="projets-titre" eyebrow="Projets" title="Ce qu’il a construit." />
          <ul className="grid gap-6 md:grid-cols-3">
            {founder.highlights.map((h, i) => (
              <li key={h.title}>
                <Reveal delay={i * 80} className="h-full">
                  <Link
                    href={h.href}
                    className="group relative grid h-full content-start gap-3 overflow-hidden rounded-card border border-line bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <h3 className="font-display text-h3 font-semibold text-brand">{h.title}</h3>
                    <p className="text-ink-soft">{h.text}</p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="tint" aria-labelledby="parcours-titre">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <SectionHeader id="parcours-titre" eyebrow="Parcours" title="Expériences." />
          </div>
          <ol className="grid gap-8 border-l-2 border-brand-200 pl-8 lg:col-span-7 lg:col-start-6">
            {founder.career.map((c) => (
              <li key={c.org} className="relative grid gap-1">
                <span aria-hidden="true" className="absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-tint bg-brand" />
                <span className="font-display text-label font-medium uppercase text-brand">{c.period}</span>
                <h3 className="font-display text-h3 font-semibold text-ink">
                  {c.role} · {c.org}
                </h3>
                <p className="text-ink-soft">{c.text}</p>
                {c.todo && (
                  <span>
                    <Todo>{c.todo}</Todo>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="formation-titre">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid content-start gap-8">
            <SectionHeader id="formation-titre" eyebrow="Formation" title="Diplômes." />
            <ul className="grid gap-4">
              {founder.education.map((e) => (
                <li key={e.degree}>
                  <Reveal className="grid gap-2 rounded-card border border-line bg-white p-6">
                    <span className="font-display text-label font-medium uppercase text-brand">{e.year}</span>
                    <h3 className="font-display text-h3 font-semibold text-ink">
                      {e.degree}
                      {!e.field.startsWith('[') && ` en ${e.field.charAt(0).toLowerCase()}${e.field.slice(1)}`}
                    </h3>
                    {!e.school.startsWith('[') && <p className="text-ink-soft">{e.school}</p>}
                    {e.note && <p className="text-small text-ink-soft">{e.note}</p>}
                    {e.todo && (
                      <span>
                        <Todo>{e.todo}</Todo>
                      </span>
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid content-start gap-8">
            <SectionHeader eyebrow="Distinctions" title="Prix et certificats." />
            <ul className="grid gap-4">
              {founder.awards.map((a) => (
                <li key={a.title}>
                  <Reveal className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 rounded-card border border-line bg-white p-6">
                    <Arc size={26} className="mt-1 text-cta" />
                    <div className="grid gap-2">
                      <span className="font-display text-label font-medium uppercase text-brand">{a.year}</span>
                      <h3 className="font-display text-[1.1875rem] font-semibold leading-snug text-ink">{a.title}</h3>
                      {a.detail && <p className="text-small text-ink-soft">{a.detail}</p>}
                      {a.todo && (
                        <span>
                          <Todo>{a.todo}</Todo>
                        </span>
                      )}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white" aria-labelledby="ecrits-titre">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="grid content-start gap-6 lg:col-span-5">
            <SectionHeader id="ecrits-titre" eyebrow="Articles" title="Ses derniers articles." />
            <ArcList
              items={articles.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="font-semibold text-brand underline decoration-brand-200 underline-offset-4 hover:decoration-brand">
                  {a.title}
                </Link>
              ))}
            />
          </div>
          <div className="grid content-start gap-6 lg:col-span-6 lg:col-start-7">
            <SectionHeader eyebrow="En ligne" title="Le retrouver ailleurs." />
            <ul className="grid gap-3">
              {founder.profiles.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="flex items-center justify-between gap-4 rounded-card border border-line p-5 transition-colors hover:border-brand-300"
                  >
                    <span className="font-display font-semibold text-ink">{p.label}</span>
                    <span className="text-small text-brand">
                      Ouvrir<span className="sr-only"> (nouvel onglet)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCta title={`Échanger avec ${founder.givenName.split(' ')[0]}.`} text="Un projet de site, d’outil IA ou de formation ? Décrivez-le en quelques lignes : il vous répond directement." />
    </>
  )
}
