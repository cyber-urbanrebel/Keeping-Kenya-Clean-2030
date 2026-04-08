import { MapPin, Users, ChevronRight } from 'lucide-react'
import { EVENTS } from '../data/content'
import type { EventItem } from '../data/content'

const TYPE_COLORS: Record<string, string> = {
  'Urban Cleanup': 'bg-green-100 text-green-700',
  'Water Conservation': 'bg-blue-100 text-blue-700',
  'Forest Restoration': 'bg-emerald-100 text-emerald-700',
  'Coastal Cleanup': 'bg-teal-100 text-teal-700',
}

function EventCard({ event }: { event: EventItem }) {
  const spotsLeft = event.maxParticipants - event.participants
  const percentFull = (event.participants / event.maxParticipants) * 100
  const typeColor = TYPE_COLORS[event.type] ?? 'bg-gray-100 text-gray-700'

  return (
    <div className="card p-6 flex flex-col sm:flex-row gap-5 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-xl flex flex-col items-center justify-center text-white shadow-md">
        <span className="text-xs font-bold uppercase tracking-wider">{event.month}</span>
        <span className="text-2xl font-extrabold leading-none">{event.day}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColor}`}>
            {event.type}
          </span>
        </div>
        <h3 className="text-lg font-bold text-green-900 mb-1">{event.title}</h3>
        <div className="flex flex-wrap gap-3 text-sm text-green-600 mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {event.location}
          </span>
          <span className="text-green-400">•</span>
          <span className="font-medium text-green-700">{event.county}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm text-green-700">
            <Users className="w-4 h-4" />
            <span>{event.participants}/{event.maxParticipants} registered</span>
          </div>
          <div className="flex-1 bg-green-100 rounded-full h-2 max-w-24">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${percentFull}%` }}
            />
          </div>
          <span className="text-xs text-green-600 font-medium">{spotsLeft} spots left</span>
        </div>
      </div>
      <a
        href="#volunteer"
        className="flex-shrink-0 flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
      >
        Register <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className="py-20 bg-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get Out There
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Upcoming Events</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Join us at one of our upcoming cleanup and conservation events across Kenya.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#volunteer" className="btn-primary">
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}
