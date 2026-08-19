// Desktop-only side panel shown next to login/signup forms.
// Drop a Higgsfield-generated loop here for a real animated visual:
//   1. Generate a short abstract video with Higgsfield (molten flow / particles / gradient loop).
//   2. Save it as src/assets/generated/auth-loop.mp4
//   3. Uncomment the <video> block below and remove the CSS fallback if you want the video only.
// Until then this renders a CSS-driven 3D floating card animation so the panel is never empty.

const floatingCards = [
  { label: 'coffee-shop.site', top: '18%', left: '20%', delay: '0s', tilt: -8 },
  { label: 'studio.site', top: '46%', left: '52%', delay: '-2.5s', tilt: 5 },
  { label: 'launch.site', top: '68%', left: '18%', delay: '-5s', tilt: -3 },
]

export default function AuthSidePanel() {
  return (
    <div className="relative hidden h-full w-full overflow-hidden bg-ash md:block">
      <div className="pointer-events-none absolute inset-0">
        <div className="flux-blob flux-blob-cyan" style={{ opacity: 0.5 }} />
        <div className="flux-blob flux-blob-amber" style={{ opacity: 0.5 }} />
      </div>

      {/*
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="/src/assets/generated/auth-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      */}

      <div className="relative flex h-full w-full items-center justify-center" style={{ perspective: '1200px' }}>
        {floatingCards.map((card) => (
          <div
            key={card.label}
            className="auth-float-card absolute w-64 overflow-hidden rounded-xl border border-line bg-ash-light shadow-2xl"
            style={{
              top: card.top,
              left: card.left,
              animationDelay: card.delay,
              transform: `rotate(${card.tilt}deg)`,
            }}
          >
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="ml-2 font-mono text-[9px] text-fume">{card.label}</span>
            </div>
            <div className="space-y-1.5 p-3">
              <div className="h-2 w-2/3 rounded bg-flux-cyan/70" />
              <div className="h-1.5 w-full rounded bg-line" />
              <div className="h-1.5 w-4/5 rounded bg-line" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-10">
        <p className="eyebrow mb-2">While you sign in</p>
        <p className="max-w-xs text-sm text-fume">
          Every site on FluxWith starts as a prompt and ends up here, fully structured and ready
          to publish.
        </p>
      </div>
    </div>
  )
}
