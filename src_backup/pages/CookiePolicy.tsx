import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

export default function CookiePolicy() {
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
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Legal</span>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cookie Policy
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Learn about how FluxWith uses cookies and similar technologies.
            </p>
            
            <p className="mt-4 text-sm text-gray-500">Last updated: January 1, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <section>
              <h2>What are cookies?</h2>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device when you visit a website. 
                They help the website remember information about your visit, which can make it easier to 
                visit the site again and make the site more useful to you.
              </p>
            </section>

            <section>
              <h2>How we use cookies</h2>
              <p className="text-gray-600 mb-4">FluxWith uses cookies for the following purposes:</p>
              
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <strong className="text-gray-900 shrink-0">Essential Cookies</strong>
                  <span className="text-gray-600">Required for the website to function properly, such as maintaining your login session.</span>
                </li>
                <li className="flex gap-3">
                  <strong className="text-gray-900 shrink-0">Analytics Cookies</strong>
                  <span className="text-gray-600">Help us understand how visitors interact with our website by collecting anonymous usage data.</span>
                </li>
                <li className="flex gap-3">
                  <strong className="text-gray-900 shrink-0">Preference Cookies</strong>
                  <span className="text-gray-600">Remember your settings and preferences for a better experience.</span>
                </li>
                <li className="flex gap-3">
                  <strong className="text-gray-900 shrink-0">Marketing Cookies</strong>
                  <span className="text-gray-600">Used to deliver relevant advertisements and track campaign effectiveness.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2>Cookies we use</h2>
              
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">Cookie Name</th>
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">Purpose</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 pr-4"><code className="text-purple-600">session_id</code></td>
                      <td className="py-3 pr-4 text-gray-600">Maintains user session</td>
                      <td className="py-3 text-gray-600">Session</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4"><code className="text-purple-600">preferences</code></td>
                      <td className="py-3 pr-4 text-gray-600">Stores user preferences</td>
                      <td className="py-3 text-gray-600">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4"><code className="text-purple-600">_ga</code></td>
                      <td className="py-3 pr-4 text-gray-600">Google Analytics</td>
                      <td className="py-3 text-gray-600">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Managing cookies</h2>
              <p className="text-gray-600">
                You can control and manage cookies in various ways. Most web browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>View what cookies are stored on your device</li>
                <li>Delete individual cookies or all cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific sites</li>
                <li>Allow all cookies</li>
                <li>Block all cookies by default and then prompt you each time a site wants to set a cookie</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Please note that blocking essential cookies may prevent our website from functioning properly.
              </p>
            </section>

            <section>
              <h2>Third-party cookies</h2>
              <p className="text-gray-600">
                Some of our pages may set cookies that are served by third parties (such as Google Analytics). 
                These cookies allow third parties to collect information about your browsing activity across 
                different websites. We do not control these cookies and recommend you check the relevant 
                third-party's cookie policy for more information.
              </p>
            </section>

            <section>
              <h2>Changes to this policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in technology, 
                legislation, or our business practices. Any changes will be posted on this page with an 
                updated revision date.
              </p>
            </section>

            <section>
              <h2>Contact us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@fluxwith.app<br />
                Address: 123 Tech Street, San Francisco, CA 94102
              </p>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
