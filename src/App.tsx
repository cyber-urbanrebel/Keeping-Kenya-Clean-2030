import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactCounters from './components/ImpactCounters'
import Programs from './components/Programs'
import CampaignHighlights from './components/CampaignHighlights'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Volunteer from './components/Volunteer'
import Learning from './components/Learning'
import Support from './components/Support'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <main>
        <Hero />
        <ImpactCounters />
        <Programs />
        <CampaignHighlights />
        <Events />
        <Testimonials />
        <Partners />
        <Volunteer />
        <Learning />
        <Support />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
