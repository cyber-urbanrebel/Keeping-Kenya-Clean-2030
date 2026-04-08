import { Globe } from 'lucide-react'
import { PARTNERS } from '../data/content'

const TYPE_COLORS: Record<string, string> = {
  Government:    'bg-blue-50 border-blue-200 text-blue-700',
  NGO:           'bg-green-50 border-green-200 text-green-700',
  International: 'bg-purple-50 border-purple-200 text-purple-700',
  Corporate:     'bg-amber-50 border-amber-200 text-amber-700',
  Academic:      'bg-teal-50 border-teal-200 text-teal-700',
}

export default function Partners() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Working Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Our Partners</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Collaborating with government, NGOs, corporations, and academic institutions for lasting impact.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNERS.map((partner) => {
            const colorClass = TYPE_COLORS[partner.type] ?? 'bg-gray-50 border-gray-200 text-gray-700'
            return (
              <div
                key={partner.id}
                className={`rounded-xl border p-5 flex flex-col items-center gap-2 hover:shadow-md transition-shadow text-center ${colorClass}`}
              >
                <Globe className="w-6 h-6 opacity-60" />
                <span className="font-semibold text-sm leading-tight">{partner.name}</span>
                <span className="text-xs opacity-70 font-medium">{partner.type}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
