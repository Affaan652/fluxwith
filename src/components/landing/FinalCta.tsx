import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section style={{ 
      background: '#0a0a0a', 
      padding: '100px 24px',
      borderTop: '1px solid #1f1f1f'
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(32px, 4vw, 44px)', 
          fontWeight: 700, 
          color: '#fff', 
          marginBottom: 20,
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          Ready to build something amazing?
        </h2>
        <p style={{ 
          fontSize: 17, 
          color: '#888', 
          marginBottom: 40,
          lineHeight: 1.7,
          fontWeight: 300
        }}>
          Start building with FluxWith today — no credit card required.
        </p>
        
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#3b82f6',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: 10,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              transition: 'all 0.2s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Get started free →
          </Link>
          <Link
            to="/showcase"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              color: '#ccc',
              padding: '16px 32px',
              borderRadius: 10,
              textDecoration: 'none',
              border: '1px solid #333',
              fontWeight: 500,
              fontSize: 15,
              transition: 'all 0.2s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#555'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333'
              e.currentTarget.style.color = '#ccc'
            }}
          >
            View examples
          </Link>
        </div>
      </div>
    </section>
  )
}
