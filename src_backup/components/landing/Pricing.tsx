import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const plans = [
  {
    name: 'Free',
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
    href: 'https://fluxwith.lemonsqueezy.com/checkout/buy/pro-monthly-id',
    highlighted: true,
    badge: 'Most chosen',
    isLemonSqueezy: true,
  },
  {
    name: 'Studio',
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
    isLemonSqueezy: false,
  },
]

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false)

  return (
    <section className="relative bg-void py-20 overflow-hidden">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.06 }} />
        <div className="flux-blob flux-blob-amber" style={{ opacity: 0.04 }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header - NO eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center mb-10"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-sm text-fume leading-relaxed">
            Start for free. Scale as you grow. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-bone' : 'text-fume'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative h-7 w-14 rounded-full transition-colors duration-200 ease-out ${
                annualBilling ? 'bg-gradient-to-r from-flux-cyan to-flux-amber' : 'bg-line'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-bone shadow transition-transform duration-200 ease-out ${
                  annualBilling ? 'left-[26px]' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${annualBilling ? 'text-bone' : 'text-fume'}`}>
              Annual
              <span className="rounded-full bg-flux-amber/20 px-1.5 py-0.5 text-[10px] font-semibold text-flux-amber">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Plans grid - 3 columns */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 items-start max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`relative liquid-glass !rounded-2xl !p-6 hover:-translate-y-1 transition-all duration-300 ${
                plan.highlighted ? '!border-flux-cyan/30 scale-[1.02]' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-flux-cyan to-flux-amber px-3 py-1 text-[10px] font-semibold text-void">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-5">
                <h3 className="font-display text-lg font-bold text-bone">{plan.name}</h3>
                <p className="mt-1 text-xs text-fume">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-line/50">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold tabular-nums text-bone">
                    {annualBilling ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-xs text-fume">{plan.period}</span>
                </div>
                {annualBilling && plan.price.monthly !== '$0' && (
                  <p className="mt-1 text-xs text-fume-light">
                    Billed annually (${(parseInt(annualBilling ? plan.price.annual.replace('$', '') : plan.price.monthly.replace('$', '')) * 12)}/year)
                  </p>
                )}
              </div>

              {/* Features list */}
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <svg
                      className="h-4 w-4 shrink-0 text-flux-cyan"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-fume">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-center gap-2.5 opacity-40">
                    <svg
                      className="h-4 w-4 shrink-0 text-fume"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-fume">{limitation}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button - pill shape */}
              {plan.isLemonSqueezy ? (
                <a
                  href={plan.href}
                  className={`lemonsqueezy-button block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-flux-cyan to-flux-amber text-void hover:shadow-lg hover:shadow-flux-cyan/25'
                      : 'bg-ash text-bone border border-line hover:border-flux-cyan/50 hover:text-flux-cyan'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  to={plan.href}
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-flux-cyan to-flux-amber text-void hover:shadow-lg hover:shadow-flux-cyan/25'
                      : 'bg-ash text-bone border border-line hover:border-flux-cyan/50 hover:text-flux-cyan'
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-xs text-fume"
        >
          All plans include a 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  )
}
