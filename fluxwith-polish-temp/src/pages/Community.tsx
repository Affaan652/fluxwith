import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const communityLinks = [
  {
    title: 'Discord Server',
    description: 'Join 5,000+ members for real-time chat, support, and networking.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
      </svg>
    ),
    href: '#',
  },
  {
    title: 'GitHub Discussions',
    description: 'Share ideas, ask questions, and discuss features with other developers.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    href: '#',
  },
  {
    title: 'Twitter/X',
    description: 'Follow us for updates, tips, and community highlights.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: '#',
  },
  {
    title: 'YouTube Channel',
    description: 'Video tutorials, live streams, and in-depth guides.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 2 11.998 2 11.998 2s6.255 0 7.814.418zM9.75 8v8l6-4-6-4z" clipRule="evenodd" />
      </svg>
    ),
    href: '#',
  },
]

export default function Community() {
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
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Resources</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Join our community</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
              Connect with thousands of creators, share your work, get help, 
              and help shape the future of FluxWith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community links - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {communityLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 p-5 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors duration-150 active:scale-[0.96]"
              >
                <div className="shrink-0 p-2 rounded-lg bg-white/10 group-hover:bg-white group-hover:text-black text-gray-300 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">{link.title}</h2>
                  <p className="mt-1 text-xs text-gray-400">{link.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                    Join now
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - COMPACT */}
      <section className="bg-white/5 py-12 px-6 border-y border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '5K+', label: 'Discord Members' },
              { value: '10K+', label: 'GitHub Stars' },
              { value: '500+', label: 'Contributors' },
              { value: '50+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of conduct - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl font-bold text-white">Community guidelines</h2>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              We're committed to providing a welcoming and inspiring space for everyone. 
              Please be respectful, helpful, and kind to fellow community members.
            </p>
            <a href="#" className="inline-block mt-4 text-sm font-medium text-gray-300 hover:text-white underline transition-colors">
              Read full code of conduct
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
