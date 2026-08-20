import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const examplePrompts = [
  'SaaS product landing page',
  'E-commerce fashion store',
  'Portfolio for photographer',
  'Restaurant booking website',
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  return (
    <section className="relative overflow-hidden bg-void">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="flux-blob flux-blob-cyan" />
        <div className="flux-blob flux-blob-amber" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262a35_1px,transparent_1px),linear-gradient(to_bottom,#262a35_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_5%,transparent_100%)]" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge - only hero has eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ash/50 px-3 py-1.5 text-xs backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flux-cyan/40 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-flux-cyan" />
            </span>
            <span className="text-fume font-medium">AI-Powered Website Builder</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl lg:text-6xl leading-[1.1] text-balance"
          >
            Build stunning websites{' '}
            <br className="hidden sm:block" />
            <span className="text-fume">
              in seconds, not weeks
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fume"
          >
            Describe your vision in plain English and watch FluxWith build production-ready websites instantly.
          </motion.p>

          {/* CTA + Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            {/* Input box with liquid-glass effect */}
            <div className="liquid-glass w-full max-w-lg !rounded-xl !p-1.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center pl-2">
                  <svg className="h-4 w-4 text-fume" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your dream website..."
                  className="flex-1 rounded-lg bg-transparent px-3 py-3 text-sm text-bone placeholder:text-fume/60 focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-flux-cyan/30 transition-all border-0 font-body"
                />
                <Link
                  to="/signup"
                  className="flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-flux-cyan to-flux-amber px-5 py-3 text-sm font-semibold text-void transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-flux-cyan/20 active:scale-[0.98] duration-200 ease-out"
                >
                  Forge it
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Example prompts */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
              {examplePrompts.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setPrompt(example)}
                  className="rounded-full border border-line bg-ash/30 px-3 py-1.5 text-xs text-fume transition-all hover:border-flux-cyan/50 hover:text-bone hover:bg-ash active:scale-[0.96] duration-150 ease-out"
                >
                  {example}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {[
              { value: '50K+', label: 'Websites Built' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '< 2s', label: 'Avg Load Time' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-bone tabular-nums">{stat.value}</div>
                <div className="mt-1 text-xs text-fume">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="liquid-glass !rounded-xl !p-2">
            <div className="rounded-lg bg-void overflow-hidden border border-line/50">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-ash/50 border-b border-line/50">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-3 flex-1 h-5 rounded bg-ash px-3 text-xs text-fume flex items-center font-mono">
                  fluxwith.app/your-site
                </div>
              </div>
              
              {/* Mock website preview */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Card 1 */}
                  <div className="rounded-lg bg-ash-light p-5 border border-line/30 hover:border-flux-cyan/30 transition-colors">
                    <div className="h-2.5 w-16 rounded bg-flux-cyan/20 mb-3" />
                    <div className="space-y-1.5 mb-4">
                      <div className="h-1.5 w-full rounded bg-line/20" />
                      <div className="h-1.5 w-4/5 rounded bg-line/20" />
                      <div className="h-1.5 w-3/5 rounded bg-line/20" />
                    </div>
                    <button className="h-7 w-full rounded-lg bg-gradient-to-r from-flux-cyan to-flux-amber text-void text-xs font-medium">Get Started</button>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="rounded-lg bg-bone p-5 shadow-sm">
                    <div className="h-2.5 w-12 rounded bg-void/20 mb-3" />
                    <div className="space-y-1.5 mb-4">
                      <div className="h-1.5 w-full rounded bg-void/10" />
                      <div className="h-1.5 w-4/5 rounded bg-void/10" />
                      <div className="h-1.5 w-3/5 rounded bg-void/10" />
                    </div>
                    <button className="h-7 w-full rounded-lg bg-void text-bone text-xs font-semibold">Learn More</button>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="rounded-lg bg-ash-light p-5 border border-line/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-flux-amber/10 rounded-full blur-2xl" />
                    <div className="h-2.5 w-20 rounded bg-flux-amber/60 mb-3" />
                    <div className="space-y-1.5 mb-4">
                      <div className="h-1.5 w-full rounded bg-line/20" />
                      <div className="h-1.5 w-4/5 rounded bg-line/20" />
                      <div className="h-1.5 w-3/5 rounded bg-line/20" />
                    </div>
                    <button className="h-7 w-full rounded-lg bg-flux-amber text-void text-xs font-semibold">Try Now</button>
                  </div>
                </div>
                
                {/* Bottom bar mockup */}
                <div className="mt-5 pt-4 border-t border-line/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-flux-cyan/20" />
                    <div>
                      <div className="h-1.5 w-14 rounded bg-line/30" />
                      <div className="h-1 w-10 rounded bg-line/20 mt-1" />
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-6 w-16 rounded bg-ash/50" />
                    <div className="h-6 w-16 rounded bg-bone" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-1/4 hidden xl:block"
          >
            <div className="liquid-glass !rounded-lg !p-3">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-flux-cyan/10 flex items-center justify-center border border-flux-cyan/20">
                  <svg className="h-4 w-4 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-bone">Site Forged!</div>
                  <div className="text-[10px] text-fume mt-0.5">Ready to publish live</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-1/4 hidden xl:block"
          >
            <div className="liquid-glass !rounded-lg !p-3">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-flux-amber/10 flex items-center justify-center border border-flux-amber/20">
                  <svg className="h-4 w-4 text-flux-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-bone">Lightning Fast</div>
                  <div className="text-[10px] text-fume mt-0.5">Forged in 8 seconds</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
