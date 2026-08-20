import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For side projects and experimentation.',
    features: ['5 sites per month', 'FluxWith subdomain', 'Core components (20+)', 'Basic analytics', 'Community support'],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For professionals and growing businesses.',
    features: ['Unlimited sites', 'Custom domains', 'Full component library (50+)', 'Advanced analytics', 'Code export', 'Priority support', 'SEO tools', 'API access'],
    cta: 'Start Pro trial',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$49',
    period: '/month',
    description: 'For teams and agencies with advanced needs.',
    features: ['Everything in Pro', 'Unlimited team members', 'White-label option', 'Custom components', 'Dedicated manager', 'SLA (99.9% uptime)'],
    cta: 'Contact sales',
    href: '/contact',
    highlighted: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Pricing</p>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Simple, transparent pricing</h2>
          <p style={{ fontSize: 16, color: '#a0a0a0', marginBottom: 24 }}>Start for free. Scale as you grow.</p>
          
          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span style={{ color: annual ? '#a0a0a0' : '#fff', fontSize: 14 }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                width: 48,
                height: 26,
                background: annual ? '#3b82f6' : '#333',
                border: 'none',
                borderRadius: 13,
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <span style={{
                position: 'absolute',
                top: 3,
                left: annual ? 25 : 3,
                width: 20,
                height: 20,
                background: '#fff',
                borderRadius: '50%',
                transition: 'left 0.2s',
              }} />
            </button>
            <span style={{ color: annual ? '#fff' : '#a0a0a0', fontSize: 14 }}>Annual</span>
          </div>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          alignItems: 'start',
        }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? '#111' : '#0f0f0f',
                border: plan.highlighted ? '1px solid #3b82f6' : '1px solid #222',
                borderRadius: 12,
                padding: 28,
                transform: plan.highlighted ? 'scale(1.02)' : 'none',
              }}
            >
              {plan.highlighted && (
                <span style={{
                  display: 'inline-block',
                  background: '#3b82f6',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 600,
                  marginBottom: 12,
                }}>
                  Most Popular
                </span>
              )}
              
              <h3 style={{ fontSize: 19, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{plan.name}</h3>
              <p style={{ fontSize: 14, color: '#a0a0a0', marginBottom: 20 }}>{plan.description}</p>
              
              <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #222' }}>
                <span style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>{plan.price}</span>
                <span style={{ color: '#666', fontSize: 14 }}>{plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: 24 }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 0',
                    fontSize: 14,
                    color: '#c0c0c0',
                  }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 500,
                  background: plan.highlighted ? '#3b82f6' : '#222',
                  color: plan.highlighted ? '#fff' : '#ccc',
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
