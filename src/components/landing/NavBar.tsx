import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

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
        <span style={{ 
          fontWeight: 600, 
          fontSize: 18, 
          color: '#fff' 
        }}>
          FluxWith
        </span>
      </Link>

      {/* Desktop Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
            transition: 'background 0.15s ease',
          }}
          className="mobile-menu-btn"
          onMouseEnter={(e) => e.currentTarget.style.background = '#222'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

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
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }} className="mobile-menu">
          <Link 
            to="/login" 
            style={{ 
              color: '#999', 
              textDecoration: 'none', 
              padding: 14, 
              textAlign: 'center',
              borderRadius: 8,
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
              transition: 'all 0.15s ease',
            }} 
            onClick={() => setIsOpen(false)}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
          >
            Start free
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </nav>
  )
}
