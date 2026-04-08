import { Trash2, Sprout, BookOpen } from 'lucide-react'
import { VOLUNTEER_OPTIONS } from '../data/content'
import type { VolunteerOption } from '../data/content'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Trash2,
  Sprout,
  BookOpen,
}

const COLOR_MAP: Record<string, { bg: string; icon: string; border: string }> = {
  green:   { bg: 'bg-green-50',   icon: 'text-green-600',   border: 'border-green-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200' },
  amber:   { bg: 'bg-amber-50',   icon: 'text-amber-600',   border: 'border-amber-200' },
}

function VolunteerCard({ option }: { option: VolunteerOption }) {
  const Icon = ICON_MAP[option.icon]
  const colors = COLOR_MAP[option.color] ?? COLOR_MAP['green']
  return (
    <div className={`card p-8 flex flex-col gap-4 border ${colors.border}`}>
      <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-xl`}>
        {Icon && <Icon className={`w-7 h-7 ${colors.icon}`} />}
      </div>
      <h3 className="text-xl font-bold text-green-900">{option.title}</h3>
      <p className="text-green-700 leading-relaxed text-sm flex-1">{option.description}</p>
      <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full ${colors.bg} ${colors.icon}`}>
        <span>⏱</span> {option.commitment}
      </div>
      <a
        href="#newsletter"
        className="mt-2 block text-center bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
      >
        Sign Up
      </a>
    </div>
  )
}

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Be The Change
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Volunteer With Us</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            There are many ways to get involved. Find the role that fits your skills, schedule, and passions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VOLUNTEER_OPTIONS.map((option) => (
            <VolunteerCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  )
}
