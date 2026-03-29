import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Bénéficiez d&apos;un audit gratuit de votre présence digitale et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">
                Demander un audit gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+22900000000">
                <Phone className="h-4 w-4" />
                Nous appeler
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Réponse garantie sous 24h
          </p>
        </div>
      </div>
    </section>
  )
}
