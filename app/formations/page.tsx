import type { Metadata } from 'next'
import Image from 'next/image'
import { ArcList, ArcWatermark, Badge, Button, Card, Reveal, Section, SectionHeader, Tilt, Todo } from '@/components/ds'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { WhatsAppIcon } from '@/components/site/icons'
import { training } from '@/content/home'
import { getService } from '@/content/services'
import { whatsappUrl } from '@/content/site'
import { formats, pastSessions, programs } from '@/content/trainings'

export const metadata: Metadata = {
  title: 'Formations',
  description:
    'Formations à l’intelligence artificielle et aux outils numériques à Abidjan : masterclass ouvertes et ateliers en entreprise, sur vos cas réels.',
  alternates: { canonical: '/formations' },
}

const notify = 'Bonjour PeleAI, je souhaite être prévenu(e) de la prochaine formation.'

export default function FormationsPage() {
  const faq = getService('formation')?.faq ?? []
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Formations', href: '/formations' }]}
        eyebrow="Formations"
        title="Apprendre l’IA en l’utilisant, sur vos propres dossiers."
        lead="Masterclass ouvertes et ateliers en entreprise : peu de théorie, beaucoup de pratique, et des méthodes que chaque participant applique dès le lendemain."
      >
        <Button href="/contact?objet=formation" size="lg" arrow>
          Former mon équipe
        </Button>
        <Button href={whatsappUrl(notify)} variant="outline" size="lg" icon={<WhatsAppIcon className="size-4" />}>
          Être prévenu des sessions
        </Button>
      </PageHero>

      <Section tone="white" aria-labelledby="programmes-titre">
        <div className="grid gap-12">
          <SectionHeader id="programmes-titre" eyebrow="Programmes" title="Trois façons de vous former." />
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <Tilt>
                  <Card className={`grid h-full content-start gap-5 ${i === 0 ? 'border-0 bg-night text-white' : ''}`}>
                    <Badge variant={i === 0 ? 'accent' : 'neutral'}>{p.format}</Badge>
                    <h3 className={`font-display text-h3 font-semibold ${i === 0 ? 'text-white' : 'text-brand'}`}>{p.title}</h3>
                    <p className={i === 0 ? 'text-brand-200' : 'text-ink-soft'}>{p.summary}</p>
                    <ArcList items={p.topics} className={`text-small ${i === 0 ? '[&_svg]:text-cta' : ''}`} />
                    <dl className={`grid gap-2 border-t pt-4 text-small ${i === 0 ? 'border-white/15' : 'border-line'}`}>
                      {[
                        ['Public', p.audience],
                        ['Durée', p.duration],
                        ['Tarif', p.price],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4">
                          <dt className={i === 0 ? 'text-brand-300' : 'text-ink-soft'}>{k}</dt>
                          <dd className="text-right font-semibold">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    {p.todo && (
                      <span>
                        <Todo>{p.todo}</Todo>
                      </span>
                    )}
                  </Card>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="formats-titre">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <figure className="relative lg:col-span-5">
            <div className="curtain relative aspect-[4/5] max-w-md overflow-hidden rounded-card bg-night">
              <Image src={training.trainer.photo} alt={`Portrait de ${training.trainer.name}`} fill sizes="(min-width: 1024px) 450px, 90vw" className="parallax-img object-cover" />
            </div>
            <figcaption className="mt-4 text-small text-ink-soft">
              <span className="font-semibold text-ink">{training.trainer.name}</span>, {training.trainer.role}
            </figcaption>
          </figure>
          <div className="grid gap-10 lg:col-span-6 lg:col-start-7">
            <SectionHeader id="formats-titre" eyebrow="Formats" title="Là où vos équipes en ont besoin." />
            <ul className="grid gap-8">
              {formats.map((f, i) => (
                <li key={f.title}>
                  <Reveal delay={i * 80} className="grid gap-2 border-l-2 border-brand pl-6">
                    <h3 className="font-display text-h3 font-semibold text-ink">{f.title}</h3>
                    <p className="text-ink-soft">{f.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="night" aria-labelledby="calendrier-titre">
        <ArcWatermark className="-bottom-32 -right-24 w-[520px] text-brand-400" corner="tl" peak={0.1} />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <SectionHeader
              id="calendrier-titre"
              eyebrow="Calendrier"
              title="Prochaines sessions."
              titleTone="inherit"
              lead="Les dates sont annoncées sur WhatsApp et sur nos réseaux. Laissez-nous votre numéro pour être prévenu."
            />
          </div>
          <div className="grid content-start gap-6 lg:col-span-6 lg:col-start-7">
            <div className="rounded-card border border-line p-6">
              <p className="font-display text-label font-medium uppercase text-brand-300">À venir</p>
              <p className="mt-3 font-display text-h3 font-semibold">Aucune date publiée pour le moment.</p>
              <p className="mt-3">
                <Todo>dates des prochaines sessions</Todo>
              </p>
            </div>
            <div className="rounded-card border border-line p-6">
              <p className="font-display text-label font-medium uppercase text-brand-300">Sessions passées</p>
              <ul className="mt-3 grid gap-2">
                {pastSessions.map((s) => (
                  <li key={s.date} className="flex flex-wrap justify-between gap-2">
                    <span className="font-semibold">{s.title}</span>
                    <span className="tabular-nums text-brand-200">
                      {s.date} · {s.place}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Button href={whatsappUrl(notify)} icon={<WhatsAppIcon className="size-4" />}>
                Être prévenu sur WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Faq items={faq} />
      <FinalCta
        title="Formons votre équipe."
        text="Dites-nous qui vous voulez former, sur quels sujets, et à quel niveau de départ. Nous vous proposons un programme et un devis."
        cta={{ label: 'Demander un programme', href: '/contact?objet=formation' }}
        whatsappMessage="Bonjour PeleAI, je souhaite organiser une formation pour mon équipe."
      />
    </>
  )
}
