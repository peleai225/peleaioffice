'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Zap, UtensilsCrossed, User, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSiteContent } from '@/components/providers/site-content-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Contact', href: '/contact' },
]

function solutionIcon(id: string) {
  return id === 'menupro' ? UtensilsCrossed : Zap
}

export function Header() {
  const { content } = useSiteContent()
  const solutions = content.developedSolutions.map((s) => ({
    id: s.id,
    name: s.name,
    href: s.href,
    description: s.tagline,
    icon: solutionIcon(s.id),
  }))
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isSolutionActive = solutions.some(s => pathname === s.href)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'shadow-md'
          : ''
      )}
      style={{
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(46,90,156,0.08)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={content.brand.logoOnWhiteBg || "/images/peleai-logo-on-white.png"}
              alt={`${content.brand.siteName} Logo`}
              width={200}
              height={56}
              className="h-9 w-auto max-w-[min(180px,40vw)] lg:h-10 object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === item.href
                    ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                    : 'text-gray-700 hover:text-[#2E5A9C] hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors outline-none',
                isSolutionActive
                  ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                  : 'text-gray-700 hover:text-[#2E5A9C] hover:bg-gray-50'
              )}>
                Solutions
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-72 p-2 rounded-xl shadow-xl border-gray-100">
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution.id} asChild>
                    <Link href={solution.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                        style={{ backgroundColor: '#2E5A9C' }}
                      >
                        <solution.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{solution.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{solution.description}</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === item.href
                    ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                    : 'text-gray-700 hover:text-[#2E5A9C] hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/portfolio"
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/portfolio'
                  ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                  : 'text-gray-700 hover:text-[#2E5A9C] hover:bg-gray-50'
              )}
            >
              <User className="h-3.5 w-3.5" />
              Portfolio
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <a
              href="tel:+225050805382"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#2E5A9C] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">05 08 05 382</span>
            </a>
            <Button
              asChild
              className="font-semibold rounded-lg text-white"
              style={{ backgroundColor: '#2E5A9C', border: 'none' }}
            >
              <Link href="/contact">Audit Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: 'white', borderColor: 'rgba(46,90,156,0.08)' }}
        >
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Solutions */}
            <div className="px-4 pt-2 pb-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Solutions</p>
            </div>
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  pathname === solution.href
                    ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <solution.icon className="h-4 w-4" style={{ color: '#2E5A9C' }} />
                {solution.name}
              </Link>
            ))}

            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/portfolio"
              className={cn(
                'flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium transition-colors',
                pathname === '/portfolio'
                  ? 'text-[#2E5A9C] bg-[#2E5A9C]/[0.06]'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <User className="h-4 w-4" />
              Portfolio
            </Link>

            <div className="pt-3 px-4 space-y-3">
              <a
                href="tel:+225050805382"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-medium text-[#2E5A9C] bg-[#2E5A9C]/[0.06]"
              >
                <Phone className="h-4 w-4" />
                +225 05 08 05 382
              </a>
              <Button
                asChild
                className="w-full font-semibold rounded-lg text-white"
                style={{ backgroundColor: '#2E5A9C', border: 'none' }}
              >
                <Link href="/contact">Audit Gratuit</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
