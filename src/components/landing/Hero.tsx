import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  return (
    <section style={{
      background: '#0a0a0a',
      padding: '80px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
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
          color: '#a0a0a0',
          marginBottom: 24,
        }}>
          <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }}></span>
          AI-Powered Website Builder
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 20,
          color: '#fff',
        }}>
          Build stunning websites
          <br />
          <span style={{ color: '#a0a0a0' }}>in seconds, not weeks</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 18,
          color: '#a0a0a0',
          marginBottom: 32,
          maxWidth: 500,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Describe your vision in plain English and watch FluxWith build production-ready websites instantly.
        </p>

        {/* Input + Button */}
        <div style={{
          display: 'flex',
          gap: 8,
          maxWidth: 520,
          margin: '0 auto 24px',
          background: '#111',
          border: '1px solid #222',
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
              fontSize: 14,
            }}
          />
          <Link
            to="/signup"
            style={{
              background: '#3b82f6',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            Build Now →
          </Link>
        </div>

        {/* Example prompts */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 48 }}>
          {['SaaS product landing page', 'E-commerce store', 'Portfolio site'].map((example) => (
            <button
              key={example}
              onClick={() => setPrompt(example)}
              style={{
                background: 'transparent',
                border: '1px solid #222',
                color: '#a0a0a0',
                padding: '6px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              {example}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          borderTop: '1px solid #222',
          paddingTop: 32,
        }}>
          {[
            { value: '50K+', label: 'Websites Built' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '\u003c 2s', label: 'Avg Load Time' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
