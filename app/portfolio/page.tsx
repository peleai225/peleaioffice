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
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Mes valeurs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce qui guide mon travail : innovation utile, transmission et résultats mesurables.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center border-border/50 animate-fade-in transition-all hover:border-primary/25 hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Compétences & expertise
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Domaines dans lesquels j’interviens : de la stratégie à la production (web, IA,
                metavers, marketing, médias).
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Parcours professionnel
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Extraits de missions : institutions, entreprises et produits lancés (dont PeleAI &
              MenuPro en 2025).
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative pl-8 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-border" />
                )}

                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>

                <div className="rounded-xl bg-background p-6 shadow-sm border border-border transition-all hover:border-primary/20 hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                    <span className="text-muted-foreground">—</span>
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioMajorProjects />

      {/* Langues */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Langues
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 rounded-full bg-background px-6 py-3 shadow-sm border border-border"
              >
                <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-sm">{lang.name}</p>
                  <p className="text-xs text-muted-foreground">{lang.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Travaillons ensemble
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Un projet digital, une formation ou une mission de conseil ? Discutons-en.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/contact">
                Prendre contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="mailto:peleai.ci@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                peleai.ci@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
