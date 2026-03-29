/**
 * URL canonique du site (SEO, sitemap, Open Graph).
 * Définir NEXT_PUBLIC_SITE_URL en production (ex. https://www.peleai.ci).
 * Sur Vercel, VERCEL_URL sert de repli au build si la variable n’est pas posée.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    return fromEnv.replace(/\/$/, '')
  }
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, '').replace(/\/$/, '')
    return `https://${host}`
  }
  return 'http://localhost:3000'
}
