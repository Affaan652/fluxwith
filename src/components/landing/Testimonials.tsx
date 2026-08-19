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
  { value: '4.9/5', label: 'Average rating', icon: '⭐' },
  { value: '50K+', label: 'Sites built', icon: '🚀' },
  { value: '98%', label: 'Would recommend', icon: '💜' },
  { value: '< 24h', label: 'Support response', icon: '💬' },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative bg-gray-50/50 py-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Loved by creators{' '}
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            See what builders, designers, and entrepreneurs are saying about their experience with FluxWith.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured testimonial (large card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-xl shadow-gray-200/50 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-8 left-10 text-[12rem] leading-none text-gray-100 font-serif select-none">"</div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                {/* Avatar & info */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-gray-300/30 mb-5">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="font-bold text-xl text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-base text-gray-500 mt-1">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 mb-7 font-medium">
                    "{testimonials[activeIndex].content}"
                  </blockquote>

                  <div className="flex flex-wrap gap-3">
                    <div className="rounded-xl bg-gray-100 px-4 py-2.5 text-sm border border-gray-200">
                      <span className="text-gray-500">Project:</span>{' '}
                      <span className="text-gray-900 font-semibold">{testimonials[activeIndex].project}</span>
                    </div>
                    <div className="rounded-xl bg-black px-4 py-2.5 text-sm text-white font-semibold">
                      {testimonials[activeIndex].result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-gray-900' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid of smaller testimonial cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 transition-all cursor-pointer group"
              onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-sm font-bold text-white group-hover:from-gray-900 group-hover:to-gray-700 transition-colors">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-full">{testimonial.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
