import type { Metadata } from 'next'
import {
  Arc,
  ArcGauge,
  ArcList,
  ArcLoader,
  ArcWatermark,
  Badge,
  Button,
  Card,
  Eyebrow,
  Field,
  Heading,
  Input,
  Lead,
  Logo,
  LogoMark,
  Reveal,
  Section,
  SectionHeader,
  Select,
  SignalWaves,
  Textarea,
  Todo,
} from '@/components/ds'
import { brandScale, contrasts, motion, roles, spacing, typeScale } from '@/lib/design-tokens'

export const metadata: Metadata = {
  title: 'Design system',
  description: 'Référence interne des tokens et composants du site PeleAI.',
  robots: { index: false, follow: false },
}

function Swatch({ hex, label, sub, dark }: { hex: string; label: string; sub?: string; dark: boolean }) {
  return (
    <div
      className="flex min-h-28 flex-col justify-between p-3 text-[0.8125rem] leading-tight"
      style={{ background: hex, color: dark ? '#fff' : '#0B1527' }}
    >
      <span className="font-display font-semibold">{label}</span>
      <span className="tabular-nums">
        {hex.slice(1)}
        {sub && <span className="block opacity-80">{sub}</span>}
      </span>
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-5">
      <h3 className="font-display text-h3 font-semibold">{title}</h3>
      {children}
    </div>
  )
}

