import type { Metadata } from 'next'
import Link from 'next/link'
import { ArcWatermark, Badge, Reveal, Section, Tilt } from '@/components/ds'
import { PageHero } from '@/components/sections/page-hero'
import { formatDate, posts, readingTime } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Conseils pratiques sur l’intelligence artificielle, les sites internet et le digital pour les PME et entrepreneurs d’Afrique francophone.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog', href: '/blog' }]}
        eyebrow="Blog"
        title="Des conseils concrets, sans jargon."
        lead="IA, sites internet, contenus : ce que nous apprenons sur le terrain avec nos clients, pour que vous puissiez l’appliquer dès aujourd’hui."
      />
      <Section tone="white" aria-label="Articles">
        <ul className="grid gap-6 md:grid-cols-2">
          {sorted.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 90} className="h-full">
                <Tilt max={4}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group relative isolate grid h-full content-start gap-5 overflow-hidden rounded-card border border-line bg-paper p-7 transition-[box-shadow,border-color] duration-500 hover:border-brand-200 hover:shadow-lift sm:p-10"
                  >
                    <ArcWatermark className="-right-16 -top-16 w-56 text-brand transition-transform duration-700 group-hover:scale-110" corner="bl" peak={0.1} count={3} />
                    <div className="flex flex-wrap items-center gap-3 text-small text-ink-soft">
                      <Badge>{p.category}</Badge>
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{readingTime(p)} min de lecture</span>
                    </div>
                    <h2 className="max-w-[24ch] font-display text-h2 font-semibold text-brand">{p.title}</h2>
                    <p className="text-measure text-ink-soft">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-display font-semibold text-brand">
                      Lire l’article
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  </Link>
                </Tilt>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
