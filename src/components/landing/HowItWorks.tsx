import { MessageSquare, Wand2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Describe your vision',
    description: 'Tell us what you need in plain English.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'AI builds your site',
    description: 'Our AI creates your complete website instantly.',
    icon: Wand2,
  },
  {
    number: '03',
    title: 'Customize and publish',
    description: 'Fine-tune details and deploy with one click.',
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section style={{ 
      background: '#0f0f0f', 
      padding: '80px 24px',
      borderTop: '1px solid #1f1f1f'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ 
            fontSize: 13, 
            color: '#3b82f6', 
            textTransform: 'uppercase', 
            letterSpacing: 1.5, 
            fontWeight: 600,
            marginBottom: 12 
          }}>
            How it works
          </p>
          <h2 style={{ 
            fontSize: 'clamp(28px, 3vw, 36px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 12,
            letterSpacing: '-0.02em'
          }}>
            Three simple steps
          </h2>
          <p style={{ fontSize: 16, color: '#888' }}>
            From idea to live website in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
        }}>
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: '#3b82f6',
                }}>
                  <Icon size={26} />
                </div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: 12,
                  letterSpacing: 1,
                }}>
                  STEP {step.number}
                </div>
                <h3 style={{ 
                  fontSize: 18, 
                  fontWeight: 600, 
                  color: '#fff', 
                  marginBottom: 8 
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  fontSize: 14, 
                  color: '#888', 
                  lineHeight: 1.6 
                }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
