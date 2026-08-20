import { useState, useRef, useEffect } from 'react'
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
  const navRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Toggle dropdown function
  const toggleDropdown = (key: string) => {
    setActiveDropdown(prev => prev === key ? null : key)
  }

  return (
    <nav ref={navRef} style={{
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '0 32px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <Link 
        to="/" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 12, 
          textDecoration: 'none' 
        }}
      >
        <div style={{
          width: 36,
          height: 36,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          fontWeight: 700,
          color: '#fff',
        }}>
          F
        </div>
        <span style={{ 
          fontWeight: 600, 
          fontSize: 20, 
          color: '#fff',
          letterSpacing: '-0.02em'
        }}>
          FluxWith
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
        {/* Nav Items with Click Dropdowns */}
        {Object.entries(navData).map(([key, section]) => (
          <div key={key} style={{ position: 'relative' }}>
            {/* Dropdown Button */}
            <button
              onClick={() => toggleDropdown(key)}
              style={{
                background: activeDropdown === key ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                border: 'none',
                borderRadius: 8,
                padding: '10px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (activeDropdown !== key) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeDropdown !== key) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              <span style={{
                color: activeDropdown === key ? '#fff' : '#a1a1aa',
                fontSize: 14,
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}>
                {section.label}
              </span>
              {/* Arrow Indicator */}
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
                style={{
                  transform: activeDropdown === key ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <path 
                  d="M2.5 4.5L6 8L9.5 4.5" 
                  stroke={activeDropdown === key ? '#fff' : '#71717a'} 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            {/* Dropdown Popup */}
            {activeDropdown === key && (
              <>
                {/* Backdrop */}
                <div 
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                  }}
                />
                
                {/* Popup Content */}
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(180deg, rgba(22, 22, 30, 0.98) 0%, rgba(17, 17, 24, 0.98) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 16,
                  padding: 8,
                  minWidth: 200,
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  animation: 'dropdownIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                  {/* Arrow Pointer */}
                  <div style={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%) rotate(45deg)',
                    width: 16,
                    height: 16,
                    background: 'rgba(22, 22, 30, 0.98)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                  }}/>
                  
                  {/* Links */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setActiveDropdown(null)}
                        style={{
                          display: 'block',
                          color: '#a1a1aa',
                          textDecoration: 'none',
                          fontSize: 14,
                          fontWeight: 500,
                          padding: '12px 14px',
                          borderRadius: 10,
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#a1a1aa'
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Divider */}
        <div style={{
          width: 1,
          height: 28,
          background: 'rgba(255, 255, 255, 0.1)',
          margin: '0 12px',
        }}/>

        {/* Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link 
            to="/login" 
            style={{ 
              color: '#a1a1aa', 
              textDecoration: 'none', 
              fontSize: 14,
              fontWeight: 500,
              padding: '10px 18px',
              borderRadius: 8,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a1a1aa'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Sign in
          </Link>
          <Link 
            to="/signup"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: '#fff',
              padding: '10px 22px',
              borderRadius: 10,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.35)'
            }}
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
          background: isOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: 10,
          borderRadius: 10,
          transition: 'background 0.15s ease',
        }}
        className="mobile-menu-btn"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 72,
          left: 0,
          right: 0,
          background: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          padding: 24,
          maxHeight: 'calc(100vh - 72px)',
          overflowY: 'auto',
        }} className="mobile-menu">
          
          {/* Mobile Nav Sections */}
          {Object.entries(navData).map(([key, section]) => (
            <div key={key} style={{ marginBottom: 28 }}>
              <h3 style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#3b82f6',
                textTransform: 'uppercase',
                letterSpacing: 2,
                marginBottom: 14,
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
                      color: '#a1a1aa', 
                      textDecoration: 'none', 
                      padding: '14px 16px',
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 500,
                      transition: 'all 0.15s ease',
                    }} 
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#a1a1aa'
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
            borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
            paddingTop: 24,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <Link 
              to="/login" 
              style={{ 
                color: '#a1a1aa', 
                textDecoration: 'none', 
                padding: 16, 
                textAlign: 'center',
                borderRadius: 10,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: 15,
                fontWeight: 500,
                transition: 'all 0.15s ease',
              }} 
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a1a1aa'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              Sign in
            </Link>
            <Link 
              to="/signup" 
              style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
                color: '#fff', 
                padding: 16, 
                borderRadius: 10, 
                textDecoration: 'none', 
                textAlign: 'center',
                fontWeight: 600,
                fontSize: 15,
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.15s ease',
              }} 
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.45)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)'}
            >
              Start free
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        
        @media (max-width: 968px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </nav>
  )
}
