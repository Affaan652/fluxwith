import { motion } from 'motion/react'

const stackLayers = [
  {
    label: 'Hero Section',
    color: 'from-flux-cyan to-flux-blue',
    delay: 0,
  },
  {
    label: 'Features Grid',
    color: 'from-flux-purple to-flux-pink',
    delay: 0.1,
  },
  {
    label: 'Testimonials',
    color: 'from-flux-amber to-flux-orange',
    delay: 0.2,
  },
  {
    label: 'Pricing Table',
    color: 'from-green-400 to-emerald-500',
    delay: 0.3,
  },
  {
    label: 'CTA & Footer',
    color: 'from-flux-blue to-flux-purple',
    delay: 0.4,
  },
]

export default function ForgeStack() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main container */}
      <div className="relative rounded-2xl overflow-hidden border border-line bg-ash shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-void">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-ash-light rounded-md px-3 py-1 text-xs text-fume font-mono text-center">
              your-site.fluxwith.dev
            </div>
          </div>
        </div>

        {/* Stacked layers */}
        <div className="p-4 space-y-3">
          {stackLayers.map((layer, index) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: layer.delay + 0.5 }}
              className={`relative group cursor-pointer`}
            >
              {/* Layer card */}
              <div
                className={`
                  relative overflow-hidden rounded-xl p-4 
                  bg-gradient-to-r ${layer.color} 
                  opacity-90 hover:opacity-100 
                  transition-all duration-300 hover:scale-[1.02]
                `}
              >
                {/* Layer content preview */}
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-white/30 rounded" />
                  <div className="h-2 w-32 bg-white/20 rounded" />
                  <div className="flex gap-2 mt-3">
                    <div className="h-8 flex-1 bg-white/20 rounded" />
                    <div className="h-8 w-16 bg-white/30 rounded" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-void/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{layer.label}</span>
                </div>

                {/* Generating indicator for first item */}
                {index === 0 && (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 1, ease: 'linear' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                  />
                )}
              </div>

              {/* Connection line */}
              {index < stackLayers.length - 1 && (
                <div className="flex justify-center my-2">
                  <svg className="w-4 h-4 text-fume/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="px-4 pb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-center justify-between px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Site generated</span>
            </div>
            <span className="text-xs text-fume">5 sections • 2.4s</span>
          </motion.div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute -right-4 top-1/4 hidden md:block"
      >
        <div className="liquid-glass rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs">
            <svg className="w-4 h-4 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">AI Generated</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute -left-4 bottom-1/4 hidden md:block"
      >
        <div className="liquid-glass rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs">
            <svg className="w-4 h-4 text-flux-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <span className="font-medium">Ready to edit</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
