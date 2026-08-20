import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const values = [
  {
    number: '01',
    title: 'User First',
    description: 'Every decision starts with how it impacts our users.',
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Pushing boundaries to build the future of web creation.',
  },
  {
    number: '03',
    title: 'Transparency',
    description: 'Open about our process, pricing, and decisions.',
  },
  {
    number: '04',
    title: 'Quality',
    description: 'Excellence in every line of code and pixel of design.',
  },
]

export default function About() {
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
            Company
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 20,
            letterSpacing: '-0.03em'
          }}>
            About FluxWith
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            We're on a mission to democratize website creation — making it accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ 
        padding: '60px 24px',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}>
            <div>
              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#3b82f6',
                letterSpacing: 2,
                display: 'block',
                marginBottom: 16
              }}>OUR MISSION</span>
              <h2 style={{ 
                fontSize: 'clamp(28px, 4vw, 36px)', 
                fontWeight: 700, 
                color: '#fff', 
                marginBottom: 20,
                letterSpacing: '-0.02em'
              }}>
                Building the future of web creation
              </h2>
              <p style={{ 
                fontSize: 15, 
                color: '#888', 
                lineHeight: 1.8,
                marginBottom: 16,
                fontWeight: 300
              }}>
                FluxWith was born from a simple idea: everyone should be able to create beautiful websites without needing to learn complex technologies.
              </p>
              <p style={{ 
                fontSize: 15, 
                color: '#888', 
                lineHeight: 1.8,
                fontWeight: 300
              }}>
                We believe AI can bridge the gap between imagination and reality, empowering creators, entrepreneurs, and businesses to bring their ideas to life instantly.
              </p>
            </div>

            <div style={{
              background: '#111',
              border: '1px solid #1a1a1a',
              borderRadius: 20,
              padding: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  borderRadius: 20,
                  marginBottom: 20,
                }}>
                  <span style={{ 
                    fontSize: 36, 
                    fontWeight: 700, 
                    color: '#fff' 
                  }}>F</span>
                </div>
                <p style={{ 
                  fontSize: 14, 
                  fontWeight: 500,
                  color: '#666' 
                }}>
                  Building the future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - No Icons */}
      <section style={{ 
        padding: '60px 24px',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ 
              fontSize: 'clamp(28px, 4vw, 36px)', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: 12,
              letterSpacing: '-0.02em'
            }}>
              Our values
            </h2>
            <p style={{ fontSize: 15, color: '#777', maxWidth: 420, margin: '0 auto', lineHeight: 1.7 }}>
              The principles that guide everything we do.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 1,
            background: '#1a1a1a',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            {values.map((value) => (
              <div
                key={value.title}
                style={{
                  background: '#111',
                  padding: '36px 28px',
                }}
              >
                <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#3b82f6',
                  letterSpacing: 2,
                  display: 'block',
                  marginBottom: 16,
                }}>
                  {value.number}
                </span>
                <h3 style={{ 
                  fontSize: 17, 
                  fontWeight: 600, 
                  color: '#fff', 
                  marginBottom: 10,
                  letterSpacing: '-0.01em'
                }}>
                  {value.title}
                </h3>
                <p style={{ 
                  fontSize: 13, 
                  color: '#888', 
                  lineHeight: 1.7,
                  fontWeight: 300
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        background: '#111',
        padding: '60px 24px',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 4vw, 36px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 16,
            letterSpacing: '-0.02em'
          }}>
            Want to join us?
          </h2>
          <p style={{ 
            fontSize: 15, 
            color: '#888', 
            marginBottom: 32,
            lineHeight: 1.7
          }}>
            We're always looking for talented people to join our team.
          </p>
          <Link
            to="/careers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
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
            View open positions →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
