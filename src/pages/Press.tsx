import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const assets = [
  {
    name: 'FluxWith Logo (SVG)',
    description: 'Primary logo in vector format',
    type: 'svg',
  },
  {
    name: 'FluxWith Logo (PNG)',
    description: 'Primary logo in raster format',
    type: 'png',
  },
  {
    name: 'Product Screenshot',
    description: 'Hero section screenshot',
    type: 'png',
  },
  {
    name: 'Brand Guidelines PDF',
    description: 'Complete brand usage guidelines',
    type: 'pdf',
  },
]

export default function Press() {
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
              Press kit
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Everything you need to write about FluxWith. Logos, screenshots, 
              company info, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About FluxWith</h2>
            
            <div className="prose prose-gray">
              <p className="text-lg leading-relaxed text-gray-600">
                FluxWith is an AI-powered website builder that enables anyone to create 
                professional websites in seconds using natural language descriptions.
              </p>
              
              <p className="text-gray-600 mt-4">
                Founded in 2024 by Sarah Chen and Marcus Rodriguez, FluxWith has helped 
                over 50,000 users create websites without writing a single line of code.
                The platform is used by individuals, small businesses, and enterprises worldwide.
              </p>

              <h3 className="text-lg font-semibold mt-8 mb-3">Key facts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Founded:</strong> 2024</li>
                <li><strong>Headquarters:</strong> San Francisco, CA</li>
                <li><strong>Team size:</strong> 25+ employees</li>
                <li><strong>Users:</strong> 50,000+</li>
                <li><strong>Websites created:</strong> 500,000+</li>
                <li><strong>Funding:</strong> Series A - $15M</li>
              </ul>

              <h3 className="text-lg font-semibold mt-8 mb-3">Contact for press</h3>
              <p className="text-sm text-gray-600">
                For press inquiries, please contact:<br />
                Email: press@fluxwith.app<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Media assets</h2>
            
            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.name} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-black transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500 uppercase">
                      {asset.type}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{asset.name}</p>
                      <p className="text-sm text-gray-500">{asset.description}</p>
                    </div>
                  </div>
                  <button className="shrink-0 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>

            {/* Logo preview */}
            <div className="mt-8 p-8 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">F</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">FluxWith</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">Official logo preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">One-line description</h2>
            
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                "FluxWith is an AI-powered website builder that enables anyone to create 
                professional, production-ready websites in seconds using simple natural language 
                descriptions — no coding or design skills required."
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Social media links</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { platform: 'Twitter/X', handle: '@fluxwith', url: '#' },
                { platform: 'LinkedIn', handle: '/company/fluxwith', url: '#' },
                { platform: 'GitHub', handle: '/fluxwith', url: '#' },
                { platform: 'Website', handle: 'fluxwith.app', url: '#' },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
                >
                  <span className="font-medium text-gray-900">{social.platform}</span>
                  <span className="text-sm text-gray-500">{social.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
