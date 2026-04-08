import { useEffect, useRef, useState } from 'react'
import { Users, Calendar, Trash2, MapPin } from 'lucide-react'
import { IMPACT_STATS } from '../data/content'
import type { ImpactStat } from '../data/content'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Calendar,
  Trash2,
  MapPin,
}

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [started, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

function StatCard({ stat }: { stat: ImpactStat }) {
  const Icon = ICON_MAP[stat.icon]
  return (
    <div className="card p-8 text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4 group-hover:bg-green-600 transition-colors duration-300">
        {Icon && <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />}
      </div>
      <div className="text-4xl font-extrabold text-green-800 mb-1">
        <CountUp target={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-green-600 font-medium">{stat.label}</div>
    </div>
  )
}

export default function ImpactCounters() {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">Our Impact in Numbers</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Every volunteer, every event, every kilogram of waste removed — it all adds up to a cleaner Kenya.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => (
            <StatCard key={stat.icon} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
