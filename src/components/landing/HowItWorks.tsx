export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Describe your vision',
      description: 'Tell us what you need in plain English.',
    },
    {
      number: '02',
      title: 'AI builds your site',
      description: 'Our AI creates your complete website instantly.',
    },
    {
      number: '03',
      title: 'Customize and publish',
      description: 'Fine-tune details and deploy with one click.',
    },
  ]

  return (
    <section style={{ background: '#111', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>How it works</p>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Three simple steps</h2>
          <p style={{ fontSize: 16, color: '#a0a0a0' }}>From idea to live website in under a minute.</p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
        }}>
          {steps.map((step) => (
            <div key={step.number} style={{ textAlign: 'center' }}>
              <div style={{
                width: 48,
                height: 48,
                background: '#222',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#3b82f6',
                fontWeight: 700,
                fontSize: 18,
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: '#a0a0a0' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
