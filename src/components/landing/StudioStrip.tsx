import { motion } from 'motion/react'
import { Search } from 'lucide-react'

const menuItems = ['File', 'Edit', 'View', 'Sections', 'Publish']

export default function StudioStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="h-10 border-b border-t border-line bg-black/40 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 text-xs">
        <div className="flex items-center gap-4 text-fume">
          <span className="font-mono font-semibold text-bone">FluxWith Studio</span>
          {menuItems.map((item, i) => (
            <span
              key={item}
              className={i > 2 ? 'hidden md:inline' : i > 1 ? 'hidden sm:inline' : ''}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-fume">
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">draft-3.site — autosaved</span>
        </div>
      </div>
    </motion.div>
  )
}
