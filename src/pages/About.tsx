import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former Google engineer with 10 years in web development.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'AI researcher and full-stack architect.',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Design',
    bio: 'Ex-Stripe designer focused on user experience.',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Open source contributor and React expert.',
  },
]

const values = [
  {
    title: 'User First',
    description: 'Every decision starts with how it impacts our users.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: 'cyan' as const,
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries to build the future of web creation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: 'amber' as const,
  },
  {
    title: 'Transparency',
    description: 'Open about our process, pricing, and decisions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'cyan' as const,
  },
  {
    title: 'Quality',
    description: 'Excellence in every line of code and pixel of design.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'amber' as const,
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <NavBar />
      
      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <span className="eyebrow">Company</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>About FluxWith</h1>
            <p className="mt-2 text-sm text-[#8a8f98] max-w-xl">We're on a mission to democratize website creation — making it accessible to everyone, regardless of technical skills.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 px-6 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#8a8f98]">
              Founded in 2024, FluxWith was born from a simple idea: everyone should be able to 
              create beautiful websites without needing to learn complex technologies.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#8a8f98]">
              We believe AI can bridge the gap between imagination and reality, empowering 
              creators, entrepreneurs, and businesses to bring their ideas to life instantly.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-white tabular-nums" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>50K+</div>
                <div className="text-xs text-[#5a5e68] mt-1">Sites created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tabular-nums" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>120+</div>
                <div className="text-xs text-[#5a5e68] mt-1">Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] aspect-square flex items-center justify-center backdrop-blur-sm"
          >
            <div className="text-center p-8">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-[#5eead4] to-[#ff8a3d] p-4 mb-3">
                <span className="text-2xl font-bold text-[#0b0c10]">F</span>
              </div>
              <p className="text-sm font-medium text-[#8a8f98]">Building the future</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Our values</h2>
            <p className="mt-2 text-sm text-[#8a8f98] max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl border bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04] ${
                  value.color === 'cyan' ? 'border-[#5eead4]/10 hover:border-[#5eead4]/25' : 'border-[#ff8a3d]/10 hover:border-[#ff8a3d]/25'
                }`}
              >
                <div className={`mb-3 inline-flex rounded-lg p-2 ${
                  value.color === 'cyan' ? 'bg-[#5eead4]/10 text-[#5eead4]' : 'bg-[#ff8a3d]/10 text-[#ff8a3d]'
                }`}>{value.icon}</div>
                <h3 className="font-semibold text-white text-sm" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{value.title}</h3>
                <p className="mt-1 text-xs text-[#8a8f98]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Meet the team</h2>
            <p className="mt-2 text-sm text-[#8a8f98]">
              The people behind FluxWith.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#5eead4]/10 to-[#ff8a3d]/10 mb-3 flex items-center justify-center border border-white/[0.06]">
                  <span className="text-xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-white text-sm" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{member.name}</h3>
                <p className="text-xs text-[#5a5e68] mt-1">{member.role}</p>
                <p className="text-xs text-[#8a8f98] mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark theme consistent */}
      <section className="bg-[#14161c] py-12 px-6 border-t border-white/[0.06]">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Want to join us?</h2>
          <p className="mt-2 text-sm text-[#8a8f98]">We're always looking for talented people to join our team.</p>
          <Link
            to="/careers"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5eead4] to-[#ff8a3d] px-6 py-2.5 text-sm font-semibold text-[#0b0c10] hover:shadow-lg hover:shadow-[#5eead4]/20 active:scale-[0.96] transition-all duration-150 ease-out"
          >
            View open positions
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
