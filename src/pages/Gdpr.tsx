import { motion } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

export default function Gdpr() {
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
              GDPR Privacy Notice
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-2xl">
              Information about how we collect, use, and protect your personal data 
              under the General Data Protection Regulation (GDPR).
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
              <h2>Introduction</h2>
              <p className="text-gray-600">
                FluxWith ("we", "us", or "our") is committed to protecting and respecting your privacy. 
                This GDPR Privacy Notice explains how we collect, use, and process your personal data when you 
                use our services within the European Economic Area (EEA).
              </p>
              <p className="text-gray-600 mt-4">
                For the purposes of this notice, "personal data" means any information relating to an identified 
                or identifiable natural person.
              </p>
            </section>

            <section>
              <h2>Data Controller</h2>
              <div className="mt-4 p-6 rounded-xl bg-gray-50 border border-gray-200">
                <p><strong>FluxWith Inc.</strong></p>
                <p className="text-gray-600 mt-1">123 Tech Street</p>
                <p className="text-gray-600">San Francisco, CA 94102</p>
                <p className="text-gray-600">Email: privacy@fluxwith.app</p>
              </div>
            </section>

            <section>
              <h2>Personal data we collect</h2>
              <p className="text-gray-600 mb-4">We may collect the following categories of personal data:</p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Identity Data:</strong> First name, last name, username</li>
                <li><strong>Contact Data:</strong> Email address, phone number</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent</li>
                <li><strong>Account Data:</strong> Username, password (encrypted), profile information</li>
                <li><strong>Payment Data:</strong> Billing address, payment method details (processed by payment providers)</li>
              </ul>
            </section>

            <section>
              <h2>Lawful basis for processing</h2>
              <p className="text-gray-600 mb-4">We rely on the following lawful bases under Article 6 of the GDPR:</p>
              
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <strong className="text-gray-900">Consent</strong>
                    <p className="text-gray-600 text-sm mt-1">You have given clear consent for us to process your personal data for a specific purpose.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <strong className="text-gray-900">Contract</strong>
                    <p className="text-gray-600 text-sm mt-1">Processing is necessary for a contract we have with you or to take steps at your request.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <strong className="text-gray-900">Legitimate Interests</strong>
                    <p className="text-gray-600 text-sm mt-1">Processing is necessary for our legitimate interests or those of a third party.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <strong className="text-gray-900">Legal Obligation</strong>
                    <p className="text-gray-600 text-sm mt-1">Processing is necessary for compliance with a legal obligation.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2>Your rights under GDPR</h2>
              <p className="text-gray-600 mb-4">Under the GDPR, you have the following rights:</p>
              
              <ul className="space-y-4">
                {[
                  { title: 'Right to Access', desc: 'Request copies of your personal data.' },
                  { title: 'Right to Rectification', desc: 'Request correction of inaccurate data.' },
                  { title: 'Right to Erasure', desc: 'Request deletion of your personal data.' },
                  { title: 'Right to Restrict Processing', desc: 'Limit how we use your data.' },
                  { title: 'Right to Data Portability', desc: 'Receive your data in a machine-readable format.' },
                  { title: 'Right to Object', desc: 'Object to processing based on legitimate interests.' },
                  { title: 'Rights Related to Automated Decision Making', desc: 'Not be subject to decisions based solely on automated processing.' },
                ].map((right) => (
                  <li key={right.title} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                    <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">{right.title}</strong>
                      <p className="text-sm text-gray-600 mt-0.5">{right.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Data retention</h2>
              <p className="text-gray-600">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                including satisfying legal, accounting, or reporting requirements.
              </p>
              <p className="text-gray-600 mt-4">
                When determining the retention period, we consider:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>The nature and sensitivity of the personal data</li>
                <li>The purposes for which we process the data</li>
                <li>Any applicable legal requirements</li>
              </ul>
            </section>

            <section>
              <h2>International transfers</h2>
              <p className="text-gray-600">
                Your personal data may be transferred to and processed in countries outside the EEA. We ensure appropriate 
                safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, to protect 
                your data in accordance with GDPR requirements.
              </p>
            </section>

            <section>
              <h2>Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about this GDPR Notice or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-gray-50 border border-gray-200">
                <p><strong>Data Protection Officer:</strong></p>
                <p className="text-gray-600 mt-1">Email: dpo@fluxwith.app</p>
                <p className="mt-4"><strong>General Inquiries:</strong></p>
                <p className="text-gray-600 mt-1">Email: privacy@fluxwith.app</p>
                <p className="text-gray-600">Address: 123 Tech Street, San Francisco, CA 94102</p>
              </div>
              <p className="mt-4 text-gray-600">
                You also have the right to lodge a complaint with a supervisory authority if you believe your data 
                protection rights have been violated.
              </p>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
