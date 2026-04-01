import Link from 'next/link'
import { Globe, TrendingUp, Palette, Cpu, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web sur-mesure. Design moderne et responsive pour une expérience utilisateur optimale.',
    href: '/services#web',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Stratégies de croissance, publicité Meta/Google, SEO et gestion des réseaux sociaux pour développer votre audience.',
    href: '/services#marketing',
  },
  {
    icon: Palette,
    title: 'Branding & Identité',
    description: 'Logo, charte graphique et supports marketing. Une identité visuelle forte qui reflète vos valeurs et votre vision.',
    href: '/services#branding',
  },
  {
    icon: Cpu,
    title: 'Solutions IA',
    description: 'Automatisation intelligente, chatbots et intégrations IA pour optimiser vos processus et gagner en efficacité.',
    href: '/services#ia',
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div
                className="h-full rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgba(46,90,156,0.1)' }}
                >
                  <service.icon className="h-5 w-5" style={{ color: '#2E5A9C' }} />
                </div>

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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
