import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const communityLinks = [
  {
    title: 'Discord Server',
    description: 'Join our community for real-time chat, support, and networking.',
  },
  {
    title: 'GitHub Discussions',
    description: 'Share ideas, ask questions, and discuss features with other developers.',
  },
  {
    title: 'Twitter/X',
    description: 'Follow us for updates, tips, and community highlights.',
  },
  {
    title: 'YouTube Channel',
    description: 'Video tutorials, live streams, and in-depth guides.',
  },
]

export default function Community() {
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
            Community
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Connect with other creators, share your work, and get help.
          </p>
        </div>
      </section>

      {/* Community links - No icons */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 22, 
            fontWeight: 600, 
            color: '#fff', 
            marginBottom: 32,
            letterSpacing: '-0.01em'
          }}>
            Join the conversation
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 16,
          }}>
            {communityLinks.map((link) => (
              <a
                key={link.title}
                href="#"
                style={{
                  display: 'block',
                  background: '#111',
                  border: '1px solid #1a1a1a',
                  borderRadius: 14,
                  padding: '32px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#333'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1a1a1a'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <h3 style={{ 
                  fontSize: 18, 
                  fontWeight: 600, 
                  color: '#fff', 
                  marginBottom: 10,
                  letterSpacing: '-0.01em'
                }}>
                  {link.title}
                </h3>
                <p style={{ 
                  fontSize: 14, 
                  color: '#888', 
                  lineHeight: 1.7,
                  marginBottom: 20
                }}>
                  {link.description}
                </p>
                <span style={{ 
                  fontSize: 13, 
                  fontWeight: 500,
                  color: '#3b82f6'
                }}>
                  Join now →
                </span>
              </a>
            ))}
          </div>

          {/* Stats section - No fake numbers */}
          <div style={{
            marginTop: 64,
            padding: '48px',
            background: '#111',
            borderRadius: 20,
            border: '1px solid #1a1a1a',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 32,
              textAlign: 'center',
            }}>
              {[
                { label: 'Active Members', value: 'Growing' },
                { label: 'Daily Discussions', value: 'Active' },
                { label: 'Tutorials Shared', value: 'Many' },
                { label: 'Help Requests Solved', value: 'Fast' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ 
                    fontSize: 28, 
                    fontWeight: 700, 
                    color: '#3b82f6',
                    marginBottom: 8
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 13, color: '#666' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 48,
            textAlign: 'center',
          }}>
            <p style={{ fontSize: 15, color: '#888', marginBottom: 24, lineHeight: 1.7 }}>
              Have questions? Our team is here to help.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 12,
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 14,
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.25s ease',
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
              Contact us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
