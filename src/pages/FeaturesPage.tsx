import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const featureCategories = [
  {
    title: 'AI Generation',
    description: 'Powerful AI that understands your vision',
    features: [
      { name: 'Natural Language Input', desc: 'Describe your site in plain English' },
      { name: 'Context-Aware Design', desc: 'AI picks the perfect style for your needs' },
      { name: 'Instant Generation', desc: 'Complete sites in under 30 seconds' },
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
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Features</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Powerful features for modern creators
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, customize, and deploy stunning websites — 
              all powered by cutting-edge AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature categories */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:gap-24">
            {featureCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className={`grid gap-12 items-center ${catIndex % 2 === 1 ? 'lg:grid-cols-[1fr_400px]' : ''}`}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{category.title}</h2>
                  <p className="mt-4 text-lg text-gray-600">{category.description}</p>
                  
                  <ul className="mt-8 space-y-6">
                    {category.features.map((feature) => (
                      <li key={feature.name} className="flex gap-4">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">
                          ✓
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className="hidden lg:block rounded-2xl border border-gray-200 bg-gray-50 p-8 h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex rounded-xl bg-black p-4 mb-4">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">{category.title} Preview</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Components' },
              { value: '<30s', label: 'Generation Time' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '10K+', label: 'Happy Users' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Start building today
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Experience all these features for free. No credit card required.
            </p>
            <Link
              to="/signup"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800"
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
