import type { ComponentProps, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Conteneur du site : 1240 px de contenu, gouttière fluide de 16 à 48 px. */
export function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return <Tag className={cn('container-site', className)}>{children}</Tag>
}

type Tone = 'paper' | 'tint' | 'white' | 'night' | 'brand'
type Space = 'sm' | 'md' | 'lg' | 'none'

const toneClass: Record<Tone, string> = {
  paper: 'tone-paper',
  tint: 'tone-tint',
  white: 'tone-white',
  night: 'tone-night',
  brand: 'tone-brand',
}

const spaceClass: Record<Space, string> = {
  none: '',
  sm: 'section-y-sm',
  md: 'section-y',
  lg: 'section-y-lg',
}

/**
 * Section de page. La tonalité fixe le fond, la couleur du texte et celle du focus :
 * alterner paper / tint pour le rythme, night ou brand pour les moments forts.
 */
export function Section({
  tone = 'paper',
  space = 'md',
  className,
  containerClassName,
  bare = false,
  children,
  ...props
}: {
  tone?: Tone
  space?: Space
  className?: string
  containerClassName?: string
  /** Sans conteneur interne, pour les mises en page pleine largeur. */
  bare?: boolean
  children: ReactNode
} & Omit<ComponentProps<'section'>, 'className' | 'children'>) {
  return (
    <section className={cn('relative isolate overflow-clip', toneClass[tone], spaceClass[space], className)} {...props}>
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
