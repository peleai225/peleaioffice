import { Arc, Section, SectionHeader, Todo } from '@/components/ds'
import { testimonials } from '@/content/home'

/** Témoignages : une grande citation à la fois. Aucun témoignage n'est inventé. */
export function TestimonialsSection() {
  const [first] = testimonials

  return (
    <Section tone="tint" aria-labelledby="temoignages-titre">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <SectionHeader id="temoignages-titre" eyebrow="Témoignages" title="Ce qu’en disent nos clients." />
        </div>
        <figure className="relative grid gap-8 lg:col-span-7 lg:col-start-6">
          <Arc size={56} className="text-brand" />
          {first ? (
            <>
              <blockquote className="font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.25rem)] font-medium leading-snug tracking-tight text-ink">
                « {first.quote} »
              </blockquote>
              <figcaption className="text-ink-soft">
                <span className="font-semibold text-ink">{first.name}</span>, {first.role} · {first.company}
              </figcaption>
            </>
          ) : (
            <div className="grid gap-4">
              <p className="font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.25rem)] font-medium leading-snug tracking-tight text-ink-soft">
                Emplacement réservé à la citation d’un client, sur deux ou trois lignes.
              </p>
              <span>
                <Todo>2 à 4 témoignages réels avec nom, poste, entreprise et accord de publication</Todo>
              </span>
            </div>
          )}
        </figure>
      </div>
    </Section>
  )
}
