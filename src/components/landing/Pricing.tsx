import { Link } from 'react-router-dom'

// Replace with your real Lemon Squeezy store subdomain and checkout URLs.
// Dashboard: Store > Products > select the Pro variant > Share > Copy checkout URL.
const LEMON_SQUEEZY_PRO_CHECKOUT_URL =
  'https://fluxwith.lemonsqueezy.com/checkout/buy/replace-with-your-variant-id'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For trying FluxWith and shipping a first site.',
    features: [
      'Unlimited prompts on a limited monthly quota',
      'Publish on a free subdomain',
      'View and copy generated HTML',
      'Core component library',
    ],
    cta: 'Start free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For sites you want to own end to end.',
    features: [
      'Higher monthly generation quota',
      'Custom domain mapping',
      'Clean HTML and CSS export',
      'SEO and Open Graph settings',
      'Google Analytics integration',
    ],
    cta: 'Upgrade with Lemon Squeezy',
    href: LEMON_SQUEEZY_PRO_CHECKOUT_URL,
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        Free to start, simple to grow
      </h2>
      <p className="mt-2 max-w-md text-sm text-fume">
        Checkout and billing are handled by Lemon Squeezy, so card details never touch our
        servers.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => {
          const isExternal = plan.href.startsWith('http')
          return (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'border-flux-cyan/70 bg-ash-light shadow-[0_0_40px_-12px_rgba(94,234,212,0.35)]'
                  : 'border-line bg-ash'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-medium">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-flux-cyan/15 px-3 py-1 text-xs text-flux-cyan">
                    Most chosen
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold">{plan.price}</span>
                <span className="text-sm text-fume">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-fume">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flux-cyan" />
                    <span className="text-bone/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {isExternal ? (
                <a
                  href={plan.href}
                  className={`lemonsqueezy-button mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    plan.highlighted ? 'bg-flux-cyan text-void' : 'bg-bone text-void'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  to={plan.href}
                  className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    plan.highlighted ? 'bg-flux-cyan text-void' : 'bg-bone text-void'
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
