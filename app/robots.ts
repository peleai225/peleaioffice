import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

/**
 * Tous les robots sont admis, y compris ceux des assistants IA (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended…) : être lu par eux est la condition pour être cité dans leurs réponses.
 */
export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/design-system'],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
