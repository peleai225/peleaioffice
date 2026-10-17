import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ArcCorner } from './arc'

/**
 * Carte : bordure fine, aucune ombre au repos. Avec `href`, toute la carte est cliquable,
 * s'élève légèrement au survol et l'arc ambre se dessine dans l'angle.
 */
export function Card({
  href,
  className,
  children,
  padding = 'md',
}: {
  href?: string
  className?: string
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
}) {
  const classes = cn(
    'relative overflow-hidden rounded-card border border-line bg-white text-ink',
    padding === 'sm' && 'p-5',
    padding === 'md' && 'p-6 sm:p-8',
    padding === 'lg' && 'p-8 sm:p-10',
    href &&
      'group block transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift focus-visible:-translate-y-1',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        <ArcCorner />
        {children}
      </Link>
    )
  }
  return <div className={classes}>{children}</div>
}
