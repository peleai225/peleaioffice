import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
import { ServicesGrid } from '@/components/sections/services-grid'
import { Stats } from '@/components/sections/stats'
import { ProcessSteps } from '@/components/sections/process-steps'
import { FeaturedSolution } from '@/components/sections/featured-solution'
import { Testimonials } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <Stats />
      <ProcessSteps />
      <FeaturedSolution />
      <Testimonials />
      <CTASection />
    </>
  )
}
