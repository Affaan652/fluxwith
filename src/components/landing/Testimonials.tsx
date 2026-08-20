import { useState } from 'react'

const testimonials = [
  {
    name: 'Marcus Rodriguez',
    role: 'Startup Founder',
    content: 'FluxWith gave us a landing page that converted better than our competitor\'s professionally designed page.',
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Manager',
    content: 'The ability to quickly build and iterate on landing pages has been game-changing for our A/B testing.',
  },
  {
    name: 'David Kim',
    role: 'E-commerce Owner',
    content: 'I\'m not technical at all, but FluxWith made it easy to create professional-looking pages for my store.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ background: '#111', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Testimonials</p>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Loved by creators</h2>
          <p style={{ fontSize: 16, color: '#a0a0a0' }}>See what builders are saying about FluxWith.</p>
        </div>

        {/* Featured */}
        <div style={{
          background: '#0a0a0a',
          border: '1px solid #222',
          borderRadius: 12,
          padding: 40,
          marginBottom: 24,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto',
          }}>
            {/* Stars */}
            <div style={{ color: '#f59e0b', marginBottom: 16, fontSize: 20 }}>
              ★★★★★
            </div>
            
            <p style={{ fontSize: 18, color: '#c0c0c0', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
              "{testimonials[active].content}"
            </p>

            <div>
              <p style={{ fontWeight: 600, color: '#fff', fontSize: 15 }}>{testimonials[active].name}</p>
              <p style={{ color: '#666', fontSize: 13 }}>{testimonials[active].role}</p>
            </div>
          </div>
        </div>

        {/* Dots + Cards */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? '#3b82f6' : '#222',
                border: 'none',
                width: active === i ? 24 : 10,
                height: 10,
                borderRadius: 5,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
