import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-700 to-emerald-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 rounded-2xl mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Connected</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Get monthly updates on our campaigns, upcoming events, volunteer opportunities, and environmental news from Kenya.
        </p>

        {submitted ? (
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-400 rounded-full mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">You're subscribed!</h3>
            <p className="text-white/80">Thank you for joining our community. You'll receive our next newsletter soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-full bg-white/15 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-white text-green-700 px-6 py-4 rounded-full font-bold hover:bg-green-50 transition-colors shadow-md whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-white/60 text-sm">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  )
}
