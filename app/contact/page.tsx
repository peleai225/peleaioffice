import type { Metadata } from 'next'
import { Globe, Zap, Target, CheckCircle } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'
import { ContactInfoSection } from '@/components/contact/contact-info-section'
import { ContactWhatsAppCta } from '@/components/contact/contact-whatsapp-cta'

export const metadata: Metadata = {
  title: 'Contactez-nous — Audit Gratuit de votre Présence Digitale',
  description: 'Contactez PeleAI à Abidjan pour un audit gratuit de votre présence digitale. Création web, marketing digital, branding et IA. Réponse sous 24h. +225 05 08 05 382.',
  keywords: ['contact agence digitale Abidjan', 'audit digital gratuit', 'devis site web Côte d\'Ivoire', 'PeleAI contact'],
  alternates: { canonical: '/contact' },
  openGraph: {
    url: '/contact',
    title: 'Contactez PeleAI — Audit Gratuit | Abidjan',
    description: 'Obtenez un audit gratuit de votre présence digitale. Réponse sous 24h.',
  },
}

const reasons = [
  {
    icon: Globe,
    accent: '#2E5A9C',
    title: 'Expertise africaine',
    description: 'Nous comprenons les défis spécifiques du marché africain et adaptons nos solutions en conséquence.',
  },
  {
    icon: Zap,
    accent: '#D4891A',
    title: 'Support réactif',
    description: "Notre équipe est disponible pour vous accompagner à chaque étape de votre projet. Réponse sous 24h.",
  },
  {
    icon: Target,
    accent: '#1B3A6B',
    title: 'Solutions sur-mesure',
    description: "Chaque projet est unique. Nous créons des solutions adaptées à vos besoins et à votre budget.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero — dark navy + African pattern */}
      <section
        className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{ backgroundColor: '#0D1B2E' }}
      >
        {/* Subtle geo texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,5 75,25 75,55 40,75 5,55 5,25" fill="none" stroke="white" strokeWidth="1"/>
                <polygon points="40,20 60,30 60,50 40,60 20,50 20,30" fill="none" stroke="white" strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-geo)"/>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4891A]"/>
              <div className="h-2 w-2 rotate-45 bg-[#D4891A]"/>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4891A]"/>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F5A470' }}>
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
              Parlons de votre{' '}
              <span style={{ color: '#F5A470' }}>projet</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Prêt à transformer votre entreprise ? Contactez-nous pour discuter de vos besoins
              et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              {['Réponse sous 24h', 'Audit gratuit', '10+ entreprises accompagnées'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ backgroundColor: 'rgba(193,68,14,0.2)', border: '1px solid rgba(193,68,14,0.4)', color: '#F5A470' }}
                >
                  <CheckCircle className="h-3.5 w-3.5 shrink-0" style={{ color: '#D4891A' }} /> {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFAF4' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <ContactInfoSection />
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl p-6 sm:p-8 shadow-xl"
                style={{ backgroundColor: 'white', border: '1.5px solid #C1440E22' }}
              >
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a0a00' }}>
                  Envoyez-nous un message
                </h2>
                <p className="mb-6 text-sm" style={{ color: '#6B4423' }}>
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
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F5EDD8' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#1a0a00' }}>
                Pourquoi choisir PeleAI ?
              </h2>
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl p-6 text-center"
                style={{ backgroundColor: 'white', border: `1.5px solid ${reason.accent}22` }}
              >
                {/* Top accent */}
                <div className="h-1 rounded mb-6" style={{ backgroundColor: reason.accent }} />
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${reason.accent}15`, color: reason.accent }}>
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a0a00' }}>
                  {reason.title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: '#6B4423' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ hint */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#FFFAF4' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a0a00' }}>
              Des questions ?
            </h2>
            <p className="mb-6" style={{ color: '#6B4423' }}>
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
