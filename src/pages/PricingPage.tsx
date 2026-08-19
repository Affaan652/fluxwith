import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

// 3D Orb component for pricing cards
function PricingOrb({ color = '#00f5d4' }: { color?: string }) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={mesh} args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

// 3D Scene for background
function PricingScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9b5de5" />
      
      <PricingOrb color="#00f5d4" />
      <PricingOrb color="#9b5de5" />
    </>
  )
}

const plans = [
  {
    name: 'Starter',
    icon: 'rocket',
    price: { monthly: '$0', annual: '$0' },
    period: 'forever',
    description: 'Perfect for trying FluxWith and launching your first project.',
    features: [
      { text: '5 site generations per month', included: true, tooltip: 'Generate up to 5 complete websites each month' },
      { text: 'FluxWith subdomain hosting', included: true, tooltip: 'Host your sites on yourname.fluxwith.dev' },
      { text: 'Core component library (20+)', included: true, tooltip: 'Access to essential components' },
      { text: 'Basic analytics dashboard', included: true, tooltip: 'Track visitors and page views' },
      { text: 'Community support', included: true, tooltip: 'Get help from our community forum' },
      { text: 'Custom domain', included: false, tooltip: 'Use your own domain name' },
      { text: 'HTML/CSS export', included: false, tooltip: 'Download clean source code' },
      { text: 'Priority generation queue', included: false, tooltip: 'Skip the queue for faster generation' },
      { text: 'API access', included: false, tooltip: 'Programmatic access via API' },
    ],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
    gradient: 'from-fume/30 to-fume/10',
    borderColor: 'border-line hover:border-fume/50',
    orbColor: '#9ca3af',
  },
  {
    name: 'Pro',
    icon: 'bolt',
    price: { monthly: '$19', annual: '$15' },
    period: 'per month',
    description: 'For creators and businesses who need more power and flexibility.',
    features: [
      { text: 'Unlimited site generations', included: true, tooltip: 'Create as many sites as you need' },
      { text: 'Custom domain mapping', included: true, tooltip: 'Connect your own domain names' },
      { text: 'Full component library (50+)', included: true, tooltip: 'Access all premium components' },
      { text: 'Advanced analytics & insights', included: true, tooltip: 'Conversion tracking, funnels, heatmaps' },
      { text: 'Priority email support', included: true, tooltip: '24-hour response time guaranteed' },
      { text: 'Clean HTML/CSS export', included: true, tooltip: 'Download production-ready code' },
      { text: 'SEO & Open Graph tools', included: true, tooltip: 'Optimize for search engines' },
      { text: 'Google Analytics integration', included: true, tooltip: 'Connect GA4 in one click' },
      { text: 'API access (1000 calls/mo)', included: true, tooltip: 'Build custom integrations' },
    ],
    cta: 'Start Pro trial',
    href: '/signup',
    highlighted: true,
    gradient: 'from-flux-cyan/20 to-flux-purple/10',
    borderColor: 'border-flux-cyan/50 hover:border-flux-cyan',
    badge: 'Most Popular',
    orbColor: '#00f5d4',
  },
  {
    name: 'Enterprise',
    icon: 'building',
    price: { monthly: '$49', annual: '$39' },
    period: 'per month',
    description: 'For teams and organizations with advanced needs and dedicated support.',
    features: [
      { text: 'Everything in Pro', included: true, tooltip: 'All Pro features included' },
      { text: 'Unlimited team members', included: true, tooltip: 'Invite unlimited collaborators' },
      { text: 'White-label options', included: true, tooltip: 'Remove FluxWith branding' },
      { text: 'Custom component creation', included: true, tooltip: 'Build and save your own components' },
      { text: 'Dedicated account manager', included: true, tooltip: 'Personal support contact' },
      { text: 'SLA guarantee (99.9%)', included: true, tooltip: 'Uptime guarantee with credits' },
      { text: 'Unlimited API access', included: true, tooltip: 'No rate limits on API calls' },
      { text: 'Webhooks & integrations', included: true, tooltip: 'Connect to your existing tools' },
      { text: 'On-premise deployment', included: true, tooltip: 'Self-hosted option available' },
    ],
    cta: 'Contact sales',
    href: '#contact',
    highlighted: false,
    gradient: 'from-flux-purple/20 to-flux-pink/10',
    borderColor: 'border-flux-purple/50 hover:border-flux-purple',
    orbColor: '#9b5de5',
  },
]

