type Row = {
  feature: string
  free: string
  premium: string
}

const rows: Row[] = [
  { feature: 'Websites limit', free: 'Max 1–2 websites', premium: 'Unlimited (up to 10 websites)' },
  { feature: 'AI generations', free: '5–10 prompts / month', premium: '100+ generations / month' },
  { feature: 'Domain', free: 'Subdomain (site.fluxwith.app)', premium: 'Custom domain (mysite.com)' },
  { feature: 'Branding', free: '"Powered by FluxWith" badge', premium: 'No watermark, white-label' },
  { feature: 'Export code', free: 'View only, no export', premium: 'Full HTML/CSS/ZIP download' },
  { feature: 'Support', free: 'Community / email support', premium: 'Priority support' },
]

export default function FeatureComparison() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        What changes between Free and Premium
      </h2>

      <div className="mt-10 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-ash-light">
              <th className="px-5 py-4 font-display font-medium text-bone">Feature</th>
              <th className="px-5 py-4 font-display font-medium text-bone">Free</th>
              <th className="px-5 py-4 font-display font-medium text-flux-cyan">Premium</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.feature} className={index % 2 === 0 ? 'bg-ash' : 'bg-ash/60'}>
                <td className="border-t border-line px-5 py-4 text-bone/90">{row.feature}</td>
                <td className="border-t border-line px-5 py-4 text-fume">{row.free}</td>
                <td className="border-t border-line px-5 py-4 text-bone">{row.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
