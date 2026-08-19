import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Describe your vision',
    description: 'Tell us what you need in plain English. Be as detailed or brief as you like.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI generates your site',
    description: 'Our AI analyzes your requirements and builds your complete website.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Customize and publish',
    description: 'Use our visual editor to fine-tune every detail and deploy instantly.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            How it works
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Three simple steps
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From idea to live website in under a minute.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step number & icon */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  {step.number}
                </span>
                <div className="rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/50 border border-gray-100 text-gray-900">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 rounded-2xl border border-gray-200 bg-white p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                <div>
                  <p className="font-medium text-gray-900">Natural language input</p>
                  <p className="text-sm text-gray-500">Just describe what you want</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <div>
                  <p className="font-medium text-gray-900">Smart AI processing</p>
                  <p className="text-sm text-gray-500">Context-aware generation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                <div>
                  <p className="font-medium text-gray-900">Instant preview</p>
                  <p className="text-sm text-gray-500">See results in real-time</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 h-6 rounded bg-white border border-gray-200" />
              </div>
              <div className="space-y-3">
                <div className="h-8 w-32 rounded-md bg-black" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-3/4 rounded bg-gray-200" />
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="h-20 rounded-lg bg-gray-200" />
                  <div className="h-20 rounded-lg bg-gray-200" />
                  <div className="h-20 rounded-lg bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
