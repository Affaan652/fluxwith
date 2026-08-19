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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,0,0,0.03),transparent)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <span className="text-gray-700 font-medium">AI-Powered Website Builder</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            Build stunning websites{' '}
            <br className="hidden sm:block" />
            <span className="relative">
              <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                in seconds, not weeks
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gray-300/50" viewBox="0 0 200 12" fill="currentColor">
                <path d="M2 10C30 4 70 2 100 4C130 6 170 8 198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-500"
          >
            Describe your vision in plain English and watch FluxWith build production-ready websites 
            with beautiful designs, responsive layouts, and optimized code — instantly.
          </motion.p>

          {/* CTA + Input */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            {/* Input box */}
            <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-200/80 ring-1 ring-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center pl-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036-.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your dream website..."
                  className="flex-1 rounded-xl bg-gray-50/50 px-4 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all border-0"
                />
                <Link
                  to="/signup"
                  className="flex shrink-0 items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-300/50 active:scale-[0.98]"
                >
                  Build Now
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Example prompts */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {examplePrompts.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setPrompt(example)}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-all hover:border-gray-400 hover:text-gray-900 hover:shadow-md hover:shadow-gray-200/50 active:scale-95"
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
            className="mt-20 grid grid-cols-3 gap-8 border-t border-gray-100 pt-12"
          >
            {[
              { value: '50K+', label: 'Websites Built', icon: '🌐' },
              { value: '99.9%', label: 'Uptime SLA', icon: '⚡' },
              { value: '< 2s', label: 'Avg Load Time', icon: '🚀' },
            ].map((stat) => (
              <div key={stat.label} className="group text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 group-hover:text-black transition-colors">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-24 max-w-5xl"
        >
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-3 shadow-2xl shadow-gray-300/50 ring-1 ring-gray-100">
            <div className="rounded-xl bg-white overflow-hidden shadow-inner">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-5 py-4 bg-gray-50/80 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="h-3.5 w-3.5 rounded-full bg-red-400 shadow-sm shadow-red-400/30" />
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/30" />
                  <div className="h-3.5 w-3.5 rounded-full bg-green-400 shadow-sm shadow-green-400/30" />
                </div>
                <div className="ml-4 flex-1 rounded-lg bg-white px-4 py-2 text-sm text-gray-400 border border-gray-200 shadow-inner flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  fluxwith.app/your-site
                </div>
              </div>
              
              {/* Mock website preview */}
              <div className="p-8 bg-gradient-to-br from-white via-gray-50/30 to-white">
                <div className="grid md:grid-cols-3 gap-5">
                  {/* Card 1 - Light */}
                  <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-3 w-20 rounded-full bg-gray-900 mb-4" />
                    <div className="space-y-2 mb-5">
                      <div className="h-2.5 w-full rounded-full bg-gray-100" />
                      <div className="h-2.5 w-4/5 rounded-full bg-gray-100" />
                      <div className="h-2.5 w-3/5 rounded-full bg-gray-100" />
                    </div>
                    <button className="h-9 w-full rounded-lg bg-gray-900 text-white text-xs font-medium">Get Started</button>
                  </div>
                  
                  {/* Card 2 - Dark */}
                  <div className="rounded-xl bg-gray-900 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-3 w-16 rounded-full bg-white/80 mb-4" />
                    <div className="space-y-2 mb-5">
                      <div className="h-2.5 w-full rounded-full bg-white/10" />
                      <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
                      <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
                    </div>
                    <button className="h-9 w-full rounded-lg bg-white text-gray-900 text-xs font-semibold">Learn More</button>
                  </div>
                  
                  {/* Card 3 - Gradient */}
                  <div className="rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
                    <div className="h-3 w-24 rounded-full bg-blue-400 mb-4" />
                    <div className="space-y-2 mb-5">
                      <div className="h-2.5 w-full rounded-full bg-white/10" />
                      <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
                      <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
                    </div>
                    <button className="h-9 w-full rounded-lg bg-blue-500 text-white text-xs font-semibold hover:bg-blue-600 transition-colors">Try Now</button>
                  </div>
                </div>
                
                {/* Bottom bar mockup */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-gray-900" />
                    <div>
                      <div className="h-2.5 w-16 rounded-full bg-gray-200" />
                      <div className="h-2 w-12 rounded-full bg-gray-100 mt-1" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-20 rounded-lg bg-gray-100" />
                    <div className="h-8 w-20 rounded-lg bg-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification card - Left */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-1/4 hidden xl:block"
          >
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-300/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center border border-green-200">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Site Built!</div>
                  <div className="text-xs text-gray-500 mt-0.5">Ready to publish live</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating speed card - Right */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-6 bottom-1/4 hidden xl:block"
          >
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-300/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center border border-violet-200">
                  <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Lightning Fast</div>
                  <div className="text-xs text-gray-500 mt-0.5">Built in 8 seconds</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
