import { Metadata } from 'next'
import Link from 'next/link'
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Brain,
  Rocket,
  ArrowRight,
  Mail,
  Sparkles,
  Megaphone,
  Users,
  PenTool,
  Video,
  Mic,
  UserRound,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PortfolioHero } from '@/components/portfolio/portfolio-hero'
import { PortfolioAboutSection } from '@/components/portfolio/portfolio-about-section'
import { PortfolioMajorProjects } from '@/components/portfolio/portfolio-major-projects'

export const metadata: Metadata = {
  title: 'Pelecho Junior Kone - Consultant & Fondateur PeleAI | Portfolio',
  description:
    'Consultant en transformation numérique (MIRIGROUP), fondateur de PeleAI et MenuPro (2025). Masterclass IA & digital (organisation et formation), expert IA & metavers (UVCI, IUA). Côte d’Ivoire.',
  alternates: { canonical: '/portfolio' },
  openGraph: { url: '/portfolio' },
}

const skills = [
  { name: 'Intelligence artificielle', level: 95, icon: Brain },
  { name: 'Metavers & expériences immersives', level: 92, icon: Sparkles },
  { name: 'Développement web & mobile', level: 94, icon: Code },
  { name: 'Marketing digital', level: 88, icon: Megaphone },
  { name: 'Community management', level: 85, icon: Users },
  { name: 'Management', level: 82, icon: UserRound },
  { name: 'Infographie', level: 88, icon: PenTool },
  { name: 'Montage vidéo', level: 80, icon: Video },
  { name: 'Art oratoire', level: 86, icon: Mic },
]

const experiences = [
  {
    title: 'Fondateur & CEO',
    company: 'PeleAI',
    period: '2025 - Présent',
    description:
      'Création de l’agence PeleAI et des produits SaaS pour accompagner la transformation digitale des entreprises.',
    achievements: [
      'Lancement de PeleAI et de MenuPro (2025)',
      'PeleAI360 : CRM, facturation et pilotage',
      'Laboratoires virtuels UVCI & IUA (e-learning, TP à distance)',
    ],
  },
  {
    title: 'Consultant en transformation numérique',
    company: 'MIRIGROUP',
    period: '2023 - Présent',
    description:
      'Accompagnement stratégique et opérationnel autour du digital et de l’innovation.',
    achievements: [
      'Conseil et suivi de missions de transformation numérique',
      'Alignement des initiatives avec les objectifs business',
    ],
  },
  {
    title: 'Informaticien — transformation digitale',
    company: 'Groupe Fred',
    period: 'Juillet 2024 - Présent',
    description:
      'Chargé de la transformation digitale : outils, processus et accompagnement des équipes.',
    achievements: [
      'Mise en œuvre des solutions et processus digitaux',
      'Accompagnement au changement et à l’adoption des outils',
    ],
  },
  {
    title: 'Concepteur metavers & assistant formateur IA pédagogique',
    company: 'IUA (Institut Universitaire d’Abidjan)',
    period: '2024 - Présent',
    description:
      'Conception d’expériences immersives et accompagnement pédagogique autour de l’intelligence artificielle.',
    achievements: [
      'Concepteur metavers',
      'Assistant formateur en IA pédagogique',
    ],
  },
  {
    title: 'Développeur metavers, formateur & plateformes virtuelles',
    company: 'UVCI (Université Virtuelle de Côte d’Ivoire)',
    period: '2022 - Oct. 2024 · missions ponctuelles depuis',
    description:
      'Développement de solutions dans le metavers et l’IA ; animation de formations et d’événements en ligne.',
    achievements: [
      'Développeur metavers & solutions innovantes (IA / immersif)',
      'Formateur metavers (juillet 2024)',
      'Mise en place de plateformes de conférence virtuelle (2022 - oct. 2024)',
    ],
  },
  {
    title: 'Formateur en outils numériques',
    company: 'Communauté virtuelle de Daloa',
    period: '2021 - Présent',
    description:
      'Transmission des bonnes pratiques et des outils numériques au sein de la communauté.',
    achievements: [
      'Formation des membres aux outils digitaux',
      'Accompagnement et sensibilisation à l’innovation',
    ],
  },
  {
    title: 'Directeur marketing',
    company: 'Croquettes de Viande',
    period: '2020 - 2023',
    description: 'Pilotage marketing, visibilité et responsabilités de direction.',
    achievements: ['Stratégie marketing et animation de la marque'],
  },
  {
    title: 'Développeur de plateforme e-commerce',
    company: 'Junior',
    period: '2022 - 2023',
    description: 'Conception et mise en production d’une plateforme e-commerce.',
    achievements: ['Développement et déploiement réussi de la plateforme'],
  },
  {
    title: 'Développeur de plateforme multiservice',
    company: 'CVD',
    period: '2021 - 2022',
    description: 'Conception et développement d’une plateforme multiservice.',
    achievements: ['Mise en place d’une solution multiservice pour la CVD'],
  },
]

const languages = [
  { name: 'Français', detail: 'Langue de travail' },
  { name: 'Anglais', detail: 'Professionnel' },
]

