import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useAuth } from '../context/AuthContext'

const stats = [
  { label: 'Sites Created', value: '12', change: '+3 this month', positive: true },
  { label: 'Total Views', value: '2,847', change: '+12.5%', positive: true },
  { label: 'Conversions', value: '156', change: '+8.2%', positive: true },
  { label: 'Uptime', value: '99.9%', change: 'All systems operational', positive: true },
]

const recentSites = [
  {
    id: 1,
    name: 'Coffee Shop Landing',
    url: 'coffeeshop.fluxwith.dev',
    status: 'Published',
    views: 342,
    lastEdited: '2 hours ago',
  },
  {
    id: 2,
    name: 'Portfolio - Sarah Chen',
    url: 'sarahchen.fluxwith.dev',
    status: 'Draft',
    views: 0,
    lastEdited: '1 day ago',
  },
  {
    id: 3,
    name: 'SaaS Product Page',
    url: 'saas-demo.fluxwith.dev',
    status: 'Published',
    views: 1256,
    lastEdited: '3 days ago',
  },
]

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/50 bg-void/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-flux-cyan via-flux-blue to-flux-purple font-display text-lg font-bold text-void shadow-lg">
              F
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-flux-cyan to-flux-purple bg-clip-text text-transparent">
              FluxWith
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/#pricing"
              className="text-sm text-fume hover:text-bone transition-colors"
            >
              Upgrade Plan
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="btn-secondary !py-2 !px-4 text-sm flex items-center gap-2"
            >
              Sign out
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="font-display text-3xl font-bold mb-2">
            Welcome back, {user?.email?.split('@')[0] || 'Creator'}
          </h1>
          <p className="text-fume">
            Here's what's happening with your sites today.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="liquid-glass rounded-2xl p-6">
              <p className="text-sm text-fume mb-2">{stat.label}</p>
              <p className="font-display text-3xl font-bold">{stat.value}</p>
              <p className={`text-xs mt-2 ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main content area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent sites */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold">Recent Sites</h2>
                <button className="text-sm text-flux-cyan hover:text-flux-cyan-dim transition-colors">
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {recentSites.map((site) => (
                  <div
                    key={site.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-ash/50 hover:bg-ash transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-flux-cyan/20 to-flux-purple/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9v1c0 7.5-4 13.86-10 17.5M3 21h18" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-flux-cyan transition-colors">
                          {site.name}
                        </h3>
                        <p className="text-xs text-fume">{site.url}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium">{site.views.toLocaleString()} views</p>
                        <p className="text-xs text-fume">{site.lastEdited}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        site.status === 'Published' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-fume/20 text-fume'
                      }`}>
                        {site.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Create new CTA */}
              <Link
                to="/"
                className="mt-6 w-full btn-primary flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create new site
              </Link>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { label: 'Build new site', icon: 'sparkles', href: '/' },
                  { label: 'View templates', icon: 'clipboard', href: '/showcase' },
                  { label: 'Manage domains', icon: 'globe', href: '#' },
                  { label: 'View analytics', icon: 'chart', href: '#' },
                  { label: 'Settings', icon: 'settings', href: '#' },
                ].map((action) => (
                  <Link
                    key={action.label}
                    to={action.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-ash-light transition-colors group"
                  >
                    <span className="w-5 h-5">
                      <svg className="w-5 h-5 text-fume group-hover:text-flux-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          action.icon === 'sparkles' ? 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' :
                          action.icon === 'clipboard' ? 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h2m2 4h3a2 2 0 002-2V9a2 2 0 00-2-2H9' :
                          action.icon === 'globe' ? 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9v1c0 7.5-4 13.86-10 17.5M3 21h18' :
                          action.icon === 'chart' ? 'M3 13.125C3 11.504 4.125 11.504 4.125S1.5 21 12 21s8.5-9.875 8.5-7.875zM12 18.75H7.5v-.875c0-1.516 1.226-2.75 2.75-2.75s2.75 1.234 2.75 2.75v.875h4.5v.875c0 1.516-1.226 2.75-2.75 2.75S12.5 20.284 12.5 18.75v-.875z' :
                          'M10.325 4.5l1.4-1.4M14.175 8.95l1.4-1.4M18.025 13.05l1.4-1.4M19.425 5.25l-1.4 1.4M15.575 9.3l-1.4 1.4'
                        } />
                      </svg>
                    </span>
                    <span className="text-sm group-hover:text-bone transition-colors">
                      {action.label}
                    </span>
                    <svg className="w-4 h-4 ml-auto text-fume group-hover:text-flux-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Usage stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4">This Month's Usage</h3>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-fume">Site builds</span>
                  <span className="font-medium">3 / 5</span>
                </div>
                <div className="h-2 bg-ash rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-flux-cyan to-flux-blue rounded-full" />
                </div>
              </div>

              <div className="pt-4 border-t border-line/50">
                <Link
                  to="/#pricing"
                  className="text-sm text-flux-cyan hover:text-flux-cyan-dim transition-colors flex items-center gap-1"
                >
                  Upgrade for unlimited builds
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
