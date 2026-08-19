import { useRef, useState, type MouseEvent } from 'react'

type CardSpec = {
  label: string
  accent: string
  translateZ: number
  rotate: number
  offsetY: number
}

const cards: CardSpec[] = [
  { label: 'coffee-shop.site', accent: 'var(--color-flux-amber)', translateZ: -60, rotate: -10, offsetY: 40 },
  { label: 'studio-portfolio.site', accent: 'var(--color-fume)', translateZ: -30, rotate: -4, offsetY: 20 },
  { label: 'launch-page.site', accent: 'var(--color-flux-cyan)', translateZ: 0, rotate: 3, offsetY: 0 },
]

export default function ForgeStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = (event.clientX - rect.left) / rect.width - 0.5
    const relY = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: relY * -10, y: relX * 14 })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto h-[420px] w-full max-w-xl"
      style={{ perspective: '1400px' }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="flux-blob flux-blob-cyan" />
        <div className="flux-blob flux-blob-amber" />
      </div>

      <div
        className="relative h-full w-full transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${12 + tilt.x}deg) rotateY(${-18 + tilt.y}deg)`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.label}
            className="absolute left-1/2 top-1/2 w-[320px] overflow-hidden rounded-xl border border-line bg-ash shadow-2xl"
            style={{
              transform: `translate(-50%, calc(-50% + ${card.offsetY}px)) translateZ(${card.translateZ}px) rotate(${card.rotate}deg)`,
              boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)',
            }}
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-ash-light px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-2 font-mono text-[10px] text-fume">{card.label}</span>
            </div>
            <div className="space-y-2 p-4">
              <div className="h-3 w-2/3 rounded" style={{ backgroundColor: card.accent, opacity: 0.85 }} />
              <div className="h-2 w-full rounded bg-line" />
              <div className="h-2 w-5/6 rounded bg-line" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-10 rounded bg-ash-light" />
                <div className="h-10 rounded bg-ash-light" />
                <div className="h-10 rounded bg-ash-light" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
