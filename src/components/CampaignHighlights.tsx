import { CAMPAIGNS } from '../data/content'
import type { Campaign } from '../data/content'

function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className={`bg-gradient-to-br ${campaign.gradient} p-6 text-white`}>
        <span className="inline-block bg-white/25 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
          {campaign.tag}
        </span>
        <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
        <p className="text-white/85 text-sm leading-relaxed">{campaign.description}</p>
      </div>
      <div className="bg-white p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between text-sm font-medium text-green-800 mb-2">
            <span>Progress</span>
            <span>{campaign.progress}%</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-3 mb-4">
            <div
              className="bg-green-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${campaign.progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-green-700">
            <span>Raised: <strong className="text-green-900">{campaign.raised}</strong></span>
            <span>Goal: <strong className="text-green-900">{campaign.goal}</strong></span>
          </div>
        </div>
        <a
          href="#support"
          className="mt-6 block text-center bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
        >
          Support This Campaign
        </a>
      </div>
    </div>
  )
}

export default function CampaignHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Active Campaigns
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Campaign Highlights</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Support our current campaigns and help us reach our fundraising goals to protect Kenya's environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPAIGNS.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  )
}
