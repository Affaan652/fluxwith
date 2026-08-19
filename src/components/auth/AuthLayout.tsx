import { Link } from 'react-router-dom'
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
      <div className="relative flex items-center justify-center px-6 py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
          <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.15 }} />
          <div className="flux-blob flux-blob-amber" style={{ opacity: 0.15 }} />
        </div>

        <div className="relative w-full max-w-sm">
          <Link to="/" className="mb-8 flex items-center justify-center gap-2 md:justify-start">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-flux-cyan to-flux-amber text-void font-display font-bold text-sm">
              F
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">FluxWith</span>
          </Link>

          <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-fume">{subtitle}</p>

          <div className="mt-6">{children}</div>
        </div>
      </div>

      <AuthSidePanel />
    </div>
  )
}
