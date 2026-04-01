import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ─── Clean African professional illustration ─────────────────────────────── */
function AfricanProfessionalIllustration() {
  return (
    <svg
      viewBox="0 0 380 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Professionnel africain avec outils digitaux"
      className="w-full h-full"
    >
      {/* Background subtle radial */}
      <circle cx="190" cy="220" r="160" fill="#1B3A6B" opacity="0.2"/>

      {/* ── Body / suit ── */}
      <path d="M120 360 Q130 320 145 310 L155 305 L190 315 L225 305 L235 310 Q250 320 260 360 Q255 395 250 430 L130 430 Q125 395 120 360Z" fill="#0D1B2E"/>
      <path d="M165 305 L190 315 L215 305 L210 330 L190 340 L170 330Z" fill="#F0EDE8" opacity="0.9"/>
      <path d="M185 310 L195 310 L198 355 L190 365 L182 355Z" fill="#2E5A9C"/>
      <polygon points="190,365 182,355 198,355" fill="#1B3A6B"/>
      <path d="M155 305 L165 305 L170 330 L145 310Z" fill="#142540"/>
      <path d="M215 305 L225 305 L235 310 L210 330Z" fill="#142540"/>

      {/* ── Neck ── */}
      <rect x="178" y="280" width="24" height="30" rx="8" fill="#8B5E3C"/>

      {/* ── Head ── */}
      <ellipse cx="190" cy="250" rx="42" ry="48" fill="#8B5E3C"/>
      <ellipse cx="190" cy="255" rx="36" ry="40" fill="#7A5233" opacity="0.25"/>
      <ellipse cx="175" cy="245" rx="5" ry="5.5" fill="#1a0a00"/>
      <ellipse cx="205" cy="245" rx="5" ry="5.5" fill="#1a0a00"/>
      <ellipse cx="174" cy="244" rx="2" ry="2.5" fill="white" opacity="0.6"/>
      <ellipse cx="204" cy="244" rx="2" ry="2.5" fill="white" opacity="0.6"/>
      <path d="M186 258 Q190 265 194 258" fill="none" stroke="#5a3820" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M178 272 Q190 282 202 272" fill="none" stroke="#5a3820" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="148" cy="255" rx="7" ry="9" fill="#7A5233"/>
      <ellipse cx="232" cy="255" rx="7" ry="9" fill="#7A5233"/>
      <ellipse cx="190" cy="215" rx="42" ry="22" fill="#1a0a00"/>

      {/* ── Laptop ── */}
      <rect x="100" y="360" width="140" height="88" rx="5" fill="#142540"/>
      <rect x="105" y="365" width="130" height="78" rx="3" fill="#0D1B2E"/>
      {/* UI chrome on screen */}
      <rect x="110" y="370" width="120" height="5" rx="2" fill="#2E5A9C" opacity="0.8"/>
      <rect x="110" y="379" width="75" height="3" rx="1.5" fill="white" opacity="0.2"/>
      <rect x="110" y="386" width="95" height="3" rx="1.5" fill="white" opacity="0.15"/>
      {/* Chart bars */}
      <rect x="114" y="410" width="14" height="22" rx="2" fill="#2E5A9C" opacity="0.9"/>
      <rect x="132" y="402" width="14" height="30" rx="2" fill="#D4891A" opacity="0.8"/>
      <rect x="150" y="415" width="14" height="17" rx="2" fill="#2E5A9C" opacity="0.6"/>
      <rect x="168" y="405" width="14" height="27" rx="2" fill="#D4891A" opacity="0.7"/>
      <rect x="186" y="398" width="14" height="34" rx="2" fill="#2E5A9C" opacity="0.9"/>
      <rect x="204" y="418" width="14" height="14" rx="2" fill="#D4891A" opacity="0.5"/>
      {/* Laptop base */}
      <rect x="88" y="448" width="164" height="8" rx="3" fill="#142540"/>

      {/* ── Floating stat cards ── */}
      {/* Top right card */}
      <rect x="268" y="158" width="92" height="58" rx="10" fill="white" opacity="0.12"/>
      <rect x="268" y="158" width="92" height="58" rx="10" fill="none" stroke="white" strokeWidth="0.8" opacity="0.2"/>
      <rect x="276" y="168" width="36" height="4" rx="2" fill="white" opacity="0.5"/>
      <rect x="276" y="176" width="52" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <text x="276" y="205" fontSize="11" fontWeight="bold" fill="#D4891A" opacity="0.9" fontFamily="system-ui">98%</text>

      {/* Left card */}
      <rect x="16" y="193" width="88" height="52" rx="10" fill="white" opacity="0.08"/>
      <rect x="16" y="193" width="88" height="52" rx="10" fill="none" stroke="white" strokeWidth="0.8" opacity="0.15"/>
      <rect x="24" y="203" width="28" height="4" rx="2" fill="white" opacity="0.4"/>
      <rect x="24" y="211" width="48" height="3" rx="1.5" fill="white" opacity="0.2"/>
      <text x="24" y="234" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">Abidjan, CI</text>
    </svg>
  )
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ backgroundColor: '#0D1B2E' }}
    >
      {/* Subtle radial glow — single, clean */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(46,90,156,0.25) 0%, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="text-center lg:text-left">
            {/* Location badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#D4891A' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#D4891A' }} />
              </span>
              Abidjan, Côte d&apos;Ivoire
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight">
              Propulsez votre entreprise avec{' '}
              <span style={{ color: '#D4891A' }}>l&apos;Intelligence Artificielle</span>
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg leading-relaxed text-balance" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Création web, marketing digital, branding et automatisation IA — conçus pour les entreprises africaines qui veulent croître.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gap-2 text-base text-white font-semibold"
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
                className="gap-2 text-base"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', background: 'transparent' }}
              >
                <Link href="/services">
                  <Play className="h-4 w-4" />
                  Nos services
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
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
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <span className="font-semibold text-white">10+ entreprises</span> nous font confiance
              </p>
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[400px] h-[460px]">
              <div
                className="w-full h-full rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1B3A6B 0%, #0D1B2E 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                }}
              >
                <AfricanProfessionalIllustration />
                {/* Stats overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {[{ value: '15+', label: 'Projets' }, { value: '98%', label: 'Satisfaction' }].map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 text-center rounded-xl py-2.5"
                      style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <p className="text-base font-bold text-white">{s.value}</p>
                      <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -top-3 -right-3 rounded-xl px-4 py-2.5"
                style={{ backgroundColor: '#D4891A', color: 'white', boxShadow: '0 8px 20px rgba(212,137,26,0.4)' }}
              >
                <p className="text-[10px] font-medium opacity-80">Support</p>
                <p className="text-lg font-bold leading-none">24/7</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
