import { motion } from 'motion/react'

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'AI-Prompt to Site Generation',
    description: 'Transform natural language into fully functional websites. Our AI understands context, design preferences, and business goals to generate complete page layouts.',
    detail: (
      <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs">
        <span className="rounded-lg bg-flux-cyan/10 border border-flux-cyan/30 px-3 py-1.5 text-flux-cyan">"dark theme coffee shop"</span>
        <svg className="h-4 w-4 text-flux-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <span className="rounded-lg bg-flux-purple/10 border border-flux-purple/30 px-3 py-1.5 text-flux-purple">6 sections, ready</span>
      </div>
    ),
    span: 'lg:col-span-2',
    color: 'cyan',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: 'Inline Visual Editor',
    description: 'Click any element to edit text, swap images, adjust colors, and modify layouts — all without leaving the preview. What you see is what you publish.',
    detail: (
      <div className="mt-5 flex gap-2">
        {['#00f5d4', '#9b5de5', '#f72585', '#ffc300'].map((color) => (
          <button
            key={color}
            className="h-8 w-8 rounded-full border-2 border-white/20 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ash"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="ml-2 flex items-center text-xs text-fume">Customize colors instantly</span>
      </div>
    ),
    span: '',
    color: 'purple',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Real-Time Live Preview',
    description: 'See changes render instantly as you make them. No refresh needed, no waiting for builds — just seamless, immediate visual feedback.',
    detail: (
      <div className="mt-5 rounded-xl bg-void/50 p-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-green-400 mb-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Live rendering active
        </div>
        <div className="text-fume">
          <span className="text-flux-cyan">&gt;</span> Edit detected{' '}
          <span className="text-flux-purple">→</span> Rendered in{' '}
          <span className="text-flux-amber">0ms</span>
        </div>
      </div>
    ),
    span: '',
    color: 'amber',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: 'Component Library',
    description: 'Access 50+ professionally designed components: hero sections, feature grids, pricing tables, testimonials, contact forms, and more — all ready to customize.',
    detail: (
      <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px]">
        {['hero', 'features', 'pricing', 'testimonials', 'cta', 'footer', 'navbar', 'stats', 'gallery', 'faq'].map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-line bg-ash-light/50 px-3 py-1.5 text-fume hover:border-flux-cyan/50 hover:text-flux-cyan transition-colors cursor-default"
          >
            &lt;{tag}&gt;
          </span>
        ))}
      </div>
    ),
    span: 'lg:col-span-2',
    color: 'pink',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 compliant infrastructure with end-to-end encryption, automatic backups, and GDPR compliance. Your data stays yours, always.',
    detail: null,
    span: '',
    color: 'blue',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    title: 'One-Click Deploy',
    description: 'Publish to custom domains, export clean HTML/CSS, or integrate with Vercel, Netlify, and Cloudflare Pages. Go from draft to live in seconds.',
    detail: (
      <div className="mt-5 flex gap-3">
        {['Vercel', 'Netlify', 'Cloudflare'].map((platform) => (
          <div
            key={platform}
            className="flex items-center gap-2 rounded-lg border border-line bg-ash-light/50 px-3 py-2 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />
            {platform}
          </div>
        ))}
      </div>
    ),
    span: '',
    color: 'green',
  },
]

const colorClasses = {
  cyan: {
    iconBg: 'bg-flux-cyan/10',
    iconColor: 'text-flux-cyan',
    border: 'hover:border-flux-cyan/30',
    glow: 'hover:shadow-flux-cyan/20',
  },
  purple: {
    iconBg: 'bg-flux-purple/10',
    iconColor: 'text-flux-purple',
    border: 'hover:border-flux-purple/30',
    glow: 'hover:shadow-flux-purple/20',
  },
  amber: {
    iconBg: 'bg-flux-amber/10',
    iconColor: 'text-flux-amber',
    border: 'hover:border-flux-amber/30',
    glow: 'hover:shadow-flux-amber/20',
  },
  pink: {
    iconBg: 'bg-flux-pink/10',
    iconColor: 'text-flux-pink',
    border: 'hover:border-flux-pink/30',
    glow: 'hover:shadow-flux-pink/20',
  },
  blue: {
    iconBg: 'bg-flux-blue/10',
    iconColor: 'text-flux-blue',
    border: 'hover:border-flux-blue/30',
    glow: 'hover:shadow-flux-blue/20',
  },
  green: {
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    border: 'hover:border-green-500/30',
    glow: 'hover:shadow-green-500/20',
  },
}

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-flux-cyan/5 to-flux-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="eyebrow inline-block mb-4">Powerful Features</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight">
            From one sentence to a{' '}
            <span className="gradient-text">fully functional site</span>
          </h2>
          <p className="mt-4 text-lg text-fume leading-relaxed max-w-2xl">
            Everything you need to design, build, and launch stunning websites — 
            powered by AI, refined by you. No code required.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`liquid-glass rounded-2xl p-7 group cursor-default ${feature.span} ${colors.border} ${colors.glow}`}
              >
                {/* Icon */}
                <div className={`inline-flex rounded-xl ${colors.iconBg} p-3 ${colors.iconColor} mb-5`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-bone-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-fume-light leading-relaxed">
                  {feature.description}
                </p>

                {/* Detail section */}
                {feature.detail && (
                  <div className="mt-6 pt-5 border-t border-line/50">
                    {feature.detail}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-fume text-sm">
            And much more coming soon — AI image generation, A/B testing, analytics dashboard, and team collaboration tools.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
