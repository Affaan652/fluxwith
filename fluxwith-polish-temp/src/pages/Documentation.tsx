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
      { title: 'AI Builder', desc: 'Using the AI builder', href: '#' },
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
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Resources</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Documentation</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl">
              Everything you need to know to build amazing websites with FluxWith.
            </p>

            {/* Search */}
            <div className="mt-6 max-w-md">
              <div className="relative rounded-lg border border-white/10 bg-white/5">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-transparent focus:outline-none text-sm text-white placeholder:text-gray-600"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Docs grid - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {docs.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-base font-semibold text-white mb-3">{category.category}</h2>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="block py-1.5 px-2 -mx-2 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-colors group text-sm"
                      >
                        <span className="font-medium group-hover:text-white">{item.title}</span>
                        <p className="text-xs mt-0.5 text-gray-500">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - WHITE FOR CONTRAST */}
      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-black">Still need help?</h2>
          <p className="mt-2 text-sm text-gray-600">Check out our community or contact support.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Link to="/community" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-[0.96] transition-all duration-150 ease-out">
              Community
            </Link>
            <Link to="/contact" className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 active:scale-[0.96] transition-all duration-150 ease-out">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
