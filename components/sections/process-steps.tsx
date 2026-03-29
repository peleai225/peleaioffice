import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    description: 'Nous étudions vos besoins, votre marché et vos objectifs pour comprendre votre vision.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Stratégie',
    description: 'Nous élaborons une stratégie sur-mesure et un plan d\'action détaillé pour votre projet.',
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
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Notre processus
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            De la vision à la réalisation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Une méthodologie éprouvée pour garantir le succès de votre projet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] right-0 h-0.5 bg-border" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-10 w-10" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
