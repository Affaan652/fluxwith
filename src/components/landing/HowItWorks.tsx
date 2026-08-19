const steps = [
  {
    number: '01',
    title: 'Write the brief',
    body: 'Describe the site you want in a sentence or two — audience, tone, and the sections it needs.',
  },
  {
    number: '02',
    title: 'Forge and edit',
    body: 'FluxWith lays out a full page. Edit text inline, replace images, and adjust the color scheme in the same view.',
  },
  {
    number: '03',
    title: 'Publish or export',
    body: 'Go live on a free subdomain instantly, or export clean HTML and CSS, or map a custom domain on a paid plan.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-line bg-ash/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Three steps, start to published
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-mono text-sm text-flux-amber">{step.number}</span>
              <h3 className="mt-3 font-display text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-fume">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
