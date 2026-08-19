import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-ash px-8 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="flux-blob flux-blob-cyan" />
          <div className="flux-blob flux-blob-amber" />
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Your next site starts with one sentence
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-fume">
          No blank canvas, no template hunting. Write what you want and edit from there.
        </p>
        <Link
          to="/signup"
          className="mt-8 inline-block rounded-lg bg-flux-cyan px-8 py-3 text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
        >
          Start building for free
        </Link>
      </div>
    </section>
  )
}
