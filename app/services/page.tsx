import type { Metadata } from 'next'
import { ArcList, Button, Heading, Lead, Reveal, Section } from '@/components/ds'
import { FinalCta } from '@/components/sections/home/final-cta'
import { MethodSteps } from '@/components/sections/home/method-steps'
import { PageHero } from '@/components/sections/page-hero'
import { services } from '@/content/services'
import { primaryCta } from '@/content/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Sites internet, solutions IA, création de contenu, formation et transformation digitale : les cinq services de PeleAI pour les PME et institutions d’Afrique francophone.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services', href: '/services' }]}
        eyebrow="Services"
        title="Cinq services, un seul objectif : faire avancer votre entreprise."
        lead="Chaque service peut se prendre seul. Combinés, ils couvrent tout le chemin : être visible, communiquer régulièrement, former vos équipes et automatiser ce qui peut l’être."
      >
        <Button href={primaryCta.href} size="lg" arrow>
          {primaryCta.label}
        </Button>
      </PageHero>

      <Section tone="white" aria-label="Détail des services">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <nav aria-label="Aller à un service" className="hidden lg:col-span-3 lg:block">
            <ul className="sticky top-28 grid gap-1 border-l-2 border-brand-100">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="-ml-0.5 block border-l-2 border-transparent py-2 pl-5 font-display font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid lg:col-span-9">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                aria-labelledby={`${s.slug}-titre`}
                className="grid scroll-mt-28 gap-8 border-t border-line py-14 first:border-t-0 first:pt-0 last:pb-0"
              >
                <Reveal className="grid gap-5">
                  <p className="font-display text-label font-medium uppercase text-ink-soft">{s.deliverables.join(' · ')}</p>
                  <Heading id={`${s.slug}-titre`} className="max-w-[20ch]">
                    {s.title}
                  </Heading>
                  <Lead>{s.promise}</Lead>
                </Reveal>
                <Reveal delay={80} className="grid gap-8 md:grid-cols-2">
                  <ArcList items={s.included.slice(0, 4)} />
                  <ArcList items={s.included.slice(4, 8)} />
                </Reveal>
                <div className="flex flex-wrap gap-3">
                  <Button href={`/services/${s.slug}`} variant={i % 2 === 0 ? 'secondary' : 'outline'} arrow>
                    Découvrir : {s.title.toLowerCase()}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <MethodSteps />
      <FinalCta title="Vous ne savez pas par quel service commencer ?" text="Racontez-nous votre situation. Nous vous dirons honnêtement ce qui aura le plus d’impact, même si ce n’est qu’une petite étape." />
    </>
  )
}
