import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Arc, Badge, Button, Section } from '@/components/ds'
import { FinalCta } from '@/components/sections/home/final-cta'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@/components/site/structured-data'
import { formatDate, getPost, posts, readingTime, type Block } from '@/content/blog'
import { getService } from '@/content/services'
import { getSiteUrl } from '@/lib/site-url'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, publishedTime: post.date, authors: [post.author] },
  }
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-6 font-display text-h3 font-semibold text-brand sm:text-[1.75rem]">{block.text}</h2>
    case 'p':
      return <p>{block.text}</p>
    case 'ul':
      return (
        <ul className="grid gap-3">
          {block.items.map((item) => (
            <li key={item} className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-3">
              <Arc size={14} className="mt-[0.5em] text-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="my-4 border-l-4 border-cta py-1 pl-6 font-display text-[clamp(1.375rem,1.15rem+0.9vw,1.75rem)] font-medium leading-snug tracking-tight text-ink">
          {block.text}
        </blockquote>
      )
    case 'tip':
      return (
        <aside className="rounded-card bg-tint p-6">
          <p className="font-display text-label font-medium uppercase text-brand">{block.title}</p>
          <p className="mt-2 text-ink">{block.text}</p>
        </aside>
      )
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const service = getService(post.relatedService)
  const other = posts.find((p) => p.slug !== post.slug)
  const base = getSiteUrl()

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          inLanguage: 'fr',
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', '@id': `${base}/#organization`, name: 'PeleAI', logo: { '@type': 'ImageObject', url: `${base}/brand/logo-bleu.png` } },
          mainEntityOfPage: `${base}/blog/${post.slug}`,
        }}
      />
      <PageHero
        crumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
        title={post.title}
        lead={post.excerpt}
        aside={
          <dl className="grid gap-3 text-small">
            <div className="flex gap-3">
              <dt className="sr-only">Catégorie</dt>
              <dd>
                <Badge>{post.category}</Badge>
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-t border-line pt-3">
              <dt className="text-ink-soft">Publié le</dt>
              <dd className="font-semibold">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-t border-line pt-3">
              <dt className="text-ink-soft">Par</dt>
              <dd className="font-semibold">{post.author}</dd>
            </div>
            <div className="flex justify-between gap-3 border-t border-line pt-3">
              <dt className="text-ink-soft">Lecture</dt>
              <dd className="font-semibold">{readingTime(post)} min</dd>
            </div>
          </dl>
        }
      />

      <Section tone="white" aria-label="Article">
        <article className="mx-auto grid max-w-[68ch] gap-6 text-[1.1875rem] leading-[1.7] text-ink">
          {post.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
          {service && (
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-card border border-line bg-paper p-6">
              <p className="font-display text-[1.1875rem] font-semibold">Aller plus loin : {service.title.toLowerCase()}</p>
              <Button href={`/services/${service.slug}`} variant="secondary" size="sm" arrow>
                Découvrir le service
              </Button>
            </div>
          )}
        </article>
      </Section>

      {other && (
        <Section tone="paper" space="sm" aria-label="Autre article">
          <Link href={`/blog/${other.slug}`} className="group grid gap-3 rounded-card py-4">
            <span className="font-display text-label font-medium uppercase text-ink-soft">À lire aussi</span>
            <span className="font-display text-h3 font-semibold text-brand transition-colors group-hover:text-brand-700 sm:text-h2">{other.title}</span>
          </Link>
        </Section>
      )}

      <FinalCta />
    </>
  )
}
