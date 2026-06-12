import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.2_0.1_270)]" />

      {/* Decorative circles */}
      <div className="absolute top-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[100px]" />
      <div className="absolute bottom-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-accent/[0.05] blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm text-accent mb-8 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Agence digitale #1 en Afrique
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] animate-fade-in-up">
              Transformez votre vision en{' '}
              <span className="text-accent">succès digital</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg animate-fade-in-up animate-delay-100">
              Des solutions digitales sur-mesure alliant créativité, technologie et intelligence artificielle pour propulser votre business.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
              <Button asChild size="lg" className="gap-2 h-13 px-8 rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 text-base">
                <Link href="/contact">
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 h-13 px-8 rounded-lg border-white/20 text-white hover:bg-white/10 text-base">
                <Link href="/services">
                  Nos services
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 animate-fade-in-up animate-delay-300">
              <div className="flex -space-x-3">
                {['S', 'A', 'K', 'F'].map((letter, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-primary bg-accent/20 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/60">
                <span className="text-white font-semibold">10+ entreprises</span>
                <br />nous font confiance
              </div>
            </div>
          </div>

          {/* Right - Floating widgets */}
          <div className="relative hidden lg:block">
            {/* Main decorative shape */}
            <div className="relative h-[500px] w-full">
              {/* Background shape */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-white/10" />

              {/* Floating widget - Stats */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-5 shadow-2xl shadow-black/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Croissance client</p>
                    <p className="text-lg font-bold text-gray-900">+250%</p>
                  </div>
                </div>
              </div>

              {/* Floating widget - Satisfaction */}
              <div className="absolute bottom-12 left-4 bg-white rounded-2xl p-5 shadow-2xl shadow-black/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                    <p className="text-lg font-bold text-gray-900">98%</p>
                  </div>
                </div>
              </div>

              {/* Floating widget - Rating */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 bg-white rounded-2xl p-4 shadow-2xl shadow-black/20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Note moyenne</p>
              </div>

              {/* Center decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full border-2 border-accent/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-accent/30 bg-accent/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave/curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
