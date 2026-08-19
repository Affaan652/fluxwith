import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function FinalCta() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-flux-cyan/20 via-flux-purple/15 to-flux-pink/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="liquid-glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-flux-cyan via-flux-purple to-flux-pink opacity-20 blur-xl animate-pulse" />
          
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-flux-cyan to-flux-purple mb-8 shadow-lg glow-cyan"
            >
              <svg className="w-10 h-10 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>

            {/* Content */}
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to build something{' '}
              <span className="gradient-text">amazing</span>?
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg text-fume-light leading-relaxed mb-10">
              Join thousands of creators who are already using FluxWith to bring their ideas to life. 
              Start for free — no credit card required.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="btn-primary text-base px-8 py-4 flex items-center gap-3 group"
              >
                Start building for free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="/#pricing"
                className="btn-secondary text-base px-8 py-4 flex items-center gap-2"
              >
                View pricing
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-line/50 flex flex-wrap items-center justify-center gap-8 text-sm text-fume">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
