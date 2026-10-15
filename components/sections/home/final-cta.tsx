import { ArcWatermark, Button, Magnetic, Section } from '@/components/ds'
import { PhoneIcon, WhatsAppIcon } from '@/components/site/icons'
import { finalCta } from '@/content/home'
import { contact, primaryCta, site, whatsappUrl } from '@/content/site'

/** Bandeau d'appel à l'action de fin de page. Titre et texte personnalisables par page. */
export function FinalCta({
  title = finalCta.title,
  text = finalCta.text,
  cta = primaryCta,
  whatsappMessage,
}: {
  title?: string
  text?: string
  cta?: { label: string; href: string }
  whatsappMessage?: string
}) {
  return (
    <Section tone="brand" space="lg" aria-labelledby="cta-titre">
      <ArcWatermark className="bloom -right-24 -top-24 w-[min(95vw,720px)] text-white" corner="bl" peak={0.1} count={5} />
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
        <div className="grid gap-6 lg:col-span-7">
          <h2 id="cta-titre" className="max-w-[16ch] font-display text-h1 font-bold text-white">
            {title}
          </h2>
          <p className="text-measure text-lead text-brand-100">{text}</p>
        </div>
        <div className="grid gap-4 lg:col-span-5">
          <Magnetic className="sm:justify-self-start">
            <Button href={cta.href} size="lg" arrow className="w-full sm:w-auto">
              {cta.label}
            </Button>
          </Magnetic>
          <div className="flex flex-wrap gap-3">
            <Button href={whatsappUrl(whatsappMessage)} variant="outline-light" icon={<WhatsAppIcon className="size-4" />}>
              Écrire sur WhatsApp
            </Button>
            <Button href={contact.phoneHref} variant="outline-light" icon={<PhoneIcon className="size-4" />}>
              {contact.phoneDisplay}
            </Button>
          </div>
          <p className="text-small text-brand-100">{site.responseTime}</p>
        </div>
      </div>
    </Section>
  )
}
