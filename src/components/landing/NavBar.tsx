import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { href: '/product', label: 'Product' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/changelog', label: 'Changelog' },
]

const resourcesLinks = [
  { href: '/docs', label: 'Documentation' },
  { href: '/api-reference', label: 'API Reference' },
  { href: '/guides', label: 'Guides & Tutorials' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/partners', label: 'Partners' },
  { href: '/press', label: 'Press Kit' },
]

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black font-display text-lg font-bold text-white transition-transform group-hover:scale-105">
            F
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-gray-900">
            FluxWith
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.href 
                  ? 'text-black bg-gray-100' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Resources dropdown */}
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isResourcesOpen ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Resources
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              
              {/* Dropdown menu */}
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </button>
          </div>
          
          {/* Company dropdown */}
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isCompanyOpen ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Company
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              
              {/* Dropdown menu */}
              {isCompanyOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </button>
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
            >
              Start free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
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
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 p-4 pt-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t border-gray-100 my-2 pt-4">
                <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Resources</p>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-gray-100 my-2 pt-4">
                <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Company</p>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
                <Link
                  to="/login"
                  className="w-full px-4 py-3 text-center text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="w-full px-4 py-3 text-center text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
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
