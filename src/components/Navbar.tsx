import { useState, useEffect } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-1.5 rounded-full transition-colors ${scrolled ? 'bg-green-100' : 'bg-white/20'}`}>
              <Leaf className={`w-6 h-6 transition-colors ${scrolled ? 'text-green-600' : 'text-white'}`} />
            </div>
            <span className={`font-bold text-sm sm:text-base transition-colors ${scrolled ? 'text-green-900' : 'text-white'}`}>
              Keeping Kenya Clean 2030
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${
                  scrolled ? 'text-green-800' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#volunteer"
              className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-md"
            >
              Join Now
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className={scrolled ? 'text-green-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-green-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-green-100">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-green-800 font-medium py-2 border-b border-green-50 hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#volunteer"
              className="mt-2 bg-green-600 text-white px-4 py-3 rounded-full text-center font-semibold hover:bg-green-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
