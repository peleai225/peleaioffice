import type { Metadata } from 'next'
import Image from 'next/image'
import { Arc, ArcWatermark, Button, Reveal, Section, SectionHeader, SignalWaves, Todo } from '@/components/ui'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { anchoring, founder, mission, timeline, values } from '@/content/about'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'PeleAI, agence de transformation digitale à Abidjan : notre mission, nos valeurs, notre fondateur Pelecho Junior Kone et notre ancrage ivoirien.',
  alternates: { canonical: '/a-propos' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'À propos', href: '/a-propos' }]}
        eyebrow={`${site.name} · ${site.slogan}`}
        title={mission.title}
        lead={mission.text}
      />

      {/* Valeurs */}
      <Section tone="night" aria-labelledby="valeurs-titre">
        <ArcWatermark className="-right-24 -top-24 w-[560px] text-brand-400" corner="bl" peak={0.1} />
        <div className="grid gap-14">
          <SectionHeader id="valeurs-titre" eyebrow="Nos valeurs" title="Ce sur quoi nous ne transigeons pas." titleTone="inherit" />
          <ul className="grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="bg-night">
                <Reveal delay={i * 80} className="grid h-full content-start gap-4 p-8">
                  <Arc size={32} className="text-cta" />
                  <h3 className="font-display text-h3 font-semibold text-white">{v.title}</h3>
                  <p className="text-brand-200">{v.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Équipe */}
      <Section tone="paper" aria-labelledby="equipe-titre">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <div className="curtain relative aspect-[4/5] max-w-md overflow-hidden rounded-card bg-night">
              <Image src={founder.photo} alt={`Portrait de ${founder.name}`} fill sizes="(min-width: 1024px) 450px, 90vw" className="parallax-img object-cover" />
            </div>
          </div>
          <div className="grid gap-6 lg:col-span-6 lg:col-start-7">
            <SectionHeader id="equipe-titre" eyebrow="L’équipe" title={founder.name} lead={founder.role} />
            {founder.bio.map((p) => (
              <p key={p} className="text-measure text-ink">
                {p}
              </p>
            ))}
            <p className="text-small text-ink-soft">Langues : {founder.languages}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={founder.linkedin} variant="outline">
                Voir le profil LinkedIn
              </Button>
              <Todo>autres membres de l’équipe et partenaires réguliers</Todo>
            </div>
          </div>
        </div>
      </Section>

      {/* Histoire : une vraie chronologie */}
      <Section tone="tint" aria-labelledby="histoire-titre">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <SectionHeader id="histoire-titre" eyebrow="Notre histoire" title="Quelques repères." />
          </div>
          <ol className="relative grid gap-10 border-l-2 border-brand-200 pl-8 lg:col-span-7 lg:col-start-6">
            {timeline.map((t, i) => (
              <li key={t.title}>
                <Reveal delay={i * 80} className="relative grid gap-2">
                  <span aria-hidden="true" className="absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-tint bg-brand" />
                  <span className="font-display text-label font-medium uppercase text-brand">{t.year}</span>
                  <h3 className="font-display text-h3 font-semibold text-ink">{t.title}</h3>
                  <p className="text-ink-soft">{t.text}</p>
                  {t.todo && (
                    <span>
                      <Todo>{t.todo}</Todo>
                    </span>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Ancrage */}
      <Section tone="paper" aria-labelledby="ancrage-titre">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="grid gap-6 lg:col-span-7">
            <SectionHeader id="ancrage-titre" eyebrow="Ancrage" title={anchoring.title} lead={anchoring.text} />
          </div>
          <div className="mx-auto w-full max-w-[360px] lg:col-span-4 lg:col-start-9">
            <SignalWaves />
          </div>
        </div>
      </Section>

      <FinalCta title="Travaillons ensemble." />
    </>
  )
}
