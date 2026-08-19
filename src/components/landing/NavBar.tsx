import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const links = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
]

export default function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-line bg-void/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-flux-cyan to-flux-amber font-display text-sm font-bold text-void shadow-[inset_0_-2px_4px_rgba(0,0,0,0.25)]">
            F
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">FluxWith</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="group relative text-sm text-fume transition-colors hover:text-bone"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-flux-cyan transition-all duration-200 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-fume transition-colors hover:text-bone">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="rounded-md bg-bone px-4 py-2 text-sm font-medium text-void transition-all hover:shadow-[0_0_0_1px_rgba(94,234,212,0.5)]"
          >
            Start free
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
