import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Plug,
  ArrowRight,
  Check,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  ShoppingBag,
  Globe,
  Server,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DemoForm } from '@/components/forms/demo-form'

export const metadata: Metadata = {
  title: 'PeleAI360 - Votre solution digitale 360° pour le e-commerce',
  description:
    "PeleAI360 : boutique e-commerce professionnelle clé en main à partir de 350.000 FCFA. Hébergement et nom de domaine inclus.",
  alternates: { canonical: '/peleai360' },
  openGraph: { url: '/peleai360' },
}

const features = [
  {
    icon: ShoppingBag,
    title: 'Boutique professionnelle',
    description: 'Un site e-commerce complet, prêt à vendre, avec catalogue produits et panier d\'achat.',
  },
  {
    icon: Globe,
    title: 'Nom de domaine inclus',
    description: 'Votre propre adresse web professionnelle (.com, .ci, etc.) incluse dans l\'offre.',
  },
  {
    icon: Server,
    title: 'Hébergement inclus',
    description: 'Hébergement sécurisé et performant inclus pendant la première année.',
  },
  {
    icon: MessageSquare,
    title: 'Paiements sécurisés',
    description: 'Intégration Mobile Money et autres moyens de paiement adaptés au marché local.',
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord',
    description: 'Suivez vos ventes, clients et performances en temps réel avec un dashboard intuitif.',
  },
  {
    icon: Settings,
    title: 'Gestion simplifiée',
    description: 'Ajoutez et modifiez vos produits facilement, gérez vos commandes et stocks.',
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Livraison rapide',
    description: 'Votre boutique en ligne opérationnelle en quelques jours seulement.',
  },
  {
    icon: TrendingUp,
    title: 'Croissance digitale',
    description: 'Développez votre marque et atteignez de nouveaux clients sur internet.',
  },
  {
    icon: Shield,
    title: 'Sécurité garantie',
    description: 'Transactions sécurisées et données protégées avec les meilleurs standards.',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Choisissez',
    description: 'Sélectionnez votre formule et partagez-nous votre vision pour votre boutique.',
  },
  {
    step: '2',
    title: 'On crée',
    description: 'Notre équipe conçoit votre boutique e-commerce professionnelle clé en main.',
  },
  {
    step: '3',
    title: 'Vous vendez',
    description: 'Votre boutique est en ligne ! Commencez à vendre et développez votre business.',
  },
]

export default function PeleAI360Page() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] right-[5%] h-[400px] w-[400px] rounded-full bg-green-500/[0.06] blur-[100px]" />
          <div className="absolute bottom-[5%] left-[10%] h-[300px] w-[300px] rounded-full bg-accent/[0.05] blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-sm text-green-300 mb-6">
                <Zap className="h-4 w-4" />
                Solution e-commerce
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Votre business mérite{' '}
                <span className="text-green-400">une vraie boutique</span>
              </h1>

              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Transformez votre activité en boutique e-commerce professionnelle et développez votre marque. Solution digitale 360° pour le e-commerce africain.
              </p>

              {/* Price */}
              <div className="mt-8 inline-flex items-baseline gap-3 bg-white/[0.06] border border-white/10 rounded-xl px-6 py-4">
                <span className="text-sm text-white/60">À partir de</span>
                <span className="text-3xl font-bold text-green-400">350.000 FCFA</span>
              </div>
              <p className="mt-2 text-sm text-white/40">Hébergement + nom de domaine inclus</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 rounded-lg bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25">
                  <a href="#demo">
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-lg border-white/20 text-white hover:bg-white/10">
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/peleai360-showcase.png"
                  alt="PeleAI 360° - Solution e-commerce"
                  width={700}
                  height={700}
                  className="w-full h-auto"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 50L1440 50L1440 15C1440 15 1200 0 720 0C240 0 0 15 0 15L0 50Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">
              Ce qui est inclus
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight">
              Une boutique complète, clé en main
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Tout est pensé pour que vous puissiez vous concentrer sur votre business.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-7 shadow-sm shadow-black/[0.04] border border-border/50 hover:shadow-xl hover:shadow-green-500/[0.06] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 mb-5 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-green-500/[0.06] blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pourquoi choisir PeleAI 360° ?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 mb-5">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Comment ça marche
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Démarrez en 3 étapes simples
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="grid gap-10 md:grid-cols-3">
              {howItWorks.map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold mb-5 shadow-lg shadow-green-500/20">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section id="demo" className="py-20 lg:py-28 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">
                Lancez votre boutique
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Prêt à vendre en ligne ?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Demandez un devis personnalisé et découvrez comment PeleAI 360°
                peut transformer votre activité en boutique e-commerce professionnelle.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Boutique e-commerce clé en main',
                  'Hébergement + domaine inclus (1ère année)',
                  'Formation à la gestion incluse',
                  'Support technique dédié',
                  'À partir de 350.000 FCFA',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-7 sm:p-9 shadow-xl shadow-black/[0.04] border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Demander un devis
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Réponse garantie sous 24h.
              </p>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
