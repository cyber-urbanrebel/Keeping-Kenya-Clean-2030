import { Leaf, Mail, Phone, Instagram, Twitter, Facebook, Youtube, MapPin } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-green-700 rounded-full">
                <Leaf className="w-5 h-5 text-green-300" />
              </div>
              <span className="font-bold text-white">Keeping Kenya Clean 2030</span>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-5">
              A grassroots movement building a cleaner, greener Kenya through community action, conservation, and youth empowerment.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-green-700/60 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Icon className="w-4 h-4 text-green-200" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-green-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 uppercase text-xs tracking-widest">Programs</h3>
            <ul className="flex flex-col gap-2 text-sm text-green-300">
              {['Urban Cleanup', 'Forest Restoration', 'Ocean & Lake Conservation', 'Youth Education', 'Sustainable Communities', 'Policy Advocacy'].map((p) => (
                <li key={p}>
                  <a href="#programs" className="hover:text-white transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3 text-green-300">
                <MapPin className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                <span>Ngong Road, Nairobi, Kenya</span>
              </li>
              <li>
                <a href="mailto:info@keepingkenyaclean.org" className="flex items-center gap-3 text-green-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                  info@keepingkenyaclean.org
                </a>
              </li>
              <li>
                <a href="tel:+254700000000" className="flex items-center gap-3 text-green-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-green-400 text-sm">
            © {currentYear} Keeping Kenya Clean 2030. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-green-500">
            <a href="#" className="hover:text-green-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
