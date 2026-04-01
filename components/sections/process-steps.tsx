import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    description: "Nous étudions vos besoins, votre marché et vos objectifs pour comprendre votre vision.",
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

function DiamondOrnament({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
      <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points="10,5 15,10 10,15 5,10" fill={color} opacity="0.3" />
    </svg>
  )
}

export function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#F5EDD8' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondOrnament color="#C1440E" />
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#C1440E' }}>
              Notre processus
            </p>
            <DiamondOrnament color="#C1440E" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
            De la vision à la réalisation
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#6B4423' }}>
            Une méthodologie éprouvée pour garantir le succès de votre projet.
          </p>
          {/* Kente underline */}
          <div className="flex justify-center gap-px mt-5 mx-auto w-32 h-1.5 overflow-hidden rounded">
            {['#C1440E', '#D4891A', '#1B3A6B', '#C1440E', '#8B5A00', '#D4891A', '#C1440E'].map((c, i) => (
              <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Gradient connector — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-14 left-[calc(50%+3.5rem)] right-[-0.5rem] h-0.5"
                  style={{ background: `linear-gradient(to right, ${step.accent}60, ${steps[i + 1].accent}60)` }}
                />
              )}

              <div
                className="h-full rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden border"
                style={{
                  backgroundColor: 'white',
                  borderColor: `${step.accent}22`,
                  borderWidth: '1.5px',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{ backgroundColor: step.accent }}
                />

                {/* Step number badge */}
                <div
                  className="absolute top-3 right-3 h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: step.accent }}
                >
                  {step.number}
                </div>

                {/* Icon — diamond shape */}
                <div className="mb-5 mt-3 flex h-16 w-16 items-center justify-center relative">
                  <div
                    className="absolute inset-0 rotate-45 rounded-lg"
                    style={{ backgroundColor: `${step.accent}15`, border: `1.5px solid ${step.accent}30` }}
                  />
                  <step.icon className="relative h-7 w-7" style={{ color: step.accent }} />
                </div>

                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a0a00' }}>
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: '#6B4423' }}>
                  {step.description}
                </p>

                {/* Bottom ornament */}
                <div className="mt-4">
                  <DiamondOrnament color={step.accent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
