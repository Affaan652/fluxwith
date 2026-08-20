'use client'

import { useState, useCallback } from 'react'
import {
  Sparkles,
  MousePointer2,
  Palette,
  Type,
  Settings,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Download,
  Upload,
  Plus,
  GripVertical,
  Trash2,
  Edit3,
  Copy,
  ChevronDown,
  ChevronRight,
  X,
  RefreshCw,
  Zap,
  Layout,
  FileText,
  Image,
  BarChart3,
  Users,
  CreditCard,
  LogOut,
  Home,
  Globe,
  Eye,
  Code,
  Save,
  Undo2,
  Redo2,
  Maximize2,
  Minimize2,
  PanelLeftClose,
  PanelLeftOpen,
  Star,
  Crown,
  Rocket,
} from 'lucide-react'

// Types
interface Section {
  id: string
  type: 'header' | 'hero' | 'features' | 'pricing' | 'testimonials' | 'cta' | 'footer'
  title: string
  visible: boolean
  content?: Record<string, string>
}

interface SiteConfig {
  name: string
  metaTitle: string
  metaDescription: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  fontFamily: string
  favicon?: string
}

type SidebarTab = 'ai-generate' | 'sections' | 'style' | 'content' | 'seo'
type DeviceView = 'desktop' | 'tablet' | 'mobile'

// Default sections
const defaultSections: Section[] = [
  { id: '1', type: 'header', title: 'Header / Navigation', visible: true },
  { id: '2', type: 'hero', title: 'Hero Section', visible: true },
  { id: '3', type: 'features', title: 'Features Grid', visible: true },
  { id: '4', type: 'pricing', title: 'Pricing Plans', visible: true },
  { id: '5', type: 'testimonials', title: 'Testimonials', visible: true },
  { id: '6', type: 'cta', title: 'Call to Action', visible: true },
  { id: '7', type: 'footer', title: 'Footer', visible: true },
]

const fontOptions = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Space Grotesk', label: 'Space Grotesk' },
  { value: 'Playfair Display', label: 'Playfair Display' },
]

