import { motion } from 'motion/react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Freelance Designer',
    avatar: 'SC',
    content: 'FluxWith completely transformed my workflow. I used to spend days on initial mockups — now I have a solid foundation in minutes. The AI understands design intent better than any tool I\'ve used.',
    rating: 5,
    project: 'Portfolio website for photographer',
    result: 'Launched in 2 hours',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Startup Founder',
    avatar: 'MR',
    content: 'We needed a landing page for our product launch and had zero budget for a designer. FluxWith gave us something that converted better than our competitor\'s professionally designed page. Incredible ROI.',
    rating: 5,
    project: 'SaaS product landing page',
    result: '40% increase in signups',
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Marketing Manager',
    avatar: 'EW',
    content: 'The ability to quickly generate and iterate on landing pages has been game-changing for our A/B testing. We can now test 5x more variants in the same timeframe.',
    rating: 5,
    project: 'Campaign landing pages',
    result: '3x faster iteration cycle',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'E-commerce Owner',
    avatar: 'DK',
    content: 'I\'m not technical at all, but FluxWith made it easy to create professional-looking pages for my store. The inline editor is intuitive — I feel like I have a superpower.',
    rating: 5,
    project: 'E-commerce product pages',
    result: 'Saved $5,000+ in dev costs',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Agency Director',
    avatar: 'LT',
    content: 'We\'ve integrated FluxWith into our agency workflow. It handles the heavy lifting of initial builds, letting our team focus on strategy and custom features. Client satisfaction is through the roof.',
    rating: 5,
    project: 'Multiple client websites',
    result: '60% reduction in delivery time',
  },
  {
    id: 6,
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
  { value: '4.9/5', label: 'Average rating', icon: 'star' },
  { value: '50K+', label: 'Sites generated', icon: 'rocket' },
  { value: '98%', label: 'Would recommend', icon: 'heart' },
  { value: '< 24h', label: 'Average response time', icon: 'chat' },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-flux-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="eyebrow inline-block mb-4">Testimonials</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight">
            Loved by creators{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="mt-4 text-lg text-fume leading-relaxed">
            See what builders, designers, and entrepreneurs are saying about their experience with FluxWith.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="liquid-glass rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                      stat.icon === 'star' ? 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.562.562 0 00.475.345l5.518.44a.562.562 0 01-.329.98l-3.976 2.888a.562.562 0 00-.171.506l1.49-4.623a.562.562 0 010-.96l1.49 4.623a.562.562 0 00-.17.506L6.01 12.385a.562.562 0 01-.33-.98l5.518-.44a.562.562 0 00.475-.345L11.48 3.5z' :
                      stat.icon === 'rocket' ? 'M15.59 14.37a6 6 0 01-5.159 4.03L7.88 21.102a.75.75 0 01-1.06 1.06l-2.702-5.547A6 6 0 013.37 7.88l-5.547 2.702a.75.75 0 011-1.06-1.06l4.03-5.159A6 6 0 1114.37-5.59z' :
                      stat.icon === 'heart' ? 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5S11.625 3.765 11.625 6.188c0 4.316 3.125 7.812 7.375 7.812 4.589 0 4.688-2.015 4.688-4.5S19.5 10.156 19.5 8.25z' :
                      'M8.625 12c0-1.516 1.226-2.75 2.75-2.75S14.125 10.484 14.25 12s-1.226 2.75-2.75 2.75S8.625 13.516 8.625 12zM12 18.75H7.5v-.875c0-1.516 1.226-2.75 2.75-2.75s2.75 1.234 2.75 2.75v.875h4.5v.875c0 1.516-1.226 2.75-2.75 2.75S12.5 20.284 12.5 18.75v-.875z'
                    } />
                  </svg>
                </div>
              <div className="font-display text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 text-sm text-fume">{stat.label}</div>
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
          <div className="liquid-glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 left-8 text-8xl text-flux-cyan/10 font-serif leading-none">"</div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Avatar & info */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-flux-cyan to-flux-purple flex items-center justify-center text-2xl font-bold text-void mb-4">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-fume">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl leading-relaxed text-bone-light mb-6">
                    "{testimonials[activeIndex].content}"
                  </blockquote>

                  <div className="flex flex-wrap gap-4">
                    <div className="rounded-lg bg-ash-light/50 px-4 py-2 text-sm">
                      <span className="text-fume">Project:</span>{' '}
                      <span className="text-bone font-medium">{testimonials[activeIndex].project}</span>
                    </div>
                    <div className="rounded-lg bg-flux-cyan/10 border border-flux-cyan/30 px-4 py-2 text-sm text-flux-cyan font-medium">
                      {testimonials[activeIndex].result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-flux-cyan w-8' 
                    : 'bg-line hover:bg-fume'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid of smaller testimonial cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-transform cursor-pointer"
              onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flux-purple to-flux-pink flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-fume">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-sm text-fume-light leading-relaxed line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-line/50 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-flux-cyan font-medium">{testimonial.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
