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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white font-bold text-sm text-black transition-transform group-hover:scale-105 active:scale-[0.96] duration-150 ease-out">
            F
          </div>
          <span className="font-bold text-base tracking-tight text-white">
            FluxWith
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ease-out ${
                location.pathname === link.href 
                  ? 'text-white bg-white/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5 active:scale-[0.96]'
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
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ease-out ${
                isResourcesOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Resources
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              
              {/* Dropdown menu - subtle per ui-skills */}
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1.5 w-48 overflow-hidden rounded-lg border border-white/10 bg-black p-1 shadow-xl backdrop-blur-xl"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white hover:bg-white/5"
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
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ease-out ${
                isCompanyOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Company
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              
              {/* Dropdown menu */}
              {isCompanyOpen && (
                <div 
                  className="absolute top-full left-0 mt-1.5 w-44 overflow-hidden rounded-lg border border-white/10 bg-black p-1 shadow-xl backdrop-blur-xl"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white hover:bg-white/5"
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
        <div className="flex items-center gap-2">
          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white rounded-md"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-gray-100 active:scale-[0.96] duration-150 ease-out"
            >
              Start free
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors active:scale-[0.96] duration-150 ease-out"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-4 relative">
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-200 ${isMobileMenuOpen ? 'top-[7px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-[7px] w-full h-px bg-current transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-200 ${isMobileMenuOpen ? 'top-[7px] -rotate-45' : 'bottom-0'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - compact */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-0.5 p-3 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:text-white hover:bg-white/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t border-white/10 my-2 pt-2">
                <p className="px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-600">Resources</p>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-3 py-2 text-sm text-gray-500 hover:text-white hover:bg-white/5 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-white/10 my-2 pt-2">
                <p className="px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-600">Company</p>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-3 py-2 text-sm text-gray-500 hover:text-white hover:bg-white/5 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="mt-2 flex flex-col gap-1.5 border-t border-white/10 pt-2">
                <Link
                  to="/login"
                  className="w-full px-3 py-2.5 text-center text-sm font-medium text-gray-400 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="w-full px-3 py-2.5 text-center text-sm font-semibold bg-white text-black rounded-lg hover:bg-gray-100 transition-colors active:scale-[0.98]"
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
