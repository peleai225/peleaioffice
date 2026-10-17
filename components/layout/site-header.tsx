'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArcWatermark, Button, Logo } from '@/components/ui'
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from '@/components/site/icons'
import { contact, mainNav, primaryCta, whatsappUrl } from '@/content/site'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    requestAnimationFrame(() => toggleRef.current?.focus())
  }, [])

  // Ferme le menu quand la page change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Menu ouvert : défilement bloqué, focus piégé, Échap pour fermer.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300',
        scrolled ? 'bg-paper/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[76px]">
        <Logo href="/" height={40} priority className="-ml-1 p-1" />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative rounded-full px-4 py-2 font-display text-[0.9375rem] font-medium transition-colors',
                      active ? 'text-brand' : 'text-ink hover:text-brand',
                      'after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-300',
                      active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href={primaryCta.href} size="sm" className="hidden sm:inline-flex">
            {primaryCta.label}
          </Button>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-11 place-items-center rounded-full text-brand transition-colors hover:bg-brand-100 lg:hidden"
          >
            <WhatsAppIcon className="size-5" />
            <span className="sr-only">Écrire sur WhatsApp (nouvel onglet)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-brand-100 lg:hidden"
          >
            <MenuIcon className="size-6" />
            <span className="sr-only">Ouvrir le menu</span>
          </button>
        </div>
      </div>

      {open &&
        createPortal(
        <div
          ref={panelRef}
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="tone-night fixed inset-0 z-50 flex flex-col overflow-y-auto lg:hidden"
        >
          <ArcWatermark className="-bottom-28 -left-28 w-[min(110vw,520px)] text-brand-400" corner="tr" peak={0.12} />
          <div className="container-site flex h-16 shrink-0 items-center justify-between">
            <Logo href="/" variant="light" height={34} className="-ml-1 p-1" />
            <button
              type="button"
              onClick={close}
              className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <CloseIcon className="size-6" />
              <span className="sr-only">Fermer le menu</span>
            </button>
          </div>
          <nav aria-label="Navigation principale" className="container-site flex flex-1 flex-col justify-center py-10">
            <ul className="grid gap-1">
              {[{ label: 'Accueil', href: '/' }, ...mainNav, { label: 'Contact', href: '/contact' }].map((item) => {
                const active = item.href === '/' ? pathname === '/' : isActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'block py-2 font-display text-[2rem] font-semibold leading-tight tracking-tight transition-colors',
                        active ? 'text-cta' : 'text-white hover:text-brand-200',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="container-site grid gap-4 pb-10">
            <Button href={primaryCta.href} size="lg" arrow className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button href={whatsappUrl()} variant="outline-light" icon={<WhatsAppIcon className="size-4" />}>
                WhatsApp
              </Button>
              <Button href={contact.phoneHref} variant="outline-light" icon={<PhoneIcon className="size-4" />}>
                Appeler
              </Button>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </header>
  )
}
