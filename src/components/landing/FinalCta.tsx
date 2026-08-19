import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="flux-blob flux-blob-cyan" />
          <div className="flux-blob flux-blob-amber" />
        </div>
        <h2 className="relative font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Your next site starts with one sentence
        </h2>
        <p className="relative mx-auto mt-6 max-w-lg text-sm leading-relaxed text-fume">
          No blank canvas, no template hunting. Write what you want and edit from there.
        </p>
        <Link
          to="/signup"
          className="relative mt-8 inline-block rounded-full bg-flux-cyan px-8 py-3 text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
        >
          Start building for free
        </Link>
      </div>
    </section>
  )
}
