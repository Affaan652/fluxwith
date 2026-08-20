import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  return (
    <section style={{
      background: '#0a0a0a',
      padding: '100px 24px 80px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 16px',
          background: '#111',
          border: '1px solid #222',
          borderRadius: 20,
          fontSize: 13,
          color: '#888',
          marginBottom: 28,
        }}>
          <Sparkles size={14} color="#3b82f6" />
          AI-Powered Website Builder
        </div>

        {/* Heading */}
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
          color: '#888',
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
          background: '#111',
          border: '1px solid #222',
          borderRadius: 12,
          padding: '6px',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={(e) => {
          // @ts-ignore
          e.currentTarget.style.borderColor = '#333'
        }}
        onBlur={(e) => {
          // @ts-ignore
          e.currentTarget.style.borderColor = '#222'
        }}
        >
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
            Build Now
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Example prompts */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 8, 
          justifyContent: 'center', 
          marginBottom: 0 
        }}>
          {['SaaS landing page', 'E-commerce store', 'Portfolio site'].map((example) => (
            <button
              key={example}
              onClick={() => setPrompt(example)}
              style={{
                background: 'transparent',
                border: '1px solid #222',
                color: '#666',
                padding: '6px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                fontSize: 13,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#444'
                e.currentTarget.style.color = '#999'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222'
                e.currentTarget.style.color = '#666'
              }}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
