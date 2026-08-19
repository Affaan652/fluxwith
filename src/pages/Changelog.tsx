import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const changelog = [
  {
    version: '2.4.0',
    date: 'January 15, 2026',
    type: 'major',
    changes: [
      { type: 'new', text: 'New AI model with 40% faster generation' },
      { type: 'new', text: 'Component marketplace with community submissions' },
      { type: 'improved', text: 'Redesigned visual editor with better UX' },
      { type: 'fixed', text: 'Fixed mobile preview rendering issues' },
    ],
  },
  {
    version: '2.3.0',
    date: 'December 8, 2025',
    type: 'minor',
    changes: [
      { type: 'new', text: 'Custom domain support for all plans' },
      { type: 'new', text: 'New e-commerce template collection' },
      { type: 'improved', text: 'Enhanced SEO optimization features' },
      { type: 'fixed', text: 'Fixed export formatting bugs' },
    ],
  },
  {
    version: '2.2.0',
    date: 'November 20, 2025',
    type: 'minor',
    changes: [
      { type: 'new', text: 'Team collaboration features' },
      { type: 'new', text: 'Version history and rollback' },
      { type: 'improved', text: 'Improved code quality of generated sites' },
      { type: 'fixed', text: 'Fixed image optimization pipeline' },
    ],
  },
  {
    version: '2.1.0',
    date: 'October 5, 2025',
    type: 'minor',
    changes: [
      { type: 'new', text: 'Blog template generator' },
      { type: 'new', text: 'Analytics dashboard integration' },
      { type: 'improved', text: 'Faster page load times' },
      { type: 'fixed', text: 'Fixed form submission handling' },
    ],
  },
]

const changeTypeStyles: Record<string, string> = {
  new: 'bg-green-100 text-green-800 border-green-200',
  improved: 'bg-blue-100 text-blue-800 border-blue-200',
  fixed: 'bg-gray-100 text-gray-700 border-gray-200',
}

export default function Changelog() {
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
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Changelog</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              What's new
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Stay up to date with the latest FluxWith features, improvements, and bug fixes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changelog entries */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {changelog.map((entry, index) => (
              <motion.article
                key={entry.version}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pb-12 border-b border-gray-200 last:border-b-0"
              >
                {/* Version header */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    entry.type === 'major' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    v{entry.version}
                  </span>
                  <time className="text-sm text-gray-500">{entry.date}</time>
                </div>

                {/* Changes list */}
                <ul className="space-y-3">
                  {entry.changes.map((change) => (
                    <li key={change.text} className="flex items-start gap-3">
                      <span className={`inline-flex shrink-0 items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium border ${changeTypeStyles[change.type]}`}>
                        {change.type === 'new' && 'New'}
                        {change.type === 'improved' && 'Improved'}
                        {change.type === 'fixed' && 'Fixed'}
                      </span>
                      <span className="text-gray-700">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* RSS link */}
          <div className="mt-16 p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">Stay updated</h3>
              <p className="text-sm text-gray-600 mt-1">Subscribe to our changelog feed</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              RSS Feed
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
