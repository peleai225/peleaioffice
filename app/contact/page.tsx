import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { ContactInfoSection } from '@/components/contact/contact-info-section'
import { ContactWhatsAppCta } from '@/components/contact/contact-whatsapp-cta'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez PeleAI pour discuter de votre projet digital. Création web, marketing, branding et solutions IA.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
}

const reasons = [
  {
    title: 'Expertise africaine',
    description: 'Nous comprenons les défis spécifiques du marché africain et adaptons nos solutions en conséquence.',
  },
  {
    title: 'Support réactif',
    description: 'Notre équipe est disponible pour vous accompagner à chaque étape de votre projet.',
  },
  {
    title: 'Solutions sur-mesure',
    description: 'Chaque projet est unique. Nous créons des solutions adaptées à vos besoins et à votre budget.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Parlons de votre{' '}
              <span className="text-primary">projet</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Prêt à transformer votre entreprise ? Contactez-nous pour discuter de vos besoins 
              et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <ContactInfoSection />
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-background p-6 sm:p-8 shadow-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Remplissez le formulaire : un message prérempli s’ouvre dans WhatsApp pour nous
                  transmettre votre demande.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pourquoi choisir PeleAI ?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ hint */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Des questions ?
            </h2>
            <p className="text-muted-foreground mb-6">
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
