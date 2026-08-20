import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const guides = [
  {
    title: 'Getting Started with FluxWith',
    description: 'Learn the basics of building your first AI-built website.',
    category: 'Beginner',
    readTime: '5 min read',
  },
  {
    title: 'Design Best Practices',
    description: 'Tips and tricks for creating visually stunning websites.',
    category: 'Design',
    readTime: '8 min read',
  },
  {
    title: 'SEO Optimization Guide',
    description: 'How to make your built sites rank higher in search engines.',
    category: 'Marketing',
    readTime: '10 min read',
  },
  {
    title: 'Custom Domain Setup',
    description: 'Step-by-step guide to connecting your own domain.',
    category: 'Technical',
    readTime: '6 min read',
  },
  {
    title: 'Building E-commerce Sites',
    description: 'Create online stores with product pages and checkout flows.',
    category: 'Advanced',
    readTime: '12 min read',
  },
  {
    title: 'Team Collaboration Workflow',
    description: 'Best practices for teams using FluxWith together.',
    category: 'Teams',
    readTime: '7 min read',
  },
]

export default function Guides() {
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
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Guides & Tutorials</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl">
              Step-by-step guides to help you master FluxWith and build amazing websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides grid - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors duration-150"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-medium text-gray-400">
                      {guide.category}
                    </span>
                    <span className="text-[10px] text-gray-500">{guide.readTime}</span>
                  </div>
                  
                  <h2 className="text-base font-semibold text-white group-hover:text-white transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">{guide.description}</p>

                  <a href="#" className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-gray-300 group-hover:gap-2 transition-all">
                    Read guide
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - WHITE FOR CONTRAST */}
      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-xl font-bold text-black">Never miss a tutorial</h2>
          <p className="mt-2 text-sm text-gray-600">Get new guides delivered to your inbox weekly.</p>
          
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-black focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-black px-4 py-2 text-xs font-medium text-white hover:bg-gray-800 active:scale-[0.96] transition-all duration-150 ease-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
