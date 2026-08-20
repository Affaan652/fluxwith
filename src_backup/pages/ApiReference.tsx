import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/build',
    description: 'Build a new website from text prompt',
    params: [
      { name: 'prompt', type: 'string', required: true, desc: 'Website description' },
      { name: 'style', type: 'string', required: false, desc: 'Design style preference' },
      { name: 'language', type: 'string', required: false, desc: 'Output language (default: en)' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/sites',
    description: 'List all your built sites',
    params: [],
  },
  {
    method: 'GET',
    path: '/api/v1/sites/:id',
    description: 'Get details of a specific site',
    params: [],
  },
  {
    method: 'PUT',
    path: '/api/v1/sites/:id',
    description: 'Update site configuration',
    params: [
      { name: 'name', type: 'string', required: false, desc: 'Site name' },
      { name: 'domain', type: 'string', required: false, desc: 'Custom domain' },
    ],
  },
  {
    method: 'DELETE',
    path: '/api/v1/sites/:id',
    description: 'Delete a site',
    params: [],
  },
]

const methodColors: Record<string, string> = {
  POST: 'bg-green-500/20 text-green-400 border-green-500/30',
  GET: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  PUT: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  DELETE: 'bg-red-500/20 text-red-400 border-red-500/30',
}

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Hero - COMPACT */}
      <section className="pt-16 pb-12 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Resources</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">API Reference</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-xl">
              Build integrations and automate workflows with our RESTful API.
            </p>

            {/* Auth badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-3 py-1.5 text-white text-xs">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              Bearer Token Authentication
            </div>
          </motion.div>
        </div>
      </section>

      {/* Endpoints - COMPACT */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-white/10 overflow-hidden"
              >
                {/* Endpoint header */}
                <div className="flex items-center gap-3 p-3 bg-white/5 border-b border-white/10">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${methodColors[endpoint.method]}`}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-xs font-medium text-white">{endpoint.path}</code>
                  <p className="text-xs text-gray-400 ml-auto">{endpoint.description}</p>
                </div>

                {/* Params */}
                {endpoint.params.length > 0 && (
                  <div className="p-3">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Parameters</h4>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-1.5 pr-3 font-medium text-gray-300">Name</th>
                          <th className="text-left py-1.5 pr-3 font-medium text-gray-300">Type</th>
                          <th className="text-left py-1.5 pr-3 font-medium text-gray-300">Required</th>
                          <th className="text-left py-1.5 font-medium text-gray-300">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.params.map((param) => (
                          <tr key={param.name} className="border-b border-white/5 last:border-b-0">
                            <td className="py-1.5 pr-3"><code className="text-purple-400">{param.name}</code></td>
                            <td className="py-1.5 pr-3"><code className="text-blue-400">{param.type}</code></td>
                            <td className="py-1.5 pr-3">
                              {param.required ? (
                                <span className="text-red-400">Required</span>
                              ) : (
                                <span className="text-gray-500">Optional</span>
                              )}
                            </td>
                            <td className="py-1.5 text-gray-400">{param.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Code example */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-lg border border-white/10 overflow-hidden"
          >
            <div className="p-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-300">Example Request</span>
              <button className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors">Copy code</button>
            </div>
            <pre className="p-4 bg-black overflow-x-auto">
              <code className="text-xs text-gray-300">
{`curl -X POST https://api.fluxwith.app/api/v1/build \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A modern SaaS landing page",
    "style": "minimal"
  }'`}
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