export default function DesignSystemPage() {
  return (
    <>
      {/* Ouverture */}
      <Section tone="paper" space="lg" aria-labelledby="ds-titre">
        <ArcWatermark className="-right-16 -top-16 w-[min(70vw,560px)] text-brand" corner="bl" count={4} peak={0.08} />
        <div className="grid max-w-3xl gap-6">
          <Eyebrow>Design system · v4 · page interne non indexée</Eyebrow>
          <Heading level={1} size="display" id="ds-titre">
            Les briques du site PeleAI.
          </Heading>
          <Lead>
            Tokens, composants et motif, tous dérivés du logo. Chaque page du site se construit avec ces éléments et rien
            d’autre.
          </Lead>
          <div className="flex flex-wrap gap-2">
            <Badge>Bleu logo #345594</Badge>
            <Badge>Outfit + Source Sans 3</Badge>
            <Badge variant="accent">Accent ambre</Badge>
            <Todo>logos SVG officiels</Todo>
          </div>
        </div>
      </Section>

      {/* Couleur */}
      <Section tone="tint" aria-labelledby="ds-couleur">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-couleur"
            eyebrow="Couleur"
            title="Une échelle, un accent"
            lead="Le rang 600 est le bleu mesuré dans le logo. Les ratios indiqués sont ceux du blanc (B) et du bleu nuit (N) posés sur chaque teinte."
          />
          <div className="grid grid-cols-4 overflow-hidden rounded-card border border-line sm:grid-cols-6 lg:grid-cols-11">
            {brandScale.map((s) => (
              <Swatch
                key={s.step}
                hex={s.hex}
                label={'note' in s ? `${s.step} · ${s.note}` : s.step}
                sub={Number(s.step) >= 500 ? `B ${s.onWhite.toFixed(2)}` : `N ${s.onNight.toFixed(2)}`}
                dark={Number(s.step) >= 500}
              />
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <div key={r.token} className="overflow-hidden rounded-card border border-line bg-white">
                <div className="h-16 border-b border-line" style={{ background: r.hex }} />
                <div className="grid gap-1 p-4">
                  <span className="font-display font-semibold">{r.name}</span>
                  <code className="text-small text-brand">
                    {r.token} · {r.hex}
                  </code>
                  <span className="text-small text-ink-soft">{r.use}</span>
                </div>
              </div>
            ))}
          </div>
          <Block title="Contrastes vérifiés (WCAG AA)">
            <div className="overflow-x-auto rounded-card border border-line bg-white">
              <table className="w-full min-w-[520px] text-left text-small">
                <thead>
                  <tr className="border-b border-line font-display text-label uppercase text-ink-soft">
                    <th className="px-4 py-3 font-medium">Texte</th>
                    <th className="px-4 py-3 font-medium">Fond</th>
                    <th className="px-4 py-3 font-medium">Ratio</th>
                    <th className="px-4 py-3 font-medium">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {contrasts.map((c) => (
                    <tr key={`${c.fg}-${c.bg}`} className="border-b border-line last:border-0">
                      <td className="px-4 py-3">{c.fg}</td>
                      <td className="px-4 py-3">{c.bg}</td>
                      <td className="px-4 py-3 font-semibold tabular-nums">{c.ratio.toFixed(2).replace('.', ',')}</td>
                      <td className="px-4 py-3">
                        {c.verdict === 'ok' ? (
                          <Badge variant="neutral">Texte courant</Badge>
                        ) : (
                          <Badge variant="accent">Formes uniquement</Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        </div>
      </Section>

      {/* Typographie */}
      <Section tone="paper" aria-labelledby="ds-typo">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-typo"
            eyebrow="Typographie"
            title="Outfit pour parler fort, Source Sans 3 pour être lu"
            lead="Outfit reprend la géométrie ronde du mot « PeleAI » ; Source Sans 3 reste lisible en petite taille sur un téléphone d’entrée de gamme."
          />
          <div className="grid gap-8">
            {typeScale.map((t) => (
              <div key={t.token} className="grid gap-3 border-t border-line pt-5 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
                <div className="grid content-start gap-1 text-small">
                  <code className="font-semibold text-brand">{t.token}</code>
                  <span className="text-ink-soft">
                    {t.role} · {t.font}
                  </span>
                  <span className="text-ink-soft tabular-nums">
                    {t.size} · interligne {t.lh}
                  </span>
                </div>
                <p
                  className={
                    {
                      'text-display': 'font-display text-display font-bold text-brand',
                      'text-h1': 'font-display text-h1 font-bold text-brand',
                      'text-h2': 'font-display text-h2 font-semibold text-brand',
                      'text-h3': 'font-display text-h3 font-semibold text-ink',
                      'text-lead': 'text-lead text-ink-soft text-measure',
                      'text-body': 'text-body text-measure',
                      'text-small': 'text-small text-ink-soft text-measure',
                      'text-label': 'font-display text-label font-medium uppercase text-ink-soft',
                    }[t.token]
                  }
                >
                  {t.token === 'text-body' || t.token === 'text-lead' || t.token === 'text-small'
                    ? 'Vous savez ce que vous voulez obtenir. Nous mettons en place le site, les contenus et les outils IA qui y mènent, puis nous formons vos équipes pour qu’elles restent autonomes.'
                    : t.token === 'text-label'
                      ? 'Transformation digitale'
                      : 'Faites travailler l’IA pour votre entreprise.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Espacement, rayons, ombre */}
      <Section tone="white" aria-labelledby="ds-espace">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-espace"
            eyebrow="Grille et formes"
            title="De la place, trois rayons, une ombre"
            lead="Conteneur de 1240 px sur 12 colonnes, gouttière fluide de 16 à 48 px. Sections de 64 à 128 px de respiration (80 à 160 px pour les sections fortes)."
          />
          <div className="grid grid-cols-12 gap-2 sm:gap-6" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="grid h-16 place-items-end justify-center rounded bg-brand-100 pb-1 text-[0.75rem] text-brand-700">
                {i + 1}
              </div>
            ))}
            <div className="col-span-12 grid h-12 place-items-center rounded bg-brand-200 text-small text-brand-800 lg:col-span-7">
              7 colonnes · texte
            </div>
            <div className="col-span-12 grid h-12 place-items-center rounded bg-brand-200 text-small text-brand-800 lg:col-span-5">
              5 colonnes · visuel
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <Block title="Échelle d’espacement (base 4 / 8 px)">
              <div className="grid gap-2">
                {spacing.map((s) => (
                  <div key={s} className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 text-small">
                    <span className="tabular-nums text-ink-soft">{s} px</span>
                    <span className="block h-3 max-w-full rounded-sm bg-brand" style={{ width: s }} />
                  </div>
                ))}
              </div>
            </Block>
            <Block title="Rayons et ombre">
              <div className="flex flex-wrap gap-6">
                {[
                  { cls: 'rounded-field', label: '8 px · champs, badges' },
                  { cls: 'rounded-card', label: '20 px · cartes, images' },
                  { cls: 'rounded-full', label: 'Plein · boutons' },
                ].map((r) => (
                  <div key={r.cls} className="grid justify-items-start gap-2 text-small">
                    <div className={`h-20 w-32 border-[1.5px] border-brand bg-white ${r.cls}`} />
                    <span>
                      <code className="text-brand">{r.cls}</code>
                      <br />
                      <span className="text-ink-soft">{r.label}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid justify-items-start gap-2 text-small">
                <div className="h-20 w-full max-w-sm rounded-card border border-line bg-white shadow-lift" />
                <span>
                  <code className="text-brand">shadow-lift</code> <span className="text-ink-soft">· seule ombre, au survol</span>
                </span>
              </div>
            </Block>
          </div>
        </div>
      </Section>

      {/* Boutons et badges */}
      <Section tone="paper" aria-labelledby="ds-boutons">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-boutons"
            eyebrow="Actions"
            title="Un bouton ambre par écran, pas plus"
            lead="L’ambre signale l’action principale. Les autres actions passent en bleu plein, en contour ou en lien."
          />
          <Block title="Variantes sur fond clair">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" arrow>
                Demander un devis
              </Button>
              <Button href="/realisations" variant="secondary">
                Voir nos réalisations
              </Button>
              <Button variant="outline">Parler de mon projet</Button>
              <Button href="/services" variant="link">
                Découvrir les services
              </Button>
              <Button disabled>Indisponible</Button>
            </div>
          </Block>
          <Block title="Tailles">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Petit · 40 px</Button>
              <Button size="md">Moyen · 48 px</Button>
              <Button size="lg" arrow>
                Grand · 56 px
              </Button>
            </div>
          </Block>
          <Block title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge>Formation</Badge>
              <Badge variant="brand">Solutions IA</Badge>
              <Badge variant="accent">Nouveau</Badge>
              <Badge variant="outline">Abidjan</Badge>
              <Todo>témoignage client</Todo>
            </div>
          </Block>
        </div>
      </Section>
      <Section tone="night" space="sm" aria-label="Boutons sur fond nuit">
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact" arrow>
            Parler de mon projet
          </Button>
          <Button variant="outline-light">Écrire sur WhatsApp</Button>
          <span className="text-small text-ink-soft">Sur fond nuit, le focus clavier passe à l’ambre.</span>
        </div>
      </Section>

      {/* Cartes et formulaire */}
      <Section tone="tint" aria-labelledby="ds-cartes">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-cartes"
            eyebrow="Cartes et formulaires"
            title="Des surfaces nettes, sans ombre au repos"
          />
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <Card href="/services">
              <div className="grid gap-3 pr-10">
                <Badge variant="outline">Carte cliquable</Badge>
                <h3 className="font-display text-h3 font-semibold text-brand">Sites internet</h3>
                <p className="text-ink-soft">
                  Survolez la carte ou atteignez-la au clavier : elle s’élève de 4 px et l’arc ambre se dessine dans
                  l’angle.
                </p>
              </div>
            </Card>
            <Card>
              <div className="grid gap-3">
                <Badge variant="outline">Carte statique</Badge>
                <h3 className="font-display text-h3 font-semibold">Bordure de 1 px</h3>
                <p className="text-ink-soft">Pour regrouper une information sans la rendre cliquable.</p>
              </div>
            </Card>
          </div>
          <Card padding="lg" className="max-w-2xl">
            <form className="grid gap-6" aria-label="Exemple de formulaire">
              <Field id="ds-nom" label="Votre nom" required>
                {(aria) => <Input {...aria} autoComplete="name" placeholder="Awa Koné" />}
              </Field>
              <Field id="ds-contact" label="Téléphone ou WhatsApp" required error="Ce numéro semble incomplet : 10 chiffres attendus après +225.">
                {(aria) => <Input {...aria} type="tel" inputMode="tel" defaultValue="+225 05 06 80" />}
              </Field>
              <Field id="ds-besoin" label="Votre besoin" hint="Nous répondons sous 24 h ouvrées.">
                {(aria) => (
                  <Select {...aria} defaultValue="site">
                    <option value="site">Création de site internet</option>
                    <option value="ia">Solution IA</option>
                    <option value="formation">Formation</option>
                    <option value="contenu">Création de contenu</option>
                    <option value="transformation">Transformation digitale</option>
                  </Select>
                )}
              </Field>
              <Field id="ds-message" label="Votre message">
                {(aria) => <Textarea {...aria} placeholder="Décrivez votre projet en quelques lignes." />}
              </Field>
              <div>
                <Button type="button" arrow>
                  Envoyer ma demande
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      {/* Logo */}
      <Section tone="paper" aria-labelledby="ds-logo">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-logo"
            eyebrow="Logo"
            title="Intact, avec sa zone de protection"
            lead="La zone de protection vaut la hauteur du P divisée par 4, sur les quatre côtés. Le logo n’est jamais déformé, pivoté ni recoloré."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid place-items-center rounded-card border border-line bg-white p-8">
              <span className="outline-dashed outline-[1.5px] outline-brand-300">
                <Logo height={72} clearSpace />
              </span>
            </div>
            <div className="tone-night grid place-items-center rounded-card p-8">
              <Logo variant="light" height={72} clearSpace />
            </div>
          </div>
          <div className="flex flex-wrap items-end gap-8">
            {[64, 40, 24].map((s) => (
              <div key={s} className="grid justify-items-center gap-2 text-small text-ink-soft">
                <LogoMark size={s} decorative />
                <span>{s} px</span>
              </div>
            ))}
            <p className="text-small text-ink-soft text-measure">
              Fichiers provisoires extraits du PNG actuel. <Todo>logo-bleu.svg, logo-clair.svg, icone-p.svg</Todo>
            </p>
          </div>
        </div>
      </Section>

      {/* Motif */}
      <Section tone="white" aria-labelledby="ds-motif">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-motif"
            eyebrow="Motif signature"
            title="L’arc du logo, partout, à voix basse"
            lead="Rapport rayon intérieur / extérieur de 240 / 350, terminaisons plates, écart de 0,164 trait entre deux anneaux : les proportions exactes du logo."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="grid gap-5">
                <div className="flex items-end gap-5 text-brand">
                  <Arc size={64} />
                  <Arc size={40} />
                  <Arc size={24} />
                  <Arc size={40} corner="tl" className="text-brand-300" />
                </div>
                <div>
                  <h3 className="font-display text-h3 font-semibold">Arc</h3>
                  <p className="text-small text-ink-soft">Orientable dans les quatre coins ; « tr » reproduit le logo.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="grid gap-5">
                <ArcList
                  items={['Un interlocuteur unique', 'Des livrables concrets', 'Vos équipes autonomes']}
                />
                <div>
                  <h3 className="font-display text-h3 font-semibold">Puce de liste</h3>
                  <p className="text-small text-ink-soft">Remplace la coche partout où l’on énumère des bénéfices.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="grid gap-5">
                <ArcLoader size={56} />
                <div>
                  <h3 className="font-display text-h3 font-semibold">Chargement</h3>
                  <p className="text-small text-ink-soft">L’arc seul, qui pulse ; annoncé aux lecteurs d’écran.</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="tone-night relative isolate grid gap-10 overflow-hidden rounded-card p-8 sm:p-12 md:grid-cols-2">
            <ArcWatermark className="-bottom-24 -left-24 w-[420px] text-brand-400" corner="tr" />
            <div className="grid content-start gap-3">
              <Eyebrow>Filigrane et jauge</Eyebrow>
              <p className="text-ink-soft text-measure">
                Arcs concentriques en filigrane dans un coin des sections nuit. Les chiffres clés sont portés par un arc qui se
                remplit une fois, à l’entrée dans l’écran.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <ArcGauge value={0.7} figure="XX" label="Chiffre à fournir" />
              <ArcGauge value={0.45} figure="XX" label="Chiffre à fournir" />
            </div>
          </div>
        </div>
      </Section>

      {/* Hero */}
      <Section tone="paper" aria-labelledby="ds-hero">
        <div className="grid gap-12">
          <SectionHeader
            id="ds-hero"
            eyebrow="Moment signature"
            title="Ondes vivantes"
            lead="Le monogramme reste fixe ; les anneaux s’allument l’un après l’autre en partant de son arc. CSS pur, aucun effet sur le LCP. La réaction au curseur sera ajoutée avec la page d’accueil."
          />
          <div className="relative isolate grid items-end gap-10 overflow-hidden rounded-card border border-line bg-paper p-6 sm:p-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <div className="grid gap-6">
              <p className="max-w-[12ch] font-display text-h1 font-bold text-brand">Faites travailler l’IA pour votre entreprise.</p>
              <div className="flex flex-wrap gap-3">
                <Button arrow>Demander un devis</Button>
                <Button variant="outline">Voir nos réalisations</Button>
              </div>
            </div>
            <SignalWaves className="mx-auto w-full max-w-[420px]" />
          </div>
        </div>
      </Section>

      {/* Mouvement */}
      <Section tone="tint" aria-labelledby="ds-mouvement">
        <div className="grid gap-12">
          <SectionHeader id="ds-mouvement" eyebrow="Mouvement" title="Peu d’effets, bien exécutés" />
          <div className="grid gap-4 sm:grid-cols-2">
            {motion.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <Card padding="sm" className="h-full">
                  <div className="grid gap-1">
                    <span className="font-display font-semibold">{m.name}</span>
                    <code className="text-small text-brand">{m.value}</code>
                    <span className="text-small text-ink-soft">{m.use}</span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
