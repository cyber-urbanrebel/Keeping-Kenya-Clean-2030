import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data/content'
import type { FAQItem } from '../data/content'

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-green-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
        aria-expanded={open}
      >
        <span className="font-semibold text-green-900 pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 bg-green-50 text-green-700 text-sm leading-relaxed border-t border-green-200">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-green-700 text-lg">
            Everything you need to know about volunteering, donating, and partnering with us.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <FAQAccordion key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
