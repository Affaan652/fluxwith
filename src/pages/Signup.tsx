import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const { signUp } = useAuth()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setSubmitting(true)
    const { error: signUpError } = await signUp(email, password, fullName)
    setSubmitting(false)

    if (signUpError) {
      setError(signUpError)
      return
    }

    setConfirmationSent(true)
  }

  if (confirmationSent) {
    return (
      <AuthLayout title="Check your inbox" subtitle="Confirm your email to activate your account.">
        <p className="text-sm text-fume">
          We sent a confirmation link to <span className="text-bone">{email}</span>. Open it to finish
          creating your account, then come back and sign in.
        </p>
        <Link
          to="/login"
          className="mt-6 block rounded-lg bg-bone px-4 py-3 text-center text-sm font-semibold text-void"
        >
          Go to sign in
        </Link>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout title="Create your account" subtitle="Start generating sites in minutes.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-xs text-fume">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="w-full rounded-lg border border-line bg-ash-light px-3.5 py-2.5 text-sm text-bone focus:border-flux-cyan focus:outline-none"
            placeholder="Your name"
          />
        </div>

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
            placeholder="At least 6 characters"
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
          {submitting ? 'Creating account...' : 'Create account'}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-fume">
        Already have an account?{' '}
        <Link to="/login" className="text-flux-cyan">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  )
}
