import { BookOpen } from 'lucide-react'
import { LEARNING_RESOURCES } from '../data/content'
import type { LearningResource } from '../data/content'

function ResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <div className="card overflow-hidden flex flex-col">
      <div className={`bg-gradient-to-br ${resource.gradient} p-6 text-white`}>
        <span className="inline-block bg-white/25 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
          {resource.category}
        </span>
        <h3 className="text-xl font-bold leading-snug">{resource.title}</h3>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <p className="text-green-700 text-sm leading-relaxed flex-1">{resource.description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-green-100">
          <span className="text-xs text-green-500 font-medium flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {resource.readTime}
          </span>
          <a
            href="#"
            className="text-green-600 font-semibold text-sm hover:text-green-700 flex items-center gap-1 group"
          >
            Read more
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Learning() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Knowledge Hub
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Learn & Take Action</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Deepen your understanding of Kenya's environmental challenges and discover how to make a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEARNING_RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
