import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for side projects and experimentation.',
    price: { monthly: '$0', annual: '$0' },
    period: 'forever',
    features: [
      '5 sites per month',
      'FluxWith subdomain',
      'Core components (20+)',
      'Basic analytics',
      'Community support',
    ],
    limitations: [
      'Custom domain',
      'Code export',
      'Priority generation',
    ],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For professionals and growing businesses.',
    price: { monthly: '$19', annual: '$15' },
    period: '/month',
    features: [
      'Unlimited sites',
      'Custom domains',
      'Full component library (50+)',
      'Advanced analytics',
      'Code export',
      'Priority support',
      'SEO tools',
      'API access',
    ],
    limitations: [],
    cta: 'Start Pro trial',
    href: '/signup',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'For teams with advanced requirements.',
    price: { monthly: '$49', annual: '$39' },
    period: '/month',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'White-label option',
      'Custom components',
      'Dedicated manager',
      'SLA guarantee (99.9%)',
      'Unlimited API access',
      'On-premise deployment',
    ],
    limitations: [],
    cta: 'Contact sales',
    href: '#contact',
    highlighted: false,
  },
]

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false)

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start for free. Scale as you grow. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative h-7 w-14 rounded-full transition-colors ${
                annualBilling ? 'bg-black' : 'bg-gray-200'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  annualBilling ? 'left-8' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${annualBilling ? 'text-gray-900' : 'text-gray-400'}`}>
              Annual
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 items-start max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? 'border-black bg-black text-white shadow-2xl scale-105 z-10'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-6 border-b border-current/10">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {annualBilling ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                {annualBilling && plan.price.monthly !== '$0' && (
                  <p className={`mt-2 text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    Billed annually (${(parseInt(annualBilling ? plan.price.annual.replace('$', '') : plan.price.monthly.replace('$', '')) * 12)}/year)
                  </p>
                )}
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`h-5 w-5 shrink-0 ${plan.highlighted ? 'text-green-400' : 'text-green-600'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-center gap-3 opacity-50">
                    <svg
                      className={`h-5 w-5 shrink-0 ${plan.highlighted ? 'text-gray-500' : 'text-gray-400'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{limitation}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                to={plan.href}
                className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          All plans include a 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  )
}
