import { Reveal, Section, SectionHeader } from '@/components/ui'
import { method } from '@/content/home'

/** Méthode : une vraie séquence, donc numérotée. */
export function MethodSteps() {
  return (
    <Section tone="paper" aria-labelledby="methode-titre">
      <div className="grid gap-14">
        <SectionHeader
          id="methode-titre"
          eyebrow="Méthode"
          title="Quatre étapes, et vous savez toujours où en est votre projet."
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {method.map((step, i) => (
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
      </div>
    </Section>
  )
}
