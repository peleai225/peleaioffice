'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown, Zap, UtensilsCrossed, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSiteContent } from '@/components/providers/site-content-provider'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
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
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolutionActive = solutions.some(s => pathname === s.href)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/[0.05] border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center relative h-9 lg:h-10">
            {/* Logo sombre (affiché quand scrollé / fond blanc) */}
            <Image
              src={content.brand.logoOnWhiteBg || "/images/peleai-logo-on-white.png"}
              alt={`${content.brand.siteName} Logo`}
              width={200}
              height={56}
              className={cn(
                "h-9 w-auto max-w-[min(200px,42vw)] lg:h-10 object-contain object-left transition-opacity duration-300",
                isScrolled ? "opacity-100" : "opacity-0"
              )}
              priority
              unoptimized
            />
            {/* Logo blanc (affiché quand en haut / fond sombre) */}
            <Image
              src={content.brand.logoOnBlueBg || "/images/peleai-logo-on-blue.png"}
              alt={`${content.brand.siteName} Logo`}
              width={200}
              height={56}
              className={cn(
                "absolute inset-0 h-9 w-auto max-w-[min(200px,42vw)] lg:h-10 object-contain object-left transition-opacity duration-300",
                isScrolled ? "opacity-0" : "opacity-100"
              )}
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
                  'px-4 py-2 text-sm font-medium transition-all rounded-lg',
                  pathname === item.href
                    ? isScrolled ? 'text-accent' : 'text-white'
                    : isScrolled ? 'text-foreground/70 hover:text-accent' : 'text-white/80 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-lg outline-none',
                isSolutionActive
                  ? isScrolled ? 'text-accent' : 'text-white'
                  : isScrolled ? 'text-foreground/70 hover:text-accent' : 'text-white/80 hover:text-white'
              )}>
                Solutions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 rounded-xl p-2 shadow-xl">
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution.id} asChild>
                    <Link href={solution.href} className="flex items-start gap-3 p-3 rounded-lg">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <solution.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{solution.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{solution.description}</p>
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
                  'px-4 py-2 text-sm font-medium transition-all rounded-lg',
                  pathname === item.href
                    ? isScrolled ? 'text-accent' : 'text-white'
                    : isScrolled ? 'text-foreground/70 hover:text-accent' : 'text-white/80 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/portfolio"
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-lg',
                pathname === '/portfolio'
                  ? isScrolled ? 'text-accent' : 'text-white'
                  : isScrolled ? 'text-foreground/70 hover:text-accent' : 'text-white/80 hover:text-white'
              )}
            >
              <User className="h-4 w-4" />
              Portfolio
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button asChild className="rounded-lg h-10 px-6 bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20">
              <Link href="/contact">Audit Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={cn("h-10 w-10", !isScrolled && "text-white hover:bg-white/10")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={content.brand.logoOnWhiteBg || "/images/peleai-logo-on-white.png"}
                    alt={`${content.brand.siteName} Logo`}
                    width={180}
                    height={48}
                    className="h-8 w-auto max-w-[200px] object-contain object-left"
                    unoptimized
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {navigation.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-base font-medium px-4 py-3 rounded-xl transition-all',
                      pathname === item.href
                        ? 'text-accent bg-accent/5'
                        : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="py-3 px-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Solutions</p>
                  <div className="flex flex-col gap-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.id}
                        href={solution.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-3 text-sm font-medium px-3 py-2.5 rounded-lg transition-all',
                          pathname === solution.href
                            ? 'text-accent bg-accent/5'
                            : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                        )}
                      >
                        <solution.icon className="h-4 w-4 text-accent" />
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {navigation.slice(2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-base font-medium px-4 py-3 rounded-xl transition-all',
                      pathname === item.href
                        ? 'text-accent bg-accent/5'
                        : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-2 text-base font-medium px-4 py-3 rounded-xl transition-all',
                    pathname === '/portfolio'
                      ? 'text-accent bg-accent/5'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                  )}
                >
                  <User className="h-4 w-4" />
                  Portfolio
                </Link>

                <div className="mt-6 px-4">
                  <Button asChild className="w-full rounded-lg bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Audit Gratuit
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
