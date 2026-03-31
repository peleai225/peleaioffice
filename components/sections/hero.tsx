import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ─── African geometric background pattern ──────────────────────────────── */
function AfricanGeometricPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hero-african-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polyline points="0,12 10,0 20,12 30,0 40,12 50,0 60,12 70,0 80,12" fill="none" stroke="white" strokeWidth="1.2" />
          <polyline points="0,26 10,14 20,26 30,14 40,26 50,14 60,26 70,14 80,26" fill="none" stroke="white" strokeWidth="1.2" />
          <line x1="0" y1="34" x2="80" y2="34" stroke="white" strokeWidth="0.5" />
          <polygon points="40,38 52,50 40,62 28,50" fill="none" stroke="white" strokeWidth="1.1" />
          <polygon points="40,44 46,50 40,56 34,50" fill="none" stroke="white" strokeWidth="0.8" />
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

/* ─── African professional illustration (SVG) ───────────────────────────── */
function AfricanProfessionalIllustration() {
  return (
    <svg
      viewBox="0 0 380 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Professionnel africain avec outils digitaux"
      className="w-full h-full"
    >
      {/* ── Outer African geometric frame ── */}
      {/* Top zigzag border */}
      <polyline points="10,30 30,10 50,30 70,10 90,30 110,10 130,30 150,10 170,30 190,10 210,30 230,10 250,30 270,10 290,30 310,10 330,30 350,10 370,30" fill="none" stroke="#D4891A" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="10" y1="40" x2="370" y2="40" stroke="#D4891A" strokeWidth="0.8" strokeDasharray="4 3"/>
      {/* Bottom zigzag */}
      <polyline points="10,450 30,470 50,450 70,470 90,450 110,470 130,450 150,470 170,450 190,470 210,450 230,470 250,450 270,470 290,450 310,470 330,450 350,470 370,450" fill="none" stroke="#D4891A" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="10" y1="440" x2="370" y2="440" stroke="#D4891A" strokeWidth="0.8" strokeDasharray="4 3"/>
      {/* Side borders */}
      <line x1="10" y1="30" x2="10" y2="450" stroke="#D4891A" strokeWidth="2"/>
      <line x1="370" y1="30" x2="370" y2="450" stroke="#D4891A" strokeWidth="2"/>
      {/* Corner diamonds */}
      <polygon points="10,10 30,20 10,30 -10,20" fill="#C1440E" opacity="0.8"/>
      <polygon points="370,10 390,20 370,30 350,20" fill="#C1440E" opacity="0.8"/>
      <polygon points="10,450 30,460 10,470 -10,460" fill="#C1440E" opacity="0.8"/>
      <polygon points="370,450 390,460 370,470 350,460" fill="#C1440E" opacity="0.8"/>

      {/* ── Background circle (portrait bg) ── */}
      <circle cx="190" cy="220" r="145" fill="#1B3A6B" opacity="0.35"/>
      <circle cx="190" cy="220" r="130" fill="none" stroke="#D4891A" strokeWidth="1" strokeDasharray="6 4" opacity="0.5"/>

      {/* ── African fabric pattern accent (bottom-left) ── */}
      <g opacity="0.3">
        {[0,1,2,3,4].map(row => (
          [0,1,2,3,4].map(col => (
            <polygon
              key={`${row}-${col}`}
              points={`${30 + col * 18},${340 + row * 14} ${39 + col * 18},${347 + row * 14} ${30 + col * 18},${354 + row * 14} ${21 + col * 18},${347 + row * 14}`}
              fill={row % 2 === 0 ? '#C1440E' : '#D4891A'}
            />
          ))
        ))}
      </g>

      {/* ── Body / suit ── */}
      {/* Suit jacket — dark navy */}
      <path d="M120 360 Q130 320 145 310 L155 305 L190 315 L225 305 L235 310 Q250 320 260 360 Q255 395 250 430 L130 430 Q125 395 120 360Z" fill="#0D1B2E"/>
      {/* Shirt/tie area */}
      <path d="M165 305 L190 315 L215 305 L210 330 L190 340 L170 330Z" fill="#F5EDD8" opacity="0.9"/>
      {/* Tie — terracotta */}
      <path d="M185 310 L195 310 L198 355 L190 365 L182 355Z" fill="#C1440E"/>
      <polygon points="190,365 182,355 198,355" fill="#A03510"/>
      {/* Suit lapels */}
      <path d="M155 305 L165 305 L170 330 L145 310Z" fill="#142540"/>
      <path d="M215 305 L225 305 L235 310 L210 330Z" fill="#142540"/>
      {/* Pocket square — gold */}
      <path d="M135 325 L148 320 L150 335 L138 338Z" fill="#D4891A" opacity="0.8"/>

      {/* ── Neck ── */}
      <rect x="178" y="280" width="24" height="30" rx="8" fill="#8B5E3C"/>

      {/* ── Head ── */}
      <ellipse cx="190" cy="250" rx="42" ry="48" fill="#8B5E3C"/>
      {/* Face shading */}
      <ellipse cx="190" cy="255" rx="36" ry="40" fill="#7A5233" opacity="0.3"/>
      {/* Eyes */}
      <ellipse cx="175" cy="245" rx="5" ry="5.5" fill="#1a0a00"/>
      <ellipse cx="205" cy="245" rx="5" ry="5.5" fill="#1a0a00"/>
      <ellipse cx="174" cy="244" rx="2" ry="2.5" fill="white" opacity="0.6"/>
      <ellipse cx="204" cy="244" rx="2" ry="2.5" fill="white" opacity="0.6"/>
      {/* Nose */}
      <path d="M186 258 Q190 265 194 258" fill="none" stroke="#5a3820" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M178 272 Q190 282 202 272" fill="none" stroke="#5a3820" strokeWidth="2" strokeLinecap="round"/>
      {/* Ear */}
      <ellipse cx="148" cy="255" rx="7" ry="9" fill="#7A5233"/>
      <ellipse cx="232" cy="255" rx="7" ry="9" fill="#7A5233"/>
      {/* Hair — short natural */}
      <ellipse cx="190" cy="215" rx="42" ry="22" fill="#1a0a00"/>
      {/* African head fabric / kufi hint */}
      <path d="M148 230 Q190 208 232 230 L232 222 Q190 200 148 222Z" fill="#C1440E" opacity="0.7"/>
      <path d="M150 222 Q190 202 230 222" fill="none" stroke="#D4891A" strokeWidth="1.5"/>

      {/* ── Laptop ── */}
      {/* Screen */}
      <rect x="100" y="360" width="140" height="88" rx="5" fill="#142540"/>
      <rect x="105" y="365" width="130" height="78" rx="3" fill="#0D1B2E"/>
      {/* Screen content — African pattern hint */}
      <rect x="110" y="370" width="120" height="6" rx="2" fill="#C1440E" opacity="0.7"/>
      <rect x="110" y="380" width="80" height="4" rx="2" fill="#D4891A" opacity="0.5"/>
      <rect x="110" y="388" width="100" height="4" rx="2" fill="white" opacity="0.2"/>
      <rect x="110" y="396" width="60" height="4" rx="2" fill="white" opacity="0.15"/>
      {/* Chart bars */}
      <rect x="114" y="410" width="14" height="22" rx="2" fill="#C1440E" opacity="0.8"/>
      <rect x="132" y="402" width="14" height="30" rx="2" fill="#D4891A" opacity="0.8"/>
      <rect x="150" y="415" width="14" height="17" rx="2" fill="#C1440E" opacity="0.6"/>
      <rect x="168" y="405" width="14" height="27" rx="2" fill="#D4891A" opacity="0.7"/>
      <rect x="186" y="398" width="14" height="34" rx="2" fill="#C1440E" opacity="0.9"/>
      <rect x="204" y="418" width="14" height="14" rx="2" fill="#D4891A" opacity="0.5"/>
      {/* Laptop base */}
      <rect x="88" y="448" width="164" height="8" rx="3" fill="#142540"/>
      <rect x="108" y="456" width="124" height="4" rx="2" fill="#0D1B2E" opacity="0.6"/>

      {/* ── Floating UI elements (digital context) ── */}
      {/* Card top-right */}
      <rect x="270" y="160" width="90" height="55" rx="8" fill="#D4891A" opacity="0.15" stroke="#D4891A" strokeWidth="1.2"/>
      <rect x="278" y="170" width="40" height="5" rx="2" fill="#D4891A" opacity="0.6"/>
      <rect x="278" y="180" width="55" height="4" rx="2" fill="white" opacity="0.3"/>
      <rect x="278" y="188" width="45" height="4" rx="2" fill="white" opacity="0.2"/>
      <text x="278" y="205" fontSize="8" fill="#D4891A" opacity="0.8" fontFamily="monospace">98%</text>

      {/* Card bottom-right */}
      <rect x="285" y="265" width="80" height="50" rx="8" fill="#C1440E" opacity="0.12" stroke="#C1440E" strokeWidth="1.2"/>
      <rect x="293" y="275" width="35" height="5" rx="2" fill="#F5A470" opacity="0.6"/>
      <rect x="293" y="284" width="50" height="4" rx="2" fill="white" opacity="0.25"/>
      <text x="293" y="304" fontSize="8" fill="#F5A470" opacity="0.8" fontFamily="monospace">+127%</text>

      {/* Card left */}
      <rect x="18" y="195" width="85" height="48" rx="8" fill="#1B3A6B" opacity="0.5" stroke="#7BA7E8" strokeWidth="1"/>
      <rect x="26" y="205" width="30" height="5" rx="2" fill="#7BA7E8" opacity="0.6"/>
      <rect x="26" y="214" width="50" height="4" rx="2" fill="white" opacity="0.2"/>
      <text x="26" y="232" fontSize="8" fill="#7BA7E8" opacity="0.8" fontFamily="monospace">Afrique</text>

      {/* Floating dots */}
      {[[285,130],[305,148],[295,165]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={3 - i * 0.5} fill="#D4891A" opacity={0.6 - i * 0.15}/>
      ))}
      {[[25,165],[38,155],[50,168]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5 - i * 0.4} fill="#C1440E" opacity={0.5 - i * 0.1}/>
      ))}

      {/* ── Bottom African pattern strip ── */}
      {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E','#D4891A','#1B3A6B','#8B5A00','#C1440E','#D4891A','#1B3A6B','#C1440E'].map(
        (color, i) => (
          <rect key={i} x={10 + i * 26} y={462} width={26} height={8} fill={color} opacity={0.75}/>
        )
      )}
    </svg>
  )
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ backgroundColor: '#0D1B2E' }}
    >
      {/* African geometric pattern texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <AfricanGeometricPattern />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-col layout on desktop: text | illustration */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <div className="text-center lg:text-left">
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
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#C1440E' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#F5A470' }} />
              </span>
              Agence digitale · Abidjan, Côte d&apos;Ivoire
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Propulsez votre entreprise avec{' '}
              <span style={{ color: '#F5A470' }}>l&apos;Intelligence Artificielle</span>
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-balance" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Des solutions digitales sur-mesure pour transformer votre business.
              Création web, marketing digital, branding et automatisation IA.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gap-2 text-base text-white font-semibold shadow-lg"
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
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.06)' }}
              >
                <Link href="/services">
                  <Play className="h-4 w-4" />
                  Nos services
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
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

            {/* Mini stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              {[
                { value: '15+', label: 'Projets' },
                { value: '98%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((s) => (
                <div key={s.label} className="text-center rounded-lg py-3 px-2" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-lg font-bold" style={{ color: '#F5A470' }}>{s.value}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Professional photo ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[480px]">
              {/* Photo container with subtle frame */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '2px solid rgba(212,137,26,0.2)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=840&h=960&fit=crop&crop=faces"
                  alt="Professionnelle africaine travaillant sur un projet digital"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,46,0.7) 0%, transparent 40%)' }} />
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {[
                    { value: '15+', label: 'Projets' },
                    { value: '98%', label: 'Satisfaction' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 text-center rounded-xl py-2.5 px-2"
                      style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <p className="text-lg font-bold text-white">{s.value}</p>
                      <p className="text-[10px] text-white/60">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -top-3 -right-3 rounded-xl px-4 py-2.5 shadow-xl"
                style={{ backgroundColor: '#2E5A9C', color: 'white' }}
              >
                <p className="text-xs font-medium opacity-70">Support</p>
                <p className="text-xl font-bold">24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Kente strip */}
        <div className="flex w-full overflow-hidden h-1 mt-12 mx-auto max-w-3xl rounded">
          {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E','#D4891A'].map(
            (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
          )}
        </div>
      </div>
    </section>
  )
}
