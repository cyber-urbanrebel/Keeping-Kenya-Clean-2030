import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import type { Testimonial } from '../data/content'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card p-8 flex flex-col gap-5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-green-800 leading-relaxed italic flex-1">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-4 pt-4 border-t border-green-100">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold text-green-900">{testimonial.name}</div>
          <div className="text-sm text-green-600">{testimonial.role}</div>
          <div className="text-xs text-green-500">{testimonial.location}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Community Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">What Our Volunteers Say</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Real stories from real people making a difference in Kenya's environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
