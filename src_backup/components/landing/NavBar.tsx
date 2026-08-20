import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-flux-cyan to-flux-amber font-bold text-sm text-void"
          >
            F
          </motion.div>
          <span className="font-display font-bold text-base tracking-tight text-bone">
            FluxWith
          </span>
        </Link>

        {/* Right side actions - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-fume hover:text-bone transition-colors duration-200 rounded-lg hover:bg-ash/50"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="btn-primary inline-flex items-center gap-1.5 rounded-xl"
          >
            Start free
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button - minimum 40x40px tap target */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative p-2.5 rounded-lg text-fume hover:text-bone hover:bg-ash/50 transition-colors active:scale-[0.96] duration-150 ease-out min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-200 ${isMobileMenuOpen ? 'top-[9px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[9px] w-full h-0.5 bg-current transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-200 ${isMobileMenuOpen ? 'top-[9px] -rotate-45' : 'bottom-0'}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu with liquid-glass */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-void/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-2 p-4 max-h-[70vh] overflow-y-auto">
              {/* Mobile nav links could go here if needed in future */}
              
              {/* CTA buttons - full width on mobile */}
              <div className="mt-4 pt-4 border-t border-line space-y-2">
                <Link
                  to="/login"
                  className="w-full px-4 py-3 text-center text-sm font-medium text-fume border border-line rounded-xl hover:bg-ash/50 hover:text-bone transition-colors active:scale-[0.98] min-h-[48px] flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary w-full !rounded-xl py-3 text-center min-h-[48px] flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start free
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
