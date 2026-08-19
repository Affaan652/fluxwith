import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/generate',
    description: 'Generate a new website from text prompt',
    params: [
      { name: 'prompt', type: 'string', required: true, desc: 'Website description' },
      { name: 'style', type: 'string', required: false, desc: 'Design style preference' },
      { name: 'language', type: 'string', required: false, desc: 'Output language (default: en)' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/sites',
    description: 'List all your generated sites',
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
  POST: 'bg-green-100 text-green-700 border-green-200',
  GET: 'bg-blue-100 text-blue-700 border-blue-200',
  PUT: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  DELETE: 'bg-red-100 text-red-700 border-red-200',
}

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Resources</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              API Reference
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Build integrations and automate workflows with our RESTful API.
            </p>

            {/* Auth badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white text-sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              Bearer Token Authentication
            </div>
          </motion.div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl border border-gray-200 overflow-hidden"
              >
                {/* Endpoint header */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
                  <span className={`px-2 py-1 rounded text-xs font-mono font-semibold border ${methodColors[endpoint.method]}`}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm font-medium text-gray-900">{endpoint.path}</code>
                  <p className="text-sm text-gray-600 ml-auto">{endpoint.description}</p>
                </div>

                {/* Params */}
                {endpoint.params.length > 0 && (
                  <div className="p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Parameters</h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left py-2 pr-4 font-medium text-gray-900">Name</th>
                          <th className="text-left py-2 pr-4 font-medium text-gray-900">Type</th>
                          <th className="text-left py-2 pr-4 font-medium text-gray-900">Required</th>
                          <th className="text-left py-2 font-medium text-gray-900">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.params.map((param) => (
                          <tr key={param.name} className="border-b border-gray-50 last:border-b-0">
                            <td className="py-2 pr-4"><code className="text-purple-600">{param.name}</code></td>
                            <td className="py-2 pr-4"><code className="text-blue-600">{param.type}</code></td>
                            <td className="py-2 pr-4">
                              {param.required ? (
                                <span className="text-red-600">Required</span>
                              ) : (
                                <span className="text-gray-400">Optional</span>
                              )}
                            </td>
                            <td className="py-2 text-gray-600">{param.desc}</td>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Example Request</span>
              <button className="text-xs text-gray-500 hover:text-gray-700">Copy code</button>
            </div>
            <pre className="p-6 bg-gray-900 overflow-x-auto">
              <code className="text-sm text-gray-100">
{`curl -X POST https://api.fluxwith.app/api/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A modern SaaS landing page with pricing table",
    "style": "minimal",
    "language": "en"
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
