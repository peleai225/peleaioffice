import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* ── Inline SVG illustrations per service ──────────────────────────────────── */

function WebIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="180" fill="#0D1B2E"/>
      {/* Monitor */}
      <rect x="60" y="28" width="200" height="120" rx="8" fill="#142540"/>
      <rect x="60" y="28" width="200" height="120" rx="8" stroke="#2E5A9C" strokeWidth="1.5"/>
      <rect x="68" y="38" width="184" height="96" rx="4" fill="#0A1628"/>
      {/* Browser chrome */}
      <rect x="68" y="38" width="184" height="14" rx="4" fill="#1B3A6B"/>
      <circle cx="78" cy="45" r="3" fill="#C1440E" opacity="0.7"/>
      <circle cx="88" cy="45" r="3" fill="#D4891A" opacity="0.7"/>
      <circle cx="98" cy="45" r="3" fill="#2E5A9C" opacity="0.7"/>
      <rect x="110" y="41" width="80" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      {/* Website content */}
      <rect x="72" y="58" width="90" height="5" rx="2" fill="white" opacity="0.8"/>
      <rect x="72" y="67" width="60" height="3" rx="1.5" fill="white" opacity="0.3"/>
      <rect x="72" y="74" width="75" height="3" rx="1.5" fill="white" opacity="0.25"/>
      {/* Hero image mockup */}
      <rect x="168" y="56" width="76" height="48" rx="4" fill="#2E5A9C" opacity="0.4"/>
      <circle cx="206" cy="68" r="8" fill="#2E5A9C" opacity="0.6"/>
      <path d="M196 80 Q206 72 216 80 L216 84 L196 84Z" fill="#2E5A9C" opacity="0.5"/>
      {/* CTA button */}
      <rect x="72" y="84" width="50" height="12" rx="6" fill="#2E5A9C"/>
      {/* Cards row */}
      <rect x="72" y="102" width="48" height="26" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
      <rect x="126" y="102" width="48" height="26" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
      <rect x="180" y="102" width="48" height="26" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
      {/* Stand */}
      <rect x="148" y="148" width="24" height="6" rx="2" fill="#142540"/>
      <rect x="136" y="154" width="48" height="4" rx="2" fill="#142540"/>
      {/* Floating code snippet */}
      <rect x="10" y="55" width="48" height="38" rx="6" fill="#1B3A6B" opacity="0.9"/>
      <rect x="16" y="62" width="20" height="3" rx="1.5" fill="#D4891A" opacity="0.8"/>
      <rect x="16" y="69" width="32" height="2" rx="1" fill="white" opacity="0.3"/>
      <rect x="16" y="74" width="26" height="2" rx="1" fill="white" opacity="0.2"/>
      <rect x="16" y="79" width="30" height="2" rx="1" fill="white" opacity="0.25"/>
      {/* Floating device (mobile) */}
      <rect x="268" y="48" width="34" height="58" rx="6" fill="#142540" stroke="#2E5A9C" strokeWidth="1"/>
      <rect x="272" y="54" width="26" height="44" rx="3" fill="#0A1628"/>
      <rect x="272" y="54" width="26" height="5" rx="1" fill="#2E5A9C" opacity="0.5"/>
      <rect x="275" y="63" width="16" height="2" rx="1" fill="white" opacity="0.4"/>
      <rect x="275" y="68" width="20" height="2" rx="1" fill="white" opacity="0.25"/>
      <rect x="275" y="73" width="14" height="2" rx="1" fill="white" opacity="0.2"/>
      <circle cx="285" cy="92" r="4" fill="#2E5A9C" opacity="0.6"/>
    </svg>
  )
}

function MarketingIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="180" fill="#1A0A00"/>
      {/* Chart area */}
      <rect x="20" y="30" width="180" height="120" rx="8" fill="#260F00" stroke="rgba(212,137,26,0.3)" strokeWidth="1"/>
      {/* Grid lines */}
      {[50,70,90,110,130].map((y, i) => (
        <line key={i} x1="36" y1={y} x2="186" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
      ))}
      {/* Bar chart */}
      <rect x="46" y="110" width="18" height="32" rx="3" fill="#C1440E" opacity="0.7"/>
      <rect x="70" y="92" width="18" height="50" rx="3" fill="#D4891A" opacity="0.8"/>
      <rect x="94" y="78" width="18" height="64" rx="3" fill="#C1440E" opacity="0.6"/>
      <rect x="118" y="62" width="18" height="80" rx="3" fill="#D4891A" opacity="0.9"/>
      <rect x="142" y="48" width="18" height="94" rx="3" fill="#E05A20"/>
      <rect x="166" y="55" width="18" height="87" rx="3" fill="#D4891A" opacity="0.7"/>
      {/* Trend line */}
      <polyline points="55,112 79,90 103,76 127,60 151,46 175,53" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {[55,79,103,127,151,175].map((x, i) => (
        <circle key={i} cx={x} cy={[112,90,76,60,46,53][i]} r="3" fill="white" opacity="0.8"/>
      ))}
      {/* Social icons area */}
      <rect x="210" y="30" width="95" height="48" rx="8" fill="#260F00" stroke="rgba(212,137,26,0.2)" strokeWidth="1"/>
      <rect x="220" y="40" width="18" height="18" rx="4" fill="#2E5A9C" opacity="0.8"/>
      <rect x="244" y="40" width="18" height="18" rx="4" fill="#C1440E" opacity="0.7"/>
      <rect x="268" y="40" width="18" height="18" rx="4" fill="#D4891A" opacity="0.8"/>
      <rect x="220" y="52" width="14" height="2" rx="1" fill="white" opacity="0.3"/>
      <rect x="244" y="52" width="14" height="2" rx="1" fill="white" opacity="0.3"/>
      <rect x="268" y="52" width="14" height="2" rx="1" fill="white" opacity="0.3"/>
      {/* KPI cards */}
      <rect x="210" y="86" width="44" height="34" rx="6" fill="#260F00" stroke="rgba(212,137,26,0.25)" strokeWidth="1"/>
      <text x="221" y="106" fontSize="11" fontWeight="bold" fill="#D4891A" fontFamily="system-ui">+127%</text>
      <rect x="215" y="110" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="260" y="86" width="44" height="34" rx="6" fill="#260F00" stroke="rgba(212,137,26,0.25)" strokeWidth="1"/>
      <text x="267" y="106" fontSize="11" fontWeight="bold" fill="#E05A20" fontFamily="system-ui">98%</text>
      <rect x="265" y="110" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
      {/* Target icon */}
      <circle cx="248" cy="142" r="20" fill="none" stroke="rgba(212,137,26,0.3)" strokeWidth="1.5"/>
      <circle cx="248" cy="142" r="13" fill="none" stroke="rgba(212,137,26,0.5)" strokeWidth="1.5"/>
      <circle cx="248" cy="142" r="5" fill="#D4891A" opacity="0.8"/>
    </svg>
  )
}

function BrandingIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="180" fill="#0A0A12"/>
      {/* Color palette */}
      <rect x="20" y="30" width="130" height="70" rx="8" fill="#12121F" stroke="rgba(212,137,26,0.2)" strokeWidth="1"/>
      {[
        { x: 30, color: '#C1440E' },
        { x: 56, color: '#D4891A' },
        { x: 82, color: '#2E5A9C' },
        { x: 108, color: '#0D1B2E' },
        { x: 134, color: '#8B5A00' },
      ].map((c, i) => (
        <rect key={i} x={c.x} y="44" width="20" height="20" rx="4" fill={c.color}/>
      ))}
      <rect x="30" y="74" width="100" height="3" rx="1.5" fill="white" opacity="0.15"/>
      <rect x="30" y="81" width="70" height="2" rx="1" fill="white" opacity="0.1"/>
      {/* Typography specimen */}
      <rect x="20" y="110" width="130" height="50" rx="8" fill="#12121F" stroke="rgba(212,137,26,0.2)" strokeWidth="1"/>
      <text x="30" y="130" fontSize="16" fontWeight="bold" fill="white" opacity="0.9" fontFamily="serif">Aa</text>
      <rect x="55" y="120" width="70" height="3" rx="1.5" fill="white" opacity="0.4"/>
      <rect x="55" y="127" width="50" height="2" rx="1" fill="white" opacity="0.2"/>
      <rect x="30" y="137" width="100" height="2" rx="1" fill="rgba(212,137,26,0.4)"/>
      <rect x="30" y="143" width="80" height="2" rx="1" fill="rgba(212,137,26,0.2)"/>
      {/* Logo mockup */}
      <rect x="162" y="30" width="140" height="90" rx="8" fill="#12121F" stroke="rgba(212,137,26,0.2)" strokeWidth="1"/>
      <circle cx="202" cy="65" r="22" fill="none" stroke="#D4891A" strokeWidth="2"/>
      <circle cx="202" cy="65" r="14" fill="#D4891A" opacity="0.15"/>
      <text x="194" y="71" fontSize="14" fontWeight="black" fill="#D4891A" fontFamily="system-ui">P</text>
      <rect x="232" y="56" width="55" height="6" rx="3" fill="white" opacity="0.7"/>
      <rect x="232" y="66" width="40" height="3" rx="1.5" fill="white" opacity="0.3"/>
      <rect x="232" y="73" width="48" height="3" rx="1.5" fill="rgba(212,137,26,0.5)"/>
      {/* Brand guide book */}
      <rect x="162" y="130" width="60" height="34" rx="4" fill="#D4891A" opacity="0.15" stroke="rgba(212,137,26,0.4)" strokeWidth="1"/>
      <rect x="166" y="134" width="30" height="3" rx="1.5" fill="#D4891A" opacity="0.7"/>
      <rect x="166" y="141" width="48" height="2" rx="1" fill="white" opacity="0.2"/>
      <rect x="166" y="147" width="40" height="2" rx="1" fill="white" opacity="0.15"/>
      {/* Pen tool icon */}
      <rect x="232" y="130" width="60" height="34" rx="4" fill="#12121F" stroke="rgba(212,137,26,0.2)" strokeWidth="1"/>
      <path d="M248 148 L255 141 L262 148 L255 155Z" fill="none" stroke="#D4891A" strokeWidth="1.5"/>
      <circle cx="255" cy="148" r="3" fill="#D4891A" opacity="0.6"/>
    </svg>
  )
}

function AIIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="180" fill="#040A14"/>
      {/* Neural network nodes */}
      {/* Layer 1 */}
      {[40,70,100,130].map((y, i) => (
        <circle key={i} cx="60" cy={y} r="7" fill="#1B3A6B" stroke="#2E5A9C" strokeWidth="1.5"/>
      ))}
      {/* Layer 2 */}
      {[50,80,110].map((y, i) => (
        <circle key={i} cx="130" cy={y} r="9" fill="#2E5A9C" stroke="#4A7BC8" strokeWidth="1.5" opacity="0.9"/>
      ))}
      {/* Layer 3 — active */}
      {[55,85,115].map((y, i) => (
        <circle key={i} cx="200" cy={y} r="9" fill="#2E5A9C" stroke="#6A9BE8" strokeWidth="1.5"/>
      ))}
      {[55,85,115].map((y, i) => (
        <circle key={i} cx="200" cy={y} r="4" fill="#D4891A" opacity={0.9 - i * 0.1}/>
      ))}
      {/* Output layer */}
      {[65,100].map((y, i) => (
        <circle key={i} cx="264" cy={y} r="10" fill="#1B3A6B" stroke="#D4891A" strokeWidth="1.5"/>
      ))}
      {/* Connections L1->L2 */}
      {[40,70,100,130].map((y1, i) =>
        [50,80,110].map((y2, j) => (
          <line key={`${i}-${j}`} x1="67" y1={y1} x2="121" y2={y2} stroke="#2E5A9C" strokeWidth="0.6" opacity="0.3"/>
        ))
      )}
      {/* Connections L2->L3 */}
      {[50,80,110].map((y1, i) =>
        [55,85,115].map((y2, j) => (
          <line key={`${i}-${j}`} x1="139" y1={y1} x2="191" y2={y2} stroke="#2E5A9C" strokeWidth="0.6" opacity="0.4"/>
        ))
      )}
      {/* Connections L3->Output */}
      {[55,85,115].map((y1, i) =>
        [65,100].map((y2, j) => (
          <line key={`${i}-${j}`} x1="209" y1={y1} x2="254" y2={y2} stroke="#D4891A" strokeWidth="0.8" opacity="0.4"/>
        ))
      )}
      {/* Chatbot panel */}
      <rect x="20" y="142" width="130" height="28" rx="6" fill="#0D1B2E" stroke="rgba(46,90,156,0.4)" strokeWidth="1"/>
      <circle cx="34" cy="156" r="6" fill="#2E5A9C" opacity="0.7"/>
      <rect x="46" y="150" width="70" height="4" rx="2" fill="white" opacity="0.2"/>
      <rect x="46" y="158" width="50" height="3" rx="1.5" fill="rgba(46,90,156,0.5)"/>
      {/* Data stream lines */}
      {[155,162,169].map((y, i) => (
        <rect key={i} x="162" y={y} width={[60,40,52][i]} height="2" rx="1" fill={['#2E5A9C','#D4891A','#2E5A9C'][i]} opacity="0.5"/>
      ))}
      {/* Floating AI badge */}
      <rect x="270" y="118" width="40" height="22" rx="6" fill="#D4891A" opacity="0.15" stroke="rgba(212,137,26,0.5)" strokeWidth="1"/>
      <text x="278" y="133" fontSize="9" fontWeight="bold" fill="#D4891A" fontFamily="system-ui">AI</text>
    </svg>
  )
}

const services = [
  {
    illustration: WebIllustration,
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web sur-mesure. Design moderne et responsive pour une expérience utilisateur optimale.',
    href: '/services#web',
    label: 'Web & App',
  },
  {
    illustration: MarketingIllustration,
    title: 'Marketing Digital',
    description: 'Stratégies de croissance, publicité Meta/Google, SEO et gestion des réseaux sociaux pour développer votre audience.',
    href: '/services#marketing',
    label: 'Marketing',
  },
  {
    illustration: BrandingIllustration,
    title: 'Branding & Identité',
    description: 'Logo, charte graphique et supports marketing. Une identité visuelle forte qui reflète vos valeurs et votre vision.',
    href: '/services#branding',
    label: 'Branding',
  },
  {
    illustration: AIIllustration,
    title: 'Solutions IA',
    description: 'Automatisation intelligente, chatbots et intégrations IA pour optimiser vos processus et gagner en efficacité.',
    href: '/services#ia',
    label: 'Intelligence Artificielle',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#2E5A9C' }}>
            Nos services
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0D1B2E' }}>
            Des solutions complètes pour votre croissance
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#64748B' }}>
            Nous accompagnons les PME et startups africaines dans leur transformation digitale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div
                className="h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ border: '1px solid #E2E8F0' }}
              >
                {/* Illustration background */}
                <div className="h-44 overflow-hidden">
                  <service.illustration />
                </div>

                {/* Text content */}
                <div className="p-5 bg-white">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2E5A9C' }}>
                    {service.label}
                  </p>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#0D1B2E' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {service.description}
                  </p>
                  <div
                    className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: '#2E5A9C' }}
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
