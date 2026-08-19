import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const LEMON_SQUEEZY_PRO_CHECKOUT_URL =
  'https://fluxwith.lemonsqueezy.com/checkout/buy/replace-with-your-variant-id'

const plans = [
  {
    name: 'Starter',
    icon: 'rocket',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying FluxWith and launching your first project.',
    features: [
      { text: '5 site generations per month', included: true },
      { text: 'FluxWith subdomain hosting', included: true },
      { text: 'Core component library (20+)', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Community support', included: true },
      { text: 'Custom domain', included: false },
      { text: 'HTML/CSS export', included: false },
      { text: 'Priority generation queue', included: false },
    ],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
    gradient: 'from-fume/20 to-fume/5',
    borderColor: 'border-line hover:border-fume/50',
  },
  {
    name: 'Pro',
    icon: 'bolt',
    price: '$19',
    period: 'per month',
    description: 'For creators and businesses who need more power and flexibility.',
    features: [
      { text: 'Unlimited site generations', included: true },
      { text: 'Custom domain mapping', included: true },
      { text: 'Full component library (50+)', included: true },
      { text: 'Advanced analytics & insights', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Clean HTML/CSS export', included: true },
      { text: 'SEO & Open Graph tools', included: true },
      { text: 'Google Analytics integration', included: true },
    ],
    cta: 'Start Pro trial',
    href: LEMON_SQUEEZY_PRO_CHECKOUT_URL,
    highlighted: true,
    gradient: 'from-flux-cyan/20 to-flux-purple/10',
    borderColor: 'border-flux-cyan/50 hover:border-flux-cyan',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    icon: 'building',
    price: '$49',
    period: 'per month',
    description: 'For teams and organizations with advanced needs and dedicated support.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'White-label options', included: true },
      { text: 'Custom component creation', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'SLA guarantee (99.9%)', included: true },
      { text: 'API access & webhooks', included: true },
      { text: 'On-premise deployment option', included: true },
    ],
    cta: 'Contact sales',
    href: '#contact',
    highlighted: false,
    gradient: 'from-flux-purple/20 to-flux-pink/10',
    borderColor: 'border-flux-purple/50 hover:border-flux-purple',
  },
]

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any differences.',
  },
  {
    question: 'What happens after my free generations run out?',
    answer: 'Starter users can still view and edit their existing sites. To generate new ones, you can either wait for your monthly reset or upgrade to Pro for unlimited generations.',
  },
  {
    question: 'Do I own the generated code?',
    answer: 'Yes! All sites you generate are 100% yours. With Pro and Enterprise plans, you get clean, exportable HTML/CSS that you can host anywhere.',
  },
]

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false)

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-flux-cyan/5 via-flux-purple/5 to-flux-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="eyebrow inline-block mb-4">Simple Pricing</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight">
            Start free, scale as you{' '}
            <span className="gradient-text">grow</span>
          </h2>
          <p className="mt-4 text-lg text-fume leading-relaxed">
            No hidden fees, no surprises. Choose the plan that fits your needs 
            and cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!annualBilling ? 'text-bone' : 'text-fume'}`}>Monthly</span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annualBilling ? 'bg-gradient-to-r from-flux-cyan to-flux-blue' : 'bg-line'}`}
            >
              <span
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${annualBilling ? 'left-8' : 'left-1'}`}
              />
            </button>
            <span className={`text-sm ${annualBilling ? 'text-bone' : 'text-fume'}`}>
              Annual
              <span className="ml-2 text-xs text-flux-cyan">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => {
            const isExternal = plan.href.startsWith('http')
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-3xl border ${plan.borderColor} bg-gradient-to-b ${plan.gradient} backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.highlighted ? 'lg:scale-105 shadow-2xl glow-cyan' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-flux-cyan to-flux-blue px-4 py-1.5 text-xs font-semibold text-void shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl uppercase font-bold text-flux-cyan">{plan.icon.charAt(0).toUpperCase() + plan.icon.slice(1)}</span>
                    {plan.highlighted && (
                      <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-fume">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-line/50">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">{plan.price}</span>
                    <span className="text-sm text-fume">/{plan.period}</span>
                  </div>
                  {annualBilling && plan.price !== '$0' && (
                    <p className="mt-2 text-sm text-flux-cyan">
                      Billed annually (save 20%)
                    </p>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-fume/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-bone/90' : 'text-fume/50'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                {isExternal ? (
                  <a
                    href={plan.href}
                    className={`block w-full text-center rounded-xl py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-flux-cyan to-flux-blue text-void shadow-lg hover:shadow-xl'
                        : 'bg-bone text-void hover:bg-bone-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    to={plan.href}
                    className={`block w-full text-center rounded-xl py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-flux-cyan to-flux-blue text-void shadow-lg hover:shadow-xl'
                        : 'bg-bone text-void hover:bg-bone-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-28 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-12">
            Frequently asked questions
          </h3>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="liquid-glass rounded-xl p-6"
              >
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-sm text-fume leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-fume text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure payments
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-flux-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Instant access
          </div>
        </motion.div>
      </div>
    </section>
  )
}
