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
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Press kit</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
              Everything you need to write about FluxWith. Logos, screenshots, 
              company info, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company info - COMPACT */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-lg font-bold text-white mb-4">About FluxWith</h2>
            
            <p className="text-sm leading-relaxed text-gray-400">
              FluxWith is an AI-powered website builder that enables anyone to create 
              professional websites in seconds using natural language descriptions.
            </p>
            
            <p className="text-sm text-gray-400 mt-3">
              Founded in 2024 by Sarah Chen and Marcus Rodriguez, FluxWith has helped 
              over 50,000 users create websites without writing a single line of code.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-white">Key facts</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li><strong className="text-gray-300">Founded:</strong> 2024</li>
              <li><strong className="text-gray-300">Headquarters:</strong> San Francisco, CA</li>
              <li><strong className="text-gray-300">Team size:</strong> 25+ employees</li>
              <li><strong className="text-gray-300">Users:</strong> 50,000+</li>
              <li><strong className="text-gray-300">Websites created:</strong> 500,000+</li>
              <li><strong className="text-gray-300">Funding:</strong> Series A - $15M</li>
            </ul>

            <h3 className="text-base font-semibold mt-6 mb-2 text-white">Contact for press</h3>
            <p className="text-xs text-gray-400">
              For press inquiries, please contact:<br />
              Email: press@fluxwith.app<br />
              Phone: +1 (555) 123-4567
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-lg font-bold text-white mb-4">Media assets</h2>
            
            <div className="space-y-3">
              {assets.map((asset) => (
                <div key={asset.name} className="flex items-center justify-between p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-[10px] font-medium text-gray-500 uppercase">
                      {asset.type}
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{asset.name}</p>
                      <p className="text-[10px] text-gray-500">{asset.description}</p>
                    </div>
                  </div>
                  <button className="shrink-0 px-3 py-1.5 rounded border border-white/20 text-[10px] font-medium text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-150 active:scale-[0.96]">
                    Download
                  </button>
                </div>
              ))}
            </div>

            {/* Logo preview */}
            <div className="mt-6 p-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <span className="text-xl font-bold text-black">F</span>
                  </div>
                  <span className="text-xl font-bold text-white">FluxWith</span>
                </div>
                <p className="mt-3 text-[10px] text-gray-500">Official logo preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boilerplate - COMPACT */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-lg font-bold text-white mb-4">One-line description</h2>
            
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm text-gray-300 leading-relaxed">
                "FluxWith is an AI-powered website builder that enables anyone to create 
                professional, production-ready websites in seconds using simple natural language 
                descriptions — no coding or design skills required."
              </p>
            </div>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">Social media links</h2>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { platform: 'Twitter/X', handle: '@fluxwith', url: '#' },
                { platform: 'LinkedIn', handle: '/company/fluxwith', url: '#' },
                { platform: 'GitHub', handle: '/fluxwith', url: '#' },
                { platform: 'Website', handle: 'fluxwith.app', url: '#' },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="font-medium text-white text-sm">{social.platform}</span>
                  <span className="text-xs text-gray-500">{social.handle}</span>
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
