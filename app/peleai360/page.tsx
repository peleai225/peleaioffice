import type { Metadata } from 'next'
import Link from 'next/link'
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
  Play,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DemoForm } from '@/components/forms/demo-form'

export const metadata: Metadata = {
  title: 'PeleAI360 - Votre assistant digital tout-en-un',
  description:
    "PeleAI360 : CRM, facturation, automatisation marketing et reporting. Produit SaaS développé par PeleAI pour les PME et équipes en Afrique.",
  alternates: { canonical: '/peleai360' },
  openGraph: { url: '/peleai360' },
}

const features = [
  {
    icon: Users,
    title: 'Gestion des clients (CRM)',
    description: 'Centralisez toutes vos interactions clients, suivez vos prospects et fidélisez votre clientèle.',
  },
  {
    icon: MessageSquare,
    title: 'Automatisation marketing',
    description: 'Envoyez des campagnes email et SMS automatisées basées sur le comportement de vos clients.',
  },
  {
    icon: BarChart3,
    title: 'Analyse & Reporting',
    description: 'Tableaux de bord en temps réel pour suivre vos KPIs et prendre des décisions éclairées.',
  },
  {
    icon: FileText,
    title: 'Facturation simplifiée',
    description: 'Créez des devis et factures professionnels en quelques clics. Suivez vos paiements facilement.',
  },
  {
    icon: Settings,
    title: 'Gestion des tâches',
    description: 'Organisez votre équipe avec un système de tâches collaboratif et des rappels automatiques.',
  },
  {
    icon: Plug,
    title: 'Intégrations multiples',
    description: 'Connectez PeleAI360 à vos outils favoris : WhatsApp, email, mobile money, et plus encore.',
  },
]

const benefits = [
  {
    icon: Clock,
    title: '10h gagnées par semaine',
    description: 'Automatisez les tâches répétitives et concentrez-vous sur votre croissance.',
  },
  {
    icon: TrendingUp,
    title: '+45% de conversion',
    description: 'Améliorez votre suivi client et ne laissez plus aucune opportunité vous échapper.',
  },
  {
    icon: Shield,
    title: 'Données sécurisées',
    description: 'Vos informations sont protégées avec les meilleurs standards de sécurité.',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Inscription',
    description: 'Créez votre compte en quelques minutes et importez vos données existantes.',
  },
  {
    step: '2',
    title: 'Configuration',
    description: 'Personnalisez l\'outil selon vos besoins avec l\'aide de notre équipe.',
  },
  {
    step: '3',
    title: 'Utilisation',
    description: 'Profitez d\'une plateforme intuitive et d\'un support disponible 24/7.',
  },
]

const painPoints = [
  'Vous perdez du temps avec des tâches administratives répétitives ?',
  'Vos informations clients sont dispersées dans plusieurs outils ?',
  'Vous n\'avez pas de visibilité claire sur vos performances ?',
  'Vous manquez des opportunités de vente par manque de suivi ?',
]

export default function PeleAI360Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
                <Zap className="h-4 w-4" />
                Produit SaaS · PeleAI
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                PeleAI<span className="text-primary">360</span>
              </h1>
              
              <p className="mt-2 text-xl text-muted-foreground">
                Votre assistant digital tout-en-un
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Au même titre que{" "}
                <a
                  href="https://menupro.ci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline-offset-4 hover:underline"
                >
                  MenuPro
                </a>{" "}
                pour la restauration, PeleAI360 centralise CRM, facturation et pilotage pour votre
                entreprise. Simplifiez, automatisez, croissez.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <a href="#demo">
                    Demander une démo gratuite
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="#features">
                    <Play className="h-4 w-4" />
                    Voir les fonctionnalités
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Essai gratuit 14 jours
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Sans engagement
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
                <div className="rounded-xl bg-foreground/95 p-4 sm:p-6">
                  {/* Header bar */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-destructive/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-background/50">PeleAI360 Dashboard</span>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-32 rounded bg-background/20" />
                      <div className="h-8 w-24 rounded bg-primary/40" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Clients', value: '1,247' },
                        { label: 'Revenus', value: '5.2M' },
                        { label: 'Tâches', value: '23' },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-lg bg-background/10 p-3">
                          <div className="text-[10px] text-background/50 mb-1">{stat.label}</div>
                          <div className="text-lg font-bold text-background">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="rounded-lg bg-background/10 p-4">
                      <div className="text-[10px] text-background/50 mb-2">Performance mensuelle</div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 65, 45, 80, 55, 70, 90, 75, 85].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-accent/60"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-background/10 p-3">
                        <div className="text-[10px] text-background/50 mb-2">Dernières activités</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-primary/60" />
                            <div className="h-2 flex-1 rounded bg-background/20" />
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-background/10 p-3">
                        <div className="text-[10px] text-background/50 mb-2">Tâches du jour</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-2 mb-2">
                            <div className="h-3 w-3 rounded border border-background/30" />
                            <div className="h-2 flex-1 rounded bg-background/20" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vous vous reconnaissez ?
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-background p-4 text-left border border-border/50"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <span className="text-sm font-bold">?</span>
                  </div>
                  <p className="text-sm text-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-primary font-medium">
              PeleAI360 est la solution à tous ces problèmes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Fonctionnalités
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Tout ce dont vous avez besoin, au même endroit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une suite complète d&apos;outils pour gérer et développer votre entreprise.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Les résultats parlent d&apos;eux-mêmes
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10 mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Comment ça marche
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Démarrez en 3 étapes simples
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {/* Connector */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] right-0 h-0.5 bg-border" />
                )}
                
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo form section */}
      <section id="demo" className="py-16 lg:py-24 bg-secondary/30 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Essai gratuit
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Prêt à simplifier votre gestion ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Demandez une démonstration personnalisée et découvrez comment PeleAI360 
                peut transformer votre façon de travailler.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Démonstration personnalisée de 30 minutes',
                  'Configuration adaptée à votre secteur',
                  'Essai gratuit de 14 jours',
                  'Support dédié pendant l\'onboarding',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-background p-6 sm:p-8 shadow-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Demander une démo
              </h3>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
