import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    const { error: signInError } = await signIn(email, password)
    setSubmitting(false)

    if (signInError) {
      setError(signInError)
      return
    }

    navigate('/dashboard')
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to keep building.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-fume">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-line bg-ash-light px-3.5 py-2.5 text-sm text-bone focus:border-flux-cyan focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs text-fume">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-line bg-ash-light px-3.5 py-2.5 text-sm text-bone focus:border-flux-cyan focus:outline-none"
            placeholder="Your password"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-flux-amber/30 bg-flux-amber/10 px-3 py-2 text-xs text-flux-amber">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-flux-cyan px-4 py-3 text-sm font-semibold text-void transition-opacity disabled:opacity-60"
        >
          {submitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-fume">
        Don't have an account?{' '}
        <Link to="/signup" className="text-flux-cyan">
          Create one
        </Link>
      </p>
    </AuthLayout>
  )
}
