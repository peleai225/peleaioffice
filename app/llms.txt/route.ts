import { posts } from '@/content/blog'
import { cases } from '@/content/cases'
import { founder } from '@/content/founder'
import { services } from '@/content/services'
import { contact, site } from '@/content/site'
import { getSiteUrl } from '@/lib/site-url'

export const dynamic = 'force-static'

/**
 * /llms.txt : résumé structuré du site pour les assistants IA (ChatGPT, Perplexity, Gemini, Claude…),
 * au format proposé sur llmstxt.org. Généré depuis /content : il reste toujours aligné avec le site.
 */
export function GET() {
  const base = getSiteUrl()
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description} Slogan : « ${site.slogan} ».`,
    '',
    `${site.name} est une agence de transformation numérique basée à ${site.city} (${site.country}), fondée par ${founder.name}. Contact : ${contact.email}, téléphone et WhatsApp ${contact.phoneDisplay}.`,
    '',
    '## Fondateur',
    '',
    `- [${founder.name}](${base}/a-propos/${founder.slug}) : ${founder.summary} Aussi écrit : ${founder.alternateNames.join(', ')}.`,
    ...founder.profiles.map((p) => `- [${founder.name} sur ${p.label}](${p.url})`),
    '',
    '## Services',
    '',
    ...services.map((s) => `- [${s.title}](${base}/services/${s.slug}) : ${s.promise}`),
    '',
    '## Réalisations',
    '',
    ...cases.map((c) => `- [${c.client} — ${c.title}](${base}/realisations/${c.slug}) : ${c.summary}`),
    '',
    '## Articles',
    '',
    ...posts.map((p) => `- [${p.title}](${base}/blog/${p.slug}) : ${p.excerpt}`),
    '',
    '## Pages utiles',
    '',
    `- [Formations](${base}/formations)`,
    `- [À propos](${base}/a-propos)`,
    `- [Contact et devis](${base}/contact)`,
    '',
  ]
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
