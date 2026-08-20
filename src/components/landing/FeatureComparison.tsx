import { useState } from 'react'
import { motion } from 'motion/react'

const comparisonData = {
  headers: ['', 'FluxWith', 'Traditional Dev', 'Website Builders'],
  rows: [
    {
      feature: 'Time to launch',
      fluxwith: '< 5 minutes',
      traditional: '2-4 weeks',
      builders: '2-4 hours',
    },
    {
      feature: 'Coding required',
      fluxwith: 'None',
      traditional: 'Expert level',
      builders: 'Basic',
    },
    {
      feature: 'Design flexibility',
      fluxwith: 'Full AI + Manual',
      traditional: 'Unlimited',
      builders: 'Template limited',
    },
    {
      feature: 'Custom domain',
      fluxwith: { text: 'All plans', included: true },
      traditional: { text: 'Yes', included: true },
      builders: { text: 'Paid only', included: false },
    },
    {
      feature: 'Code export',
      fluxwith: { text: 'Clean HTML/CSS', included: true },
      traditional: { text: 'N/A', included: false },
      builders: { text: 'Locked in', included: false },
    },
    {
      feature: 'AI building',
      fluxwith: { text: 'Built-in', included: true },
      traditional: { text: 'No', included: false },
      builders: { text: 'Limited', included: false },
    },
    {
      feature: 'Component library',
      fluxwith: { text: '50+ components', included: true },
      traditional: { text: 'Manual setup', included: false },
      builders: { text: '10-20 templates', included: false },
    },
    {
      feature: 'Monthly cost',
      fluxwith: '$0 - $49/mo',
      traditional: '$5000+ dev cost',
      builders: '$16 - $45/mo',
    },
  ],
}

export default function FeatureComparison() {
  const [activeTab, setActiveTab] = useState<'fluxwith' | 'traditional' | 'builders'>('fluxwith')

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ash/20 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="eyebrow inline-block mb-4">Why FluxWith?</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight">
            The smarter way to build{' '}
            <span className="gradient-text">websites</span>
          </h2>
          <p className="mt-4 text-lg text-fume leading-relaxed">
            See how FluxWith compares to traditional development and website builders.
          </p>
        </motion.div>

        {/* Tab navigation (mobile) */}
        <div className="mt-12 lg:hidden flex gap-2 justify-center">
          {['fluxwith', 'traditional', 'builders'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-flux-cyan text-void'
                  : 'bg-ash text-fume hover:text-bone'
              }`}
            >
              {tab === 'fluxwith' ? 'FluxWith' : tab === 'traditional' ? 'Traditional' : 'Builders'}
            </button>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 liquid-glass rounded-2xl overflow-hidden"
        >
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-line/50">
                  {comparisonData.headers.map((header, index) => (
                    <th
                      key={header}
                      className={`px-6 py-5 text-left font-semibold ${
                        index === 1 ? 'text-flux-cyan' : index === 0 ? 'text-bone' : 'text-fume'
                      }`}
                    >
                      {header}
                      {index === 1 && (
                        <span className="ml-2 text-xs bg-flux-cyan/20 text-flux-cyan px-2 py-1 rounded-full">
                          Best choice
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-line/30 last:border-0 hover:bg-ash-light/30 transition-colors`}
                  >
                    <td className="px-6 py-5 font-medium text-sm">{row.feature}</td>
                    
                    {/* FluxWith column */}
                    <td className="px-6 py-5">
                      {typeof row.fluxwith === 'object' && 'included' in row.fluxwith ? (
                        <span className={`inline-flex items-center gap-2 ${row.fluxwith.included ? 'text-green-400' : 'text-fume'}`}>
                          {row.fluxwith.included ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {row.fluxwith.text}
                        </span>
                      ) : (
                        <span className="text-flux-cyan font-medium">{row.fluxwith}</span>
                      )}
                    </td>

                    {/* Traditional column */}
                    <td className="px-6 py-5 text-fume text-sm">
                      {typeof row.traditional === 'object' && 'included' in row.traditional ? (
                        <span>{row.traditional.text}</span>
                      ) : (
                        <span>{row.traditional}</span>
                      )}
                    </td>

                    {/* Builders column */}
                    <td className="px-6 py-5 text-fume text-sm">
                      {typeof row.builders === 'object' && 'included' in row.builders ? (
                        <span>{row.builders.text}</span>
                      ) : (
                        <span>{row.builders}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards view */}
          <div className="lg:hidden divide-y divide-line/30">
            {comparisonData.rows.map((row) => (
              <div key={row.feature} className="p-6">
                <h4 className="font-semibold mb-3">{row.feature}</h4>
                <div className="space-y-2">
                  {[
                    { key: 'fluxwith', label: 'FluxWith', value: row.fluxwith },
                    { key: 'traditional', label: 'Traditional', value: row.traditional },
                    { key: 'builders', label: 'Builders', value: row.builders },
                  ].map((col) => (
                    <div
                      key={col.key}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        activeTab === col.key ? 'bg-flux-cyan/10 border border-flux-cyan/30' : 'bg-ash/50'
                      }`}
                    >
                      <span className={`text-sm ${activeTab === col.key ? 'text-flux-cyan font-medium' : 'text-fume'}`}>
                        {col.label}
                      </span>
                      <span className={`text-sm ${activeTab === col.key ? 'text-bone' : ''}`}>
                        {typeof col.value === 'object' && 'included' in col.value ? col.value.text : col.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-sm text-fume"
        >
          * Comparison based on typical use cases. Actual results may vary.
        </motion.p>
      </div>
    </section>
  )
}
