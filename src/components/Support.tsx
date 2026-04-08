import { useState } from 'react'
import { Check, Heart } from 'lucide-react'
import { DONATION_TIERS } from '../data/content'
import type { DonationTier } from '../data/content'

export default function Support() {
  const [selectedTier, setSelectedTier] = useState<string>('tier-2')
  const [customAmount, setCustomAmount] = useState('')

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Make a Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Support Our Mission</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Your donation directly funds cleanups, tree planting, and youth education programs across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {DONATION_TIERS.map((tier: DonationTier) => (
            <button
              key={tier.id}
              onClick={() => {
                setSelectedTier(tier.id)
                setCustomAmount('')
              }}
              className={`relative rounded-2xl p-6 text-left transition-all duration-200 border-2 focus:outline-none ${
                selectedTier === tier.id
                  ? 'border-green-600 bg-green-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              {selectedTier === tier.id && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div className="text-3xl font-extrabold text-green-800 mb-1">
                {tier.amount.toLocaleString()} <span className="text-lg font-semibold text-green-600">{tier.currency}</span>
              </div>
              <div className="font-bold text-green-900 mb-2">{tier.label}</div>
              <p className="text-sm text-green-700">{tier.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-6 mb-6">
          <label className="block text-sm font-semibold text-green-800 mb-2">
            Or enter a custom amount (KES)
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedTier('')
              }}
              placeholder="e.g. 2500"
              className="flex-1 border border-green-200 rounded-xl px-4 py-3 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            />
          </div>
        </div>

        <div className="text-center">
          <button className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Donate Now via M-Pesa
          </button>
          <p className="mt-3 text-sm text-green-600">Secure payment via M-Pesa, bank transfer, or card</p>
        </div>
      </div>
    </section>
  )
}
