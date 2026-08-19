import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Describe Your Vision',
    description: 'Write a brief description of what you need. Be as detailed or as simple as you want — our AI understands context, industry, and design preferences.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    number: '02',
    title: 'AI Generates Your Site',
    description: 'Watch as our AI crafts a complete website in real-time — hero sections, feature grids, testimonials, pricing tables, and more. All optimized for conversion.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    number: '03',
    title: 'Customize & Refine',
    description: 'Use our intuitive editor to tweak every detail — change colors, swap images, edit copy, adjust layouts. Make it uniquely yours without writing code.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    color: 'pink',
  },
  {
    number: '04',
    title: 'Publish & Go Live',
    description: 'One click to deploy your site to a custom domain or export clean HTML/CSS. Connect analytics, set up SEO, and start converting visitors into customers.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    color: 'amber',
  },
]

const colorMap = {
  cyan: {
    bg: 'from-flux-cyan/20 to-flux-cyan/5',
    border: 'border-flux-cyan/30',
    text: 'text-flux-cyan',
    glow: 'shadow-flux-cyan/20',
  },
  purple: {
    bg: 'from-flux-purple/20 to-flux-purple/5',
    border: 'border-flux-purple/30',
    text: 'text-flux-purple',
    glow: 'shadow-flux-purple/20',
  },
  pink: {
    bg: 'from-flux-pink/20 to-flux-pink/5',
    border: 'border-flux-pink/30',
    text: 'text-flux-pink',
    glow: 'shadow-flux-pink/20',
  },
  amber: {
    bg: 'from-flux-amber/20 to-flux-amber/5',
    border: 'border-flux-amber/30',
    text: 'text-flux-amber',
    glow: 'shadow-flux-amber/20',
  },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ash/30 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="eyebrow inline-block mb-4">Simple Process</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight">
            From idea to live site in{' '}
            <span className="gradient-text-warm">under 5 minutes</span>
          </h2>
          <p className="mt-4 text-lg text-fume leading-relaxed">
            No complex tools, no steep learning curve. Just describe what you want 
            and watch your vision come to life.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-20 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-line to-transparent" />

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {steps.map((step, index) => {
              const colors = colorMap[step.color as keyof typeof colorMap]
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className={`liquid-glass rounded-2xl p-8 hover:${colors.glow} transition-all duration-500`}>
                    {/* Step number and icon */}
                    <div className="flex items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center text-xs font-bold ${colors.text}`}>
                          {step.number}
                        </span>
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-bone-white transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-fume-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Visual indicator */}
                    <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${colors.bg}`} />
                  </div>

                  {/* Arrow connector (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <svg className="w-6 h-6 text-fume" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '< 5', label: 'Minutes to launch', suffix: 'min' },
            { value: '0', label: 'Lines of code needed', suffix: '' },
            { value: '50+', label: 'Components available', suffix: '+' },
            { value: '100%', label: 'Customizable output', suffix: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center liquid-glass rounded-xl p-6">
              <div className="font-display text-3xl font-bold gradient-text">
                {stat.value}<span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-sm text-fume">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
