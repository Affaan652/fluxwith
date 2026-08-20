import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const openings = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Developer Advocate',
    department: 'Community',
    location: 'Remote',
    type: 'Full-time',
  },
]

const benefits = [
  'Competitive salary & equity',
  'Health, dental & vision insurance',
  'Unlimited PTO policy',
  'Remote-first culture',
  'Learning & development budget',
  'Home office setup stipend',
]

export default function Careers() {
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
            Join our team
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Help us build the future of web creation. We're looking for passionate people who want to make a real impact.
          </p>
        </div>
      </section>

      {/* Benefits - No icons */}
      <section style={{ 
        padding: '40px 24px',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
          }}>
            {benefits.map((benefit) => (
              <div key={benefit} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 20px',
                background: '#111',
                borderRadius: 30,
                border: '1px solid #1a1a1a',
              }}>
                <span style={{ color: '#4ade80', fontSize: 12 }}>✓</span>
                <span style={{ color: '#aaa', fontSize: 13 }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 8,
            letterSpacing: '-0.02em'
          }}>
            Open positions
          </h2>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>
            {openings.length} roles available
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {openings.map((job) => (
              <div
                key={job.title}
                style={{
                  background: '#111',
                  border: '1px solid #1a1a1a',
                  borderRadius: 14,
                  padding: '28px 32px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                }}>
                  <div>
                    <h3 style={{ 
                      fontSize: 18, 
                      fontWeight: 600, 
                      color: '#fff', 
                      marginBottom: 6,
                      letterSpacing: '-0.01em'
                    }}>
                      {job.title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#666' }}>{job.department}</p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ 
                      padding: '6px 14px', 
                      borderRadius: 20, 
                      background: '#1a1a1a', 
                      color: '#888',
                      fontSize: 12,
                    }}>
                      {job.location}
                    </span>
                    <span style={{ 
                      padding: '6px 14px', 
                      borderRadius: 20, 
                      background: '#3b82f6', 
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 500,
                    }}>
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: '1px solid #1a1a1a',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}>
                  <span style={{ 
                    fontSize: 13, 
                    fontWeight: 500,
                    color: '#888',
                    transition: 'color 0.15s ease',
                  }}>
                    Apply now →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* No role? */}
          <div style={{
            marginTop: 48,
            background: '#111',
            border: '1px solid #1a1a1a',
            borderRadius: 16,
            padding: '40px',
            textAlign: 'center',
          }}>
            <h3 style={{ 
              fontSize: 20, 
              fontWeight: 600, 
              color: '#fff', 
              marginBottom: 12 
            }}>
              Don't see your role?
            </h3>
            <p style={{ 
              fontSize: 14, 
              color: '#888', 
              marginBottom: 24,
              lineHeight: 1.7
            }}>
              We're always interested in hearing from talented people. Send us your resume.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#fff',
                color: '#000',
                padding: '12px 24px',
                borderRadius: 10,
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 14,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
