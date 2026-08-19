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
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Company</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Partner with us
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Join our partner program and grow together. We offer flexible partnership 
              models designed for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-gray-200 p-8 hover:border-black hover:shadow-xl transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900">{partner.title}</h2>
                <p className="mt-3 text-gray-600">{partner.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {partner.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-gray-700">
                      <svg className="h-5 w-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                >
                  Apply now
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100+', label: 'Active Partners' },
              { value: '$2M+', label: 'Partner Revenue' },
              { value: '40+', label: 'Countries' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Ready to partner?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Let's discuss how we can work together to achieve mutual success.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
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
