import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const plans = [
  {
    name: 'Free',
    price: { monthly: '$0', annual: '$0' },
    period: 'forever',
    description: 'Perfect for trying FluxWith and launching your first project.',
    features: [
      { text: '5 site builds per month', included: true },
      { text: 'FluxWith subdomain hosting', included: true },
      { text: 'Core component library (20+)', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Community support', included: true },
      { text: 'Custom domain', included: false },
      { text: 'HTML/CSS export', included: false },
      { text: 'Priority build queue', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: '$19', annual: '$15' },
    period: 'per month',
    description: 'For creators and businesses who need more power and flexibility.',
    features: [
      { text: 'Unlimited site builds', included: true },
      { text: 'Custom domain mapping', included: true },
      { text: 'Full component library (50+)', included: true },
      { text: 'Advanced analytics & insights', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Clean HTML/CSS export', included: true },
      { text: 'SEO & Open Graph tools', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: 'API access (1000 calls/mo)', included: true },
    ],
    cta: 'Start Pro trial',
    href: '/signup',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Studio',
    price: { monthly: '$49', annual: '$39' },
    period: 'per month',
    description: 'For teams and organizations with advanced needs and dedicated support.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'White-label options', included: true },
      { text: 'Custom component creation', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'SLA (99.9% uptime)', included: true },
      { text: 'Unlimited API access', included: true },
      { text: 'Webhooks & integrations', included: true },
      { text: 'On-premise deployment option', included: true },
    ],
    cta: 'Contact sales',
    href: '/contact',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Can I switch between plans at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time from your dashboard. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Studio customers. All payments are securely processed through Stripe.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'We offer a 14-day refund window for all paid plans. If you\'re not satisfied, contact support within 14 days of your purchase for a full refund — no questions asked.',
  },
  {
    question: 'What happens to my sites if I cancel?',
    answer: 'Your published sites remain live for 30 days after cancellation. You can export all your work at any time. After 30 days, unpublished sites are archived and can be restored if you resubscribe within 90 days.',
  },
]

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-16 pb-12 px-6 relative">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-[#5eead4]/3 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="eyebrow">Pricing</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Simple, transparent pricing
            </h1>
            <p className="mt-2 text-sm text-[#8a8f98] leading-relaxed">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className={`text-xs font-medium transition-colors ${!annualBilling ? 'text-white' : 'text-[#5a5e68]'}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() => setAnnualBilling(!annualBilling)}
                className={`relative w-12 h-6 rounded-full transition-all duration-150 ${
                  annualBilling ? 'bg-gradient-to-r from-[#5eead4] to-[#ff8a3d]' : 'bg-white/[0.15]'
                }`}
                aria-label="Toggle billing period"
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-150 ${
                    annualBilling ? 'left-7 bg-[#0b0c10]' : 'left-1 bg-white'
                  }`}
                />
              </button>
              <span className={`text-xs font-medium transition-colors ${annualBilling ? 'text-white' : 'text-[#5a5e68]'}`}>
                Annual
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#5eead4]/15 text-[#5eead4]">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards section */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-4 md:grid-cols-3 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-xl border p-6 transition-all duration-150 ${
                  plan.highlighted 
                    ? 'border-white/[0.15] bg-white/[0.04] scale-[1.02] shadow-lg shadow-black/30' 
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.03]'
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-[#5eead4] to-[#ff8a3d] px-2.5 py-0.5 text-[10px] font-semibold text-[#0b0c10]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{plan.name}</h3>
                  <p className="mt-1 text-xs text-[#8a8f98]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white tabular-nums" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                      {annualBilling ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-xs text-[#5a5e68]">/{plan.period}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 mb-6 max-h-60 overflow-y-auto pr-1">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2">
                      {feature.included ? (
                        <svg className="w-4 h-4 text-[#5eead4] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-[#5a5e68] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-xs ${feature.included ? 'text-[#c0c4cc]' : 'text-[#4a4e58]'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Link
                  to={plan.href}
                  className={`block w-full text-center rounded-lg py-2.5 text-sm font-semibold transition-all duration-150 ease-out active:scale-[0.96] ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#5eead4] to-[#ff8a3d] text-[#0b0c10] hover:shadow-lg hover:shadow-[#5eead4]/20'
                      : 'bg-white/[0.08] text-white hover:bg-white/[0.12] border border-white/[0.08]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-center"
          >
            <p className="text-[#8a8f98] text-sm mb-3">
              Need something custom? We offer tailored solutions for large teams.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm font-medium text-white hover:border-[#5eead4]/30 transition-all duration-150 ease-out active:scale-[0.96]"
            >
              Contact our sales team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8"
          >
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Frequently asked questions</h2>
            <p className="mt-2 text-sm text-[#8a8f98]">
              Everything you need to know about our pricing and plans.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <h3 className="font-medium text-sm pr-4 text-white">{faq.question}</h3>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    } text-[#8a8f98]`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="px-4 pb-4"
                  >
                    <p className="text-xs text-[#8a8f98] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '14-day', label: 'Refund window' },
                { value: 'SSL + SOC2', label: 'Enterprise security' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Support availability' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-semibold text-base text-white tabular-nums" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{item.value}</div>
                  <div className="text-xs text-[#5a5e68] mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
