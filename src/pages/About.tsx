import { Link } from 'react-router-dom'
import { Users, Sparkles, Eye, Shield, ArrowRight } from 'lucide-react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const values = [
  {
    title: 'User First',
    description: 'Every decision starts with how it impacts our users.',
    icon: Users,
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries to build the future of web creation.',
    icon: Sparkles,
  },
  {
    title: 'Transparency',
    description: 'Open about our process, pricing, and decisions.',
    icon: Eye,
  },
  {
    title: 'Quality',
    description: 'Excellence in every line of code and pixel of design.',
    icon: Shield,
  },
]

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <NavBar />
      
      {/* Hero */}
      <section style={{ padding: '100px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ 
            fontSize: 12, 
            fontWeight: 600, 
            color: '#666', 
            textTransform: 'uppercase', 
            letterSpacing: 1.5 
          }}>
            Company
          </span>
          <h1 style={{ 
            fontSize: 'clamp(32px, 4vw, 48px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginTop: 8, 
            marginBottom: 16,
            letterSpacing: '-0.02em'
          }}>
            About FluxWith
          </h1>
          <p style={{ 
            fontSize: 16, 
            color: '#888', 
            maxWidth: 520,
            lineHeight: 1.6 
          }}>
            We're on a mission to democratize website creation — making it accessible to everyone, regardless of technical skills.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ 
        padding: '60px 24px',
        borderTop: '1px solid #1f1f1f'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{ 
                fontSize: 28, 
                fontWeight: 700, 
                color: '#fff', 
                marginBottom: 16,
                letterSpacing: '-0.02em'
              }}>
                Our mission
              </h2>
              <p style={{ 
                fontSize: 15, 
                color: '#888', 
                lineHeight: 1.7,
                marginBottom: 16
              }}>
                FluxWith was born from a simple idea: everyone should be able to create beautiful websites without needing to learn complex technologies.
              </p>
              <p style={{ 
                fontSize: 15, 
                color: '#888', 
                lineHeight: 1.7
              }}>
                We believe AI can bridge the gap between imagination and reality, empowering creators, entrepreneurs, and businesses to bring their ideas to life instantly.
              </p>
            </div>

            <div style={{
              background: '#111',
              border: '1px solid #1f1f1f',
              borderRadius: 16,
              padding: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 72,
                  height: 72,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  borderRadius: 18,
                  marginBottom: 16,
                }}>
                  <span style={{ 
                    fontSize: 32, 
                    fontWeight: 700, 
                    color: '#fff' 
                  }}>F</span>
                </div>
                <p style={{ 
                  fontSize: 14, 
                  fontWeight: 500,
                  color: '#888' 
                }}>
                  Building the future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ 
        padding: '60px 24px',
        borderTop: '1px solid #1f1f1f'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: 12,
              letterSpacing: '-0.02em'
            }}>
              Our values
            </h2>
            <p style={{ fontSize: 15, color: '#888', maxWidth: 400, margin: '0 auto' }}>
              The principles that guide everything we do.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  style={{
                    background: '#111',
                    border: '1px solid #1f1f1f',
                    borderRadius: 14,
                    padding: 24,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: '#3b82f6',
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ 
                    fontSize: 16, 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: 8 
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    fontSize: 13, 
                    color: '#888', 
                    lineHeight: 1.5 
                  }}>
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        background: '#111',
        padding: '60px 24px',
        borderTop: '1px solid #1f1f1f'
      }}>
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 12,
            letterSpacing: '-0.02em'
          }}>
            Want to join us?
          </h2>
          <p style={{ 
            fontSize: 15, 
            color: '#888', 
            marginBottom: 28 
          }}>
            We're always looking for talented people to join our team.
          </p>
          <Link
            to="/careers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 14,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            View open positions
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
