import type { MetadataRoute } from 'next'
import { posts } from '@/content/blog'
import { cases } from '@/content/cases'
import { services } from '@/content/services'
import { getSiteUrl } from '@/lib/site-url'

type Entry = { path: string; changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>; priority: number; lastModified?: string }

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const entries: Entry[] = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.85 })),
    { path: '/realisations', changeFrequency: 'monthly', priority: 0.85 },
    ...cases.map((c) => ({ path: `/realisations/${c.slug}`, changeFrequency: 'yearly' as const, priority: 0.7 })),
    { path: '/formations', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/a-propos', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, changeFrequency: 'yearly' as const, priority: 0.6, lastModified: p.date })),
    { path: '/contact', changeFrequency: 'yearly', priority: 0.9 },
    { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/politique-de-confidentialite', changeFrequency: 'yearly', priority: 0.2 },
  ]
  const now = new Date()
  return entries.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${base}${path || '/'}`,
    lastModified: lastModified ? new Date(lastModified) : now,
    changeFrequency,
    priority,
  }))
}
