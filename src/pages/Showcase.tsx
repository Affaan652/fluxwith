import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const featureCategories = [
  {
    id: 'generation',
    title: 'AI Generation',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: 'cyan',
    features: [
      {
        name: 'Prompt-to-Site',
        description: 'Transform natural language into complete websites with AI-powered generation.',
        demo: 'prompt',
      },
      {
        name: 'Smart Layouts',
        description: 'AI automatically selects the best layout based on your content type and goals.',
        demo: 'layout',
      },
      {
        name: 'Content Expansion',
        description: 'AI generates relevant copy, headlines, and CTAs from your brief.',
        demo: 'content',
      },
    ],
  },
  {
    id: 'editor',
    title: 'Visual Editor',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    color: 'purple',
    features: [
      {
        name: 'Inline Editing',
        description: 'Click any element to edit text, images, and styles in real-time.',
        demo: 'inline',
      },
      {
        name: 'Color Picker',
        description: 'Intuitive color tools with palette suggestions and brand matching.',
        demo: 'color',
      },
      {
        name: 'Drag & Drop',
        description: 'Rearrange sections and components with simple drag interactions.',
        demo: 'drag',
      },
    ],
  },
  {
    id: 'components',
    title: 'Component Library',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    color: 'pink',
    features: [
      {
        name: 'Hero Sections',
        description: '20+ hero variants including video backgrounds, 3D effects, and animations.',
        demo: 'hero',
      },
      {
        name: 'Feature Grids',
        description: 'Flexible grid layouts with icons, images, and interactive states.',
        demo: 'grid',
      },
      {
        name: 'Pricing Tables',
        description: 'Conversion-optimized pricing components with toggle and comparison modes.',
        demo: 'pricing',
      },
    ],
  },
]

// Demo component for each feature
function FeatureDemo({ type }: { type: string }) {
  const [active, setActive] = useState(false)
  
  switch (type) {
    case 'prompt':
      return (
        <div className="bg-void rounded-xl p-6 border border-line">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-flux-cyan">Prompt Input</span>
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Describe your website..."
              className="w-full bg-ash border border-line rounded-lg px-4 py-3 text-sm focus:border-flux-cyan outline-none transition-colors"
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
            />
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <div className="h-2 bg-flux-cyan/20 rounded animate-pulse" />
                <div className="h-2 bg-flux-purple/20 rounded w-3/4 animate-pulse delay-100" />
                <div className="mt-3 p-3 border border-green-500/30 rounded-lg bg-green-500/10">
                  <span className="text-xs text-green-400">✓ Site generated successfully</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )
    
    case 'color':
      const colors = ['#00f5d4', '#9b5de5', '#f72585', '#ffc300', '#00bbf9']
      const [selectedColor, setSelectedColor] = useState(colors[0])
      
      return (
        <div className="bg-void rounded-xl p-6 border border-line">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-flux-purple">Color Palette</span>
          </div>
          <div className="flex gap-3 mb-4">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-xl transition-all ${
                  selectedColor === color ? 'ring-2 ring-offset-2 ring-offset-void scale-110' : ''
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div 
            className="h-24 rounded-lg flex items-center justify-center text-sm font-medium transition-colors duration-300"
            style={{ backgroundColor: selectedColor + '20', color: selectedColor }}
          >
            Preview Color
          </div>
        </div>
      )
    
    case 'inline':
      const [text, setText] = useState('Click to edit this text')
      const [isEditing, setIsEditing] = useState(false)
      
      return (
        <div className="bg-void rounded-xl p-6 border border-line">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-flux-pink">Inline Editor</span>
          </div>
          <div 
            className={`p-4 rounded-lg border-2 transition-all cursor-text ${
              isEditing ? 'border-flux-cyan bg-flux-cyan/5' : 'border-transparent hover:border-line'
            }`}
            onClick={() => setIsEditing(true)}
          >
            {isEditing ? (
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlur={() => setIsEditing(false)}
                className="w-full bg-transparent outline-none text-bone"
                autoFocus
              />
            ) : (
              <span className="text-bone">{text}</span>
            )}
          </div>
          <p className="mt-3 text-xs text-fume">↑ Click the text above to edit</p>
        </div>
      )
    
    default:
      return (
        <div className="bg-void rounded-xl p-6 border border-line flex items-center justify-center h-48">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-flux-cyan to-flux-purple flex items-center justify-center">
              <svg className="w-6 h-6 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-fume">Interactive Demo</p>
          </div>
        </div>
      )
  }
}

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0].id)
  const [activeFeature, setActiveFeature] = useState(0)

  const currentCategory = featureCategories.find(c => c.id === activeCategory) || featureCategories[0]
  
  const colorMap: Record<string, string> = {
    cyan: 'from-flux-cyan to-flux-blue',
    purple: 'from-flux-purple to-flux-pink',
    pink: 'from-flux-pink to-flux-orange',
  }

  return (
    <div className="min-h-screen bg-void">
      <NavBar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-flux-cyan/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="eyebrow inline-block mb-4">Features Showcase</span>
            <h1 className="font-display text-display-xl font-bold tracking-tight mb-6">
              Explore every feature in{' '}
              <span className="gradient-text">detail</span>
            </h1>
            <p className="text-lg text-fume leading-relaxed">
              Dive deep into what makes FluxWith powerful. Try interactive demos, 
              see real examples, and understand how each feature works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main showcase area */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-2">
                {featureCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setActiveFeature(0)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${colorMap[category.color]} text-void`
                        : 'hover:bg-ash-light text-fume hover:text-bone'
                    }`}
                  >
                    <span className={activeCategory === category.id ? 'text-void' : ''}>
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
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${colorMap[category.color]} text-void`
                      : 'bg-ash text-fume'
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category header */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${colorMap[currentCategory.color]} text-void mb-4`}>
                      {currentCategory.icon}
                      <span className="font-semibold text-sm">{currentCategory.title}</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold">
                      Powerful tools for modern builders
                    </h2>
                  </div>

                  {/* Feature tabs */}
                  <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {currentCategory.features.map((feature, index) => (
                      <button
                        key={feature.name}
                        onClick={() => setActiveFeature(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                          activeFeature === index
                            ? 'bg-flux-cyan text-void'
                            : 'bg-ash text-fume hover:text-bone hover:bg-ash-light'
                        }`}
                      >
                        {feature.name}
                      </button>
                    ))}
                  </div>

                  {/* Feature content */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Description */}
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-4">
                        {currentCategory.features[activeFeature].name}
                      </h3>
                      <p className="text-fume leading-relaxed mb-6">
                        {currentCategory.features[activeFeature].description}
                      </p>
                      
                      {/* Feature details list */}
                      <ul className="space-y-3">
                        {[
                          'Intuitive interface with zero learning curve',
                          'Real-time preview as you make changes',
                          'Keyboard shortcuts for power users',
                          'Undo/redo history for all actions',
                          'Export settings for team consistency',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-fume-light">
                            <svg className="w-5 h-5 text-flux-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/signup"
                        className="btn-primary inline-flex mt-8 items-center gap-2"
                      >
                        Try it now
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>

                    {/* Interactive demo */}
                    <div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeFeature}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FeatureDemo type={currentCategory.features[activeFeature].demo} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass rounded-3xl p-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to experience these features?
            </h2>
            <p className="text-fume mb-8 max-w-xl mx-auto">
              Start building for free today and see how FluxWith can transform your workflow.
            </p>
            <Link to="/signup" className="btn-primary inline-flex items-center gap-2">
              Get started free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
