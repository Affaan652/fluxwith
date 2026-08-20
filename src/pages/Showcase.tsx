import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Pencil, Box, ArrowRight, Check } from 'lucide-react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const featureCategories = [
  {
    id: 'building',
    title: 'AI Building',
    icon: Sparkles,
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
    icon: Pencil,
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
    icon: Box,
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
      <section style={{ padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ 
            fontSize: 12, 
            fontWeight: 600, 
            color: '#666', 
            textTransform: 'uppercase', 
            letterSpacing: 1.5 
          }}>
            Features Showcase
          </span>
          <h1 style={{ 
            fontSize: 'clamp(32px, 4vw, 48px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginTop: 8, 
            marginBottom: 16,
            letterSpacing: '-0.02em'
          }}>
            Explore every feature
          </h1>
          <p style={{ 
            fontSize: 15, 
            color: '#888', 
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Dive deep into what makes FluxWith powerful. See real examples and understand how each feature works.
          </p>
        </div>
      </section>

      {/* Main showcase area */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: 32,
          }}>
            {/* Sidebar navigation - Desktop only */}
            <div className="sidebar-nav">
              <div style={{
                position: 'sticky',
                top: 80,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}>
                {featureCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        setActiveFeature(0)
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 14px',
                        borderRadius: 8,
                        background: activeCategory === category.id ? '#fff' : 'transparent',
                        color: activeCategory === category.id ? '#000' : '#888',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 13,
                        fontWeight: 500,
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (activeCategory !== category.id) {
                          e.currentTarget.style.background = '#111'
                          e.currentTarget.style.color = '#fff'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeCategory !== category.id) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = '#888'
                        }
                      }}
                    >
                      <Icon size={16} />
                      {category.title}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile category tabs */}
            <div className="mobile-tabs" style={{
              display: 'none',
              gap: 8,
              marginBottom: 24,
              overflowX: 'auto',
              paddingBottom: 8,
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
                    padding: '8px 16px',
                    borderRadius: 20,
                    background: activeCategory === category.id ? '#fff' : '#111',
                    color: activeCategory === category.id ? '#000' : '#888',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 500,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div>
              {/* Category header */}
              <div style={{ marginBottom: 28 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 14px',
                  background: '#fff',
                  borderRadius: 20,
                  marginBottom: 16,
                }}>
                  {(() => {
                    const Icon = currentCategory.icon
                    return <Icon size={14} />
                  })()}
                  <span style={{ 
                    fontSize: 12, 
                    fontWeight: 600,
                    color: '#000' 
                  }}>
                    {currentCategory.title}
                  </span>
                </div>
                <h2 style={{ 
                  fontSize: 22, 
                  fontWeight: 700, 
                  color: '#fff',
                  letterSpacing: '-0.01em'
                }}>
                  Powerful tools for modern builders
                </h2>
              </div>

              {/* Feature tabs */}
              <div style={{ 
                display: 'flex', 
                gap: 8, 
                marginBottom: 24,
                overflowX: 'auto',
                paddingBottom: 8,
              }}>
                {currentCategory.features.map((feature, index) => (
                  <button
                    key={feature.name}
                    onClick={() => setActiveFeature(index)}
                    style={{
                      flexShrink: 0,
                      padding: '8px 16px',
                      borderRadius: 8,
                      background: activeFeature === index ? '#fff' : '#111',
                      color: activeFeature === index ? '#000' : '#888',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 12,
                      fontWeight: 500,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {feature.name}
                  </button>
                ))}
              </div>

              {/* Feature content */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 24,
              }}>
                {/* Description */}
                <div>
                  <h3 style={{ 
                    fontSize: 18, 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: 12 
                  }}>
                    {currentCategory.features[activeFeature].name}
                  </h3>
                  <p style={{ 
                    fontSize: 14, 
                    color: '#888', 
                    lineHeight: 1.6,
                    marginBottom: 24 
                  }}>
                    {currentCategory.features[activeFeature].description}
                  </p>
                  
                  {/* Feature details list */}
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0, 
                    marginBottom: 28 
                  }}>
                    {[
                      'Intuitive interface with zero learning curve',
                      'Real-time preview as you make changes',
                      'Keyboard shortcuts for power users',
                      'Undo/redo history for all actions',
                      'Export settings for team consistency',
                    ].map((item) => (
                      <li key={item} style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '8px 0',
                        fontSize: 13,
                        color: '#888',
                      }}>
                        <Check size={14} color="#4ade80" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>

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
                    Try it now
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Demo placeholder */}
                <div>
                  <div style={{
                    borderRadius: 12,
                    border: '1px solid #1f1f1f',
                    background: '#111',
                    padding: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 200,
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: 56,
                        height: 56,
                        margin: '0 auto 16px',
                        borderRadius: '50%',
                        background: '#1a1a1a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Sparkles size={24} color="#555" />
                      </div>
                      <p style={{ 
                        fontSize: 14, 
                        color: '#555' 
                      }}>
                        Interactive Demo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{ 
        margin: '0 24px 60px',
        background: '#fff',
        borderRadius: 14,
        padding: 48,
        textAlign: 'center',
      }}>
        <h2 style={{ 
          fontSize: 24, 
          fontWeight: 700, 
          color: '#000', 
          marginBottom: 12 
        }}>
          Ready to experience these features?
        </h2>
        <p style={{ 
          fontSize: 14, 
          color: '#666', 
          marginBottom: 24,
          maxWidth: 400,
          margin: '0 auto 24px'
        }}>
          Start building for free today and see how FluxWith can transform your workflow.
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
          Get started free
          <ArrowRight size={15} />
        </Link>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .sidebar-nav { display: none !important; }
          .mobile-tabs { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
