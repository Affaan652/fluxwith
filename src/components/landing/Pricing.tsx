import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

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
    <section style={{ 
      background: '#0a0a0a', 
      padding: '80px 24px',
      borderTop: '1px solid #1f1f1f'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ 
            fontSize: 13, 
            color: '#3b82f6', 
            textTransform: 'uppercase', 
            letterSpacing: 1.5, 
            fontWeight: 600,
            marginBottom: 12 
          }}>
            Pricing
          </p>
          <h2 style={{ 
            fontSize: 'clamp(28px, 3vw, 36px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 12,
            letterSpacing: '-0.02em'
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{ 
            fontSize: 16, 
            color: '#888', 
            marginBottom: 32 
          }}>
            Start for free. Scale as you grow.
          </p>
          
          {/* Toggle */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 14,
            background: '#111',
            padding: 6,
            borderRadius: 10,
            width: 'fit-content',
            margin: '0 auto',
          }}>
            <span style={{ 
              color: annual ? '#666' : '#fff', 
              fontSize: 13,
              fontWeight: 500,
              padding: '6px 16px',
              transition: 'color 0.15s ease',
            }}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                width: 44,
                height: 24,
                background: annual ? '#3b82f6' : '#333',
                border: 'none',
                borderRadius: 12,
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
            >
              <span style={{
                position: 'absolute',
                top: 2,
                left: annual ? 22 : 2,
                width: 20,
                height: 20,
                background: '#fff',
                borderRadius: '50%',
                transition: 'left 0.2s ease',
              }} />
            </button>
            <span style={{ 
              color: annual ? '#fff' : '#666', 
              fontSize: 13,
              fontWeight: 500,
              padding: '6px 16px',
              transition: 'color 0.15s ease',
            }}>
              Annual
            </span>
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
                background: plan.highlighted ? '#111' : '#0a0a0a',
                border: plan.highlighted ? '1px solid #3b82f6' : '1px solid #1f1f1f',
                borderRadius: 14,
                padding: 32,
                transform: plan.highlighted ? 'scale(1.02)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {plan.highlighted && (
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: '#fff',
                  padding: '5px 14px',
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  marginBottom: 18,
                }}>
                  Most Popular
                </span>
              )}
              
              <h3 style={{ 
                fontSize: 20, 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: 8 
              }}>
                {plan.name}
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: '#888', 
                marginBottom: 24 
              }}>
                {plan.description}
              </p>
              
              <div style={{ 
                marginBottom: 24, 
                paddingBottom: 24, 
                borderBottom: '1px solid #1f1f1f' 
              }}>
                <span style={{ 
                  fontSize: 42, 
                  fontWeight: 700, 
                  color: '#fff',
                  letterSpacing: '-0.02em'
                }}>
                  {plan.price}
                </span>
                <span style={{ 
                  color: '#666', 
                  fontSize: 14,
                  marginLeft: 4
                }}>
                  {plan.period}
                </span>
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: 28 }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 0',
                    fontSize: 14,
                    color: '#aaa',
                  }}>
                    <Check size={16} color="#4ade80" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: '100%',
                  padding: '14px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: 'center',
                  background: plan.highlighted ? '#3b82f6' : '#1a1a1a',
                  color: plan.highlighted ? '#fff' : '#ccc',
                  border: plan.highlighted ? 'none' : '1px solid #333',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.background = '#2563eb'
                  } else {
                    e.currentTarget.style.background = '#222'
                    e.currentTarget.style.borderColor = '#555'
                    e.currentTarget.style.color = '#fff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.background = '#3b82f6'
                  } else {
                    e.currentTarget.style.background = '#1a1a1a'
                    e.currentTarget.style.borderColor = '#333'
                    e.currentTarget.style.color = '#ccc'
                  }
                }}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
