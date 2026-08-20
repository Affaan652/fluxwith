import { motion } from 'motion/react'

const logos = [
  { name: 'Vercel', abbreviation: 'VC' },
  { name: 'Stripe', abbreviation: 'ST' },
  { name: 'Notion', abbreviation: 'NT' },
  { name: 'Linear', abbreviation: 'LN' },
  { name: 'Figma', abbreviation: 'FG' },
  { name: 'Supabase', abbreviation: 'SB' },
  { name: 'Railway', abbreviation: 'RW' },
  { name: 'Planetscale', abbreviation: 'PS' },
]

export default function StudioStrip() {
  return (
    <section className="relative py-20 overflow-hidden border-y border-line/30 bg-ash/30">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="eyebrow text-sm">Trusted by forward-thinking teams</p>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative">
          {/* First row - moving right */}
          <motion.div
            animate={{ x: [0, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 mb-8"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-flux-cyan/20 to-flux-purple/20 flex items-center justify-center border border-line/50">
                  <span className="text-xs font-bold text-flux-cyan">{logo.abbreviation}</span>
                </div>
                <span className="font-display font-semibold text-fume whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row - moving left */}
          <motion.div
            animate={{ x: [-50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-16"
          >
            {[...logos.reverse(), ...logos.reverse()].map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-flux-purple/20 to-flux-pink/20 flex items-center justify-center border border-line/40">
                  <span className="text-[10px] font-bold text-flux-purple">{logo.abbreviation}</span>
                </div>
                <span className="font-display text-sm text-fume whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
