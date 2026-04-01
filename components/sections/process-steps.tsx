import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    description: "Nous étudions vos besoins, votre marché et vos objectifs pour comprendre votre vision.",
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Stratégie',
    description: "Nous élaborons une stratégie sur-mesure et un plan d'action détaillé pour votre projet.",
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Création',
    description: 'Notre équipe conçoit et développe votre solution avec les meilleures technologies.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lancement',
    description: 'Nous déployons votre projet et assurons un suivi continu pour garantir son succès.',
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#2E5A9C' }}>
            Notre processus
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0D1B2E' }}>
            De la vision à la réalisation
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#64748B' }}>
            Une méthodologie éprouvée pour garantir le succès de votre projet.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connector line desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 h-px"
                  style={{ left: 'calc(50% + 2rem)', right: '-50%', backgroundColor: '#E2E8F0' }}
                />
              )}

              <div
                className="rounded-2xl p-6 bg-white"
                style={{ border: '1px solid #E2E8F0' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: 'rgba(46,90,156,0.1)' }}
                  >
                    <step.icon className="h-5 w-5" style={{ color: '#2E5A9C' }} />
                  </div>
                  <span className="text-2xl font-black" style={{ color: '#E2E8F0' }}>{step.number}</span>
                </div>

                <h3 className="text-base font-bold mb-2" style={{ color: '#0D1B2E' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
