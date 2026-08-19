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
    <div className="grid min-h-screen bg-void md:grid-cols-2">
      {/* Left side - Form */}
      <div className="relative flex items-center justify-center px-6 py-16">
        {/* Mobile background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
          <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.15 }} />
          <div className="flux-blob flux-blob-purple" style={{ opacity: 0.15 }} />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>

        <div className="relative w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="mb-10 flex items-center justify-center gap-3 md:justify-start group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-flux-cyan via-flux-blue to-flux-purple font-display text-xl font-bold text-void shadow-lg"
            >
              F
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-flux-cyan via-flux-blue to-flux-purple opacity-50 blur-lg group-hover:opacity-80 transition-opacity" />
            </motion.div>
            <span className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-flux-cyan to-flux-purple bg-clip-text text-transparent">
              FluxWith
            </span>
          </Link>

          {/* Form container */}
          <div className="liquid-glass rounded-3xl p-8">
            <h1 className="font-display text-2xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-fume mb-8">{subtitle}</p>

            {children}
          </div>

          {/* Footer links */}
          <p className="mt-6 text-center text-sm text-fume">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-flux-cyan hover:text-flux-cyan-dim transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-flux-cyan hover:text-flux-cyan-dim transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Decorative panel */}
      <AuthSidePanel />
    </div>
  )
}
