import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'AI-Powered Builder',
    description: 'Describe your website in plain English and watch AI build your words into a fully functional, beautifully designed website.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Fully Responsive',
    description: 'Every site you build is mobile-first and looks perfect on all devices, from smartphones to ultra-wide monitors.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Clean Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript. No lock-in, no proprietary formats — just clean, maintainable code.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: 'Component Library',
    description: 'Access 50+ pre-built components — hero sections, pricing tables, testimonial grids, and more. Mix and match freely.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Build complete websites in under 30 seconds. No waiting, no queues — instant results every time.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Secure & Private',
    description: 'Your data is encrypted end-to-end. We never share or sell your content. Enterprise-grade security included.',
  },
]

export default function Features() {
  return (
    <section className="relative bg-void py-20 overflow-hidden">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.08 }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header - NO eyebrow label here (varied pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center mb-14"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl text-balance">
            Everything you need
          </h2>
          <p className="mt-3 text-sm text-fume leading-relaxed">
            Powerful features that make website creation effortless.
          </p>
        </motion.div>

        {/* Features grid with liquid-glass cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group liquid-glass !rounded-xl !p-5 hover:-translate-y-1 transition-transform"
            >
              <div className="mb-3 inline-flex rounded-lg bg-flux-cyan/10 p-2.5 text-flux-cyan transition-colors group-hover:bg-flux-cyan/20 group-hover:text-flux-cyan-dim">
                {feature.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-bone">{feature.title}</h3>
              <p className="mt-2 text-sm text-fume leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <Link
            to="/pricing"
            className="btn-primary inline-flex items-center gap-2 rounded-xl"
          >
            Explore all features
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
