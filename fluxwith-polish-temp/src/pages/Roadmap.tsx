import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const roadmap = [
  {
    quarter: 'Q1 2026',
    status: 'in-progress',
    items: [
      { title: 'AI Image Builder', desc: 'Build custom images with AI directly in your sites', completed: false },
      { title: 'Advanced Animations', desc: 'Pre-built animation library for stunning effects', completed: true },
      { title: 'Multi-language Support', desc: 'Build websites in 20+ languages', completed: false },
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'upcoming',
    items: [
      { title: 'CMS Integration', desc: 'Connect to headless CMS platforms', completed: false },
      { title: 'A/B Testing Tools', desc: 'Built-in testing for conversions', completed: false },
      { title: 'Team Workflows', desc: 'Approval flows and comments', completed: false },
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'upcoming',
    items: [
      { title: 'API V2', desc: 'More powerful API with webhooks', completed: false },
      { title: 'White-label Solution', desc: 'For agencies and enterprises', completed: false },
      { title: 'Plugin System', desc: 'Extend FluxWith with plugins', completed: false },
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'upcoming',
    items: [
      { title: 'Mobile App', desc: 'Build on the go with iOS and Android apps', completed: false },
      { title: 'AI Assistant Chat', desc: 'Conversational site building', completed: false },
      { title: 'Enterprise SSO', desc: 'SAML and OAuth support', completed: false },
    ],
  },
]

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Hero - COMPACT */}
      <section className="pt-16 pb-12 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Roadmap</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Where we're headed</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl">
              A peek into what we're building next. Have a suggestion? 
              Let us know — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap timeline - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {roadmap.map((quarter, qIndex) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: qIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Quarter header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    quarter.status === 'in-progress'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-gray-300'
                  }`}>
                    {quarter.quarter}
                  </span>
                  {quarter.status === 'in-progress' && (
                    <span className="flex items-center gap-2 text-xs text-green-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      In Progress
                    </span>
                  )}
                </div>

                {/* Items grid */}
                <div className="grid md:grid-cols-3 gap-3">
                  {quarter.items.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-lg border p-4 transition-colors ${
                        item.completed 
                          ? 'border-green-500/30 bg-green-500/5' 
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          item.completed ? 'bg-green-500' : 'bg-white/20'
                        }`}>
                          {item.completed && (
                            <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className={`font-medium text-sm ${item.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feedback CTA - WHITE FOR CONTRAST */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 rounded-lg bg-white p-8 text-center"
          >
            <h2 className="text-xl font-bold text-black">Have feedback?</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
              We're always looking for ways to improve. Share your ideas and help shape the future of FluxWith.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 active:scale-[0.96] transition-all duration-150 ease-out"
            >
              Send us your ideas
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
