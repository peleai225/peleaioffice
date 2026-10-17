import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'link'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-display font-semibold transition-[transform,background-color,color,box-shadow] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50'

const variants: Record<Variant, string> = {
  /** Ambre : l'unique accent, réservé à l'action principale de l'écran. */
  primary: 'rounded-full bg-cta text-night hover:bg-cta-hover hover:-translate-y-0.5',
  secondary: 'rounded-full bg-brand text-white hover:bg-brand-700 hover:-translate-y-0.5',
  outline:
    'rounded-full text-brand shadow-[inset_0_0_0_1.5px_var(--brand-600)] hover:bg-brand hover:text-white hover:-translate-y-0.5',
  'outline-light':
    'rounded-full text-white shadow-[inset_0_0_0_1.5px_rgb(255_255_255/0.45)] hover:bg-white hover:text-night hover:-translate-y-0.5',
  link: 'rounded-sm text-brand underline decoration-brand-300 decoration-2 underline-offset-[6px] hover:decoration-brand',
}

const sizes: Record<Size, string> = {
  sm: 'min-h-10 px-4 text-[0.9375rem]',
  md: 'min-h-12 px-6 text-base',
  lg: 'min-h-14 px-7 text-[1.0625rem]',
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-[1.1em] shrink-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
    >
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

type CommonProps = {
  variant?: Variant
  size?: Size
  /** Flèche animée au survol, pour les appels à l'action qui mènent ailleurs. */
  arrow?: boolean
  icon?: ReactNode
  className?: string
  children: ReactNode
}

type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<ComponentProps<'button'>, 'className' | 'children'>

export function buttonClasses({ variant = 'primary', size = 'md', className }: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], variant !== 'link' && sizes[size], className)
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', arrow, icon, className, children, ...rest } = props
  const classes = buttonClasses({ variant, size, className })
  const content = (
    <>
      {icon}
      {children}
      {arrow && <Arrow />}
    </>
  )

  if (rest.href !== undefined) {
    const { href, ...linkProps } = rest as ButtonAsLink
    const external = /^(https?:|mailto:|tel:)/.test(href)
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    )
  }

  const { type = 'button', ...buttonProps } = rest as ButtonAsButton
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  )
}
