import type { Metadata } from 'next'
import { Button, Card, Section, Todo } from '@/components/ui'
import { ProjectForm } from '@/components/forms/project-form'
import { PageHero } from '@/components/sections/page-hero'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/site/icons'
import { contact, site, whatsappUrl } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez PeleAI à Abidjan : devis gratuit pour votre site internet, solution IA, création de contenu ou formation. Réponse rapide, par email ou WhatsApp.',
  alternates: { canonical: '/contact' },
}

type Props = { searchParams: Promise<{ objet?: string }> }

export default async function ContactPage({ searchParams }: Props) {
  const { objet } = await searchParams

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact', href: '/contact' }]}
        eyebrow="Contact"
        title="Parlons de votre projet."
        lead={`Décrivez votre besoin en quelques lignes. ${site.responseTime}, avec des questions précises puis un devis gratuit.`}
      />

      <Section tone="tint" aria-label="Formulaire et coordonnées">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          <Card padding="lg" className="self-start lg:col-span-7">
            <ProjectForm defaultSubject={objet} />
          </Card>

          <div className="grid content-start gap-6 lg:col-span-5">
            <Card padding="lg" className="relative isolate grid gap-5 overflow-hidden border-0 bg-night text-white">
              <p className="font-display text-label font-medium uppercase text-brand-300">Le plus rapide</p>
              <p className="font-display text-h3 font-semibold">Écrivez-nous sur WhatsApp, nous répondons pendant les heures d’ouverture.</p>
              <div>
                <Button href={whatsappUrl()} size="lg" icon={<WhatsAppIcon className="size-5" />}>
                  Ouvrir WhatsApp
                </Button>
              </div>
            </Card>

            <Card className="grid gap-5">
              <ul className="grid gap-4">
                <li>
                  <a href={contact.phoneHref} className="group flex items-center gap-4 rounded-field">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-100 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <PhoneIcon className="size-5" />
                    </span>
                    <span className="grid">
                      <span className="text-small text-ink-soft">Téléphone</span>
                      <span className="font-semibold text-ink">{contact.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 rounded-field">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-100 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <MailIcon className="size-5" />
                    </span>
                    <span className="grid min-w-0">
                      <span className="text-small text-ink-soft">Email</span>
                      <span className="break-all font-semibold text-ink">{contact.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-100 text-brand">
                    <PinIcon className="size-5" />
                  </span>
                  <span className="grid">
                    <span className="text-small text-ink-soft">Adresse</span>
                    <span className="font-semibold text-ink">{contact.address}</span>
                  </span>
                </li>
              </ul>
              <div className="grid gap-2 border-t border-line pt-5">
                <p className="font-display text-label font-medium uppercase text-ink-soft">Horaires</p>
                <dl className="grid gap-1">
                  {contact.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <dt className="text-ink-soft">{h.days}</dt>
                      <dd className="font-semibold tabular-nums text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>

            <div className="overflow-hidden rounded-card border border-line bg-white">
              <iframe
                title="Carte : PeleAI à Abidjan"
                src="https://www.google.com/maps?q=Abidjan%2C%20C%C3%B4te%20d%E2%80%99Ivoire&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full border-0"
              />
              <p className="p-4">
                <Todo>adresse précise du bureau pour centrer la carte</Todo>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
