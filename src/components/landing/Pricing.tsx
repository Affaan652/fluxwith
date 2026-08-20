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
      'Priority build queue',
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
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header - compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Pricing
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Start for free. Scale as you grow. No hidden fees.
          </p>

          {/* Billing toggle - compact */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!annualBilling ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative h-6 w-11 rounded-full transition-colors duration-200 ease-out ${
                annualBilling ? 'bg-white' : 'bg-white/20'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-black shadow transition-transform duration-200 ease-out ${
                  annualBilling ? 'left-[22px]' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${annualBilling ? 'text-white' : 'text-gray-500'}`}>
              Annual
              <span className="rounded bg-green-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-green-400">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Plans grid - compact */}
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5 items-start max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-lg border p-5 transition-all duration-150 ease-out active:scale-[0.98] ${
                plan.highlighted
                  ? 'border-white/30 bg-white/[0.04] scale-[1.02] z-10'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-black">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-4">
                <h3 className={`text-base font-bold ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-xs ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold tabular-nums ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {annualBilling ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className={`text-xs ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                {annualBilling && plan.price.monthly !== '$0' && (
                  <p className={`mt-1 text-xs ${plan.highlighted ? 'text-gray-500' : 'text-gray-600'}`}>
                    Billed annually (${(parseInt(annualBilling ? plan.price.annual.replace('$', '') : plan.price.monthly.replace('$', '')) * 12)}/year)
                  </p>
                )}
              </div>

              {/* Features list */}
              <ul className="space-y-2 mb-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className={`h-3.5 w-3.5 shrink-0 ${plan.highlighted ? 'text-green-400' : 'text-green-500'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-xs ${plan.highlighted ? 'text-gray-200' : 'text-gray-400'}`}>{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-center gap-2 opacity-40">
                    <svg
                      className={`h-3.5 w-3.5 shrink-0 ${plan.highlighted ? 'text-gray-600' : 'text-gray-600'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={`text-xs ${plan.highlighted ? 'text-gray-500' : 'text-gray-600'}`}>{limitation}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                to={plan.href}
                className={`block w-full rounded-lg py-2.5 text-center text-xs font-semibold transition-all duration-150 ease-out active:scale-[0.98] ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
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
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          All plans include a 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  )
}
