import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const openings = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build and maintain our core web application using React, TypeScript, and modern web technologies.',
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Develop and improve our AI models for website building and design understanding.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Design intuitive user experiences for our visual editor and platform features.',
  },
  {
    title: 'Developer Advocate',
    department: 'Developer Relations',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build relationships with developers, create content, and grow our community.',
  },
]

const benefits = [
  'Competitive salary & equity',
  'Health, dental & vision insurance',
  'Unlimited PTO policy',
  'Remote-first culture',
  'Learning & development budget',
  'Home office setup stipend',
  'Annual team retreats',
  'Parental leave',
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Hero - COMPACT */}
      <section className="pt-16 pb-12 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Company</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Join our team</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
              Help us build the future of web creation. We're looking for passionate 
              people who want to make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits - COMPACT */}
      <section className="py-8 px-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-white">Open positions</h2>
            <p className="text-xs text-gray-500 mt-1">{openings.length} roles available</p>
          </motion.div>

          <div className="space-y-3">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-lg border border-white/10 p-5 hover:border-white/20 transition-colors cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-white transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{job.department}</p>
                    <p className="text-xs text-gray-400 mt-2">{job.description}</p>
                  </div>
                  
                  <div className="shrink-0 flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-medium text-gray-300">
                      {job.location}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white text-[10px] font-medium text-black">
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                    Apply now
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No role? */}
          <div className="mt-10 rounded-lg bg-white/5 border border-white/10 p-6 text-center">
            <h3 className="text-lg font-bold text-white">Don't see your role?</h3>
            <p className="mt-1 text-sm text-gray-400">
              We're always interested in hearing from talented people. Send us your resume.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-medium text-black hover:bg-gray-100 active:scale-[0.96] transition-all duration-150 ease-out"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
