import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-void">
      <header className="flex items-center justify-between border-b border-line px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-flux-cyan to-flux-amber text-void font-display font-bold text-sm">
            F
          </span>
          <span className="font-display text-lg font-semibold">FluxWith</span>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className="rounded-md border border-line px-4 py-2 text-sm text-fume transition-colors hover:text-bone"
        >
          Sign out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="eyebrow mb-3">Dashboard</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Signed in as {user?.email}
        </h1>
        <p className="mt-3 max-w-lg text-fume">
          This is where the prompt-to-website generator, section editor, live preview and
          publish flow will live. Authentication is wired up and working end to end with
          Supabase — this page is the next build phase.
        </p>

        <div className="mt-10 rounded-xl border border-dashed border-line p-10 text-center text-sm text-fume">
          Generator workspace goes here.
        </div>
      </main>
    </div>
  )
}
