/** Domaine public actuel du site (dossier du 17/10/2026). peleai.ci reste à confirmer. */
export const PRODUCTION_URL = 'https://peleai.online'

/**
 * URL canonique du site (SEO, sitemap, Open Graph, données structurées).
 * 1. NEXT_PUBLIC_SITE_URL si elle est définie ;
 * 2. sur une prévisualisation Vercel, l'URL de la prévisualisation ;
 * 3. en production, le domaine officiel (jamais l'URL technique *.vercel.app) ;
 * 4. en développement, localhost.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')

  const vercel = process.env.VERCEL_URL?.trim()
  if (process.env.VERCEL_ENV === 'preview' && vercel) {
    return `https://${vercel.replace(/^https?:\/\//, '').replace(/\/$/, '')}`
  }

  return process.env.NODE_ENV === 'production' ? PRODUCTION_URL : 'http://localhost:3000'
}
