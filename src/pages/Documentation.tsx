import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const docs = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Quick Start Guide', desc: 'Get up and running in 5 minutes', href: '#' },
      { title: 'Installation', desc: 'Set up your workspace', href: '#' },
      { title: 'First Project', desc: 'Build your first website', href: '#' },
      { title: 'Account Setup', desc: 'Configure your profile', href: '#' },
    ],
  },
  {
    category: 'Building',
    items: [
      { title: 'AI Generation', desc: 'Using the AI builder', href: '#' },
      { title: 'Visual Editor', desc: 'Drag-and-drop editing', href: '#' },
      { title: 'Components', desc: 'Using pre-built components', href: '#' },
      { title: 'Customization', desc: 'Styling and theming', href: '#' },
    ],
  },
  {
    category: 'Deployment',
    items: [
      { title: 'Publishing', desc: 'Deploy your site', href: '#' },
      { title: 'Custom Domains', desc: 'Connect your domain', href: '#' },
      { title: 'SSL & Security', desc: 'Secure your site', href: '#' },
      { title: 'Analytics', desc: 'Track performance', href: '#' },
    ],
  },
  {
    category: 'Advanced',
    items: [
      { title: 'Code Export', desc: 'Download source code', href: '#' },
      { title: 'API Integration', desc: 'Connect to APIs', href: '#' },
      { title: 'Team Collaboration', desc: 'Work with your team', href: '#' },
      { title: 'Troubleshooting', desc: 'Common issues & fixes', href: '#' },
    ],
  },
]

export default function Documentation() {
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
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Resources</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Documentation
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Everything you need to know to build amazing websites with FluxWith.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl">
              <div className="relative rounded-xl border border-gray-200 bg-white shadow-sm">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Docs grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {docs.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h2>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="block py-2 px-3 -mx-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors group"
                      >
                        <span className="font-medium group-hover:text-black">{item.title}</span>
                        <p className="text-sm mt-0.5">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Still need help?</h2>
          <p className="mt-2 text-gray-600">Check out our community or contact support.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/community" className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-white transition-colors">
              Community
            </Link>
            <Link to="/contact" className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
