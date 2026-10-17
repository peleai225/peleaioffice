import Link from 'next/link'
import { ArcWatermark, Logo } from '@/components/ui'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, socialIcons } from '@/components/site/icons'
import { services } from '@/content/services'
import { contact, legalNav, mainNav, site, social, whatsappUrl } from '@/content/site'

const linkClass = 'rounded-sm text-brand-200 transition-colors hover:text-white'

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid content-start gap-4">
      <h2 className="font-display text-label font-medium uppercase text-brand-300">{title}</h2>
      {children}
    </div>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="tone-night relative isolate overflow-hidden">
      <ArcWatermark className="-right-24 -top-24 w-[min(90vw,640px)] text-brand-400" corner="bl" peak={0.08} />
      <div className="container-site grid gap-14 pb-10 pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="grid content-start gap-6">
            <Logo variant="light" height={44} />
            <p className="max-w-sm text-brand-200">
              Agence de transformation digitale à {site.city}. Sites internet, contenus, formations et solutions d’intelligence
              artificielle pour les PME, institutions et entrepreneurs d’Afrique francophone.
            </p>
            <ul className="flex gap-2" aria-label="Réseaux sociaux">
              {social.map((s) => {
                const Icon = socialIcons[s.platform]
                return (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-11 place-items-center rounded-full text-brand-200 shadow-[inset_0_0_0_1px_rgb(157_180_221/0.25)] transition-colors hover:bg-white hover:text-night"
                    >
                      <Icon className="size-[18px]" />
                      <span className="sr-only">{s.label} (nouvel onglet)</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <Column title="Services">
              <ul className="grid gap-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className={linkClass}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>
            <Column title="L’agence">
              <ul className="grid gap-3">
                {[...mainNav.filter((n) => n.href !== '/services'), { label: 'Contact', href: '/contact' }].map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className={linkClass}>
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>
            <Column title="Nous joindre">
              <ul className="grid gap-3">
                <li>
                  <a href={contact.phoneHref} className={`${linkClass} inline-flex items-center gap-2.5`}>
                    <PhoneIcon className="size-4 shrink-0" />
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} inline-flex items-center gap-2.5`}
                  >
                    <WhatsAppIcon className="size-4 shrink-0" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className={`${linkClass} inline-flex items-center gap-2.5 break-all`}>
                    <MailIcon className="size-4 shrink-0" />
                    {contact.email}
                  </a>
                </li>
                <li className="inline-flex items-start gap-2.5 text-brand-200">
                  <PinIcon className="mt-1 size-4 shrink-0" />
                  {contact.address}
                </li>
              </ul>
            </Column>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-8 text-small text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.slogan}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={linkClass}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
