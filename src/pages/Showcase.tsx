import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const featureCategories = [
  {
    id: 'building',
    title: 'AI Building',
    features: [
      {
        name: 'Prompt-to-Site',
        description: 'Transform natural language into complete websites with AI-powered building.',
      },
      {
        name: 'Smart Layouts',
        description: 'AI automatically selects the best layout based on your content type and goals.',
      },
      {
        name: 'Content Expansion',
        description: 'AI creates relevant copy, headlines, and CTAs from your brief.',
      },
    ],
  },
  {
    id: 'editor',
    title: 'Visual Editor',
    features: [
      {
        name: 'Inline Editing',
        description: 'Click any element to edit text, images, and styles in real-time.',
      },
      {
        name: 'Color Picker',
        description: 'Intuitive color tools with palette suggestions and brand matching.',
      },
      {
        name: 'Drag & Drop',
        description: 'Rearrange sections and components with simple drag interactions.',
      },
    ],
  },
  {
    id: 'components',
    title: 'Component Library',
    features: [
      {
        name: 'Hero Sections',
        description: '20+ hero variants including video backgrounds and animations.',
      },
      {
        name: 'Feature Grids',
        description: 'Flexible grid layouts with icons, images, and interactive states.',
      },
      {
        name: 'Pricing Tables',
        description: 'Conversion-optimized pricing components with toggle modes.',
      },
    ],
  },
]

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0].id)
  const [activeFeature, setActiveFeature] = useState(0)

  const currentCategory = featureCategories.find(c => c.id === activeCategory) || featureCategories[0]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <NavBar />
      
      {/* Header */}
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
            Features Showcase
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 20,
            letterSpacing: '-0.03em'
          }}>
            Explore every feature
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 500,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Dive deep into what makes FluxWith powerful.
          </p>
        </div>
      </section>

      {/* Main showcase area */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Category tabs - No icons */}
          <div style={{ 
            display: 'flex', 
            gap: 8, 
            marginBottom: 40,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {featureCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setActiveFeature(0)
                }}
                style={{
                  flexShrink: 0,
                  padding: '10px 24px',
                  borderRadius: 30,
                  background: activeCategory === category.id ? '#fff' : '#111',
                  color: activeCategory === category.id ? '#000' : '#888',
                  border: activeCategory === category.id ? 'none' : '1px solid #222',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 500,
                  transition: 'all 0.15s ease',
                }}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div style={{
            background: '#111',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid #1a1a1a',
          }}>
            {/* Feature tabs */}
            <div style={{ 
              display: 'flex', 
              gap: 4,
              background: '#0a0a0a',
              padding: 16,
              borderBottom: '1px solid #1a1a1a',
              overflowX: 'auto',
            }}>
              {currentCategory.features.map((feature, index) => (
                <button
                  key={feature.name}
                  onClick={() => setActiveFeature(index)}
                  style={{
                    flexShrink: 0,
                    padding: '10px 20px',
                    borderRadius: 8,
                    background: activeFeature === index ? '#1a1a1a' : 'transparent',
                    color: activeFeature === index ? '#fff' : '#666',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 500,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {feature.name}
                </button>
              ))}
            </div>

            {/* Feature content */}
            <div style={{ padding: '48px' }}>
              <div style={{
                maxWidth: 700,
              }}>
                <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#3b82f6',
                  letterSpacing: 2,
                  display: 'block',
                  marginBottom: 12,
                }}>
                  FEATURE
                </span>
                
                <h2 style={{ 
                  fontSize: 28, 
                  fontWeight: 700, 
                  color: '#fff', 
                  marginBottom: 16,
                  letterSpacing: '-0.02em'
                }}>
                  {currentCategory.features[activeFeature].name}
                </h2>
                
                <p style={{ 
                  fontSize: 16, 
                  color: '#888', 
                  lineHeight: 1.8,
                  marginBottom: 32,
                  fontWeight: 300
                }}>
                  {currentCategory.features[activeFeature].description}
                </p>
                
                {/* Feature details list - No icons */}
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: '0 0 40px 0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 12,
                }}>
                  {[
                    'Intuitive interface with zero learning curve',
                    'Real-time preview as you make changes',
                    'Keyboard shortcuts for power users',
                    'Undo/redo history for all actions',
                    'Export settings for team consistency',
                    'Works offline when needed',
                  ].map((item) => (
                    <li key={item} style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 0',
                      fontSize: 14,
                      color: '#aaa',
                    }}>
                      <span style={{ 
                        color: '#4ade80',
                        fontSize: 12
                      }}>✓</span> 
                      {item}
                    </li>
                  ))}
                </ul>

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
                  Try it now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{ 
        margin: '0 24px 60px',
        background: '#111',
        borderRadius: 20,
        padding: 56,
        textAlign: 'center',
        border: '1px solid #1a1a1a',
      }}>
        <h2 style={{ 
          fontSize: 'clamp(28px, 4vw, 36px)', 
          fontWeight: 700, 
          color: '#fff', 
          marginBottom: 16,
          letterSpacing: '-0.02em'
        }}>
          Ready to experience these features?
        </h2>
        <p style={{ 
          fontSize: 15, 
          color: '#888', 
          marginBottom: 32,
          maxWidth: 420,
          margin: '0 auto 32px',
          lineHeight: 1.7
        }}>
          Start building for free today and see how FluxWith can transform your workflow.
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
          Get started free →
        </Link>
      </section>

      <Footer />
    </div>
  )
}
