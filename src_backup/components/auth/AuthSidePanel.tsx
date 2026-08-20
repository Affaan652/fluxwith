import { motion } from 'motion/react'

// Browser mockup data - represents generated sites
const browserCards = [
  { 
    label: 'creative-studio.site',
    color: 'from-flux-cyan',
    delay: '0s',
    top: '12%',
    left: '15%'
  },
  { 
    label: 'saas-app.site',
    color: 'from-flux-amber',
    delay: '-2.5s',
    top: '42%',
    left: '48%'
  },
  { 
    label: 'portfolio.site',
    color: 'from-flux-cyan',
    delay: '-5s',
    top: '68%',
    left: '18%'
  },
]

export default function AuthSidePanel() {
  return (
    <div className="relative hidden h-screen w-full overflow-hidden bg-gradient-to-br from-void via-void-deep to-ash md:block">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Flux blobs */}
        <div className="flux-blob flux-blob-cyan" />
        <div className="flux-blob flux-blob-amber" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* 
        ============================================
        VIDEO UPGRADE PATH (reserved)
        ============================================
        Uncomment this when you have a real video loop:
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="/assets/auth-poster.jpg"
        >
          <source src="/assets/generated/auth-loop.mp4" type="video/mp4" />
        </video>
        
        The CSS float animation below is the required fallback.
        It must always render something, never a blank panel.
      */}

      {/* Floating browser mockup cards */}
      <div className="relative flex h-full w-full items-center justify-center" style={{ perspective: '1200px' }}>
        {browserCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 + (index * 0.15),
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`auth-float-card absolute w-72 overflow-hidden rounded-2xl border border-line/50 bg-ash/80 backdrop-blur-xl shadow-2xl`}
            style={{
              top: card.top,
              left: card.left,
              animationDelay: card.delay,
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-line/50 px-4 py-3 bg-void/50">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-auto font-mono text-[10px] text-fume">{card.label}</span>
            </div>
            
            {/* Content preview */}
            <div className="p-4 space-y-3">
              <div className={`h-24 rounded-lg bg-gradient-to-br ${card.color} to-transparent opacity-20`} />
              <div className="space-y-2">
                <div className={`h-2 w-3/4 rounded-full bg-gradient-to-r ${card.color} to-transparent opacity-30`} />
                <div className="h-2 w-full rounded-full bg-line/30" />
                <div className="h-2 w-5/6 rounded-full bg-line/30" />
              </div>
              
              {/* CTA button preview */}
              <div className={`h-8 w-24 rounded-lg bg-gradient-to-r ${card.color} to-transparent opacity-40 mt-4`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom info card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute inset-x-0 bottom-8 px-8"
      >
        <div className="liquid-glass rounded-2xl p-6 max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flux-cyan to-flux-amber flex items-center justify-center">
              <svg className="w-5 h-5 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="eyebrow">AI-Powered</span>
          </div>
          <p className="text-sm text-fume leading-relaxed">
            Every site on FluxWith starts as a simple prompt and ends up fully structured 
            and ready to publish — in under 5 minutes.
          </p>
          
          <div className="mt-4 flex gap-4 text-xs text-fume">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>No code required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant deploy</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
