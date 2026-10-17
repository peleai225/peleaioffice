import Link from 'next/link'
import { getSiteUrl } from '@/lib/site-url'

/** Injecte un bloc JSON-LD. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export type Crumb = { label: string; href: string }

/** Fil d'Ariane visible et son équivalent BreadcrumbList pour les moteurs de recherche. */
export function Breadcrumbs({ items, tone = 'light' }: { items: Crumb[]; tone?: 'light' | 'dark' }) {
  const base = getSiteUrl()
  const all = [{ label: 'Accueil', href: '/' }, ...items]
  return (
    <>
      <nav aria-label="Fil d’Ariane">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small">
          {all.map((c, i) => {
            const last = i === all.length - 1
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={tone === 'dark' ? 'text-brand-200' : 'text-ink-soft'}>
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.href}
                      className={
                        tone === 'dark'
                          ? 'rounded-sm text-white underline-offset-4 hover:underline'
                          : 'rounded-sm text-brand underline-offset-4 hover:underline'
                      }
                    >
                      {c.label}
                    </Link>
                    <span aria-hidden="true" className={tone === 'dark' ? 'text-brand-300' : 'text-ink-soft'}>
                      /
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            item: `${base}${c.href === '/' ? '/' : c.href}`,
          })),
        }}
      />
    </>
  )
}
