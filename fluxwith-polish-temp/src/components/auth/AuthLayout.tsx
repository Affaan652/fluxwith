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
    <div className="grid min-h-screen bg-black md:grid-cols-2 md:h-screen md:overflow-hidden">
      {/* Left side - Form */}
      <div className="relative flex items-center justify-center px-6 py-12 md:py-0 overflow-y-auto md:overflow-hidden">
        {/* Mobile background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
        </div>

        <div className="relative w-full max-w-md py-8 md:py-0">
          {/* Logo */}
          <Link to="/" className="mb-8 flex items-center justify-center gap-2.5 md:justify-start group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-sm text-black transition-transform"
            >
              F
            </motion.div>
            <span className="font-bold text-lg tracking-tight text-white">
              FluxWith
            </span>
          </Link>

          {/* Form container */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
            <h1 className="text-xl font-bold text-white mb-1.5">{title}</h1>
            <p className="text-sm text-gray-400 mb-6">{subtitle}</p>

            {children}
          </div>

          {/* Footer links */}
          <p className="mt-5 text-center text-xs text-gray-500">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors underline underline-offset-2">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image showcase panel (no scroll) */}
      <AuthSidePanel />
    </div>
  )
}
