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
import { PortfolioHero } from '@/components/portfolio/portfolio-hero'
import { PortfolioAboutSection } from '@/components/portfolio/portfolio-about-section'
import { PortfolioMajorProjects } from '@/components/portfolio/portfolio-major-projects'

export const metadata: Metadata = {
  title: 'Pelecho Junior Kone - Consultant & Fondateur PeleAI | Portfolio',
  description:
    "Consultant en transformation numérique (MIRIGROUP), fondateur de PeleAI et MenuPro (2025). Masterclass IA & digital (organisation et formation), expert IA & metavers (UVCI, IUA). Côte d'Ivoire.",
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
    description: 'Création de l\'agence PeleAI et des produits SaaS pour accompagner la transformation digitale des entreprises.',
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
    description: 'Accompagnement stratégique et opérationnel autour du digital et de l\'innovation.',
    achievements: [
      'Conseil et suivi de missions de transformation numérique',
      'Alignement des initiatives avec les objectifs business',
    ],
  },
  {
    title: 'Informaticien — transformation digitale',
    company: 'Groupe Fred',
    period: 'Juillet 2024 - Présent',
    description: 'Chargé de la transformation digitale : outils, processus et accompagnement des équipes.',
    achievements: [
      'Mise en œuvre des solutions et processus digitaux',
      'Accompagnement au changement et à l\'adoption des outils',
    ],
  },
  {
    title: 'Concepteur metavers & assistant formateur IA',
    company: 'IUA',
    period: '2024 - Présent',
    description: 'Conception d\'expériences immersives et accompagnement pédagogique autour de l\'IA.',
    achievements: [
      'Concepteur metavers',
      'Assistant formateur en IA pédagogique',
    ],
  },
  {
    title: 'Développeur metavers & formateur',
    company: 'UVCI',
    period: '2022 - Oct. 2024',
    description: 'Développement de solutions dans le metavers et l\'IA ; animation de formations.',
    achievements: [
      'Développeur metavers & solutions innovantes (IA / immersif)',
      'Formateur metavers (juillet 2024)',
      'Plateformes de conférence virtuelle',
    ],
  },
  {
    title: 'Formateur en outils numériques',
    company: 'Communauté virtuelle de Daloa',
    period: '2021 - Présent',
    description: 'Transmission des bonnes pratiques et des outils numériques au sein de la communauté.',
    achievements: [
      'Formation des membres aux outils digitaux',
      'Accompagnement et sensibilisation à l\'innovation',
    ],
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
    description: 'Explorer le metavers, l\'IA et les outils numériques pour des solutions concrètes.',
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
    <>
      <PortfolioHero />

      <PortfolioAboutSection />

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Philosophie
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mes valeurs
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Ce qui guide mon travail : innovation utile, transmission et résultats mesurables.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-xl hover:shadow-accent/[0.05] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-5">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Expertise
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Compétences & expertise
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Domaines dans lesquels j&apos;interviens : de la stratégie à la production (web, IA,
                metavers, marketing, médias).
              </p>
            </div>

            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-1000"
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
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Parcours
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Parcours professionnel
            </h2>
            <p className="mt-5 text-muted-foreground">
              Extraits de missions : institutions, entreprises et produits lancés.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {index < experiences.length - 1 && (
                  <div className="absolute left-[14px] top-10 bottom-0 w-[2px] bg-border" />
                )}

                <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent shadow-md shadow-accent/20">
                  <Briefcase className="h-3.5 w-3.5 text-white" />
                </div>

                <div className="rounded-2xl bg-card p-6 border border-border/50 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground">{exp.title}</h3>
                    <span className="text-muted-foreground">—</span>
                    <span className="text-accent font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm">
                        <Award className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{achievement}</span>
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
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Langues
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 rounded-xl bg-card px-6 py-4 shadow-sm border border-border/50 hover:border-accent/20 transition-all"
              >
                <GraduationCap className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{lang.name}</p>
                  <p className="text-xs text-muted-foreground">{lang.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-1/3 h-[300px] w-[300px] rounded-full bg-accent/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-accent/[0.05] blur-[80px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Collaboration
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Travaillons ensemble
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Un projet digital, une formation ou une mission de conseil ? Discutons-en.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25">
              <Link href="/contact">
                Prendre contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-lg border-white/20 text-white hover:bg-white/10"
            >
              <a href="mailto:peleai.ci@gmail.com">
                <Mail className="h-4 w-4" />
                peleai.ci@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
