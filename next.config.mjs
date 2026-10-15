import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Évite l’avertissement « multiple lockfiles » quand un lockfile existe au-dessus du projet. */
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /** Images servies en AVIF ou WebP, redimensionnées selon l’écran (connexions mobiles lentes). */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /** Anciennes adresses du site v3, redirigées vers leurs équivalents. */
  async redirects() {
    return [
      { source: '/portfolio', destination: '/a-propos', permanent: true },
      { source: '/menupro', destination: '/realisations/menupro', permanent: true },
      { source: '/peleai360', destination: '/realisations', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/design-system',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default nextConfig
