import { Link } from 'react-router-dom'

const features = [
  {
    title: 'AI-Powered Builder',
    description: 'Describe your website in plain English and watch AI build it for you.',
  },
  {
    title: 'Fully Responsive',
    description: 'Every site looks perfect on all devices, from mobile to desktop.',
  },
  {
    title: 'Clean Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript anytime.',
  },
  {
    title: 'Component Library',
    description: '50+ pre-built components ready to use and customize.',
  },
  {
    title: 'Lightning Fast',
    description: 'Build complete websites in under 30 seconds.',
  },
  {
    title: 'Secure & Private',
    description: 'Your data is encrypted. We never share or sell your content.',
  },
]

export default function Features() {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Features</p>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Everything you need</h2>
          <p style={{ fontSize: 16, color: '#a0a0a0', maxWidth: 500, margin: '0 auto' }}>
            Powerful features that make website creation effortless.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: '#111',
                border: '1px solid #222',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: 14, color: '#a0a0a0', lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link
            to="/pricing"
            style={{
              display: 'inline-block',
              background: '#3b82f6',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Explore all features →
          </Link>
        </div>
      </div>
    </section>
  )
}
