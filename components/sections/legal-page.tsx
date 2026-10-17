import { Section, Todo } from '@/components/ui'
import { PageHero } from '@/components/sections/page-hero'
import type { LegalSection } from '@/content/legal'

export function LegalPage({
  title,
  href,
  lead,
  sections,
  updated,
}: {
  title: string
  href: string
  lead: string
  sections: LegalSection[]
  updated: string
}) {
  return (
    <>
      <PageHero crumbs={[{ label: title, href }]} eyebrow="Informations légales" title={title} lead={lead} />
      <Section tone="white" aria-label={title}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <nav aria-label="Sommaire" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 grid gap-2 text-small">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#section-${i + 1}`} className="text-ink-soft transition-colors hover:text-brand">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid max-w-[68ch] gap-12 lg:col-span-8 lg:col-start-5">
            {sections.map((s, i) => (
              <section key={s.title} id={`section-${i + 1}`} aria-labelledby={`section-${i + 1}-titre`} className="grid scroll-mt-28 gap-4">
                <h2 id={`section-${i + 1}-titre`} className="font-display text-h3 font-semibold text-brand">
                  {s.title}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="text-ink">
                    {p}
                  </p>
                ))}
                {s.todo && (
                  <ul className="flex flex-wrap gap-2">
                    {s.todo.map((t) => (
                      <li key={t}>
                        <Todo>{t}</Todo>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <p className="border-t border-line pt-6 text-small text-ink-soft">Dernière mise à jour : {updated}</p>
          </div>
        </div>
      </Section>
    </>
  )
}
