const quotes = [
  {
    text: 'I described the shop I wanted in two sentences and had a working page before my coffee finished brewing.',
    name: 'Amara Osei',
    role: 'Founder, small cafe chain',
  },
  {
    text: 'The inline editor is what sold me. I never had to touch code to get the layout right.',
    name: 'Daniyar Serik',
    role: 'Freelance photographer',
  },
]

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-ash/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-2xl font-medium tracking-tight text-bone/90">
          People who stopped staring at a blank editor
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quotes.map((quote) => (
            <blockquote
              key={quote.name}
              className="liquid-glass rounded-2xl p-8 transition-transform hover:-translate-y-1"
            >
              <p className="font-display text-lg leading-relaxed text-bone">"{quote.text}"</p>
              <footer className="mt-6 border-t border-white/10 pt-5 text-sm text-fume">
                <span className="text-bone">{quote.name}</span> — {quote.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
