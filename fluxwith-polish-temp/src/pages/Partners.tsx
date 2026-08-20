import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate FluxWith into your platform or service.',
    benefits: ['API access', 'Co-marketing opportunities', 'Technical support', 'Revenue sharing'],
  },
  {
    title: 'Agency Partners',
    description: 'Use FluxWith to deliver faster results for your clients.',
    benefits: ['White-label options', 'Volume discounts', 'Training & certification', 'Dedicated support'],
  },
  {
    title: 'Affiliate Partners',
    description: 'Earn commission by referring customers to FluxWith.',
    benefits: ['Competitive commissions', 'Marketing materials', 'Real-time tracking', 'Monthly payouts'],
  },
]

export default function Partners() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Hero - COMPACT */}
      <section className="pt-16 pb-12 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Company</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Partner with us</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
              Join our partner program and grow together. We offer flexible partnership 
              models designed for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner types - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors"
              >
                <h2 className="text-lg font-bold text-white">{partner.title}</h2>
                <p className="mt-2 text-xs text-gray-400">{partner.description}</p>
                
                <ul className="mt-4 space-y-2">
                  {partner.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-xs text-gray-300">
                      <svg className="h-4 w-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-medium text-black hover:bg-gray-100 active:scale-[0.96] transition-all duration-150 ease-out"
                >
                  Apply now
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - COMPACT */}
      <section className="bg-white/5 py-12 px-6 border-y border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100+', label: 'Active Partners' },
              { value: '$2M+', label: 'Partner Revenue' },
              { value: '40+', label: 'Countries' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - WHITE FOR CONTRAST */}
      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl font-bold text-black">Ready to partner?</h2>
            <p className="mt-2 text-sm text-gray-600">
              Let's discuss how we can work together to achieve mutual success.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 active:scale-[0.96] transition-all duration-150 ease-out"
            >
              Contact our partnerships team
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
