import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const featureCategories = [
  {
    id: 'building',
    title: 'AI Building',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    features: [
      {
        name: 'Prompt-to-Site',
        description: 'Transform natural language into complete websites with AI-powered building.',
      },
      {
        name: 'Smart Layouts',
        description: 'AI automatically selects the best layout based on your content type and goals.',
      },
      {
        name: 'Content Expansion',
        description: 'AI creates relevant copy, headlines, and CTAs from your brief.',
      },
    ],
  },
  {
    id: 'editor',
    title: 'Visual Editor',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    features: [
      {
        name: 'Inline Editing',
        description: 'Click any element to edit text, images, and styles in real-time.',
      },
      {
        name: 'Color Picker',
        description: 'Intuitive color tools with palette suggestions and brand matching.',
      },
      {
        name: 'Drag & Drop',
        description: 'Rearrange sections and components with simple drag interactions.',
      },
    ],
  },
  {
    id: 'components',
    title: 'Component Library',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    features: [
      {
        name: 'Hero Sections',
        description: '20+ hero variants including video backgrounds and animations.',
      },
      {
        name: 'Feature Grids',
        description: 'Flexible grid layouts with icons, images, and interactive states.',
      },
      {
        name: 'Pricing Tables',
        description: 'Conversion-optimized pricing components with toggle modes.',
      },
    ],
  },
]

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0].id)
  const [activeFeature, setActiveFeature] = useState(0)

  const currentCategory = featureCategories.find(c => c.id === activeCategory) || featureCategories[0]

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Header - COMPACT */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Features Showcase</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Explore every feature in detail
            </h1>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Dive deep into what makes FluxWith powerful. See real examples 
              and understand how each feature works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main showcase area - COMPACT */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[240px_1fr] gap-6">
            {/* Sidebar navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-20 space-y-1">
                {featureCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setActiveFeature(0)
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-150 ${
                      activeCategory === category.id
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={activeCategory === category.id ? 'text-black' : ''}>
                      {category.icon}
                    </span>
                    <span className="font-medium text-sm">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile category tabs */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 -mx-6 px-6">
              {featureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setActiveFeature(0)
                  }}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Category header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black mb-3">
                      {currentCategory.icon}
                      <span className="font-semibold text-xs">{currentCategory.title}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Powerful tools for modern builders
                    </h2>
                  </div>

                  {/* Feature tabs */}
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {currentCategory.features.map((feature, index) => (
                      <button
                        key={feature.name}
                        onClick={() => setActiveFeature(index)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                          activeFeature === index
                            ? 'bg-white text-black'
                            : 'bg-white/10 text-gray-400 hover:bg-white/20'
                        }`}
                      >
                        {feature.name}
                      </button>
                    ))}
                  </div>

                  {/* Feature content */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {currentCategory.features[activeFeature].name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {currentCategory.features[activeFeature].description}
                      </p>
                      
                      {/* Feature details list */}
                      <ul className="space-y-2">
                        {[
                          'Intuitive interface with zero learning curve',
                          'Real-time preview as you make changes',
                          'Keyboard shortcuts for power users',
                          'Undo/redo history for all actions',
                          'Export settings for team consistency',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-400">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/signup"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-100 active:scale-[0.96] transition-all duration-150 ease-out"
                      >
                        Try it now
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>

                    {/* Demo placeholder */}
                    <div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6 flex items-center justify-center h-48">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500">Interactive Demo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section - WHITE FOR CONTRAST */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-white p-8 text-center">
            <h2 className="text-xl font-bold text-black mb-2">
              Ready to experience these features?
            </h2>
            <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
              Start building for free today and see how FluxWith can transform your workflow.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 active:scale-[0.96] transition-all duration-150 ease-out">
              Get started free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
