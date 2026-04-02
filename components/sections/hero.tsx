import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32"
      style={{ backgroundColor: '#0D1B2E' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(46,90,156,0.4) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Location badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.65)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#D4891A' }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#D4891A' }} />
          </span>
          Agence digitale · Abidjan, Côte d&apos;Ivoire
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance leading-tight">
          Propulsez votre entreprise avec{' '}
          <span style={{ color: '#D4891A' }}>l&apos;IA</span>
        </h1>

        {/* Sub */}
        <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Création web, marketing digital, branding et automatisation IA — conçus pour les entreprises africaines qui veulent croître.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 text-base text-white font-semibold px-8"
            style={{ backgroundColor: '#2E5A9C', border: 'none' }}
          >
            <Link href="/contact">
              Audit gratuit — Démarrer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-base px-8"
            style={{ borderColor: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.75)', background: 'transparent' }}
          >
            <Link href="/services">Nos services</Link>
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="flex -space-x-2">
            {['AK','MD','KN','FS','BT'].map((initials, i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                style={{ borderColor: '#0D1B2E', backgroundColor: ['#2E5A9C','#1B3A6B','#3D6CB5','#1E4A8A','#2E5A9C'][i] }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>10+ entreprises</span> nous font confiance
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-px mx-auto max-w-lg overflow-hidden rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          {[
            { value: '15+', label: 'Projets livrés' },
            { value: '98%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' },
          ].map((s) => (
            <div key={s.label} className="py-5 px-4 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
