import LegalLayout from '../components/legal/LegalLayout'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="[Insert launch date]">
      <div className="rounded-lg border border-flux-amber/30 bg-flux-amber/10 px-4 py-3 text-xs text-flux-amber">
        Template only. Replace every bracketed placeholder below with your real details, and have
        a lawyer review this before you publish it.
      </div>

      <p>
        These terms govern use of [Product Name] (the "Service"), operated by [Your Company Name
        or Your Name]. By creating an account or using the Service, you agree to the terms below.
      </p>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">1. User content responsibility</h2>
        <p className="mt-2 text-fume">
          You are solely responsible for the content you publish on any website you create with
          the Service. You may not use the Service to host illegal content, infringe on anyone's
          copyright or trademark, or run scam, phishing, or fraudulent sites. We may remove
          content or take down a published site that violates this section without prior notice.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">2. AI-built output disclaimer</h2>
        <p className="mt-2 text-fume">
          Site layouts, copy, and code produced by the Service are built by an AI model and
          may contain errors, inaccuracies, or unexpected behavior. The Service does not warrant
          that built output is complete, correct, or fit for any particular purpose. Review
          and test built content before relying on it or publishing it live.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">3. Account termination</h2>
        <p className="mt-2 text-fume">
          We may suspend or terminate an account, with or without notice, for spam, abuse,
          attempts to exploit or circumvent API or build limits, or any activity that
          violates these terms or applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">4. Service uptime</h2>
        <p className="mt-2 text-fume">
          We aim for high availability, but the Free tier is provided as-is, with no committed
          uptime level and no 99.9% or similar service-level promise. Paid tiers may carry a
          separate, explicitly stated service level if and when one is offered.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">5. Changes to these terms</h2>
        <p className="mt-2 text-fume">
          We may update these terms from time to time. Continued use of the Service after a
          change is posted means you accept the revised terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">6. Contact</h2>
        <p className="mt-2 text-fume">
          Questions about these terms can be sent to [support@yourdomain.com].
        </p>
      </section>
    </LegalLayout>
  )
}
