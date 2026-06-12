import Link from 'next/link'
import { Globe, TrendingUp, Palette, Cpu, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web sur-mesure avec un design moderne, rapide et responsive.',
    href: '/services#web',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Stratégies de croissance, publicité Meta/Google, SEO et gestion des réseaux sociaux.',
    href: '/services#marketing',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Palette,
    title: 'Branding & Identité',
    description: 'Logo, charte graphique et supports marketing. Une identité visuelle qui marque les esprits.',
    href: '/services#branding',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Cpu,
    title: 'Solutions IA',
    description: 'Automatisation intelligente, chatbots et intégrations IA pour optimiser vos processus business.',
    href: '/services#ia',
    color: 'bg-orange-50 text-orange-600',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Nos Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight">
            Des solutions complètes pour votre croissance digitale
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Nous accompagnons les PME et startups africaines dans leur transformation digitale avec des services innovants.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className="group"
            >
              <div
                className="h-full bg-card rounded-2xl p-7 shadow-sm shadow-black/[0.04] border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/[0.08] hover:-translate-y-2 hover:border-accent/20 text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Link */}
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
