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
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Blog</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl">
              Insights, tutorials, and updates from the FluxWith team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post - COMPACT */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg border border-white/10 overflow-hidden md:grid md:grid-cols-2"
          >
            <div className="aspect-video md:aspect-auto bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center p-8">
              <span className="text-white text-sm font-semibold">Featured Post</span>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-white text-[10px] font-medium text-black mb-3">
                Featured
              </span>
              <h2 className="text-lg font-bold text-white mb-2">{posts[0].title}</h2>
              <p className="text-gray-400 text-sm mb-3">{posts[0].excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <time>{posts[0].date}</time>
                <span>{posts[0].readTime} read</span>
                <a href="#" className="font-medium text-gray-300 hover:text-white transition-colors">Read more</a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Posts grid - COMPACT */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-lg font-bold text-white mb-6">Latest articles</h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <a href="#" className="block rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-150">
                  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5" />
                  <div className="p-4">
                    <span className="text-[10px] font-medium text-gray-500">{post.category}</span>
                    <h3 className="mt-1 text-sm font-semibold text-white group-hover:text-white transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-[10px] text-gray-500">
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
