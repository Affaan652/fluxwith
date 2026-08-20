import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      background: '#0a0a0a',
      borderBottom: '1px solid #222',
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
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{
          width: 32,
          height: 32,
          background: '#fff',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          color: '#000',
          fontSize: 16,
        }}>
          F
        </div>
        <span style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>FluxWith</span>
      </Link>

      {/* Desktop Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link 
          to="/login" 
          style={{ 
            color: '#a0a0a0', 
            textDecoration: 'none', 
            fontSize: 14,
            padding: '8px 16px',
          }}
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
          }}
        >
          Start free
        </Link>
        
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
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 64,
          left: 0,
          right: 0,
          background: '#0a0a0a',
          borderBottom: '1px solid #222',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }} className="mobile-menu">
          <Link to="/login" style={{ color: '#a0a0a0', textDecoration: 'none', padding: 12, textAlign: 'center' }} onClick={() => setIsOpen(false)}>
            Sign in
          </Link>
          <Link to="/signup" style={{ background: '#fff', color: '#000', padding: 12, borderRadius: 8, textDecoration: 'none', textAlign: 'center' }} onClick={() => setIsOpen(false)}>
            Start free
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
