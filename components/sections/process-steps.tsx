import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    description: 'Nous étudions vos besoins, votre marché et vos objectifs pour comprendre votre vision.',
    accent: '#C1440E',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Stratégie',
    description: "Nous élaborons une stratégie sur-mesure et un plan d'action détaillé pour votre projet.",
    accent: '#D4891A',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Création',
    description: 'Notre équipe conçoit et développe votre solution avec les meilleures technologies.',
    accent: '#1B3A6B',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lancement',
    description: 'Nous déployons votre projet et assurons un suivi continu pour garantir son succès.',
    accent: '#8B5A00',
  },
]

export function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5EDD8' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#D4891A' }}/>
            <div className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: '#D4891A' }}/>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#C1440E' }}>
              Notre processus
            </p>
            <div className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: '#D4891A' }}/>
            <div className="h-px w-8" style={{ backgroundColor: '#D4891A' }}/>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
            De la vision à la réalisation
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#6B4423' }}>
            Une méthodologie éprouvée pour garantir le succès de votre projet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 h-0.5"
                  style={{
                    left: 'calc(50% + 2.5rem)',
                    right: 0,
                    background: `linear-gradient(to right, ${step.accent}, ${steps[i+1].accent})`,
                  }}
                />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* Icon circle */}
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full text-white shadow-lg"
                    style={{ backgroundColor: `${step.accent}18`, border: `2px solid ${step.accent}40` }}
                  >
                    <step.icon className="h-10 w-10" style={{ color: step.accent }} />
                  </div>
                  {/* Number badge */}
                  <span
                    className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="rounded-xl p-4 w-full"
                  style={{ backgroundColor: 'white', border: `1.5px solid ${step.accent}20` }}
                >
                  {/* Top accent */}
                  <div className="h-0.5 rounded mb-3" style={{ background: `linear-gradient(to right, ${step.accent}, ${step.accent}50)` }}/>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1a0a00' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B4423' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
