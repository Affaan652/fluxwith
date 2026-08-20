import { Link } from 'react-router-dom'
import { Sparkles, Monitor, Code, Box, Zap, Shield } from 'lucide-react'

const features = [
  {
    title: 'AI-Powered Builder',
    description: 'Describe your website in plain English and watch AI build it for you.',
    icon: Sparkles,
  },
  {
    title: 'Fully Responsive',
    description: 'Every site looks perfect on all devices, from mobile to desktop.',
    icon: Monitor,
  },
  {
    title: 'Clean Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript anytime.',
    icon: Code,
  },
  {
    title: 'Component Library',
    description: '50+ pre-built components ready to use and customize.',
    icon: Box,
  },
  {
    title: 'Lightning Fast',
    description: 'Build complete websites in under 30 seconds.',
    icon: Zap,
  },
  {
    title: 'Secure & Private',
    description: 'Your data is encrypted. We never share or sell your content.',
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
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
            Features
          </p>
          <h2 style={{ 
            fontSize: 'clamp(28px, 3vw, 36px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 12,
            letterSpacing: '-0.02em'
          }}>
            Everything you need
          </h2>
          <p style={{ 
            fontSize: 16, 
            color: '#888', 
            maxWidth: 480, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Powerful features that make website creation effortless.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 16,
        }}>
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                style={{
                  background: '#111',
                  border: '1px solid #1f1f1f',
                  borderRadius: 14,
                  padding: 28,
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                  color: '#3b82f6',
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ 
                  fontSize: 17, 
                  fontWeight: 600, 
                  color: '#fff', 
                  marginBottom: 8 
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: 14, 
                  color: '#888', 
                  lineHeight: 1.6 
                }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link
            to="/pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#3b82f6',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 14,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Explore all features
            <span style={{ fontSize: 16 }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
