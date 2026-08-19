import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

const missingConfig = !supabaseUrl || !supabaseAnonKey

if (missingConfig) {
  console.warn(
    'Supabase environment variables are missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file. Auth calls will fail until this is set, but the app will still render.'
  )
}

// Fall back to a placeholder URL so createClient never throws at import time.
// Without this, a missing .env crashes the whole app before React can render,
// which shows as a blank black screen (the page background is near-black).
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)

export const isSupabaseConfigured = !missingConfig

