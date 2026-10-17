import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SplitText } from './motion'

type Level = 1 | 2 | 3 | 4
type Size = 'display' | 'h1' | 'h2' | 'h3'

const sizeClass: Record<Size, string> = {
  display: 'text-display font-bold',
  h1: 'text-h1 font-bold',
  h2: 'text-h2 font-semibold',
  h3: 'text-h3 font-semibold',
}

const defaultSize: Record<Level, Size> = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h3' }

/**
 * Titre. Le niveau (balise) et la taille sont indépendants : un seul h1 par page,
 * mais un h2 peut prendre la taille display si la mise en page le demande.
 */
export function Heading({
  level = 2,
  size,
  tone = 'brand',
  id,
  split = true,
  className,
  children,
}: {
  level?: Level
  size?: Size
  /** brand sur fond clair, inherit sur fond nuit ou bleu. */
  tone?: 'brand' | 'ink' | 'inherit'
  id?: string
  /** Révélation mot par mot à l'entrée dans l'écran (texte simple uniquement). */
  split?: boolean
  className?: string
  children: ReactNode
}) {
  const Tag = `h${level}` as const
  const content = split && typeof children === 'string' ? <SplitText text={children} /> : children
  return (
    <Tag
      id={id}
      className={cn(
        'font-display',
        sizeClass[size ?? defaultSize[level]],
        tone === 'brand' && 'text-brand',
        tone === 'ink' && 'text-ink',
        className,
      )}
    >
      {content}
    </Tag>
  )
}

/** Étiquette au-dessus d'un titre : situe la section, ne la décore pas. */
export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn('font-display text-label font-medium uppercase text-ink-soft', className)}>{children}</p>
  )
}

/** Paragraphe d'introduction, sous un titre. */
export function Lead({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn('text-measure text-lead text-ink-soft', className)}>{children}</p>
}

/** Bloc de titre de section : étiquette, titre, introduction. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  level = 2,
  align = 'start',
  titleTone,
  className,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  id?: string
  level?: Level
  align?: 'start' | 'center'
  titleTone?: 'brand' | 'ink' | 'inherit'
  className?: string
}) {
  return (
    <div className={cn('grid gap-4', align === 'center' && 'justify-items-center text-center', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading level={level} id={id} tone={titleTone} className="max-w-[22ch]">
        {title}
      </Heading>
      {lead && <Lead>{lead}</Lead>}
    </div>
  )
}