const values = [
  {
    icon: Rocket,
    title: 'Innovation',
    description:
      'Explorer le metavers, l’IA et les outils numériques pour des solutions concrètes.',
  },
  {
    icon: Brain,
    title: 'Transmission',
    description: 'Former et accompagner les équipes et les communautés (UVCI, IUA, Daloa).',
  },
  {
    icon: Briefcase,
    title: 'Impact',
    description: 'Aligner stratégie digitale et déploiement opérationnel pour les PME et institutions.',
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />

      <PortfolioAboutSection />

      {/* Values Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5EDD8' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]"/>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
                Mes valeurs
              </h2>
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]"/>
            </div>
            <p className="mt-2 text-lg max-w-2xl mx-auto" style={{ color: '#6B4423' }}>
              Ce qui guide mon travail : innovation utile, transmission et résultats mesurables.
            </p>
            <div className="flex justify-center gap-px mt-4 mx-auto w-32 h-1.5 overflow-hidden rounded">
              {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E'].map((c, i) => (
                <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const accents = ['#C1440E', '#D4891A', '#1B3A6B']
              const accent = accents[index]
              return (
                <div
                  key={value.title}
                  className="text-center rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: 'white', border: `1.5px solid ${accent}22` }}
                >
                  <div className="h-1 rounded mb-6" style={{ backgroundColor: accent }} />
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${accent}15`, color: accent }}>
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1a0a00' }}>{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B4423' }}>{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: ‘#FFFAF4’ }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 rounded" style={{ backgroundColor: ‘#C1440E’ }}/>
                <div className="h-3 w-3 rotate-45" style={{ backgroundColor: ‘#C1440E’ }}/>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: ‘#1a0a00’ }}>
                Compétences & expertise
              </h2>
              <p className="mt-4 text-lg" style={{ color: ‘#6B4423’ }}>
                Domaines dans lesquels j&apos;interviens : de la stratégie à la production (web, IA,
                metavers, marketing, médias).
              </p>
              {/* Kente strip decoration */}
              <div className="flex gap-px mt-6 w-48 h-2 overflow-hidden rounded">
                {[‘#C1440E’,’#D4891A’,’#1B3A6B’,’#C1440E’,’#8B5A00’,’#D4891A’,’#C1440E’,’#D4891A’,’#1B3A6B’,’#8B5A00’,’#C1440E’,’#D4891A’].map(
                  (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
                )}
              </div>
            </div>

            <div className="space-y-5">
              {skills.map((skill, i) => {
                const accent = i % 3 === 0 ? ‘#C1440E’ : i % 3 === 1 ? ‘#D4891A’ : ‘#1B3A6B’
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 shrink-0" style={{ color: accent }} />
                        <span className="font-medium text-sm" style={{ color: ‘#1a0a00’ }}>{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: accent }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${accent}18` }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5EDD8' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]"/>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
                Parcours professionnel
              </h2>
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]"/>
            </div>
            <p className="mt-2 max-w-2xl mx-auto" style={{ color: '#6B4423' }}>
              Extraits de missions : institutions, entreprises et produits lancés (dont PeleAI &amp; MenuPro en 2025).
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => {
              const accent = ['#C1440E','#D4891A','#1B3A6B','#8B5A00'][index % 4]
              return (
                <div key={`${exp.company}-${index}`} className="relative pl-8 pb-10 last:pb-0">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-3 top-8 bottom-0 w-0.5" style={{ background: `linear-gradient(to bottom, ${accent}60, transparent)` }} />
                  )}
                  <div
                    className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <Briefcase className="h-3 w-3" />
                  </div>

                  <div
                    className="rounded-xl p-5 transition-all hover:shadow-md"
                    style={{ backgroundColor: 'white', border: `1.5px solid ${accent}22` }}
                  >
                    <div className="h-0.5 rounded mb-4" style={{ backgroundColor: accent, opacity: 0.4 }} />
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-base" style={{ color: '#1a0a00' }}>{exp.title}</h3>
                      <span style={{ color: '#C1440E' }} className="font-semibold text-sm">— {exp.company}</span>
                    </div>
                    <p className="text-xs font-medium mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5" style={{ backgroundColor: `${accent}15`, color: accent }}>
                      {exp.period}
                    </p>
                    <p className="text-sm mb-3" style={{ color: '#6B4423' }}>{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm">
                          <Award className="h-4 w-4 mt-0.5 shrink-0" style={{ color: accent }} />
                          <span style={{ color: '#3a1a00' }}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <PortfolioMajorProjects />

      {/* Langues */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#FFFAF4' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: '#1a0a00' }}>Langues</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, i) => {
              const accent = i === 0 ? '#C1440E' : '#1B3A6B'
              return (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 rounded-full px-6 py-3 shadow-sm"
                  style={{ backgroundColor: 'white', border: `1.5px solid ${accent}30` }}
                >
                  <GraduationCap className="h-5 w-5 shrink-0" style={{ color: accent }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#1a0a00' }}>{lang.name}</p>
                    <p className="text-xs" style={{ color: '#6B4423' }}>{lang.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#B8421A' }}>
        {/* Tribal pattern */}
        <div className="absolute inset-0 opacity-[0.1]">
          <svg className="w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="port-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" fill="none" stroke="white" strokeWidth="1.2"/>
                <polygon points="30,18 42,25 42,35 30,42 18,35 18,25" fill="none" stroke="white" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#port-cta)"/>
          </svg>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #D4891A, transparent)' }}/>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Travaillons ensemble
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Un projet digital, une formation ou une mission de conseil ? Discutons-en.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild size="lg" className="gap-2 font-semibold"
              style={{ background: 'linear-gradient(135deg, #D4891A, #F5A420)', color: '#1a0a00', border: 'none' }}
            >
              <Link href="/contact">
                Prendre contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.1)' }}
            >
              <a href="mailto:peleai.ci@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                peleai.ci@gmail.com
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #D4891A, transparent)' }}/>
      </section>
    </main>
  )
}
