import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const posts = [
  {
    title: 'The Future of AI Website Builders',
    excerpt: 'How artificial intelligence is revolutionizing web development and what it means for creators.',
    date: 'January 10, 2026',
    category: 'AI & Technology',
    readTime: '8 min',
  },
  {
    title: 'Design Trends for 2026',
    excerpt: 'The latest design trends shaping the web and how to implement them in your projects.',
    date: 'December 28, 2025',
    category: 'Design',
    readTime: '6 min',
  },
  {
    title: 'Building Faster Websites',
    excerpt: 'Performance optimization techniques that can dramatically improve your site speed.',
    date: 'December 15, 2025',
    category: 'Performance',
    readTime: '10 min',
  },
  {
    title: 'From Idea to Launch in 30 Seconds',
    excerpt: 'A complete walkthrough of creating and deploying a website with FluxWith.',
    date: 'November 30, 2025',
    category: 'Tutorials',
    readTime: '5 min',
  },
]

export default function Blog() {
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
              Blog
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Insights, tutorials, and updates from the FluxWith team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-gray-200 overflow-hidden md:grid md:grid-cols-2"
          >
            <div className="aspect-video md:aspect-auto bg-gradient-to-br from-black to-gray-800 flex items-center justify-center p-12">
              <span className="text-white text-lg font-semibold">Featured Post</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex w-fit px-3 py-1 rounded-full bg-black text-xs font-medium text-white mb-4">
                Featured
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{posts[0].title}</h2>
              <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time>{posts[0].date}</time>
                <span>{posts[0].readTime} read</span>
                <a href="#" className="font-medium text-black hover:underline">Read more</a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Latest articles</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a href="#" className="block rounded-xl overflow-hidden border border-gray-200 hover:border-black transition-colors">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200" />
                  <div className="p-6">
                    <span className="text-xs font-medium text-gray-500">{post.category}</span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                      <time>{post.date}</time>
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
