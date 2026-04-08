import { ArrowDown, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #14532d 0%, #15803d 40%, #059669 70%, #0d9488 100%)',
      }}
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="absolute top-32 right-20 opacity-20 animate-pulse">
        <Leaf className="w-16 h-16 text-green-200" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
        <Leaf className="w-12 h-12 text-emerald-200" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
          <Leaf className="w-4 h-4" />
          Environmental Movement • Since 2020
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Keep Kenya{' '}
          <span className="text-yellow-300">Clean</span>{' '}
          &{' '}
          <span className="text-emerald-300">Green</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto mb-4 leading-relaxed">
          Building a cleaner, greener Kenya — one community, one tree, one cleanup at a time.
        </p>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Join 15,000+ volunteers across 12 counties working toward a sustainable Kenya by 2030.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#volunteer" className="btn-primary text-base px-8 py-4">
            Volunteer Today
          </a>
          <a href="#programs" className="btn-secondary text-base px-8 py-4">
            Our Programs
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            15,000+ Volunteers
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            200+ Events
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            12 Counties
          </span>
        </div>
      </div>

      <a
        href="#impact"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8" />
      </a>
    </section>
  )
}
