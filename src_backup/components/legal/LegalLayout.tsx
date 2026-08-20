import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-void">
      <header className="border-b border-line px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-flux-cyan to-flux-amber text-void font-display text-xs font-bold">
              F
            </span>
            <span className="font-display text-sm font-medium">FluxWith</span>
          </Link>
          <Link to="/" className="text-xs text-fume transition-colors hover:text-bone">
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-xs text-fume">Last updated: {lastUpdated}</p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-bone/90">{children}</div>
      </main>
    </div>
  )
}