const colorPresets = [
  { name: 'Ocean Blue', primary: '#3b82f6', secondary: '#06b6d4', bg: '#0a0a0f', gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
  { name: 'Royal Purple', primary: '#8b5cf6', secondary: '#ec4899', bg: '#0a0a0f', gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)' },
  { name: 'Emerald', primary: '#10b981', secondary: '#34d399', bg: '#0a0a0f', gradient: 'linear-gradient(135deg, #10b981, #34d399)' },
  { name: 'Sunset', primary: '#f59e0b', secondary: '#ef4444', bg: '#0a0a0f', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
  { name: 'Midnight', primary: '#6366f1', secondary: '#8b5cf6', bg: '#0a0a0f', gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  { name: 'Clean Light', primary: '#2563eb', secondary: '#1e40af', bg: '#ffffff', gradient: 'linear-gradient(135deg, #2563eb, #1e40af)' },
]

export default function BuilderDashboard() {
  // State
  const [activeTab, setActiveTab] = useState<SidebarTab>('ai-generate')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [deviceView, setDeviceView] = useState<DeviceView>('desktop')
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [sections, setSections] = useState<Section[]>(defaultSections)
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    name: 'My Awesome Website',
    metaTitle: 'My Awesome Website - Built with FluxWith',
    metaDescription: 'A stunning website built with AI',
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    backgroundColor: '#0a0a0f',
    fontFamily: 'Inter',
  })
  const [creditsUsed, setCreditsUsed] = useState(4)
  const [creditsLimit] = useState(10)
  const [showPublishModal, setShowPublishModal] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [isPremium, setIsPremium] = useState(false)

  // Device width classes
  const deviceWidths = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  }

  // Handle prompt generation
  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setCreditsUsed(prev => prev + 1)
    setIsGenerating(false)
    
    console.log('Generated:', prompt)
  }, [prompt])

  // Handle section reorder (drag simulation)
  const moveSection = useCallback((id: string, direction: 'up' | 'down') => {
    const index = sections.findIndex(s => s.id === id)
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === sections.length - 1)
    ) {
      return
    }
    const newSections = [...sections]
    const newIndex = direction === 'up' ? index - 1 : index + 1
    ;[newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]]
    setSections(newSections)
  }, [sections])

  // Toggle section visibility
  const toggleSectionVisibility = useCallback((id: string) => {
    setSections(prev =>
      prev.map(s => s.id === id ? { ...s, visible: !s.visible } : s)
    )
  }, [])

  // Delete section
  const deleteSection = useCallback((id: string) => {
    setSections(prev => prev.filter(s => s.id !== id))
  }, [])

  // Add new section
  const addSection = useCallback((type: Section['type']) => {
    const newSection: Section = {
      id: Date.now().toString(),
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
      visible: true,
    }
    setSections(prev => [...prev, newSection])
  }, [])

  // Update site config
  const updateConfig = useCallback((key: keyof SiteConfig, value: string) => {
    setSiteConfig(prev => ({ ...prev, [key]: value }))
  }, [])

  // Sidebar tabs configuration
  const sidebarTabs = [
    { id: 'ai-generate' as const, icon: Sparkles, label: 'AI Generate' },
    { id: 'sections' as const, icon: Layout, label: 'Sections' },
    { id: 'style' as const, icon: Palette, label: 'Style' },
    { id: 'content' as const, icon: FileText, label: 'Content' },
    { id: 'seo' as const, icon: Settings, label: 'SEO' },
  ]

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* ==================== TOP NAVBAR - PREMIUM ==================== */}
      <header className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-white/5 bg-[#111118]/80 backdrop-blur-xl shrink-0 z-50">
        {/* Left: Project Name & Status */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2.5 hover:bg-white/5 rounded-xl transition-all duration-200 hover:scale-105"
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
          
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg"
              style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
            >
              F
            </div>
            <div>
              <input
                type="text"
                value={siteConfig.name}
                onChange={(e) => updateConfig('name', e.target.value)}
                className="bg-transparent border-none text-sm font-semibold focus:outline-none focus:ring-2 rounded-lg px-2 py-1 transition-all"
                style={{ '--tw-ring-color': siteConfig.primaryColor } as React.CSSProperties}
              />
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></span>
                <span>Auto-saved</span>
              </div>
            </div>
          </div>

          {/* Undo/Redo */}
          <div className="hidden md:flex items-center gap-1 ml-4 p-1 bg-white/5 rounded-lg">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200" title="Undo">
              <Undo2 size={16} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200" title="Redo">
              <Redo2 size={16} />
            </button>
          </div>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Device Switcher - Premium */}
          <div className="hidden sm:flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-1 mr-2 border border-white/5">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-2 rounded-lg transition-all duration-200 ${deviceView === 'desktop' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
              title="Desktop view"
            >
              <Monitor size={16} />
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-2 rounded-lg transition-all duration-200 ${deviceView === 'tablet' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
              title="Tablet view"
            >
              <Tablet size={16} />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-2 rounded-lg transition-all duration-200 ${deviceView === 'mobile' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
              title="Mobile view"
            >
              <Smartphone size={16} />
            </button>
          </div>

          {/* Action Buttons - Premium */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10">
            <Eye size={16} />
            Preview
          </button>
          
          <button 
            onClick={() => window.open('/preview', '_blank')}
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10"
          >
            <ExternalLink size={16} />
            Live Preview
          </button>

          {isPremium && (
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 hover:from-amber-500/30 hover:to-orange-500/30 rounded-xl transition-all duration-200 border border-amber-500/20">
              <Download size={16} />
              Export
            </button>
          )}

          {/* Publish Button - Primary CTA with Glow */}
          <button
            onClick={() => setShowPublishModal(true)}
            className="relative group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ 
              background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
              boxShadow: `0 4px 15px ${siteConfig.primaryColor}40`
            }}
          >
            <Upload size={16} />
            Publish
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Profile Menu - Premium */}
          <div className="relative ml-2">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded-xl transition-all duration-200 group"
            >
              <div 
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-semibold shadow-lg"
                style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
              >
                A
              </div>
              <ChevronDown size={14} className={`hidden sm:block transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`} />
            </button>

            {showProfileMenu && (
              <>
                <div className="fixed inset-0" onClick={() => setShowProfileMenu(false)} />
                <div className="absolute right-0 top-full mt-2 w-64 bg-[#16161e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 z-50 animate-scale-in">
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="font-medium text-sm">affaan@example.com</p>
                    <div className="flex items-center gap-2 mt-1">
                      {isPremium ? (
                        <>
                          <Crown size={12} className="text-amber-400" />
                          <span className="text-xs text-amber-400">Premium Plan</span>
                        </>
                      ) : (
                        <span className="text-xs text-gray-500">Free Plan</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <a href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg mx-2">
                      <Home size={16} />
                      My Websites
                    </a>
                    <a href="/billing" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg mx-2">
                      <CreditCard size={16} />
                      Account & Billing
                    </a>
                  </div>
                  
                  <div className="border-t border-white/5 pt-2 mt-2">
                    <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 rounded-lg mx-2">
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <div className="flex flex-1 overflow-hidden">
        {/* ==================== LEFT SIDEBAR - PREMIUM ==================== */}
        {!sidebarCollapsed && (
          <aside className="w-80 bg-[#111118]/50 backdrop-blur-sm border-r border-white/5 flex flex-col shrink-0 overflow-hidden">
            {/* Sidebar Tabs - Premium */}
            <div className="flex border-b border-white/5 shrink-0 bg-[#0a0a0f]/50">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-1.5 py-3.5 text-xs font-medium transition-all duration-200 relative ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  title={tab.label}
                >
                  <tab.icon size={18} className={`transition-all duration-200 ${activeTab === tab.id ? 'scale-110' : ''}`} />
                  <span className="hidden xl:inline">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full shadow-lg"
                      style={{ background: `linear-gradient(90deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
                    ></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* ====== AI GENERATOR TAB - PREMIUM ====== */}
              {activeTab === 'ai-generate' && (
                <div className="p-5 space-y-5">
                  {/* Credits Tracker - Premium Card */}
                  <div 
                    className="relative overflow-hidden rounded-2xl p-5 border border-white/10"
                    style={{ 
                      background: `linear-gradient(135deg, rgba(${siteConfig.primaryColor === '#3b82f6' ? '59,130,246' : '139,92,246'}, 0.1), rgba(${siteConfig.secondaryColor === '#8b5cf6' ? '139,92,246' : '236,72,153'}, 0.05))`
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-30 blur-3xl rounded-full"
                      style={{ background: `${siteConfig.primaryColor}` }}
                    ></div>
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">AI Credits</span>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/20 rounded-full">
                          <Zap size={14} className="text-yellow-400" />
                          <span className="text-xs font-medium text-yellow-400">{creditsLimit - creditsUsed}/{creditsLimit}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out relative"
                            style={{ 
                              width: `${((creditsLimit - creditsUsed) / creditsLimit) * 100}%`,
                              background: `linear-gradient(90deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 mb-4">
                        {creditsUsed >= creditsLimit ? 'No credits left. Upgrade for more!' : `${creditsLimit - creditsUsed} generations remaining this month`}
                      </p>

                      {!isPremium && (
                        <button 
                          onClick={() => setIsPremium(true)}
                          className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <Crown size={16} />
                          Upgrade to Premium
                        </button>
                      )}

                      {isPremium && (
                        <div className="flex items-center gap-2 py-2 px-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                          <Star size={14} className="text-emerald-400" />
                          <span className="text-xs text-emerald-400 font-medium">Unlimited Credits</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Prompt Input - Premium */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Sparkles size={14} style={{ color: siteConfig.primaryColor }} />
                      AI Prompt
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe what you want to build...&#10;&#10;Examples:&#10;• Add a testimonials section&#10;• Change layout to dark theme&#10;• Make the hero section more minimal"
                      className="w-full h-36 bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>

                  {/* Generate Button - Premium with Animation */}
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating || creditsUsed >= creditsLimit}
                    className="relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transition-all duration-300 group"
                    style={{ 
                      background: isGenerating 
                        ? '#374151' 
                        : `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
                      boxShadow: isGenerating ? 'none' : `0 4px 20px ${siteConfig.primaryColor}40`
                    }}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw size={18} className="animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        Generate with AI
                        <Rocket size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>

                  {/* Quick Actions - Premium Pills */}
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['Add Hero', 'Add Pricing', 'Add FAQ', 'Add Contact'].map((action) => (
                        <button
                          key={action}
                          onClick={() => setPrompt(action)}
                          className="py-2.5 px-3 bg-white/[0.03] border border-white/5 rounded-xl text-xs text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200 hover:scale-[1.02]"
                        >
                          + {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ====== SECTIONS TAB - PREMIUM ====== */}
              {activeTab === 'sections' && (
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">Page Sections</h3>
                    <span className="text-xs px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full font-medium">
                      {sections.filter(s => s.visible).length} active
                    </span>
                  </div>

                  {/* Sections List - Premium Cards */}
                  <div className="space-y-2">
                    {sections.map((section, index) => (
                      <div
                        key={section.id}
                        className={`group flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          selectedSection === section.id
                            ? 'border-blue-500/50 bg-blue-500/5'
                            : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                        onClick={() => setSelectedSection(section.id)}
                      >
                        <GripVertical size={14} className="text-gray-600 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate transition-all ${section.visible ? 'text-white' : 'text-gray-600 line-through'}`}>
                            {section.title}
                          </p>
                          <p className="text-xs text-gray-600 capitalize">{section.type}</p>
                        </div>

                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => { e.stopPropagation(); moveSection(section.id, 'up'); }}
                            disabled={index === 0}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all disabled:opacity-20"
                            title="Move up"
                          >
                            ↑
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); moveSection(section.id, 'down'); }}
                            disabled={index === sections.length - 1}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all disabled:opacity-20"
                            title="Move down"
                          >
                            ↓
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleSectionVisibility(section.id); }}
                            className={`p-1.5 hover:bg-white/10 rounded-lg transition-all ${section.visible ? '' : 'opacity-50'}`}
                            title={section.visible ? 'Hide' : 'Show'}
                          >
                            <Eye size={12} />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); deleteSection(section.id); }}
                            className="p-1.5 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                            title="Delete"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add New Section - Premium */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">Add Section</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { type: 'header' as const, label: 'Header' },
                        { type: 'hero' as const, label: 'Hero' },
                        { type: 'features' as const, label: 'Features' },
                        { type: 'pricing' as const, label: 'Pricing' },
                        { type: 'testimonials' as const, label: 'Testimonials' },
                        { type: 'cta' as const, label: 'CTA' },
                        { type: 'footer' as const, label: 'Footer' },
                      ].map(({ type, label }) => (
                        <button
                          key={type}
                          onClick={() => addSection(type)}
                          className="flex items-center gap-2 py-2.5 px-3 bg-white/[0.02] border border-dashed border-white/10 rounded-xl text-xs text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200 hover:scale-[1.02]"
                        >
                          <Plus size={14} />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ====== STYLE TAB - PREMIUM ====== */}
              {activeTab === 'style' && (
                <div className="p-5 space-y-6">
                  {/* Color Presets - Premium Grid */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <Palette size={14} style={{ color: siteConfig.primaryColor }} />
                      Color Presets
                    </h3>
                    <div className="grid grid-cols-3 gap-2.5">
                      {colorPresets.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => {
                            updateConfig('primaryColor', preset.primary)
                            updateConfig('secondaryColor', preset.secondary)
                            updateConfig('backgroundColor', preset.bg)
                          }}
                          className={`relative h-20 rounded-2xl overflow-hidden transition-all duration-200 hover:scale-105 ${
                            siteConfig.primaryColor === preset.primary
                              ? 'ring-2 ring-white ring-offset-2 ring-offset-[#111118] shadow-lg'
                              : ''
                          }`}
                          style={{ background: preset.gradient }}
                          title={preset.name}
                        >
                          <span className="absolute inset-0 flex items-end justify-center pb-2 text-[10px] font-semibold text-white drop-shadow-lg">
                            {preset.name.split(' ')[0]}
                          </span>
                          {siteConfig.primaryColor === preset.primary && (
                            <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <span className="text-black text-[10px]">✓</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Colors - Premium Pickers */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm">Custom Colors</h3>
                    
                    <div className="space-y-4">
                      {[
                        { key: 'primaryColor' as const, label: 'Primary Color' },
                        { key: 'secondaryColor' as const, label: 'Secondary Color' },
                        { key: 'backgroundColor' as const, label: 'Background' },
                      ].map(({ key, label }) => (
                        <div key={key}>
                          <label className="text-xs text-gray-400 block mb-2">{label}</label>
                          <div className="flex items-center gap-3">
                            <input
                              type="color"
                              value={siteConfig[key]}
                              onChange={(e) => updateConfig(key, e.target.value)}
                              className="w-11 h-11 rounded-xl cursor-pointer bg-transparent border-2 border-white/10 overflow-hidden"
                            />
                            <input
                              type="text"
                              value={siteConfig[key]}
                              onChange={(e) => updateConfig(key, e.target.value)}
                              className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm uppercase tracking-wider focus:outline-none focus:border-blue-500/50"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography - Premium Select */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <Type size={14} style={{ color: siteConfig.primaryColor }} />
                      Typography
                    </h3>
                    <select
                      value={siteConfig.fontFamily}
                      onChange={(e) => updateConfig('fontFamily', e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
                    >
                      {fontOptions.map((font) => (
                        <option key={font.value} value={font.value}>
                          {font.label}
                        </option>
                      ))}
                    </select>
                    <div 
                      className="p-5 bg-white/[0.02] rounded-2xl border border-white/5"
                      style={{ fontFamily: siteConfig.fontFamily }}
                    >
                      <p className="text-xl font-bold text-white">Heading Text</p>
                      <p className="text-sm text-gray-400 mt-2">Body text sample in selected font.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ====== CONTENT EDITOR TAB - PREMIUM ====== */}
              {activeTab === 'content' && (
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <Edit3 size={14} style={{ color: siteConfig.primaryColor }} />
                      Content Editor
                    </h3>
                    {selectedSection && (
                      <span className="text-xs px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full font-medium max-w-[150px] truncate">
                        {sections.find(s => s.id === selectedSection)?.title}
                      </span>
                    )}
                  </div>

                  {selectedSection ? (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-gray-400 block mb-2">Section Title</label>
                          <input
                            type="text"
                            defaultValue={sections.find(s => s.id === selectedSection)?.title}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-400 block mb-2">Subtitle / Description</label>
                          <textarea
                            placeholder="Enter subtitle text..."
                            rows={3}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-blue-500/50 transition-all"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-400 block mb-2">Button Text</label>
                          <input
                            type="text"
                            placeholder="Get Started →"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-400 block mb-2">Image URL</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="https://..."
                              className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                            <button 
                              className="px-4 bg-white/[0.05] hover:bg-white/10 rounded-xl transition-all duration-200"
                              style={{ color: siteConfig.primaryColor }}
                            >
                              <Image size={18} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button 
                        className="w-full py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-[1.02]"
                        style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
                      >
                        Apply Changes
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-16 text-gray-500 animate-fade-in">
                      <MousePointer2 size={40} className="mx-auto mb-4 opacity-30" />
                      <p className="text-sm">Select a section from the Sections tab to edit its content</p>
                    </div>
                  )}
                </div>
              )}

              {/* ====== SEO TAB - PREMIUM ====== */}
              {activeTab === 'seo' && (
                <div className="p-5 space-y-5">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    <Settings size={14} style={{ color: siteConfig.primaryColor }} />
                    SEO & Settings
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-400 block mb-2">Meta Title</label>
                      <input
                        type="text"
                        value={siteConfig.metaTitle}
                        onChange={(e) => updateConfig('metaTitle', e.target.value)}
                        maxLength={60}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                      />
                      <p className="text-xs text-gray-600 mt-1.5">{60 - siteConfig.metaTitle.length} characters left</p>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-2">Meta Description</label>
                      <textarea
                        value={siteConfig.metaDescription}
                        onChange={(e) => updateConfig('metaDescription', e.target.value)}
                        maxLength={160}
                        rows={3}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-blue-500/50 transition-all"
                      />
                      <p className="text-xs text-gray-600 mt-1.5">{160 - siteConfig.metaDescription.length} characters left</p>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-2">Favicon URL</label>
                      <input
                        type="text"
                        placeholder="/favicon.ico"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-2">Open Graph Image</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="https://..."
                          className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                        />
                        <button className="px-4 bg-white/[0.05] hover:bg-white/10 rounded-xl transition-all duration-200">
                          <Image size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Domain Settings - Premium */}
                    <div className="pt-5 border-t border-white/5">
                      <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                        <Globe size={14} />
                        Domain Settings
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-gray-400 block mb-2">Subdomain</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              defaultValue="mybrand"
                              className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                            <span className="text-sm text-gray-500 whitespace-nowrap bg-white/5 px-3 py-3 rounded-xl">.fluxwith.app</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            Live at: <span className="text-blue-400">my-brand.fluxwith.app</span>
                          </p>
                        </div>

                        {isPremium && (
                          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                            <div className="flex items-center gap-2 mb-2">
                              <Crown size={16} className="text-purple-400" />
                              <span className="text-sm text-purple-400 font-medium">Custom Domain</span>
                            </div>
                            <input
                              type="text"
                              placeholder="mybrand.com"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500/50"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20">
                      Save SEO Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* ==================== MAIN CANVAS AREA - PREMIUM ==================== */}
        <main className="flex-1 overflow-auto bg-[#08080c] flex items-start justify-center p-6 relative">
          {/* Background Gradient Orbs */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute top-1/4 -left-32 w-96 h-96 opacity-20 blur-3xl rounded-full"
              style={{ background: siteConfig.primaryColor }}
            ></div>
            <div 
              className="absolute bottom-1/4 -right-32 w-96 h-96 opacity-20 blur-3xl rounded-full"
              style={{ background: siteConfig.secondaryColor }}
            ></div>
          </div>

          <div
            className={`${deviceWidths[deviceView]} transition-all duration-500 ease-out relative ${
              deviceView !== 'desktop' ? 'border border-white/10 rounded-2xl overflow-hidden shadow-2xl' : ''
            }`}
            style={{
              minHeight: deviceView === 'mobile' ? '667px' : deviceView === 'tablet' ? '1024px' : '100%',
              backgroundColor: siteConfig.backgroundColor,
              fontFamily: siteConfig.fontFamily,
            }}
          >
            {/* Live Preview Frame */}
            <div className="min-h-full relative">
              {/* Simulated Website Preview - Premium */}
              {sections.filter(s => s.visible).map((section, index) => (
                <section
                  key={section.id}
                  data-section-id={section.id}
                  className={`transition-all duration-300 ${index > 0 ? 'border-t border-white/5' : ''}`}
                  style={{
                    padding: section.type === 'hero' || section.type === 'cta' ? '100px 32px' : '64px 32px',
                    backgroundColor: section.type === 'footer' ? '#0d0d12' : 'transparent',
                  }}
                >
                  {/* Header Section */}
                  {section.type === 'header' && (
                    <header className="flex items-center justify-between max-w-7xl mx-auto">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
                        >
                          F
                        </div>
                        <span className="font-semibold text-lg">{siteConfig.name}</span>
                      </div>
                      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">About</a>
                        <button
                          className="px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105"
                          style={{ 
                            background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
                            boxShadow: `0 4px 15px ${siteConfig.primaryColor}30`
                          }}
                        >
                          Get Started
                        </button>
                      </nav>
                    </header>
                  )}

                  {/* Hero Section - Premium */}
                  {section.type === 'hero' && (
                    <div className="max-w-5xl mx-auto text-center">
                      <div 
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8 border"
                        style={{ 
                          backgroundColor: `${siteConfig.primaryColor}10`,
                          borderColor: `${siteConfig.primaryColor}30`,
                          color: siteConfig.primaryColor
                        }}
                      >
                        <Sparkles size={14} />
                        AI-Powered Website Builder
                      </div>
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Build stunning websites{' '}
                        <span 
                          className="bg-clip-text text-transparent"
                          style={{ backgroundImage: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
                        >
                          in seconds
                        </span>
                      </h1>
                      <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Describe your vision and watch AI create production-ready websites instantly.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                          className="px-8 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105"
                          style={{ 
                            background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
                            boxShadow: `0 8px 30px ${siteConfig.primaryColor}40`
                          }}
                        >
                          Start Building Free →
                        </button>
                        <button className="px-8 py-4 rounded-2xl font-medium border border-white/10 text-gray-300 hover:border-white/20 hover:text-white transition-all duration-200">
                          View Examples
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Features Section - Premium */}
                  {section.type === 'features' && (
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Everything you need</h2>
                        <p className="text-xl text-gray-400">Powerful features that make website creation effortless.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                          { icon: Zap, title: 'Lightning Fast', desc: 'Build complete websites in under 30 seconds.' },
                          { icon: Palette, title: 'Full Customization', desc: 'Colors, fonts, layouts — all customizable.' },
                          { icon: Code, title: 'Clean Code', desc: 'Export production-ready HTML/CSS anytime.' },
                        ].map((feature) => (
                          <div 
                            key={feature.title} 
                            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                          >
                            <div 
                              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                              style={{ background: `${siteConfig.primaryColor}15`, color: siteConfig.primaryColor }}
                            >
                              <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pricing Section - Premium */}
                  {section.type === 'pricing' && (
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Simple pricing</h2>
                        <p className="text-xl text-gray-400">Start free. Scale as you grow.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                          { name: 'Free', price: '$0', features: ['5 sites/mo', 'Basic templates', 'Subdomain'] },
                          { name: 'Pro', price: '$19', popular: true, features: ['Unlimited sites', 'Custom domain', 'Code export', 'Priority support'] },
                          { name: 'Enterprise', price: '$49', features: ['Everything in Pro', 'Team access', 'API access', 'SLA'] },
                        ].map((plan) => (
                          <div
                            key={plan.name}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                              plan.popular
                                ? 'border-current scale-105'
                                : 'border-white/5 bg-white/[0.02]'
                            }`}
                            style={plan.popular ? { 
                              borderColor: siteConfig.primaryColor,
                              boxShadow: `0 0 40px ${siteConfig.primaryColor}20`
                            } : {}}
                          >
                            {plan.popular && (
                              <div 
                                className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-semibold text-white"
                                style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
                              >
                                Most Popular ⭐
                              </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="mb-6">
                              <span className="text-5xl font-bold">{plan.price}</span>
                              <span className="text-gray-500 text-lg">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                              {plan.features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-gray-300">
                                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <span className="text-emerald-400 text-xs">✓</span>
                                  </span>
                                  {f}
                                </li>
                              ))}
                            </ul>
                            <button
                              className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                              style={
                                plan.popular
                                  ? { 
                                      background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
                                      color: '#fff',
                                      boxShadow: `0 4px 20px ${siteConfig.primaryColor}30`
                                    }
                                  : { backgroundColor: '#1a1a24', color: '#ccc' }
                              }
                            >
                              Get Started
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonials Section - Premium */}
                  {section.type === 'testimonials' && (
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Loved by creators</h2>
                        <p className="text-xl text-gray-400">See what our users have to say.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                          { name: 'Sarah K.', role: 'Founder, StartupCo', quote: 'Built our landing page in 5 minutes. Incredible!' },
                          { name: 'Mike R.', role: 'Freelancer', quote: 'The best AI builder I have used. Period.' },
                          { name: 'Lisa T.', role: 'Marketing Lead', quote: 'Saved us weeks of development time.' },
                        ].map((testimonial) => (
                          <div key={testimonial.name} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-4">
                              <div 
                                className="w-12 h-12 rounded-2xl"
                                style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})` }}
                              ></div>
                              <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Section - Premium */}
                  {section.type === 'cta' && (
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to build something amazing?
                      </h2>
                      <p className="text-xl text-gray-400 mb-10">
                        Join thousands of creators using FluxWith. Start for free today.
                      </p>
                      <button
                        className="px-10 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105"
                        style={{ 
                          background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
                          boxShadow: `0 8px 30px ${siteConfig.primaryColor}40`
                        }}
                      >
                        Get Started Free →
                      </button>
                    </div>
                  )}

                  {/* Footer Section - Premium */}
                  {section.type === 'footer' && (
                    <footer className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                        {[
                          { title: 'Product', links: ['Features', 'Pricing', 'Templates', 'Showcase'] },
                          { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
                          { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Changelog'] },
                          { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'License'] },
                        ].map((group) => (
                          <div key={group.title}>
                            <h4 className="font-semibold mb-5 text-sm">{group.title}</h4>
                            <ul className="space-y-3">
                              {group.links.map((link) => (
                                <li key={link}>
                                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                        <p>© 2024 {siteConfig.name}. All rights reserved.</p>
                        <p className="flex items-center gap-2">
                          Built with <span style={{ color: siteConfig.primaryColor }}>❤️</span> by FluxWith
                        </p>
                      </div>
                    </footer>
                  )}
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ==================== PUBLISH MODAL - PREMIUM ==================== */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-[#16161e]/95 backdrop-blur-xl rounded-3xl w-full max-w-lg border border-white/10 shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Rocket size={24} style={{ color: siteConfig.primaryColor }} />
                  Publish Your Website
                </h2>
                <p className="text-sm text-gray-400 mt-1">Make your site live in one click</p>
              </div>
              <button
                onClick={() => setShowPublishModal(false)}
                className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Subdomain Selection - Premium */}
              <div>
                <label className="block text-sm font-medium mb-3">Choose your subdomain</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    defaultValue="my-awesome-site"
                    className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="your-site-name"
                  />
                  <span className="text-gray-500 bg-white/5 px-4 py-4 rounded-xl text-sm whitespace-nowrap hidden sm:block">
                    .fluxwith.app
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                  <Globe size={14} />
                  Your site will be live at: <span className="text-blue-400 font-medium">my-awesome-site.fluxwith.app</span>
                </p>
              </div>

              {/* Premium Domain Option */}
              {isPremium ? (
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Crown size={20} className="text-purple-400" />
                    <span className="text-lg font-semibold text-purple-400">Premium Feature Unlocked!</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">You can use a custom domain. Enter it below:</p>
                  <input
                    type="text"
                    placeholder="mybrand.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>
              ) : (
                <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Crown size={20} className="text-yellow-400" />
                    <span className="text-lg font-semibold text-yellow-400">Want a custom domain?</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Upgrade to Premium to use your own domain (e.g., mybrand.com)</p>
                  <button
                    onClick={() => setIsPremium(true)}
                    className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Crown size={18} />
                    Upgrade to Premium ($19/mo)
                  </button>
                </div>
              )}

              {/* Watermark Notice */}
              {!isPremium && (
                <div className="flex items-start gap-4 p-5 bg-white/[0.03] rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 text-lg">ℹ️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium mb-1">Free tier includes attribution</p>
                    <p className="text-xs text-gray-500">Free sites display a "Powered by FluxWith" badge. Upgrade to remove.</p>
                  </div>
                </div>
              )}

              {/* Actions - Premium Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => setShowPublishModal(false)}
                  className="flex-1 py-4 border border-white/10 rounded-xl font-medium text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('🚀 Publishing your site... (This would trigger Netlify API)')
                    setShowPublishModal(false)
                  }}
                  className="flex-1 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.secondaryColor})`,
                    boxShadow: `0 4px 20px ${siteConfig.primaryColor}40`
                  }}
                >
                  <Upload size={18} />
                  Publish Now 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}
