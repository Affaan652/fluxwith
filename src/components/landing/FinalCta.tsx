import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
          Ready to build something amazing?
        </h2>
        <p style={{ fontSize: 16, color: '#a0a0a0', marginBottom: 32 }}>
          Join thousands of creators who are already using FluxWith. Start for free — no credit card required.
        </p>
        
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/signup"
            style={{
              background: '#3b82f6',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Get started free →
          </Link>
          <Link
            to="/showcase"
            style={{
              background: 'transparent',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              border: '1px solid #333',
            }}
          >
            View examples
          </Link>
        </div>

        {/* Trust badges */}
        <div style={{ 
          display: 'flex', 
          gap: 32, 
          justifyContent: 'center', 
          marginTop: 48,
          paddingTop: 32,
          borderTop: '1px solid #222',
          flexWrap: 'wrap',
        }}>
          {['SSL Security', 'Lightning Fast', '99.9% Uptime', 'Enterprise Security'].map((item) => (
            <span key={item} style={{ color: '#666', fontSize: 13 }}>✓ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
