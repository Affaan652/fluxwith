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
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-gray-600">AI-Powered Website Builder</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Build stunning websites
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              in seconds, not weeks
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
          >
            Describe your vision in plain English and watch FluxWith generate production-ready websites 
            with beautiful designs, responsive layouts, and optimized code.
          </motion.p>

          {/* CTA + Input */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            {/* Input box */}
            <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your website..."
                  className="flex-1 rounded-xl bg-gray-50 px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
                <Link
                  to="/signup"
                  className="flex shrink-0 items-center gap-2 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
                >
                  Generate
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Example prompts */}
            <div className="flex flex-wrap justify-center gap-2">
              {examplePrompts.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setPrompt(example)}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 hover:shadow-sm"
                >
                  {example}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-12"
          >
            {[
              { value: '50K+', label: 'Websites Created' },
              { value: '99.9%', label: 'Uptime' },
              { value: '< 2s', label: 'Load Time' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-2xl shadow-gray-200/50">
            <div className="rounded-xl bg-white p-8">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-gray-100 px-4 py-1.5 text-sm text-gray-400">
                  fluxwith.app/your-site
                </div>
              </div>
              
              {/* Mock website preview */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                  <div className="h-4 w-24 rounded bg-gray-200 mb-3" />
                  <div className="h-3 w-full rounded bg-gray-100 mb-2" />
                  <div className="h-3 w-3/4 rounded bg-gray-100 mb-4" />
                  <div className="h-8 w-full rounded-md bg-black" />
                </div>
                <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                  <div className="h-4 w-20 rounded bg-gray-600 mb-3" />
                  <div className="h-3 w-full rounded bg-gray-700 mb-2" />
                  <div className="h-3 w-2/3 rounded bg-gray-700 mb-4" />
                  <div className="h-8 w-full rounded-md bg-white" />
                </div>
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                  <div className="h-4 w-28 rounded bg-blue-200 mb-3" />
                  <div className="h-3 w-full rounded bg-blue-100 mb-2" />
                  <div className="h-3 w-5/6 rounded bg-blue-100 mb-4" />
                  <div className="h-8 w-full rounded-md bg-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 hidden lg:block"
          >
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Site Generated!</div>
                  <div className="text-xs text-gray-500">Ready to publish</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-1/4 hidden lg:block"
          >
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Lightning Fast</div>
                  <div className="text-xs text-gray-500">Built in seconds</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
