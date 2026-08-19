import LegalLayout from '../components/legal/LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="[Insert launch date]">
      <div className="rounded-lg border border-flux-amber/30 bg-flux-amber/10 px-4 py-3 text-xs text-flux-amber">
        Template only. Replace every bracketed placeholder below with your real details, and have
        a lawyer review this before you publish it.
      </div>

      <p>
        This policy explains what data [Product Name], operated by [Your Company Name or Your
        Name], collects and how it is used.
      </p>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">1. Data we collect</h2>
        <p className="mt-2 text-fume">
          We store the minimum needed to run your account: your email address, your name, and
          your authentication credentials. This data is stored and managed through Supabase, our
          authentication and database provider.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">2. Third-party services</h2>
        <p className="mt-2 text-fume">
          When you generate a site, your prompt is sent to and processed by the Google Gemini
          API to produce the layout and copy. Your account data and generated sites are hosted
          and served through Supabase (auth and database) and Netlify (hosting and functions).
          These providers process data on our behalf under their own privacy and security terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">3. Cookies and tracking</h2>
        <p className="mt-2 text-fume">
          We use basic functional cookies only, to maintain your session and store your
          authentication token so you stay signed in. We do not use advertising or third-party
          tracking cookies.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">4. How long we keep data</h2>
        <p className="mt-2 text-fume">
          We retain account data for as long as your account is active. You can request deletion
          of your account and associated data at any time by contacting us.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">5. Your choices</h2>
        <p className="mt-2 text-fume">
          You can update your account details, or request export or deletion of your data, by
          contacting us at [support@yourdomain.com].
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-medium text-bone">6. Changes to this policy</h2>
        <p className="mt-2 text-fume">
          We may update this policy as the Service evolves. Material changes will be reflected
          here with an updated date at the top of the page.
        </p>
      </section>
    </LegalLayout>
  )
}
