import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/forms/contact-form'
import { ContactInfoSection } from '@/components/contact/contact-info-section'
import { ContactWhatsAppCta } from '@/components/contact/contact-whatsapp-cta'
import { Shield, Clock, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez PeleAI pour discuter de votre projet digital. Création web, marketing, branding et solutions IA.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
}

const reasons = [
  {
    icon: Lightbulb,
    title: 'Expertise africaine',
    description: 'Nous comprenons les défis spécifiques du marché africain et adaptons nos solutions en conséquence.',
  },
  {
    icon: Clock,
    title: 'Support réactif',
    description: 'Notre équipe est disponible pour vous accompagner à chaque étape de votre projet.',
  },
  {
    icon: Shield,
    title: 'Solutions sur-mesure',
    description: 'Chaque projet est unique. Nous créons des solutions adaptées à vos besoins et à votre budget.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] right-[15%] h-[250px] w-[250px] rounded-full bg-accent/[0.08] blur-[80px]" />
          <div className="absolute bottom-[10%] left-[10%] h-[200px] w-[200px] rounded-full bg-accent/[0.05] blur-[60px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Parlons de votre{' '}
              <span className="text-accent">projet</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Prêt à transformer votre entreprise ? Contactez-nous pour discuter de vos besoins
              et découvrir comment nous pouvons vous aider.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-accent">Contact</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 50L1440 50L1440 15C1440 15 1200 0 720 0C240 0 0 15 0 15L0 50Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <ContactInfoSection />
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-card p-7 sm:p-9 shadow-xl shadow-black/[0.04] border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez le formulaire : un message prérempli s&apos;ouvre dans WhatsApp pour nous
                  transmettre votre demande.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Nos atouts
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pourquoi choisir PeleAI ?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-lg hover:shadow-accent/[0.05] hover:-translate-y-1 transition-all duration-300">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Des questions ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Consultez notre FAQ ou contactez-nous directement. Notre équipe est là pour vous aider.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ContactWhatsAppCta />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
