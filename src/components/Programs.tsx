import { Building2, Waves, GraduationCap, Home, ScrollText, TreePine } from 'lucide-react'
import { PROGRAMS } from '../data/content'
import type { Program } from '../data/content'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  TreePine,
  Waves,
  GraduationCap,
  Home,
  ScrollText,
}

const COLOR_MAP: Record<string, { bg: string; icon: string; badge: string }> = {
  green:   { bg: 'bg-green-50',   icon: 'text-green-600',   badge: 'bg-green-100 text-green-700' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  blue:    { bg: 'bg-blue-50',    icon: 'text-blue-600',    badge: 'bg-blue-100 text-blue-700' },
  yellow:  { bg: 'bg-yellow-50',  icon: 'text-yellow-600',  badge: 'bg-yellow-100 text-yellow-700' },
  amber:   { bg: 'bg-amber-50',   icon: 'text-amber-600',   badge: 'bg-amber-100 text-amber-700' },
  purple:  { bg: 'bg-purple-50',  icon: 'text-purple-600',  badge: 'bg-purple-100 text-purple-700' },
}

function ProgramCard({ program }: { program: Program }) {
  const Icon = ICON_MAP[program.icon]
  const colors = COLOR_MAP[program.color] ?? COLOR_MAP['green']
  return (
    <div className="card p-6 flex flex-col gap-4">
      <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-xl`}>
        {Icon && <Icon className={`w-7 h-7 ${colors.icon}`} />}
      </div>
      <h3 className="text-xl font-bold text-green-900">{program.title}</h3>
      <p className="text-green-700 leading-relaxed text-sm flex-1">{program.description}</p>
      <a href="#volunteer" className="text-green-600 font-semibold text-sm hover:text-green-700 flex items-center gap-1 group">
        Get Involved
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Our Programs</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Six core programs addressing Kenya's most pressing environmental challenges — from cities to coastlines.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
