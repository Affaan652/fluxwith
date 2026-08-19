import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const roadmap = [
  {
    quarter: 'Q1 2026',
    status: 'in-progress',
    items: [
      { title: 'AI Image Generation', desc: 'Generate custom images with AI directly in your sites', completed: false },
      { title: 'Advanced Animations', desc: 'Pre-built animation library for stunning effects', completed: true },
      { title: 'Multi-language Support', desc: 'Generate websites in 20+ languages', completed: false },
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
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Roadmap</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Where we're headed
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              A peek into what we're building next. Have a suggestion? 
              Let us know — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap timeline */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:gap-16">
            {roadmap.map((quarter, qIndex) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: qIndex * 0.1 }}
                className="relative"
              >
                {/* Quarter header */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    quarter.status === 'in-progress'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {quarter.quarter}
                  </span>
                  {quarter.status === 'in-progress' && (
                    <span className="flex items-center gap-2 text-sm text-green-600">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      In Progress
                    </span>
                  )}
                </div>

                {/* Items grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {quarter.items.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-xl border p-5 transition-all ${
                        item.completed 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          item.completed ? 'bg-green-500' : 'bg-gray-200'
                        }`}>
                          {item.completed && (
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className={`font-medium ${item.completed ? 'text-gray-900 line-through' : 'text-gray-900'}`}>
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feedback CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 rounded-2xl bg-black p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Have feedback?</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              We're always looking for ways to improve. Share your ideas and help shape the future of FluxWith.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
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
