import { FeaturedCases } from '@/components/sections/home/featured-cases'
import { FinalCta } from '@/components/sections/home/final-cta'
import { HomeHero } from '@/components/sections/home/home-hero'
import { MethodSteps } from '@/components/sections/home/method-steps'
import { ProofBand } from '@/components/sections/home/proof-band'
import { ServicesOverview } from '@/components/sections/home/services-overview'
import { TestimonialsSection } from '@/components/sections/home/testimonials-section'
import { TrainingTeaser } from '@/components/sections/home/training-teaser'
import { ValueSection } from '@/components/sections/home/value-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProofBand />
      <ValueSection />
      <ServicesOverview />
      <MethodSteps />
      <FeaturedCases />
      <TestimonialsSection />
      <TrainingTeaser />
      <FinalCta />
    </>
  )
}
