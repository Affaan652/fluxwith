const features = [
  {
    title: 'Prompt-to-site generation',
    body: 'Write a plain-language brief and get a full page layout back: hero, sections, copy and structure, matched to what you asked for.',
    span: 'md:col-span-2',
    detail: (
      <div className="mt-5 flex items-center gap-2 font-mono text-xs text-fume">
        <span className="rounded bg-ash-light px-2 py-1">"dark theme coffee shop"</span>
        <span className="text-flux-cyan">→</span>
        <span className="rounded bg-ash-light px-2 py-1 text-flux-cyan">6 sections, ready</span>
      </div>
    ),
  },
  {
    title: 'Inline section editor',
    body: 'Click any text to edit it, swap images, and change the color scheme without leaving the preview.',
    span: '',
    detail: (
      <div className="mt-5 flex gap-1.5">
        <span className="h-4 w-4 rounded-full bg-flux-cyan" />
        <span className="h-4 w-4 rounded-full bg-flux-amber" />
        <span className="h-4 w-4 rounded-full border border-line" />
      </div>
    ),
  },
  {
    title: 'Live preview',
    body: 'See the generated site rendered exactly as visitors will see it, updated as you edit.',
    span: '',
    detail: (
      <div className="mt-5 font-mono text-xs text-fume">0ms delay between edit and render</div>
    ),
  },
  {
    title: 'Component library',
    body: 'Hero sections, feature grids, pricing tables, testimonials, contact forms and footers, ready to drop in or swap out.',
    span: 'md:col-span-2',
    detail: (
      <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[10px] text-fume">
        {['hero', 'pricing', 'testimonials', 'contact', 'footer'].map((tag) => (
          <span key={tag} className="rounded border border-line px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
        From one sentence to a site with working sections
      </h2>
      <p className="mt-3 max-w-md text-sm text-fume">
        Nothing here is a mockup screenshot — this is what the generator actually hands back.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`rounded-xl border border-line bg-ash p-6 transition-colors hover:border-flux-cyan/40 ${feature.span}`}
          >
            <h3 className="font-display text-lg font-medium">{feature.title}</h3>
            <p className="mt-2 text-sm text-fume">{feature.body}</p>
            {feature.detail}
          </div>
        ))}
      </div>
    </section>
  )
}
