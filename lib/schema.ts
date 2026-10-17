import { founder } from '@/content/founder'
import { getSiteUrl } from '@/lib/site-url'

/** Identifiants stables des entités : Google et les IA relient ainsi le site, l'agence et son fondateur. */
export function schemaIds() {
  const base = getSiteUrl()
  return {
    organization: `${base}/#organization`,
    website: `${base}/#website`,
    founder: `${base}/a-propos/${founder.slug}#person`,
    founderUrl: `${base}/a-propos/${founder.slug}`,
  }
}

/** Personne « Pelecho Junior Koné », réutilisée par l'organisation, les articles et sa page de profil. */
export function founderSchema() {
  const base = getSiteUrl()
  const ids = schemaIds()
  return {
    '@type': 'Person',
    '@id': ids.founder,
    name: founder.name,
    givenName: founder.givenName,
    familyName: founder.familyName,
    alternateName: founder.alternateNames,
    jobTitle: founder.jobTitle,
    description: founder.summary,
    image: `${base}${founder.photo}`,
    url: ids.founderUrl,
    worksFor: { '@id': ids.organization },
    knowsAbout: founder.expertise,
    knowsLanguage: ['fr', 'en'],
    homeLocation: { '@type': 'Place', name: founder.location },
    sameAs: founder.profiles.map((p) => p.url),
  }
}
