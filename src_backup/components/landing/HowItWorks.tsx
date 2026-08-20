import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Describe your vision',
    description: 'Tell us what you need in plain English. Be as detailed or brief as you like.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI forges your site',
    description: 'Our AI analyzes your requirements and creates your complete website.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Customize and publish',
    description: 'Use our visual editor to fine-tune every detail and deploy instantly.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-ash-light/30 py-20 overflow-hidden">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="flux-blob flux-blob-amber" style={{ opacity: 0.06 }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header - NO eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center mb-14"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl text-balance">
            Three simple steps
          </h2>
          <p className="mt-3 text-sm text-fume leading-relaxed">
            From idea to live website in under a minute.
          </p>
        </motion.div>

        {/* Steps with scroll-reveal */}
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative text-center"
            >
              {/* Step card with liquid-glass */}
              <div className="liquid-glass !rounded-2xl !p-6 hover:-translate-y-2 transition-transform">
                {/* Step number & icon */}
                <div className="relative inline-flex items-center justify-center mb-4">
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-flux-cyan to-flux-amber text-[10px] font-bold text-void">
                    {step.number}
                  </span>
                  <div className="rounded-xl bg-void p-4 border border-line text-flux-cyan shadow-lg">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold text-bone mb-2">{step.title}</h3>
                <p className="text-sm text-fume leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual demo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 liquid-glass !rounded-2xl !p-6"
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-flux-cyan" />
                <div>
                  <p className="font-medium text-sm text-bone">Natural language input</p>
                  <p className="text-xs text-fume mt-0.5">Just describe what you want</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-flux-amber" />
                <div>
                  <p className="font-medium text-sm text-bone">Smart AI processing</p>
                  <p className="text-xs text-fume mt-0.5">Context-aware building</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-flux-cyan" />
                <div>
                  <p className="font-medium text-sm text-bone">Instant preview</p>
                  <p className="text-xs text-fume mt-0.5">See results in real-time</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 rounded-xl bg-void p-5 border border-line/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 h-4 rounded bg-line/20 border border-line/30" />
              </div>
              <div className="space-y-2">
                <div className="h-6 w-24 rounded-md bg-flux-cyan/20" />
                <div className="h-2 w-full rounded bg-line/10" />
                <div className="h-2 w-3/4 rounded bg-line/10" />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-14 rounded bg-line/10" />
                  <div className="h-14 rounded bg-line/10" />
                  <div className="h-14 rounded bg-line/10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
