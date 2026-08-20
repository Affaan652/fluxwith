import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 60px',
      overflow: 'hidden',
    }}>
      {/* Background Image - Desktop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/hero-desktop.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
        className="hero-bg-desktop"
      />
      
      {/* Background Image - Mobile */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/hero-mobile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
        className="hero-bg-mobile"
      />

      {/* Dark Overlay for text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Heading - No Badge */}
        <h1 style={{
          fontSize: 'clamp(40px, 5.5vw, 64px)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 24,
          color: '#fff',
          letterSpacing: '-0.02em',
        }}>
          Build stunning websites
          <br />
          <span style={{ 
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            in seconds, not weeks
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 18,
          color: '#d0d0d0',
          marginBottom: 36,
          maxWidth: 480,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6,
        }}>
          Describe your vision in plain English and watch FluxWith build production-ready websites instantly.
        </p>

        {/* Input + Button */}
        <div style={{
          display: 'flex',
          gap: 8,
          maxWidth: 520,
          margin: '0 auto 20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 12,
          padding: '6px',
        }}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your dream website..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              padding: '12px 16px',
              fontSize: 15,
            }}
          />
          <Link
            to="/signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#3b82f6',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              whiteSpace: 'nowrap',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}
          >
            Build Now →
          </Link>
        </div>

        {/* Example prompts */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 8, 
          justifyContent: 'center' 
        }}>
          {['SaaS landing page', 'E-commerce store', 'Portfolio site'].map((example) => (
            <button
              key={example}
              onClick={() => setPrompt(example)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#c0c0c0',
                padding: '6px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                fontSize: 13,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                e.currentTarget.style.color = '#c0c0c0'
              }}
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .hero-bg-mobile {
          display: none;
        }
        
        @media (max-width: 768px) {
          .hero-bg-desktop {
            display: none !important;
          }
          .hero-bg-mobile {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}
