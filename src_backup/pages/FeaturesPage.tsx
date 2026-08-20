import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const featureCategories = [
  {
    title: 'AI Building',
    description: 'Powerful AI that understands your vision',
    features: [
      { name: 'Natural Language Input', desc: 'Describe your site in plain English' },
      { name: 'Context-Aware Design', desc: 'AI picks the perfect style for your needs' },
      { name: 'Instant Build', desc: 'Complete sites in under 30 seconds' },
      { name: 'Iterative Refinement', desc: 'Ask for changes and get instant updates' },
    ],
  },
  {
    title: 'Design System',
    description: 'Beautiful designs out of the box',
    features: [
      { name: '50+ Components', desc: 'Pre-built sections and elements' },
      { name: 'Responsive Templates', desc: 'Mobile-first by default' },
      { name: 'Custom Themes', desc: 'Match your brand perfectly' },
      { name: 'Typography Control', desc: 'Beautiful fonts included' },
    ],
  },
  {
    title: 'Editor Tools',
    description: 'Fine-tune every detail',
    features: [
      { name: 'Visual Editor', desc: 'Drag-and-drop simplicity' },
      { name: 'Code Editor', desc: 'For advanced customization' },
      { name: 'Live Preview', desc: 'See changes in real-time' },
      { name: 'Undo History', desc: 'Never lose your work' },
    ],
  },
  {
    title: 'Deployment',
    description: 'Ship with confidence',
    features: [
      { name: 'One-Click Deploy', desc: 'Go live instantly' },
      { name: 'Custom Domains', desc: 'Use your own domain' },
      { name: 'SSL Included', desc: 'Security built-in' },
      { name: 'Global CDN', desc: 'Lightning-fast worldwide' },
    ],
  },
]

export default function Features() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Hero - COMPACT */}
      <section className="pt-16 pb-12 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Features</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Powerful features for modern creators
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-400 max-w-xl mx-auto">
              Everything you need to build, customize, and deploy stunning websites — 
              all powered by cutting-edge AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature categories - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-10">
            {featureCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
                <p className="mt-2 text-sm text-gray-400">{category.description}</p>
                
                <ul className="mt-4 space-y-3">
                  {category.features.map((feature) => (
                    <li key={feature.name} className="flex gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-black text-xs font-bold">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-sm">{feature.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - COMPACT */}
      <section className="bg-white/5 py-12 px-6 border-y border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50+', label: 'Components' },
              { value: '<30s', label: 'Build Time' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '10K+', label: 'Happy Users' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - WHITE FOR CONTRAST */}
      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-black">Start building today</h2>
            <p className="mt-2 text-sm text-gray-600">
              Experience all these features for free. No credit card required.
            </p>
            <Link
              to="/signup"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 active:scale-[0.96] transition-all duration-150 ease-out"
            >
              Get started free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
