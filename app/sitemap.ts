import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

/** Routes publiques indexables (hors /admin). */
const PATHS: {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}[] = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/realisations', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/menupro', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/peleai360', changeFrequency: 'monthly', priority: 0.85 },
  ]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()
  return PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path === '' ? `${base}/` : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
