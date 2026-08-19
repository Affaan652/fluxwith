import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { href: '/#product', label: 'Product' },
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/showcase', label: 'Showcase' },
]

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-line/50 bg-void/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-flux-cyan via-flux-blue to-flux-purple font-display text-lg font-bold text-void shadow-lg glow-cyan"
          >
            F
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-flux-cyan via-flux-blue to-flux-purple opacity-50 blur-lg group-hover:opacity-80 transition-opacity" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-flux-cyan to-flux-purple bg-clip-text text-transparent">
              FluxWith
            </span>
            <span className="text-[10px] text-fume -mt-1 tracking-wider uppercase">AI Builder</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={isLandingPage ? link.href : `/${link.href}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="relative px-4 py-2 text-sm font-medium text-fume transition-all duration-300 hover:text-bone rounded-lg group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-flux-cyan to-flux-purple rounded-full transition-all duration-300 group-hover:w-3/4" />
            </motion.a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-fume-light transition-all hover:text-bone hover:bg-ash-light rounded-lg"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="btn-primary text-sm !py-2.5 !px-5"
            >
              Start free
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 rounded-lg text-fume hover:text-bone hover:bg-ash-light transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-[9px] rotate-45' : 'top-1'}`} />
              <span className={`absolute left-0 top-[9px] w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-[9px] -rotate-45' : 'bottom-1'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-line/30 bg-void/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 p-4 pt-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={isLandingPage ? link.href : `/${link.href}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-4 py-3 text-base font-medium text-fume transition-colors hover:text-bone hover:bg-ash-light rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="mt-4 flex flex-col gap-2 border-t border-line/30 pt-4">
                <Link
                  to="/login"
                  className="w-full px-4 py-3 text-center text-sm font-medium text-fume-light border border-line rounded-lg hover:bg-ash-light transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary w-full text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start free
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
