import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'neutral' | 'brand' | 'accent' | 'outline' | 'todo'

const variants: Record<Variant, string> = {
  neutral: 'bg-brand-100 text-brand-800',
  brand: 'bg-brand text-white',
  accent: 'bg-cta-soft text-night',
  outline: 'shadow-[inset_0_0_0_1px_var(--line)] text-ink-soft',
  /** Contenu provisoire, à remplacer avant la mise en ligne. */
  todo: 'bg-[#fbe7e5] text-danger',
}

export function Badge({ variant = 'neutral', className, children }: { variant?: Variant; className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-field px-2.5 py-1 font-display text-[0.8125rem] font-medium leading-none',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

/**
 * Marque d'un contenu manquant : `[À REMPLACER : …]`.
 * Visible en développement ; masquée sur le site public, sauf si NEXT_PUBLIC_SHOW_TODOS=true
 * (à poser sur les prévisualisations Vercel pour relire ce qui manque).
 */
export function Todo({ children }: { children: ReactNode }) {
  const visible = process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_TODOS === 'true'
  if (!visible) return null
  return <Badge variant="todo">[À REMPLACER : {children}]</Badge>
}
