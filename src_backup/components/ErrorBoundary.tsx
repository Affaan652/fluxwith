import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  error: Error | null
}

// Without this, any uncaught render error unmounts the whole tree and leaves
// a blank page. Because the page background is near-black (var(--color-void)),
// that blank page looks like a solid black screen with no clue why.
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('FluxWith crashed:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-void px-6">
          <div className="max-w-lg rounded-xl border border-flux-amber/30 bg-ash p-8">
            <p className="eyebrow mb-3">Something went wrong</p>
            <h1 className="font-display text-xl font-semibold text-bone">
              The app hit a runtime error and could not render.
            </h1>
            <p className="mt-3 text-sm text-fume">
              Open the browser console (F12) for the full error. Common causes: a malformed
              VITE_SUPABASE_URL in .env, or the dev server needing a restart after editing .env.
            </p>
            <pre className="mt-4 max-h-40 overflow-auto rounded-lg bg-ash-light p-3 font-mono text-xs text-flux-amber">
              {this.state.error.message}
            </pre>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-lg bg-bone px-4 py-2 text-sm font-semibold text-void"
            >
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
