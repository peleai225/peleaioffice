import { ArcGauge, ArcWatermark, Section, Todo } from '@/components/ds'
import { clients, stats } from '@/content/home'

/** Bande de preuve : chiffres et clients, juste sous le hero. */
export function ProofBand() {
  return (
    <Section tone="night" space="sm" aria-label="PeleAI en chiffres et en clients">
      <ArcWatermark className="-bottom-40 -right-24 w-[520px] text-brand-400" corner="tl" peak={0.09} />
      <div className="grid gap-12 py-4">
        <ul className="grid gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <li key={s.label} className="grid content-start gap-3">
              <ArcGauge value={s.gauge} figure={s.figure} label={s.label} size={72} />
              {s.todo && (
                <span>
                  <Todo>{s.todo}</Todo>
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="grid gap-5 border-t border-line pt-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-center">
          <p className="font-display text-label font-medium uppercase text-brand-300">Ils nous ont confié un projet</p>
          <div className="marquee overflow-hidden">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center gap-x-12 gap-y-3 pr-12">
                  {clients.map((name) => (
                    <li
                      key={name}
                      className="flex items-center gap-12 whitespace-nowrap font-display text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] font-semibold tracking-tight text-brand-200"
                    >
                      {name}
                      <svg aria-hidden="true" viewBox="0 0 100 100" className="size-3 text-brand-400">
                        <path d="M 0 15.7 A 84.3 84.3 0 0 1 84.3 100" fill="none" stroke="currentColor" strokeWidth="31.4" />
                      </svg>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
