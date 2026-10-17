import { Section, SectionHeader } from '@/components/ui'
import { JsonLd } from '@/components/site/structured-data'

/** Questions fréquentes : <details> natif (clavier et lecteurs d'écran sans JavaScript) + FAQPage JSON-LD. */
export function Faq({ items, title = 'Vos questions, nos réponses.', tone = 'tint' }: { items: { q: string; a: string }[]; title?: string; tone?: 'tint' | 'paper' }) {
  if (items.length === 0) return null
  return (
    <Section tone={tone} aria-labelledby="faq-titre">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <SectionHeader id="faq-titre" eyebrow="Questions fréquentes" title={title} />
        </div>
        <div className="border-t border-brand-200 lg:col-span-7 lg:col-start-6">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-brand-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-field py-6 font-display text-[1.1875rem] font-semibold text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full text-brand shadow-[inset_0_0_0_1.5px_var(--brand-300)] transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:bg-brand group-open:text-white"
                >
                  <svg viewBox="0 0 20 20" className="size-4">
                    <path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </summary>
              <p className="text-measure pb-7 pr-14 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
        }}
      />
    </Section>
  )
}
