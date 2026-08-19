import { useState } from 'react'
import { isSupabaseConfigured } from '../lib/supabase'

export default function ConfigWarning() {
  const [dismissed, setDismissed] = useState(false)

  if (isSupabaseConfigured || dismissed) {
    return null
  }

  return (
    <div className="relative z-[60] flex items-center justify-center gap-3 bg-flux-amber px-4 py-2 text-center text-xs font-medium text-void">
      <span>
        Supabase is not configured. Copy .env.example to .env and add your project keys, sign
        up and login will not work until then.
      </span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="shrink-0 rounded border border-void/30 px-2 py-0.5 text-[11px]"
      >
        Dismiss
      </button>
    </div>
  )
}
