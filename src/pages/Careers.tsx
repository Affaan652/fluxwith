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
    description: 'Develop and improve our AI models for website generation and design understanding.',
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
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Company</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join our team
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Help us build the future of web creation. We're looking for passionate 
              people who want to make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Open positions</h2>
            <p className="mt-2 text-gray-600">{openings.length} roles available</p>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-xl border border-gray-200 p-6 hover:border-black hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{job.department}</p>
                    <p className="mt-3 text-sm text-gray-600">{job.description}</p>
                  </div>
                  
                  <div className="shrink-0 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black text-xs font-medium text-white">
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:underline">
                    Apply now
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No role? */}
          <div className="mt-16 rounded-2xl bg-gray-50 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Don't see your role?</h3>
            <p className="mt-2 text-gray-600">
              We're always interested in hearing from talented people. Send us your resume.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
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
