import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const features = [
  {
    number: '01',
    title: 'AI-Powered Builder',
    description: 'Describe your website in plain English and watch AI build it for you.',
  },
  {
    number: '02',
    title: 'Visual Editor',
    description: 'Fine-tune every detail with our intuitive editor. No coding required.',
  },
  {
    number: '03',
    title: 'Component Library',
    description: '50+ pre-built components ready to use and customize.',
  },
  {
    number: '04',
    title: 'Responsive Design',
    description: 'Every site looks perfect on all devices, mobile to desktop.',
  },
  {
    number: '05',
    title: 'Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript anytime.',
  },
  {
    number: '06',
    title: 'Instant Deploy',
    description: 'Deploy your site instantly with one click. SSL included.',
  },
]

export default function Product() {
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
            marginBottom: 16,
            display: 'block'
          }}>
            Product
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 20,
            lineHeight: 1.1,
            letterSpacing: '-0.03em'
          }}>
            Build websites with AI
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 520, 
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            FluxWith is an AI-powered platform that transforms your ideas into beautiful, 
            production-ready websites in seconds.
          </p>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#fff',
                color: '#000',
                padding: '14px 28px',
                borderRadius: 10,
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 14,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
            >
              Start building free →
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
              View examples
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - No Icons */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ 
              fontSize: 'clamp(28px, 4vw, 36px)', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: 12,
              letterSpacing: '-0.02em'
            }}>
              Everything you need
            </h2>
            <p style={{ fontSize: 15, color: '#777', maxWidth: 420, margin: '0 auto', lineHeight: 1.7 }}>
              Powerful features that make website creation effortless.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 1,
            background: '#1a1a1a',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                style={{
                  background: index % 2 === 0 ? '#111' : '#0f0f0f',
                  padding: '36px 32px',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#3b82f6',
                  letterSpacing: 2,
                  display: 'block',
                  marginBottom: 14,
                }}>
                  {feature.number}
                </span>
                <h3 style={{ 
                  fontSize: 18, 
                  fontWeight: 600, 
                  color: '#fff', 
                  marginBottom: 10,
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: 14, 
                  color: '#888', 
                  lineHeight: 1.7,
                  fontWeight: 300
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: '#111', 
        padding: '60px 24px',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 4vw, 36px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 16,
            letterSpacing: '-0.02em'
          }}>
            Ready to get started?
          </h2>
          <p style={{ 
            fontSize: 15, 
            color: '#888', 
            marginBottom: 32,
            lineHeight: 1.7
          }}>
            Start building your website today with FluxWith. No credit card required.
          </p>
          <Link
            to="/signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
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
            Get started for free →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
