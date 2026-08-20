import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Server } from 'lucide-react'

export default function FinalCta() {
  return (
    <section style={{ 
      background: '#0a0a0a', 
      padding: '80px 24px',
      borderTop: '1px solid #1f1f1f'
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(28px, 3.5vw, 36px)', 
          fontWeight: 700, 
          color: '#fff', 
          marginBottom: 16,
          letterSpacing: '-0.02em'
        }}>
          Ready to build something amazing?
        </h2>
        <p style={{ 
          fontSize: 16, 
          color: '#888', 
          marginBottom: 36,
          lineHeight: 1.6
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
            Get started free
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/showcase"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              color: '#ccc',
              padding: '14px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              border: '1px solid #333',
              fontWeight: 500,
              fontSize: 14,
              transition: 'all 0.2s ease',
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

        {/* Trust badges - generic, no fake claims */}
        <div style={{ 
          display: 'flex', 
          gap: 40, 
          justifyContent: 'center', 
          marginTop: 56,
          paddingTop: 32,
          borderTop: '1px solid #1f1f1f',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: Shield, text: 'SSL Security' },
            { icon: Zap, text: 'Lightning Fast' },
            { icon: Server, text: '99.9% Uptime' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.text} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8,
                color: '#666',
                fontSize: 13 
              }}>
                <Icon size={14} color="#4ade80" />
                {item.text}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
