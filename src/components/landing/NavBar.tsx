import { useState } from 'react'
import { Link } from 'react-router-dom'

const navData = {
  product: {
    label: 'Product',
    links: [
      { href: '/product', label: 'Product' },
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/showcase', label: 'Showcase' },
    ]
  },
  resources: {
    label: 'Resources',
    links: [
      { href: '/docs', label: 'Documentation' },
      { href: '/blog', label: 'Blog' },
      { href: '/community', label: 'Community' },
    ]
  },
  company: {
    label: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ]
  },
  legal: {
    label: 'Legal',
    links: [
      { href: '/terms', label: 'Terms of Service' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/cookies', label: 'Cookie Policy' },
    ]
  }
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav style={{
      background: 'rgba(10, 10, 10, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1f1f1f',
      padding: '0 24px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      {/* Logo */}
      <Link 
        to="/" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 10, 
          textDecoration: 'none' 
        }}
      >
        <img 
          src="/logo.png" 
          alt="FluxWith" 
          style={{ 
            width: 32, 
            height: 32, 
            borderRadius: 8,
            objectFit: 'cover'
          }} 
        />
        <span style={{ 
          fontWeight: 600, 
          fontSize: 18, 
          color: '#fff' 
        }}>
          FluxWith
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
        {/* Nav Items with Dropdowns */}
        {Object.entries(navData).map(([key, section]) => (
          <div
            key={key}
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown(key)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span style={{
              color: '#999',
              fontSize: 14,
              cursor: 'pointer',
              transition: 'color 0.15s ease',
              padding: '8px 0',
              display: 'block',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
            >
              {section.label}
            </span>
            
            {/* Dropdown */}
            {activeDropdown === key && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: -16,
                background: '#151515',
                border: '1px solid #222',
                borderRadius: 12,
                padding: 12,
                minWidth: 180,
                marginTop: 8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}>
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      display: 'block',
                      color: '#888',
                      textDecoration: 'none',
                      fontSize: 13,
                      padding: '10px 14px',
                      borderRadius: 6,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = '#1f1f1f'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#888'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 16 }}>
          <Link 
            to="/login" 
            style={{ 
              color: '#999', 
              textDecoration: 'none', 
              fontSize: 14,
              padding: '8px 16px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
          >
            Sign in
          </Link>
          <Link 
            to="/signup"
            style={{
              background: '#fff',
              color: '#000',
              padding: '8px 20px',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
          >
            Start free
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: 8,
          borderRadius: 6,
          fontSize: 24,
          lineHeight: 1,
          transition: 'background 0.15s ease',
        }}
        className="mobile-menu-btn"
        onMouseEnter={(e) => e.currentTarget.style.background = '#222'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 64,
          left: 0,
          right: 0,
          background: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1f1f1f',
          padding: 20,
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
        }} className="mobile-menu">
          
          {/* Mobile Nav Sections */}
          {Object.entries(navData).map(([key, section]) => (
            <div key={key} style={{ marginBottom: 24 }}>
              <h3 style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#3b82f6',
                textTransform: 'uppercase',
                letterSpacing: 2,
                marginBottom: 12,
                paddingLeft: 12,
              }}>
                {section.label}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{ 
                      color: '#999', 
                      textDecoration: 'none', 
                      padding: '12px 16px',
                      borderRadius: 8,
                      fontSize: 14,
                      transition: 'all 0.15s ease',
                    }} 
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = '#111'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#999'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile Auth Buttons */}
          <div style={{ 
            borderTop: '1px solid #1f1f1f', 
            paddingTop: 20,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <Link 
              to="/login" 
              style={{ 
                color: '#999', 
                textDecoration: 'none', 
                padding: 14, 
                textAlign: 'center',
                borderRadius: 8,
                border: '1px solid #222',
                fontSize: 14,
                transition: 'all 0.15s ease',
              }} 
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = '#333'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#999'
                e.currentTarget.style.borderColor = '#222'
              }}
            >
              Sign in
            </Link>
            <Link 
              to="/signup" 
              style={{ 
                background: '#fff', 
                color: '#000', 
                padding: 14, 
                borderRadius: 8, 
                textDecoration: 'none', 
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 14,
                transition: 'all 0.15s ease',
              }} 
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
            >
              Start free
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 968px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </nav>
  )
}
