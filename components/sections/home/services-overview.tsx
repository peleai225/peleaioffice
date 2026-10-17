import Link from 'next/link'
import { Arc, Button, Reveal, Section, SectionHeader } from '@/components/ui'
import { services } from '@/content/services'

/** Services en liste éditoriale : une ligne par service, pas de grille de cartes identiques. */
export function ServicesOverview() {
  return (
    <Section tone="tint" aria-labelledby="services-titre">
      <div className="grid gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            id="services-titre"
            eyebrow="Services"
            title="Cinq façons de faire avancer votre entreprise."
            lead="Chaque service peut se prendre seul. Ensemble, ils couvrent tout le chemin, de la visibilité à l'automatisation."
          />
          <Button href="/services" variant="link">
            Tous les services en détail
          </Button>
        </div>
        <ul className="border-t border-brand-200">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-brand-200">
              <Reveal delay={i * 60}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative isolate grid items-center gap-x-8 gap-y-3 overflow-hidden rounded-card px-1 py-7 transition-[padding] duration-500 ease-[var(--ease-out)] before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-brand before:transition-transform before:duration-500 before:ease-[var(--ease-out)] hover:before:scale-x-100 focus-visible:before:scale-x-100 sm:px-4 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)_auto] md:py-8 md:hover:px-8"
                >
                  <h3 className="flex items-center font-display text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-semibold leading-tight tracking-tight text-brand transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    <Arc
                      size={22}
                      className="mr-0 w-0 opacity-0 transition-[width,opacity,margin] duration-300 group-hover:mr-3 group-hover:w-[22px] group-hover:opacity-100 group-focus-visible:mr-3 group-focus-visible:w-[22px] group-focus-visible:opacity-100"
                    />
                    {s.title}
                  </h3>
                  <div className="grid gap-3">
                    <p className="text-ink transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">{s.promise}</p>
                    <p className="text-small text-ink-soft transition-colors duration-300 group-hover:text-brand-100 group-focus-visible:text-brand-100">{s.deliverables.join(' · ')}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden size-12 place-items-center rounded-full text-brand shadow-[inset_0_0_0_1.5px_var(--brand-300)] transition-[background-color,color,transform] duration-300 group-hover:translate-x-1 group-hover:bg-cta group-hover:text-night group-hover:shadow-none md:grid"
                  >
                    <svg viewBox="0 0 20 20" className="size-5">
                      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
