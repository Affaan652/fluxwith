import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

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
            Get in touch
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 48,
          }}>
            {/* Contact form */}
            <div>
              <h2 style={{ 
                fontSize: 22, 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: 28,
                letterSpacing: '-0.01em'
              }}>
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: 12, 
                      fontWeight: 500, 
                      color: '#888', 
                      marginBottom: 6 
                    }}>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                      style={{
                        width: '100%',
                        background: '#111',
                        border: '1px solid #222',
                        borderRadius: 10,
                        padding: '12px 16px',
                        fontSize: 14,
                        color: '#fff',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#444'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: 12, 
                      fontWeight: 500, 
                      color: '#888', 
                      marginBottom: 6 
                    }}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="you@example.com"
                      style={{
                        width: '100%',
                        background: '#111',
                        border: '1px solid #222',
                        borderRadius: 10,
                        padding: '12px 16px',
                        fontSize: 14,
                        color: '#fff',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#444'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: 12, 
                    fontWeight: 500, 
                    color: '#888', 
                    marginBottom: 6 
                  }}>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      background: '#111',
                      border: '1px solid #222',
                      borderRadius: 10,
                      padding: '12px 16px',
                      fontSize: 14,
                      color: '#fff',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General inquiry</option>
                    <option value="support">Technical support</option>
                    <option value="sales">Sales & pricing</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: 12, 
                    fontWeight: 500, 
                    color: '#888', 
                    marginBottom: 6 
                  }}>Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="How can we help?"
                    style={{
                      width: '100%',
                      background: '#111',
                      border: '1px solid #222',
                      borderRadius: 10,
                      padding: '12px 16px',
                      fontSize: 14,
                      color: '#fff',
                      resize: 'vertical',
                      outline: 'none',
                      fontFamily: 'inherit',
                      lineHeight: 1.6,
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#444'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#222'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#fff',
                    color: '#000',
                    border: 'none',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                >
                  Send message →
                </button>
              </form>
            </div>

            {/* Contact info - No icons */}
            <div>
              <h2 style={{ 
                fontSize: 22, 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: 28,
                letterSpacing: '-0.01em'
              }}>
                Other ways to reach us
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{
                  padding: '24px',
                  background: '#111',
                  border: '1px solid #1a1a1a',
                  borderRadius: 14,
                }}>
                  <h3 style={{ 
                    fontSize: 15, 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: 8 
                  }}>Email</h3>
                  <p style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>hello@fluxwith.app</p>
                  <p style={{ fontSize: 12, color: '#555' }}>We'll respond within 24 hours</p>
                </div>

                <div style={{
                  padding: '24px',
                  background: '#111',
                  border: '1px solid #1a1a1a',
                  borderRadius: 14,
                }}>
                  <h3 style={{ 
                    fontSize: 15, 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: 8 
                  }}>Location</h3>
                  <p style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>Remote-first company</p>
                  <p style={{ fontSize: 12, color: '#555' }}>Team members worldwide</p>
                </div>

                <div style={{
                  padding: '24px',
                  background: '#111',
                  border: '1px solid #1a1a1a',
                  borderRadius: 14,
                }}>
                  <h3 style={{ 
                    fontSize: 15, 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: 8 
                  }}>Support hours</h3>
                  <p style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>Monday - Friday: 9am - 6pm PST</p>
                  <p style={{ fontSize: 12, color: '#555' }}>Weekend: Limited support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
