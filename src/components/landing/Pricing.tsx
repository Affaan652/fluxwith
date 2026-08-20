import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For side projects and experimentation.',
    features: [
      '5 sites per month',
      'FluxWith subdomain',
      'Core components (20+)',
      'Basic analytics',
      'Community support'
    ],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For professionals and growing businesses.',
    features: [
      'Unlimited sites',
      'Custom domains',
      'Full component library (50+)',
      'Advanced analytics',
      'Code export',
      'Priority support',
      'SEO tools',
      'API access'
    ],
    cta: 'Start Pro trial',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$49',
    period: '/month',
    description: 'For teams and agencies with advanced needs.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'White-label option',
      'Custom components',
      'Dedicated manager',
      'SLA (99.9% uptime)'
    ],
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
      padding: '100px 24px'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ 
            fontSize: 13, 
            color: '#3b82f6', 
            textTransform: 'uppercase', 
            letterSpacing: 3, 
            fontWeight: 600,
            marginBottom: 16 
          }}>
            Pricing
          </p>
          <h2 style={{ 
            fontSize: 'clamp(36px, 4vw, 52px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 20,
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{ 
            fontSize: 17, 
            color: '#777', 
            maxWidth: 480,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Start for free. Scale as you grow.
          </p>
          
          {/* Toggle */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 16,
            background: '#111',
            padding: 6,
            borderRadius: 30,
            width: 'fit-content',
            margin: '0 auto',
          }}>
            <span style={{ 
              color: annual ? '#666' : '#fff', 
              fontSize: 13,
              fontWeight: 500,
              padding: '8px 20px',
              transition: 'color 0.15s ease',
            }}>
              Monthly
            </span>
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
                transition: 'background 0.2s ease',
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
                transition: 'left 0.2s ease',
              }} />
            </button>
            <span style={{ 
              color: annual ? '#fff' : '#666', 
              fontSize: 13,
              fontWeight: 500,
              padding: '8px 20px',
              transition: 'color 0.15s ease',
            }}>
              Annual
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 1,
          background: '#1a1a1a',
          borderRadius: 24,
          overflow: 'hidden',
        }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? '#151515' : '#0f0f0f',
                border: plan.highlighted ? '1px solid #3b82f6' : 'none',
                padding: '48px 36px',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                }}
              />
              )}
              
              {plan.highlighted && (
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  padding: '6px 16px',
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  marginBottom: 24,
                  letterSpacing: 0.5,
                }}>
                  Most Popular
                </span>
              )}
              
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: 8,
                letterSpacing: '-0.01em'
              }}>
                {plan.name}
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: '#666', 
                marginBottom: 28,
                lineHeight: 1.5
              }}>
                {plan.description}
              </p>
              
              <div style={{ 
                marginBottom: 32, 
                paddingBottom: 32, 
                borderBottom: '1px solid #222' 
              }}>
                <span style={{ 
                  fontSize: 56, 
                  fontWeight: 700, 
                  color: '#fff',
                  letterSpacing: '-0.03em'
                }}>
                  {plan.price}
                </span>
                <span style={{ 
                  color: '#555', 
                  fontSize: 14,
                  marginLeft: 4
                }}>
                  {plan.period}
                </span>
              </div>

              {/* Features - No icons, clean list */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: 36 }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{
                    padding: '12px 0',
                    fontSize: 14,
                    color: '#aaa',
                    lineHeight: 1.6,
                    borderBottom: '1px solid #1a1a1a',
                  }}>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '16px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  background: plan.highlighted ? '#fff' : 'transparent',
                  color: plan.highlighted ? '#000' : '#ccc',
                  border: plan.highlighted ? 'none' : '1px solid #333',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.background = '#e5e5e5'
                  } else {
                    e.currentTarget.style.background = '#1a1a1a'
                    e.currentTarget.style.borderColor = '#555'
                    e.currentTarget.style.color = '#fff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.background = '#fff'
                  } else {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = '#333'
                    e.currentTarget.style.color = '#ccc'
                  }
                }}
              >
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: 40, 
          fontSize: 13, 
          color: '#444',
          letterSpacing: '0.02em'
        }}>
          All plans include SSL security · 99.9% uptime guarantee · Cancel anytime
        </p>
      </div>
    </section>
  )
}
