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
      borderTop: '1px solid #222',
      padding: '48px 24px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 32,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 12 }}>
              <div style={{
                width: 28,
                height: 28,
                background: '#fff',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: '#000',
                fontSize: 14,
              }}>F</div>
              <span style={{ fontWeight: 600, fontSize: 16, color: '#fff' }}>FluxWith</span>
            </Link>
            <p style={{ fontSize: 13, color: '#666', maxWidth: 220 }}>
              AI-powered website builder. Create stunning websites in seconds.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: 12, fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {links.map((link) => (
                  <li key={link.href} style={{ marginBottom: 8 }}>
                    <Link to={link.href} style={{ color: '#666', textDecoration: 'none', fontSize: 13 }}>
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
          borderTop: '1px solid #222',
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
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
