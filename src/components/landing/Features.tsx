import { Link } from 'react-router-dom'

const features = [
  {
    number: '01',
    title: 'AI-Powered Builder',
    description: 'Describe your website in plain English and watch AI build it for you.',
  },
  {
    number: '02',
    title: 'Fully Responsive',
    description: 'Every site looks perfect on all devices, from mobile to desktop.',
  },
  {
    number: '03',
    title: 'Clean Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript anytime.',
  },
  {
    number: '04',
    title: 'Component Library',
    description: '50+ pre-built components ready to use and customize.',
  },
  {
    number: '05',
    title: 'Lightning Fast',
    description: 'Build complete websites in under 30 seconds.',
  },
  {
    number: '06',
    title: 'Secure & Private',
    description: 'Your data is encrypted. We never share or sell your content.',
  },
]

export default function Features() {
  return (
    <section style={{ background: '#0a0a0a', padding: '100px 24px' }}>
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
            Why FluxWith
          </p>
          <h2 style={{ 
            fontSize: 'clamp(32px, 4vw, 44px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 16,
            letterSpacing: '-0.03em'
          }}>
            Crafted for creators
          </h2>
          <p style={{ 
            fontSize: 17, 
            color: '#777', 
            maxWidth: 480, 
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Everything you need to build beautiful, professional websites — no code required.
          </p>
        </div>

        {/* Grid - Stylish text-based design */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 1,
          background: '#1a1a1a',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{
                background: index % 2 === 0 ? '#111' : '#0f0f0f',
                padding: '40px 36px',
                transition: 'all 0.3s ease',
                borderLeft: index % 3 !== 0 ? '1px solid #222' : 'none',
                position: 'relative',
              }}
            >
              {/* Number */}
              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#3b82f6',
                letterSpacing: 2,
                display: 'block',
                marginBottom: 16,
              }}>
                {feature.number}
              </span>

              {/* Title */}
              <h3 style={{ 
                fontSize: 19, 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: 12,
                letterSpacing: '-0.01em'
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{ 
                fontSize: 14, 
                color: '#888', 
                lineHeight: 1.8,
                fontWeight: 300
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <Link
            to="/pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              letterSpacing: '0.01em',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)'
            }}
          >
            Start building now
            <span style={{ fontSize: 18 }}>→</span>
          </Link>
          
          <p style={{ 
            marginTop: 20, 
            fontSize: 13, 
            color: '#555' 
          }}>
            No credit card required · Free forever plan available
          </p>
        </div>
      </div>
    </section>
  )
}
