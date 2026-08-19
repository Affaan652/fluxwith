import { motion } from 'motion/react'

const floatingCards = [
  { label: 'coffee-shop.site', top: '18%', left: '20%', delay: '0s', tilt: -8, color: 'from-flux-cyan to-flux-blue' },
  { label: 'studio.site', top: '46%', left: '52%', delay: '-2.5s', tilt: 5, color: 'from-flux-purple to-flux-pink' },
  { label: 'launch.site', top: '68%', left: '18%', delay: '-5s', tilt: -3, color: 'from-flux-amber to-flux-orange' },
]

export default function AuthSidePanel() {
  return (
    <div className="relative hidden h-full w-full overflow-hidden bg-gradient-to-br from-ash via-void-deep to-ash md:block">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.4 }} />
        <div className="flux-blob flux-blob-purple" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Floating cards */}
      <div className="relative flex h-full w-full items-center justify-center" style={{ perspective: '1200px' }}>
        {floatingCards.map((card) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="auth-float-card absolute w-72 overflow-hidden rounded-2xl border border-line/50 bg-ash/80 backdrop-blur-xl shadow-2xl"
            style={{
              top: card.top,
              left: card.left,
              animationDelay: card.delay,
              transform: `rotate(${card.tilt}deg)`,
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
              <div className={`h-24 rounded-lg bg-gradient-to-br ${card.color} opacity-20`} />
              <div className="space-y-2">
                <div className={`h-2 w-3/4 rounded-full bg-gradient-to-r ${card.color} opacity-40`} />
                <div className="h-2 w-full rounded-full bg-line/50" />
                <div className="h-2 w-5/6 rounded-full bg-line/50" />
              </div>
              
              {/* CTA button preview */}
              <div className={`h-8 w-24 rounded-lg bg-gradient-to-r ${card.color} opacity-60 mt-4`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute inset-x-0 bottom-0 p-10"
      >
        <div className="liquid-glass rounded-2xl p-6 max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flux-cyan to-flux-purple flex items-center justify-center">
              <svg className="w-5 h-5 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="eyebrow">AI-Powered</span>
          </div>
          <p className="text-sm text-fume leading-relaxed">
            Every site on FluxWith starts as a simple prompt and ends up fully structured 
            and ready to publish — in under 5 minutes.
          </p>
          
          <div className="mt-4 flex gap-4 text-xs text-fume">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No code required
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Instant deploy
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
