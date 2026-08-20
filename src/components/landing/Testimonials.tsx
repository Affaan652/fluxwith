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
    <section className="relative bg-white/[0.02] py-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#fff_3%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header - compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Loved by creators{' '}
            <span className="text-gray-500">worldwide</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            See what builders are saying about their experience with FluxWith.
          </p>
        </motion.div>

        {/* Stats row - compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-black p-4 text-center">
              <div className="text-lg font-bold text-white tabular-nums">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured testimonial (large card) - compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <div className="rounded-xl border border-white/10 bg-black p-6 md:p-8 relative overflow-hidden">
            {/* Quote decoration - subtle */}
            <div className="absolute top-6 left-8 text-[8rem] leading-none text-white/[0.03] font-serif select-none">"</div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Avatar & info */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-lg font-bold text-white border border-white/10 mb-3">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="font-bold text-base text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-sm md:text-base leading-relaxed text-gray-300 mb-5 font-medium">
                    "{testimonials[activeIndex].content}"
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-md bg-white/5 px-3 py-1.5 text-xs border border-white/10">
                      <span className="text-gray-500">Project:</span>{' '}
                      <span className="text-white font-medium">{testimonials[activeIndex].project}</span>
                    </div>
                    <div className="rounded-md bg-white px-3 py-1.5 text-xs text-black font-semibold">
                      {testimonials[activeIndex].result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-200 ease-out ${
                  index === activeIndex 
                    ? 'w-6 bg-white' 
                    : 'w-1.5 bg-white/20 hover:bg-white/30 active:scale-[0.9]'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid of smaller testimonial cards - compact */}
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg border border-white/10 bg-black p-4 hover:-translate-y-0.5 hover:border-white/20 transition-all cursor-pointer group active:scale-[0.98] duration-150 ease-out"
              onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xs font-bold text-white group-hover:from-white/15 group-hover:to-white/10 transition-colors border border-white/10">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">{testimonial.name}</h4>
                  <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-white bg-white/10 px-2 py-0.5 rounded">{testimonial.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
