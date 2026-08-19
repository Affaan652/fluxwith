import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import ForgeStack from './ForgeStack'

const examplePrompts = [
  'Create a coffee shop website with a dark theme',
  'Build a landing page for a fitness coaching app',
  'Design a minimal portfolio for a photographer',
]

const shinyGradientStyle = {
  backgroundImage:
    'linear-gradient(to right, #0f3d38 0%, #0b5c50 15%, #a4fdf4 40%, #5eead4 55%, #0b5c50 75%, #0f3d38 100%)',
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  color: 'transparent',
  WebkitTextFillColor: 'transparent' as const,
}

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  return (
    <section
      id="product"
      className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center md:pt-24"
    >
      <div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="eyebrow mb-5"
        >
          Prompt in. Site out.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        >
          Describe a site.
          <br />
          Watch it{' '}
          <span className="shiny-text" style={shinyGradientStyle}>
            take shape.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-md text-lg text-fume"
        >
          FluxWith reads a written brief and forges a complete, editable website around it —
          hero, sections, copy and layout, generated in one pass and ready to publish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 rounded-xl border border-line bg-ash p-2"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder={examplePrompts[0]}
              className="flex-1 rounded-lg bg-transparent px-4 py-3 font-mono text-sm text-bone placeholder:text-fume/70 focus:outline-none"
            />
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 rounded-lg bg-flux-cyan px-5 py-3 text-sm font-semibold text-void transition-transform hover:scale-[1.02]"
            >
              Forge it
            </Link>
          </div>
        </motion.div>

        <div className="mt-4 flex flex-wrap gap-2">
          {examplePrompts.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setPrompt(example)}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-fume transition-colors hover:border-flux-cyan/50 hover:text-bone"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <ForgeStack />
      </motion.div>
    </section>
  )
}
