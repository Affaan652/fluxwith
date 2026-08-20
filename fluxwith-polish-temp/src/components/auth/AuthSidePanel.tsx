import { motion } from 'motion/react'

// Animated dots grid
const dots = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  row: Math.floor(i / 5),
  col: i % 5,
}))

export default function AuthSidePanel() {
  return (
    <div className="relative hidden h-screen w-full overflow-hidden bg-black md:block">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Center content */}
      <div className="relative flex h-full flex-col items-center justify-center px-12">
        {/* Logo mark animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-2xl bg-blue-500 blur-xl"
            />
            
            {/* Main box */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-3xl font-bold text-white">F</span>
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-sm"
        >
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Build faster than ever
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Create production-ready websites in seconds with AI-powered tools.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {['AI-Powered', 'No Code', 'Instant Deploy', 'Custom Domains'].map((feature, i) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-300"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated dots grid - bottom section */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="grid grid-cols-5 gap-3">
            {dots.map((dot, i) => (
              <motion.div
                key={dot.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.08
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.08
                  }
                }}
                className={`h-1.5 w-1.5 rounded-full ${
                  i % 3 === 0 ? 'bg-blue-400' : 
                  i % 3 === 1 ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-5 text-xs text-gray-600"
        >
          Trusted by 50,000+ creators
        </motion.p>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 h-16 w-16 rounded-full border border-white/5" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-white/5" />
      
      {/* Subtle line animations */}
      <motion.div
        animate={{ 
          scaleY: [0, 1, 0],
          originY: [0, 0.5, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-12 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
      <motion.div
        animate={{ 
          scaleX: [0, 1, 0],
          originX: [0, 0.5, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute left-12 bottom-1/4 h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  )
}
