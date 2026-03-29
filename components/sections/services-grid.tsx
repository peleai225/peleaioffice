import Link from 'next/link'
import { Globe, TrendingUp, Palette, Cpu, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nos services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Des solutions complètes pour votre croissance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous accompagnons les PME et startups africaines dans leur transformation digitale.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
