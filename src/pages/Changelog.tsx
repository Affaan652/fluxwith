import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const changelog = [
  {
    version: '2.4.0',
    date: 'January 15, 2026',
    type: 'major',
    changes: [
      { type: 'new', text: 'New AI model with 40% faster build times' },
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
      { type: 'improved', text: 'Improved code quality of built sites' },
      { type: 'fixed', text: 'Fixed image optimization pipeline' },
    ],
  },
  {
    version: '2.1.0',
    date: 'October 5, 2025',
    type: 'minor',
    changes: [
      { type: 'new', text: 'Blog template builder' },
      { type: 'new', text: 'Analytics dashboard integration' },
      { type: 'improved', text: 'Faster page load times' },
      { type: 'fixed', text: 'Fixed form submission handling' },
    ],
  },
]

const changeTypeStyles: Record<string, string> = {
  new: 'bg-green-500/20 text-green-400 border-green-500/30',
  improved: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  fixed: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
}

export default function Changelog() {
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
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Changelog</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">What's new</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl">
              Stay up to date with the latest FluxWith features, improvements, and bug fixes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changelog entries - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {changelog.map((entry, index) => (
              <motion.article
                key={entry.version}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-8 border-b border-white/10 last:border-b-0"
              >
                {/* Version header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    entry.type === 'major' 
                      ? 'bg-white text-black' 
                      : 'bg-white/10 text-gray-300'
                  }`}>
                    v{entry.version}
                  </span>
                  <time className="text-xs text-gray-500">{entry.date}</time>
                </div>

                {/* Changes list */}
                <ul className="space-y-2">
                  {entry.changes.map((change) => (
                    <li key={change.text} className="flex items-start gap-2">
                      <span className={`inline-flex shrink-0 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-medium border ${changeTypeStyles[change.type]}`}>
                        {change.type === 'new' && 'New'}
                        {change.type === 'improved' && 'Improved'}
                        {change.type === 'fixed' && 'Fixed'}
                      </span>
                      <span className="text-sm text-gray-300">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* RSS link */}
          <div className="mt-10 p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="font-medium text-white text-sm">Stay updated</h3>
              <p className="text-xs text-gray-400 mt-0.5">Subscribe to our changelog feed</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-medium text-black hover:bg-gray-100 active:scale-[0.96] transition-all duration-150 ease-out">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
