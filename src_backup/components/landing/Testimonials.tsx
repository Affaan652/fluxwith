import { motion } from 'motion/react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Rodriguez',
    role: 'Startup Founder',
    avatar: 'MR',
    content: 'We needed a landing page for our product launch and had zero budget for a designer. FluxWith gave us something that converted better than our competitor\'s professionally designed page. Incredible ROI.',
    rating: 5,
    project: 'SaaS product landing page',
    result: '40% increase in signups',
  },
  {
    id: 2,
    name: 'Emily Watson',
    role: 'Marketing Manager',
    avatar: 'EW',
    content: 'The ability to quickly build and iterate on landing pages has been game-changing for our A/B testing. We can now test 5x more variants in the same timeframe.',
    rating: 5,
    project: 'Campaign landing pages',
    result: '3x faster iteration cycle',
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'E-commerce Owner',
    avatar: 'DK',
    content: 'I\'m not technical at all, but FluxWith made it easy to create professional-looking pages for my store. The inline editor is intuitive — I feel like I have a superpower.',
    rating: 5,
    project: 'E-commerce product pages',
    result: 'Saved $5,000+ in dev costs',
  },
  {
    id: 4,
    name: 'Lisa Thompson',
    role: 'Agency Director',
    avatar: 'LT',
    content: 'We\'ve integrated FluxWith into our agency workflow. It handles the heavy lifting of initial builds, letting our team focus on strategy and custom features. Client satisfaction is through the roof.',
    rating: 5,
    project: 'Multiple client websites',
    result: '60% reduction in delivery time',
  },
  {
    id: 5,
    name: 'Alex Patel',
    role: 'Indie Hacker',
    avatar: 'AP',
    content: 'As a solo founder, every minute counts. FluxWith lets me ship beautiful pages without getting bogged down in CSS. It\'s like having a senior designer on call 24/7.',
    rating: 5,
    project: 'Multiple side projects',
    result: '10+ projects shipped in a month',
  },
]

const stats = [
  { value: '4.9/5', label: 'Average rating' },
  { value: '50K+', label: 'Sites built' },
  { value: '98%', label: 'Would recommend' },
  { value: '< 24h', label: 'Support response' },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative bg-ash-light/30 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262a35_1px,transparent_1px),linear-gradient(to_bottom,#262a35_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#fff_3%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header - NO eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl text-balance">
            Loved by creators{' '}
            <span className="text-fume">worldwide</span>
          </h2>
          <p className="mt-3 text-sm text-fume leading-relaxed">
            See what builders are saying about their experience with FluxWith.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="liquid-glass !rounded-xl !p-4 text-center hover:-translate-y-1 transition-transform">
              <div className="font-display text-lg font-bold text-bone tabular-nums">{stat.value}</div>
              <div className="mt-1 text-xs text-fume">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured testimonial (large card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="liquid-glass !rounded-2xl !p-6 md:!p-8 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 left-8 text-[8rem] leading-none text-bone/[0.02] font-serif select-none">"</div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Avatar & info */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-flux-cyan/20 to-flux-amber/20 flex items-center justify-center text-lg font-bold text-bone border border-line mb-3">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="font-display font-bold text-base text-bone">{testimonials[activeIndex].name}</h4>
                    <p className="text-xs text-fume mt-0.5">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-flux-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-sm md:text-base leading-relaxed text-fume-light mb-5 font-medium">
                    "{testimonials[activeIndex].content}"
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-lg bg-void px-3 py-1.5 text-xs border border-line/50">
                      <span className="text-fume">Project:</span>{' '}
                      <span className="text-bone font-medium">{testimonials[activeIndex].project}</span>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-flux-cyan to-flux-amber px-3 py-1.5 text-xs text-void font-semibold">
                      {testimonials[activeIndex].result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-200 ease-out ${
                  index === activeIndex 
                    ? 'w-6 bg-flux-cyan' 
                    : 'w-1.5 bg-line hover:bg-fume active:scale-[0.9]'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid of smaller testimonial cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass !rounded-xl !p-4 cursor-pointer group hover:-translate-y-1 transition-all"
              onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-flux-cyan/15 to-flux-amber/15 flex items-center justify-center text-xs font-bold text-bone group-hover:from-flux-cyan/25 group-hover:to-flux-amber/25 transition-colors border border-line/50">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-bone">{testimonial.name}</h4>
                  <p className="text-[10px] text-fume">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-xs text-fume leading-relaxed line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="mt-3 pt-3 border-t border-line/30 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-flux-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-bone bg-flux-cyan/10 px-2 py-0.5 rounded">{testimonial.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
