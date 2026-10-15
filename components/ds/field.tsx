import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const control =
  'block w-full rounded-field border border-line bg-white px-4 text-body text-ink placeholder:text-ink-soft/70 transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/25 aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger/20 disabled:cursor-not-allowed disabled:bg-tint'

/**
 * Champ de formulaire accessible : libellé explicite, aide et erreur reliées par aria-describedby,
 * erreur annoncée (role="alert"). Cible tactile de 48 px minimum.
 */
export function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
}: {
  id: string
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  children: (aria: { id: string; 'aria-describedby'?: string; 'aria-invalid'?: true; required?: boolean }) => ReactNode
  className?: string
}) {
  const hintId = hint ? `${id}-aide` : undefined
  const errorId = error ? `${id}-erreur` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined
  return (
    <div className={cn('grid gap-2', className)}>
      <label htmlFor={id} className="font-display text-[0.9375rem] font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-ink-soft"> (facultatif)</span>
        )}
      </label>
      {children({ id, 'aria-describedby': describedBy, 'aria-invalid': error ? true : undefined, required })}
      {hint && (
        <p id={hintId} className="text-small text-ink-soft">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="flex items-start gap-2 text-small font-semibold text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return <input className={cn(control, 'min-h-12', className)} {...props} />
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return <textarea className={cn(control, 'min-h-36 py-3 leading-relaxed', className)} {...props} />
}

export function Select({ className, children, ...props }: ComponentProps<'select'>) {
  return (
    <div className="relative">
      <select className={cn(control, 'min-h-12 appearance-none pr-11', className)} {...props}>
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-brand"
      >
        <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  )
}
