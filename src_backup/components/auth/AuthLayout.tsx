import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import AuthSidePanel from './AuthSidePanel'

type Props = {
  title: string
  subtitle: string
  children: ReactNode
}

export default function AuthLayout({ title, subtitle, children }: Props) {
  return (
    <div className="grid min-h-screen bg-void md:grid-cols-2 md:h-screen md:overflow-hidden">
      {/* Left side - Form */}
      <div className="relative flex items-center justify-center px-6 py-12 md:py-0 overflow-y-auto md:overflow-hidden">
        {/* Mobile background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
          <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.1 }} />
          <div className="flux-blob flux-blob-amber" style={{ opacity: 0.1 }} />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>

        <div className="relative w-full max-w-md py-8 md:py-0 z-10">
          {/* Logo */}
          <Link to="/" className="mb-8 flex items-center justify-center gap-2.5 md:justify-start group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-flux-cyan to-flux-amber font-display text-lg font-bold text-void shadow-lg"
            >
              F
            </motion.div>
            <span className="font-display text-xl font-bold tracking-tight text-bone">
              FluxWith
            </span>
          </Link>

          {/* Form container with liquid-glass */}
          <div className="liquid-glass rounded-2xl p-8">
            <h1 className="font-display text-2xl font-bold text-bone mb-1.5">{title}</h1>
            <p className="text-sm text-fume mb-6">{subtitle}</p>

            {children}
          </div>

          {/* Footer links */}
          <p className="mt-5 text-center text-xs text-fume">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-flux-cyan hover:text-flux-cyan-dim transition-colors underline underline-offset-2">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-flux-cyan hover:text-flux-cyan-dim transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Decorative panel (desktop only) */}
      <AuthSidePanel />
    </div>
  )
}
