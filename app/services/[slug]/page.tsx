import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Arc, ArcList, ArcWatermark, Button, Card, Reveal, Section, SectionHeader, Tilt, Todo } from '@/components/ui'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { WhatsAppIcon } from '@/components/site/icons'
import { JsonLd } from '@/components/site/structured-data'
import { getCase } from '@/content/cases'
import { getService, services } from '@/content/services'
import { contact, site, whatsappUrl } from '@/content/site'
import { getSiteUrl } from '@/lib/site-url'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | PeleAI`, description: service.metaDescription },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = service.cases.map(getCase).filter((c) => c !== undefined)
  const others = services.filter((s) => s.slug !== service.slug)
  const base = getSiteUrl()
  const waMessage = `Bonjour PeleAI, je souhaite parler d’un projet : ${service.title.toLowerCase()}.`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.metaDescription,
          serviceType: service.title,
          url: `${base}/services/${service.slug}`,
          areaServed: [{ '@type': 'Country', name: site.country }],
          provider: { '@type': 'Organization', '@id': `${base}/#organization`, name: site.name, telephone: contact.phoneDisplay },
        }}
      />

      <PageHero
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
        eyebrow={service.title}
        title={service.headline}
        lead={service.intro}
      >
        <Button href={`/contact?objet=${service.slug}`} size="lg" arrow>
          Demander un devis
        </Button>
        <Button href={whatsappUrl(waMessage)} variant="outline" size="lg" icon={<WhatsAppIcon className="size-4" />}>
          En parler sur WhatsApp
        </Button>
      </PageHero>

      {/* Le problème du client */}
      <Section tone="night" aria-labelledby="probleme-titre">
        <ArcWatermark className="-bottom-40 -left-24 w-[560px] text-brand-400" peak={0.09} />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <SectionHeader id="probleme-titre" eyebrow="Vous vous reconnaissez ?" title="Ce qui vous freine aujourd’hui." titleTone="inherit" />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {service.problems.map((p, i) => (
              <li key={p} className="bg-night">
                <Reveal delay={i * 70} className="grid h-full content-start gap-4 p-7">
                  <Arc size={22} className="text-cta" />
                  <p className="text-lead text-white">{p}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Notre réponse */}
      <Section tone="paper" aria-labelledby="solution-titre">
        <div className="grid gap-14">
          <SectionHeader id="solution-titre" eyebrow="Notre réponse" title="Ce que nous mettons en place pour vous." />
          <div className="grid gap-6 md:grid-cols-3">
            {service.solution.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <Tilt>
                  <Card className="grid h-full content-start gap-4">
                    <Arc size={40} className="text-brand" />
                    <h3 className="font-display text-h3 font-semibold text-ink">{s.title}</h3>
                    <p className="text-ink-soft">{s.text}</p>
                  </Card>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Inclus et bénéfices */}
      <Section tone="tint" aria-labelledby="inclus-titre">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="grid content-start gap-8 lg:col-span-7">
            <SectionHeader id="inclus-titre" eyebrow="Ce qui est inclus" title="Concrètement, vous recevez :" />
            <ArcList items={service.included} className="gap-4 sm:grid-cols-2 sm:gap-x-8" />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <Card padding="lg" className="relative isolate grid gap-5 border-0 bg-brand text-white">
              <ArcWatermark className="-right-20 -top-20 w-72 text-white" corner="bl" peak={0.12} />
              <p className="font-display text-label font-medium uppercase text-brand-100">Ce que vous y gagnez</p>
              <ul className="grid gap-4">
                {service.outcomes.map((o) => (
                  <li key={o} className="font-display text-[1.1875rem] font-medium leading-snug text-white">
                    {o}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Déroulement : une vraie séquence */}
      <Section tone="paper" aria-labelledby="deroulement-titre">
        <div className="grid gap-14">
          <SectionHeader id="deroulement-titre" eyebrow="Déroulement" title="Comment se passe votre projet." />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {service.process.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 90} className="draw-line grid gap-4 border-t-2 border-brand-100 pt-6">
                  <span aria-hidden="true" className="font-display text-[3.5rem] font-bold leading-none text-brand-200 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-h3 font-semibold text-ink">
                    <span className="sr-only">Étape {i + 1} : </span>
                    {step.title}
                  </h3>
                  <p className="text-ink-soft">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="text-small text-ink-soft">
            Délais et tarifs précisés dans le devis, après un premier échange gratuit. <Todo>fourchettes de prix en FCFA si vous souhaitez les afficher</Todo>
          </p>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="white" aria-labelledby="cas-titre">
          <div className="grid gap-12">
            <SectionHeader id="cas-titre" eyebrow="Réalisations" title="Ce service, déjà en action." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80} className="h-full">
                  <Tilt>
                    <Card href={`/realisations/${c.slug}`} className="grid h-full content-start gap-3 pr-12">
                      <p className="font-display text-label font-medium uppercase text-ink-soft">
                        {c.client} · {c.sector}
                      </p>
                      <h3 className="font-display text-h3 font-semibold text-brand">{c.title}</h3>
                      <p className="text-small text-ink-soft">{c.summary}</p>
                    </Card>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Faq items={service.faq} />

      <Section tone="paper" space="sm" aria-label="Autres services">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="font-display text-label font-medium uppercase text-ink-soft">Autres services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="font-display font-semibold text-brand underline decoration-brand-200 decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand">
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta
        title={`Parlons de votre projet : ${service.title.toLowerCase()}.`}
        cta={{ label: 'Demander un devis', href: `/contact?objet=${service.slug}` }}
        whatsappMessage={waMessage}
      />
    </>
  )
}
