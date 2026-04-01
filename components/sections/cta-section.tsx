import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ─── Tribal line-art pattern (inspired by image 2: terracotta + white art) ─ */
function TribalLineArt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Flowing abstract tribal paths */}
      <path d="M20 20 Q60 0 100 20 Q140 40 180 20 Q220 0 260 20 Q300 40 340 20 Q370 8 400 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M0 60 Q40 40 80 60 Q120 80 160 60 Q200 40 240 60 Q280 80 320 60 Q360 40 400 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Diamond row */}
      <g strokeWidth="2.2" fill="none" stroke="currentColor">
        <polygon points="50,90 70,110 50,130 30,110" />
        <polygon points="50,102 62,110 50,118 38,110" fill="currentColor" opacity="0.3" />
        <polygon points="150,90 170,110 150,130 130,110" />
        <polygon points="150,102 162,110 150,118 138,110" fill="currentColor" opacity="0.3" />
        <polygon points="250,90 270,110 250,130 230,110" />
        <polygon points="250,102 262,110 250,118 238,110" fill="currentColor" opacity="0.3" />
        <polygon points="350,90 370,110 350,130 330,110" />
        <polygon points="350,102 362,110 350,118 338,110" fill="currentColor" opacity="0.3" />
      </g>

      {/* Chevron bands */}
      <polyline points="0,155 20,135 40,155 60,135 80,155 100,135 120,155 140,135 160,155 180,135 200,155 220,135 240,155 260,135 280,155 300,135 320,155 340,135 360,155 380,135 400,155" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <polyline points="0,175 20,155 40,175 60,155 80,175 100,155 120,175 140,155 160,175 180,155 200,175 220,155 240,175 260,155 280,175 300,155 320,175 340,155 360,175 380,155 400,175" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />

      <line x1="0" y1="195" x2="400" y2="195" stroke="currentColor" strokeWidth="0.8" />

      {/* Circles and spirals row */}
      <circle cx="50" cy="225" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="225" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="225" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="150" cy="225" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="150" cy="225" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="225" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="250" cy="225" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="250" cy="225" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="250" cy="225" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="350" cy="225" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="350" cy="225" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="350" cy="225" r="4" fill="currentColor" opacity="0.5" />

      {/* Connecting lines between circles */}
      <line x1="68" y1="225" x2="132" y2="225" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="168" y1="225" x2="232" y2="225" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="268" y1="225" x2="332" y2="225" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />

      <line x1="0" y1="260" x2="400" y2="260" stroke="currentColor" strokeWidth="0.8" />

      {/* Bottom zigzag */}
      <polyline points="0,285 15,270 30,285 45,270 60,285 75,270 90,285 105,270 120,285 135,270 150,285 165,270 180,285 195,270 210,285 225,270 240,285 255,270 270,285 285,270 300,285 315,270 330,285 345,270 360,285 375,270 400,285" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Dot rows */}
      <g fill="currentColor">
        {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => (
          <circle key={i} cx={x} cy={315} r="3" />
        ))}
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
          <circle key={i} cx={x} cy={340} r="2" opacity="0.6" />
        ))}
      </g>

      {/* Bottom waves */}
      <path d="M0 370 Q50 350 100 370 Q150 390 200 370 Q250 350 300 370 Q350 390 400 370" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M0 395 Q50 375 100 395 Q150 415 200 395 Q250 375 300 395 Q350 415 400 395" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CTASection() {
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#B8421A' }}
    >
      {/* Tribal line-art pattern overlay — white, low opacity (like image 2) */}
      <div className="absolute inset-0 text-white opacity-[0.12]">
        <TribalLineArt className="w-full h-full" />
      </div>

      {/* Gradient overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(193,68,14,0.6) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(139,30,8,0.5) 0%, transparent 60%)',
        }}
      />

      {/* Decorative gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #D4891A, transparent)' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gold ornamental divider */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4891A]/70" />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-2 w-2 rotate-45" style={{ backgroundColor: '#D4891A', opacity: 0.7 + i * 0.1 }} />
            ))}
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4891A]/70" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Bénéficiez d&apos;un audit gratuit de votre présence digitale et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 font-semibold shadow-lg"
              style={{ background: 'linear-gradient(135deg, #D4891A, #F5A420)', color: '#1a0a00', border: 'none' }}
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
              style={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'white',
                background: 'rgba(255,255,255,0.1)',
              }}
            >
              <a href="tel:+225050805382">
                <Phone className="h-4 w-4" />
                Nous appeler
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Réponse garantie sous 24h
          </p>
        </div>

        {/* Bottom ornamental divider */}
        <div className="flex items-center gap-3 justify-center mt-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4891A]/50" />
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#D4891A', opacity: 0.5 }} />
            ))}
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4891A]/50" />
        </div>
      </div>

      {/* Decorative gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #D4891A, transparent)' }} />
    </section>
  )
}
