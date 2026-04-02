import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0D1B2E' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(46,90,156,0.35) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4891A' }}>
          Prêt à démarrer ?
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
          Transformez votre entreprise<br className="hidden sm:block" /> avec PeleAI
        </h2>
        <p className="mt-5 text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Bénéficiez d&apos;un audit gratuit de votre présence digitale et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 font-semibold text-white"
            style={{ backgroundColor: '#2E5A9C', border: 'none' }}
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
            className="gap-2"
            style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white', background: 'rgba(255,255,255,0.06)' }}
          >
            <a href="tel:+2250506805382">
              <Phone className="h-4 w-4" />
              +225 05 06 80 53 82
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Réponse garantie sous 24h
        </p>
      </div>
    </section>
  )
}
