import { Link } from 'react-router-dom'
import { Sparkles, Settings, Box, Smartphone, Code, Zap } from 'lucide-react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const features = [
  {
    title: 'AI-Powered Builder',
    description: 'Describe your website in plain English and watch AI build it for you.',
    icon: Sparkles,
  },
  {
    title: 'Visual Editor',
    description: 'Fine-tune every detail with our intuitive editor. No coding required.',
    icon: Settings,
  },
  {
    title: 'Component Library',
    description: '50+ pre-built components ready to use and customize.',
    icon: Box,
  },
  {
    title: 'Responsive Design',
    description: 'Every site looks perfect on all devices, mobile to desktop.',
    icon: Smartphone,
  },
  {
    title: 'Code Export',
    description: 'Export production-ready HTML, CSS, and JavaScript anytime.',
    icon: Code,
  },
  {
    title: 'Instant Deploy',
    description: 'Deploy your site instantly with one click. SSL included.',
    icon: Zap,
  },
]

export default function Product() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <NavBar />
      
      {/* Hero */}
      <section style={{ padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ 
            fontSize: 12, 
            fontWeight: 600, 
            color: '#666', 
            textTransform: 'uppercase', 
            letterSpacing: 1.5 
          }}>
            Product
          </span>
          <h1 style={{ 
            fontSize: 'clamp(32px, 4vw, 48px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginTop: 8, 
            marginBottom: 16,
            lineHeight: 1.2 
          }}>
            Build websites with AI
          </h1>
          <p style={{ 
            fontSize: 16, 
            color: '#a0a0a0', 
            maxWidth: 500, 
            marginBottom: 32,
            lineHeight: 1.6 
          }}>
            FluxWith is an AI-powered platform that transforms your ideas into beautiful, 
            production-ready websites in seconds. No design skills or coding required.
          </p>
          
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              to="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
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
              Start building free
              <span style={{ fontSize: 16 }}>→</span>
            </Link>
            <Link
              to="/showcase"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 14,
                border: '1px solid #333',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#555'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              View examples
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: 8 
            }}>
              Everything you need
            </h2>
            <p style={{ fontSize: 14, color: '#a0a0a0', maxWidth: 400, margin: '0 auto' }}>
              Powerful features that make website creation effortless.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
          }}>
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  style={{
                    background: '#111',
                    border: '1px solid #222',
                    borderRadius: 12,
                    padding: 24,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: '#3b82f6',
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - White for contrast */}
      <section style={{ 
        background: '#fff', 
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 700, 
            color: '#000', 
            marginBottom: 12 
          }}>
            Ready to get started?
          </h2>
          <p style={{ 
            fontSize: 15, 
            color: '#666', 
            marginBottom: 28,
            lineHeight: 1.5 
          }}>
            Start building your website today with FluxWith. No credit card required.
          </p>
          <Link
            to="/signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#000',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 14,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#222'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#000'}
          >
            Get started for free
            <span style={{ fontSize: 16 }}>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
