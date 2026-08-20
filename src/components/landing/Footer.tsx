import { Link } from 'react-router-dom'

const footerLinks = {
  product: [
    { href: '/product', label: 'Product' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/showcase', label: 'Showcase' },
  ],
  resources: [
    { href: '/docs', label: 'Documentation' },
    { href: '/blog', label: 'Blog' },
    { href: '/community', label: 'Community' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a',
      padding: '64px 24px 32px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 48,
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 10, 
              textDecoration: 'none', 
              marginBottom: 16 
            }}>
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
              <span style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>FluxWith</span>
            </Link>
            <p style={{ fontSize: 14, color: '#666', maxWidth: 260, lineHeight: 1.7 }}>
              AI-powered website builder. Create stunning websites in seconds.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ 
                fontSize: 12, 
                fontWeight: 600, 
                color: '#fff', 
                textTransform: 'uppercase', 
                letterSpacing: 2, 
                marginBottom: 20 
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.href} style={{ marginBottom: 14 }}>
                    <Link 
                      to={link.href} 
                      style={{ 
                        color: '#666', 
                        textDecoration: 'none', 
                        fontSize: 14,
                        transition: 'color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#999'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid #1a1a1a',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          color: '#444',
        }}>
          <p>© {new Date().getFullYear()} FluxWith. All rights reserved.</p>
          <p>Built for creators worldwide</p>
        </div>
      </div>
    </footer>
  )
}
