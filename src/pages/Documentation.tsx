import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const docs = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Quick Start Guide', desc: 'Get up and running in 5 minutes' },
      { title: 'Installation', desc: 'Set up your workspace' },
      { title: 'First Project', desc: 'Build your first website' },
      { title: 'Account Setup', desc: 'Configure your profile' },
    ],
  },
  {
    category: 'Building',
    items: [
      { title: 'AI Builder', desc: 'Using the AI builder' },
      { title: 'Visual Editor', desc: 'Drag-and-drop editing' },
      { title: 'Components', desc: 'Using pre-built components' },
      { title: 'Customization', desc: 'Styling and theming' },
    ],
  },
  {
    category: 'Deployment',
    items: [
      { title: 'Publishing', desc: 'Deploy your site' },
      { title: 'Custom Domains', desc: 'Connect your domain' },
      { title: 'SSL & Security', desc: 'Secure your site' },
      { title: 'Analytics', desc: 'Track performance' },
    ],
  },
  {
    category: 'Advanced',
    items: [
      { title: 'Code Export', desc: 'Download source code' },
      { title: 'API Integration', desc: 'Connect to APIs' },
      { title: 'Team Collaboration', desc: 'Work with your team' },
      { title: 'Troubleshooting', desc: 'Common issues & fixes' },
    ],
  },
]

export default function Documentation() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <NavBar />
      
      {/* Hero */}
      <section style={{ padding: '100px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ 
            fontSize: 13, 
            fontWeight: 600, 
            color: '#3b82f6', 
            textTransform: 'uppercase', 
            letterSpacing: 3,
            display: 'block',
            marginBottom: 16
          }}>
            Resources
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 20,
            letterSpacing: '-0.03em'
          }}>
            Documentation
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Everything you need to get started with FluxWith.
          </p>
        </div>
      </section>

      {/* Docs content */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}>
            {docs.map((category) => (
              <div key={category.category}>
                <h2 style={{ 
                  fontSize: 13, 
                  fontWeight: 600, 
                  color: '#3b82f6', 
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  marginBottom: 20,
                }}>
                  {category.category}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.items.map((item) => (
                    <li key={item.title} style={{ marginBottom: 12 }}>
                      <Link
                        to="#"
                        style={{
                          display: 'block',
                          padding: '10px 0',
                          color: '#aaa',
                          textDecoration: 'none',
                          fontSize: 14,
                          borderBottom: '1px solid transparent',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.borderColor = '#222'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#aaa'
                          e.currentTarget.style.borderColor = 'transparent'
                        }}
                      >
                        <div style={{ fontWeight: 500, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: '#666' }}>{item.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 64,
            padding: '40px',
            background: '#111',
            borderRadius: 16,
            textAlign: 'center',
            border: '1px solid #1a1a1a',
          }}>
            <h3 style={{ 
              fontSize: 20, 
              fontWeight: 600, 
              color: '#fff', 
              marginBottom: 12 
            }}>
              Can't find what you're looking for?
            </h3>
            <p style={{ fontSize: 14, color: '#888', marginBottom: 24, lineHeight: 1.7 }}>
              Check out our community or reach out to support.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/community"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#fff',
                  color: '#000',
                  padding: '12px 24px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
              >
                Join community →
              </Link>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'transparent',
                  color: '#ccc',
                  padding: '12px 24px',
                  borderRadius: 8,
                  border: '1px solid #333',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  transition: 'all 0.15s ease',
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
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
