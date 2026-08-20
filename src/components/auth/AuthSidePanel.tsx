export default function AuthSidePanel() {
  return (
    <div style={{
      background: '#0a0a0a',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        {/* Logo */}
        <div style={{
          width: 64,
          height: 64,
          background: '#111',
          border: '1px solid #222',
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: 28,
          fontWeight: 700,
          color: '#3b82f6',
        }}>
          F
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 12 }}>
          Build faster than ever
        </h2>
        
        <p style={{ fontSize: 14, color: '#666', maxWidth: 260, margin: '0 auto 24px', lineHeight: 1.6 }}>
          Create production-ready websites in seconds with AI-powered tools.
        </p>

        {/* Feature pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {['AI-Powered', 'No Code', 'Instant Deploy', 'Custom Domains'].map((item) => (
            <span
              key={item}
              style={{
                padding: '6px 14px',
                background: '#111',
                border: '1px solid #222',
                borderRadius: 20,
                fontSize: 12,
                color: '#888',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom text */}
        <p style={{
          position: 'absolute',
          bottom: -120,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 12,
          color: '#444',
        }}>
          Trusted by 50,000+ creators
        </p>
      </div>

      {/* Corner accents */}
      <div style={{
        position: 'absolute',
        top: 32,
        left: 32,
        width: 48,
        height: 48,
        border: '1px solid #181818',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 64,
        height: 64,
        border: '1px solid #181818',
        borderRadius: '50%',
      }} />
    </div>
  )
}
