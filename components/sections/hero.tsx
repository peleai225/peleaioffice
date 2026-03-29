import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Agence digitale #1 en Afrique
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Propulsez votre entreprise avec{' '}
            <span className="text-primary">l&apos;Intelligence Artificielle</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
            Des solutions digitales sur-mesure pour transformer votre business. 
            Création web, marketing digital, branding et automatisation IA.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/contact">
                Démarrer mon projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-base">
              <Link href="/services">
                <Play className="h-4 w-4" />
                Découvrir nos services
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">10+</span> entreprises nous font confiance
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