const faqs = [
  {
    question: 'Can I switch between plans at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time from your dashboard. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are securely processed through Stripe.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied, contact support within 14 days of your purchase for a full refund — no questions asked.',
  },
  {
    question: 'What happens to my sites if I cancel?',
    answer: 'Your published sites remain live for 30 days after cancellation. You can export all your work at any time. After 30 days, unpublished sites are archived and can be restored if you resubscribe within 90 days.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'Yes! We offer 50% off for registered nonprofit organizations and educational institutions. Contact our sales team with proof of status to receive your discount code.',
  },
]

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-void">
      <NavBar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background 3D effect */}
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: 'transparent' }}>
            <PricingScene />
          </Canvas>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-flux-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-flux-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="eyebrow inline-block mb-4">Simple, Transparent Pricing</span>
            <h1 className="font-display text-display-xl font-bold tracking-tight mb-6">
              Choose the perfect plan for{' '}
              <span className="gradient-text">your needs</span>
            </h1>
            <p className="text-lg text-fume leading-relaxed mb-8">
              Start free, scale as you grow. No hidden fees, no surprises. 
              Cancel anytime with one click.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium transition-colors ${!annualBilling ? 'text-bone' : 'text-fume'}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() => setAnnualBilling(!annualBilling)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  annualBilling 
                    ? 'bg-gradient-to-r from-flux-cyan to-flux-blue' 
                    : 'bg-line'
                }`}
                aria-label="Toggle billing period"
              >
                <span
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    annualBilling ? 'left-9' : 'left-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${annualBilling ? 'text-bone' : 'text-fume'}`}>
                Annual
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards section */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative rounded-3xl border ${plan.borderColor} bg-gradient-to-b ${plan.gradient} backdrop-blur-xl overflow-hidden transition-all duration-500 ${
                  plan.highlighted ? 'lg:scale-105 shadow-2xl z-10' : ''
                } ${hoveredPlan === plan.name ? '-translate-y-2' : ''}`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-flux-cyan to-flux-blue text-void px-6 py-2 text-xs font-bold rounded-bl-2xl">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* 3D Orb decoration */}
                <div className="absolute -right-8 -top-8 w-32 h-32 opacity-20 pointer-events-none">
                  <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                    <PricingOrb color={plan.orbColor} />
                  </Canvas>
                </div>

                <div className="p-8 relative">
                  {/* Plan header */}
                  <div className="mb-6">
                    <span className="text-4xl mb-4 block font-display font-bold text-flux-cyan uppercase">{plan.icon}</span>
                    <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-fume">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-line/50">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold">
                        {annualBilling ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-sm text-fume">/{plan.period}</span>
                    </div>
                    {annualBilling && plan.price.monthly !== '$0' && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-flux-cyan font-medium">
                          Billed annually (${(parseInt(annualBilling ? plan.price.annual.replace('$', '') : plan.price.monthly.replace('$', '')) * 12)}/year)
                        </span>
                        <span className="text-xs text-fume line-through">
                          ${(parseInt(plan.price.monthly.replace('$', '')) * 12)}/year
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="group flex items-start gap-3">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-fume/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <Link
                    to={plan.href}
                    className={`block w-full text-center rounded-xl py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-flux-cyan to-flux-blue text-void shadow-lg hover:shadow-xl glow-cyan'
                        : 'bg-bone text-void hover:bg-bone-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-fume mb-4">
              Need something custom? We offer tailored solutions for large teams.
            </p>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Contact our sales team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold">Frequently asked questions</h2>
            <p className="mt-3 text-fume">
              Everything you need to know about our pricing and plans.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="liquid-glass rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-sm text-fume leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '14-day', label: 'Money-back guarantee', icon: 'dollar' },
                { value: 'SSL + SOC2', label: 'Enterprise security', icon: 'shield' },
                { value: '99.9%', label: 'Uptime SLA', icon: 'zap' },
                { value: '24/7', label: 'Support availability', icon: 'chat' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2">
                    <svg className="w-10 h-10 mx-auto text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                        item.icon === 'dollar' ? 'M12 6v12m-3.428-3.428a4 4 0 115.656 5.656M12 12h8m-8 0a4 4 0 00-4 4' :
                        item.icon === 'shield' ? 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' :
                        item.icon === 'zap' ? 'M13 10V3L4 14h7v7l9-11h-7z' :
                        'M8.625 12c0-1.516 1.226-2.75 2.75-2.75S14.125 10.484 14.25 12s-1.226 2.75-2.75 2.75S8.625 13.516 8.625 12zM12 18.75H7.5v-.875c0-1.516 1.226-2.75 2.75-2.75s2.75 1.234 2.75 2.75v.875h4.5v.875c0 1.516-1.226 2.75-2.75 2.75S12.5 20.284 12.5 18.75v-.875z'
                      } />
                    </svg>
                  </div>
                  <div className="font-display text-2xl font-bold gradient-text">{item.value}</div>
                  <div className="text-sm text-fume mt-1">{item.label}</div>
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
