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
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Notre Processus
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight">
            De la vision à la réalisation
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Une méthodologie éprouvée en 4 étapes pour garantir le succès de chaque projet.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.title} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-secondary border-2 border-border transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                    {/* Step number */}
                    <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md shadow-accent/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
