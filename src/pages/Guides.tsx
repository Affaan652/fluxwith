import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const guides = [
  {
    title: 'Getting Started with FluxWith',
    description: 'Learn the basics of building your first AI-generated website.',
    category: 'Beginner',
    readTime: '5 min read',
    image: 'guide-1',
  },
  {
    title: 'Design Best Practices',
    description: 'Tips and tricks for creating visually stunning websites.',
    category: 'Design',
    readTime: '8 min read',
    image: 'guide-2',
  },
  {
    title: 'SEO Optimization Guide',
    description: 'How to make your generated sites rank higher in search engines.',
    category: 'Marketing',
    readTime: '10 min read',
    image: 'guide-3',
  },
  {
    title: 'Custom Domain Setup',
    description: 'Step-by-step guide to connecting your own domain.',
    category: 'Technical',
    readTime: '6 min read',
    image: 'guide-4',
  },
  {
    title: 'Building E-commerce Sites',
    description: 'Create online stores with product pages and checkout flows.',
    category: 'Advanced',
    readTime: '12 min read',
    image: 'guide-5',
  },
  {
    title: 'Team Collaboration Workflow',
    description: 'Best practices for teams using FluxWith together.',
    category: 'Teams',
    readTime: '7 min read',
    image: 'guide-6',
  },
]

export default function Guides() {
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
              Guides & Tutorials
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Step-by-step guides to help you master FluxWith and build amazing websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-black hover:shadow-xl transition-all"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-400">{guide.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors mb-2">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{guide.description}</p>

                  <a href="#" className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-black group-hover:gap-2 transition-all">
                    Read guide
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Never miss a tutorial</h2>
          <p className="mt-2 text-gray-600">Get new guides delivered to your inbox weekly.</p>
          
          <form className="mt-6 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:border-black focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
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
