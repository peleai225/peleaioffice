import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ─── African geometric SVG pattern (inline, no external assets) ─────────── */
function AfricanGeometricPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="hero-african-geo"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Zigzag top row */}
          <polyline
            points="0,12 10,0 20,12 30,0 40,12 50,0 60,12 70,0 80,12"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          {/* Second zigzag */}
          <polyline
            points="0,26 10,14 20,26 30,14 40,26 50,14 60,26 70,14 80,26"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          {/* Horizontal rule */}
          <line x1="0" y1="34" x2="80" y2="34" stroke="white" strokeWidth="0.5" />
          {/* Central diamond */}
          <polygon
            points="40,38 52,50 40,62 28,50"
            fill="none"
            stroke="white"
            strokeWidth="1.1"
          />
          {/* Inner diamond */}
          <polygon
            points="40,44 46,50 40,56 34,50"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
          />
          {/* Bottom dot row */}
          <line x1="0" y1="70" x2="80" y2="70" stroke="white" strokeWidth="0.5" />
          <circle cx="10" cy="75" r="1.8" fill="white" />
          <circle cx="30" cy="75" r="1.8" fill="white" />
          <circle cx="50" cy="75" r="1.8" fill="white" />
          <circle cx="70" cy="75" r="1.8" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-african-geo)" />
    </svg>
  )
}

/* ─── Terracotta tribal accent (top-right decoration) ─────────────────────── */
function TribalAccent({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMin slice"
    >
      <path d="M20 20 Q80 0 140 20 Q200 40 260 20" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M0 50 Q60 30 120 50 Q180 70 240 50 Q280 38 300 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="60" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(45 70 80)" />
      <rect x="140" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(45 150 80)" />
      <rect x="220" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(45 230 80)" />
      <path d="M0 120 Q40 100 80 120 Q120 140 160 120 Q200 100 240 120 Q270 135 300 120" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="50" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="170" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="150" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="170" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="250" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="250" cy="170" r="3" fill="currentColor" opacity="0.6" />
      <path d="M0 200 L20 180 L40 200 L60 180 L80 200 L100 180 L120 200 L140 180 L160 200 L180 180 L200 200 L220 180 L240 200 L260 180 L280 200 L300 180" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="0" y1="220" x2="300" y2="220" stroke="currentColor" strokeWidth="0.8" />
      <polygon points="100,240 130,270 100,300 70,270" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <polygon points="100,255 115,270 100,285 85,270" fill="currentColor" opacity="0.3" />
      <polygon points="200,240 230,270 200,300 170,270" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <polygon points="200,255 215,270 200,285 185,270" fill="currentColor" opacity="0.3" />
      <path d="M0 330 Q50 310 100 330 Q150 350 200 330 Q250 310 300 330" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 360 L15 345 L30 360 L45 345 L60 360 L75 345 L90 360 L105 345 L120 360 L135 345 L150 360 L165 345 L180 360 L195 345 L210 360 L225 345 L240 360 L255 345 L270 360 L285 345 L300 360" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="380" x2="300" y2="380" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="30" cy="400" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="90" cy="400" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="400" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="210" cy="400" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="270" cy="400" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 430 Q40 415 80 430 Q120 445 160 430 Q200 415 240 430 Q270 440 300 430" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 470 Q30 455 60 470 Q90 485 120 470 Q150 455 180 470 Q210 485 240 470 Q270 455 300 470" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ backgroundColor: '#0D1B2E' }}
    >
      {/* African geometric pattern — subtle white texture */}
      <div className="absolute inset-0 opacity-[0.07]">
        <AfricanGeometricPattern />
      </div>

      {/* Right-side terracotta tribal accent panel */}
      <div className="absolute top-0 right-0 h-full w-[38%] pointer-events-none">
        <TribalAccent className="absolute top-0 right-0 h-full w-full text-[#C1440E] opacity-[0.18]" />
      </div>

      {/* Bottom-left soft glow */}
      <div
        className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: '#C1440E' }}
      />
      {/* Top-right soft glow */}
      <div
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#D4891A' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gold decorative border bar */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4891A]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#D4891A]" />
          <div className="h-px w-24 bg-[#D4891A]/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#D4891A]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4891A]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
            style={{
              background: 'rgba(193,68,14,0.18)',
              border: '1px solid rgba(193,68,14,0.45)',
              color: '#F5A470',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: '#C1440E' }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: '#F5A470' }}
              />
            </span>
            Agence digitale #1 en Afrique
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Propulsez votre entreprise avec{' '}
            <span style={{ color: '#F5A470' }}>l&apos;Intelligence Artificielle</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-balance" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Des solutions digitales sur-mesure pour transformer votre business.{' '}
            Création web, marketing digital, branding et automatisation IA.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 text-base text-white font-semibold shadow-lg"
              style={{ background: 'linear-gradient(135deg, #C1440E, #E05A20)', border: 'none' }}
            >
              <Link href="/contact">
                Démarrer mon projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 text-base"
              style={{
                borderColor: 'rgba(212,137,26,0.5)',
                color: '#D4891A',
                background: 'rgba(212,137,26,0.08)',
              }}
            >
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
                  className="h-10 w-10 rounded-full border-2 flex items-center justify-center text-xs font-semibold"
                  style={{
                    borderColor: '#0D1B2E',
                    background: `hsl(${(i * 37 + 10) % 360}deg 45% 35%)`,
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span className="font-semibold text-white">10+</span> entreprises nous font confiance
            </div>
          </div>
        </div>

        {/* Bottom gold decorative border bar */}
        <div className="flex items-center gap-3 justify-center mt-12">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#D4891A]/40" />
          <div className="flex gap-1.5">
            {[0,1,2,3,4].map(i => (
              <div key={i} className="h-1.5 w-1.5 rotate-45 bg-[#D4891A]/50" />
            ))}
          </div>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#D4891A]/40" />
        </div>
      </div>
    </section>
  )
}
