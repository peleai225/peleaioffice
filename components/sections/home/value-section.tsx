import { Arc, Eyebrow, Heading, Reveal, Section } from '@/components/ds'
import { valuePoints } from '@/content/home'

/** Proposition de valeur : une colonne de titre, une colonne d'engagements. */
export function ValueSection() {
  return (
    <Section tone="paper" aria-labelledby="valeur-titre">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="grid content-start gap-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <Eyebrow>Notre façon de travailler</Eyebrow>
          <Heading id="valeur-titre" className="max-w-[16ch]">
            Le digital au service de votre activité, sans jargon.
          </Heading>
        </div>
        <ol className="grid gap-10 lg:col-span-6 lg:col-start-7">
          {valuePoints.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 80} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-5">
                <Arc size={30} className="mt-1 text-brand" />
                <div className="grid gap-2">
                  <h3 className="font-display text-h3 font-semibold text-ink">{p.title}</h3>
                  <p className="text-measure text-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
