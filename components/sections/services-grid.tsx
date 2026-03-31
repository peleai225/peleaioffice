import Link from 'next/link'
import { Globe, TrendingUp, Palette, Cpu, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web sur-mesure. Design moderne et responsive pour une expérience utilisateur optimale.',
    href: '/services#web',
    accent: '#C1440E',   // terracotta
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Stratégies de croissance, publicité Meta/Google, SEO et gestion des réseaux sociaux pour développer votre audience.',
    href: '/services#marketing',
    accent: '#D4891A',   // gold
  },
  {
    icon: Palette,
    title: 'Branding & Identité',
    description: 'Logo, charte graphique et supports marketing. Une identité visuelle forte qui reflète vos valeurs et votre vision.',
    href: '/services#branding',
    accent: '#1B3A6B',   // deep navy
  },
  {
    icon: Cpu,
    title: 'Solutions IA',
    description: 'Automatisation intelligente, chatbots et intégrations IA pour optimiser vos processus et gagner en efficacité.',
    href: '/services#ia',
    accent: '#8B5A00',   // dark amber
  },
]

/* ─── Small diamond ornament ──────────────────────────────────────────────── */
function DiamondOrnament({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points="10,5 15,10 10,15 5,10" fill={color} opacity="0.25" />
    </svg>
  )
}

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFAF4' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          {/* Ornamental header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondOrnament color="#D4891A" />
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#C1440E' }}>
              Nos services
            </p>
            <DiamondOrnament color="#D4891A" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
            Des solutions complètes pour votre croissance
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#6B4423' }}>
            Nous accompagnons les PME et startups africaines dans leur transformation digitale.
          </p>

          {/* Kente-inspired underline */}
          <div className="flex justify-center gap-px mt-5 mx-auto w-40 h-1.5 overflow-hidden rounded">
            {['#C1440E', '#D4891A', '#1B3A6B', '#C1440E', '#D4891A', '#8B5A00', '#C1440E', '#D4891A'].map((c, i) => (
              <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Services cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div
                className="h-full rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 relative overflow-hidden border"
                style={{
                  backgroundColor: 'white',
                  borderColor: `${service.accent}22`,
                  borderWidth: '1.5px',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: service.accent }}
                />

                {/* Icon container — diamond shape */}
                <div className="mb-5 mt-2 flex h-13 w-13 items-center justify-center relative">
                  <div
                    className="h-12 w-12 rotate-45 rounded-lg absolute transition-transform duration-300 group-hover:rotate-[50deg]"
                    style={{ backgroundColor: `${service.accent}18` }}
                  />
                  <service.icon
                    className="relative h-6 w-6 transition-colors duration-300"
                    style={{ color: service.accent }}
                  />
                </div>

                <h3
                  className="text-lg font-bold mb-3 transition-colors duration-300"
                  style={{ color: '#1a0a00' }}
                >
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: '#6B4423' }}>
                  {service.description}
                </p>

                {/* Hover CTA */}
                <div
                  className="mt-5 flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.accent }}
                >
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
