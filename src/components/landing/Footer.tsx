import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-flux-cyan to-flux-amber text-void font-display text-xs font-bold">
            F
          </span>
          <span className="font-display text-sm font-medium">FluxWith</span>
        </div>

        <p className="text-xs text-fume">© 2026 FluxWith. All rights reserved.</p>

        <div className="flex flex-wrap gap-6 text-xs text-fume">
          <a href="#product" className="transition-colors hover:text-bone">
            Product
          </a>
          <a href="#pricing" className="transition-colors hover:text-bone">
            Pricing
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-bone">
            How it works
          </a>
          <Link to="/terms" className="transition-colors hover:text-bone">
            Terms
          </Link>
          <Link to="/privacy" className="transition-colors hover:text-bone">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
