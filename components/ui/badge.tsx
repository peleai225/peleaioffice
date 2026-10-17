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

/** Marque visible d'un contenu manquant : `[À REMPLACER : …]`. */
export function Todo({ children }: { children: ReactNode }) {
  return <Badge variant="todo">[À REMPLACER : {children}]</Badge>
}
