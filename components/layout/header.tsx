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
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo prévu pour fond blanc / clair */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={content.brand.logoOnWhiteBg || "/images/peleai-logo-on-white.png"}
              alt={`${content.brand.siteName} Logo`}
              width={200}
              height={56}
              className="h-9 w-auto max-w-[min(200px,42vw)] lg:h-10 object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none',
                isSolutionActive ? 'text-primary' : 'text-foreground/80'
              )}>
                Solutions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64">
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution.id} asChild>
                    <Link href={solution.href} className="flex items-start gap-3 p-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <solution.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{solution.name}</p>
                        <p className="text-xs text-muted-foreground">{solution.description}</p>
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
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                pathname === '/portfolio'
                  ? 'text-primary'
                  : 'text-foreground/80'
              )}
            >
              <User className="h-4 w-4" />
              Portfolio
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button asChild>
              <Link href="/contact">Audit Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
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
              <nav className="mt-8 flex flex-col gap-4">
                {navigation.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary py-2',
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground/80'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Solutions Section */}
                <div className="py-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solutions</p>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.id}
                      href={solution.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center gap-3 text-base font-medium transition-colors hover:text-primary py-2 pl-2',
                        pathname === solution.href
                          ? 'text-primary'
                          : 'text-foreground/80'
                      )}
                    >
                      <solution.icon className="h-4 w-4" />
                      {solution.name}
                    </Link>
                  ))}
                </div>

                {navigation.slice(2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary py-2',
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground/80'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary py-2',
                    pathname === '/portfolio'
                      ? 'text-primary'
                      : 'text-foreground/80'
                  )}
                >
                  <User className="h-4 w-4" />
                  Portfolio
                </Link>

                <Button asChild className="mt-4 w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Audit Gratuit
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
