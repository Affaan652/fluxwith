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
  { name: 'Midnight Blue', primary: '#3b82f6', secondary: '#1e40af', bg: '#0a0a0a' },
  { name: 'Emerald', primary: '#10b981', secondary: '#059669', bg: '#0a0a0a' },
  { name: 'Purple Haze', primary: '#8b5cf6', secondary: '#7c3aed', bg: '#0a0a0a' },
  { name: 'Rose Gold', primary: '#f43f5e', secondary: '#e11d48', bg: '#0a0a0a' },
  { name: 'Amber', primary: '#f59e0b', secondary: '#d97706', bg: '#0a0a0a' },
  { name: 'Clean White', primary: '#2563eb', secondary: '#1e40af', bg: '#ffffff' },
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
    secondaryColor: '#1e40af',
    backgroundColor: '#0a0a0a',
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
    
    // Simulate API call to Gemini
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
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* ==================== TOP NAVBAR ==================== */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[#222] bg-[#111] shrink-0 z-50">
        {/* Left: Project Name & Status */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-[#222] rounded-lg transition-colors"
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
              F
            </div>
            <div>
              <input
                type="text"
                value={siteConfig.name}
                onChange={(e) => updateConfig('name', e.target.value)}
                className="bg-transparent border-none text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-0.5"
              />
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Auto-saved
              </div>
            </div>
          </div>

          {/* Undo/Redo */}
          <div className="hidden md:flex items-center gap-1 ml-4">
            <button className="p-2 hover:bg-[#222] rounded-lg transition-colors" title="Undo">
              <Undo2 size={16} />
            </button>
            <button className="p-2 hover:bg-[#222] rounded-lg transition-colors" title="Redo">
              <Redo2 size={16} />
            </button>
          </div>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2">
          {/* Device Switcher */}
          <div className="hidden sm:flex items-center bg-[#1a1a1a] rounded-lg p-1 mr-2">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded-md transition-colors ${deviceView === 'desktop' ? 'bg-[#333] text-white' : 'text-gray-400 hover:text-white'}`}
              title="Desktop view"
            >
              <Monitor size={16} />
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-1.5 rounded-md transition-colors ${deviceView === 'tablet' ? 'bg-[#333] text-white' : 'text-gray-400 hover:text-white'}`}
              title="Tablet view"
            >
              <Tablet size={16} />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded-md transition-colors ${deviceView === 'mobile' ? 'bg-[#333] text-white' : 'text-gray-400 hover:text-white'}`}
              title="Mobile view"
            >
              <Smartphone size={16} />
            </button>
          </div>

          {/* Action Buttons */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#222] rounded-lg transition-colors">
            <Eye size={16} />
            Preview
          </button>
          
          <button 
            onClick={() => window.open('/preview', '_blank')}
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#222] rounded-lg transition-colors"
          >
            <ExternalLink size={16} />
            Live Preview
          </button>

          {isPremium && (
            <button className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#222] rounded-lg transition-colors">
              <Download size={16} />
              Export
            </button>
          )}

          {/* Publish Button (Primary CTA) */}
          <button
            onClick={() => setShowPublishModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Upload size={16} />
            Publish
          </button>

          {/* Profile Menu */}
          <div className="relative ml-2">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 hover:bg-[#222] rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-sm font-medium">
                A
              </div>
              <ChevronDown size={14} className="hidden sm:block" />
            </button>

            {showProfileMenu && (
              <>
                <div className="fixed inset-0" onClick={() => setShowProfileMenu(false)} />
                <div className="absolute right-0 top-full mt-2 w-56 bg-[#1a1a1a] border border-[#333] rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-4 py-3 border-b border-[#333]">
                    <p className="font-medium text-sm">affaan@example.com</p>
                    <p className="text-xs text-gray-500 mt-0.5">{isPremium ? 'Premium Plan' : 'Free Plan'}</p>
                  </div>
                  
                  <div className="py-1">
                    <a href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#252525]">
                      <Home size={16} />
                      My Websites
                    </a>
                    <a href="/billing" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#252525]">
                      <CreditCard size={16} />
                      Account & Billing
                    </a>
                  </div>
                  
                  <div className="border-t border-[#333] pt-1 mt-1">
                    <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-[#252525]">
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
        {/* ==================== LEFT SIDEBAR ==================== */}
        {!sidebarCollapsed && (
          <aside className="w-80 bg-[#111] border-r border-[#222] flex flex-col shrink-0 overflow-hidden">
            {/* Sidebar Tabs */}
            <div className="flex border-b border-[#222] shrink-0">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-[#151515]'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  title={tab.label}
                >
                  <tab.icon size={18} />
                  <span className="hidden xl:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* ====== AI GENERATOR TAB ====== */}
              {activeTab === 'ai-generate' && (
                <div className="p-4 space-y-4">
                  {/* Credits Tracker */}
                  <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#333]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">AI Credits</span>
                      <Zap size={16} className="text-yellow-500" />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-white">{creditsLimit - creditsUsed}</span>
                      <span className="text-gray-500 mb-1">/ {creditsLimit}</span>
                    </div>
                    <div className="mt-3 h-2 bg-[#333] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${((creditsLimit - creditsUsed) / creditsLimit) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {creditsUsed >= creditsLimit ? 'No credits left. Upgrade for more!' : `${creditsLimit - creditsUsed} generations remaining this month`}
                    </p>
                    {!isPremium && (
                      <button 
                        onClick={() => setIsPremium(true)}
                        className="w-full mt-3 py-2 text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Upgrade to Premium →
                      </button>
                    )}
                  </div>

                  {/* Prompt Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">AI Prompt</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe what you want to build...&#10;&#10;Examples:&#10;• Add a testimonials section&#10;• Change layout to dark theme&#10;• Make the hero section more minimal"
                      className="w-full h-36 bg-[#1a1a1a] border border-[#333] rounded-xl p-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating || creditsUsed >= creditsLimit}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all"
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
                      </>
                    )}
                  </button>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['Add Hero', 'Add Pricing', 'Add FAQ', 'Add Contact'].map((action) => (
                        <button
                          key={action}
                          onClick={() => setPrompt(action)}
                          className="py-2 px-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-xs text-gray-300 hover:border-blue-500 hover:text-white transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ====== SECTIONS TAB ====== */}
              {activeTab === 'sections' && (
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm">Page Sections</h3>
                    <span className="text-xs text-gray-500">{sections.filter(s => s.visible).length} active</span>
                  </div>

                  {/* Sections List */}
                  <div className="space-y-2">
                    {sections.map((section, index) => (
                      <div
                        key={section.id}
                        className={`group flex items-center gap-2 p-3 rounded-lg border transition-all cursor-pointer ${
                          selectedSection === section.id
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-[#333] bg-[#1a1a1a] hover:border-[#444]'
                        }`}
                        onClick={() => setSelectedSection(section.id)}
                      >
                        <GripVertical size={14} className="text-gray-600 cursor-grab" />
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm truncate ${section.visible ? 'text-white' : 'text-gray-500 line-through'}`}>
                            {section.title}
                          </p>
                          <p className="text-xs text-gray-600 capitalize">{section.type}</p>
                        </div>

                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => { e.stopPropagation(); moveSection(section.id, 'up'); }}
                            disabled={index === 0}
                            className="p-1 hover:bg-[#333] rounded transition-colors disabled:opacity-30"
                            title="Move up"
                          >
                            ↑
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); moveSection(section.id, 'down'); }}
                            disabled={index === sections.length - 1}
                            className="p-1 hover:bg-[#333] rounded transition-colors disabled:opacity-30"
                            title="Move down"
                          >
                            ↓
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleSectionVisibility(section.id); }}
                            className="p-1 hover:bg-[#333] rounded transition-colors"
                            title={section.visible ? 'Hide' : 'Show'}
                          >
                            {section.visible ? <Eye size={12} /> : <Eye size={12} className="text-gray-600" />}
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); deleteSection(section.id); }}
                            className="p-1 hover:bg-red-500/20 text-red-400 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add New Section */}
                  <div className="pt-4 border-t border-[#333]">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Add Section</p>
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
                          className="flex items-center gap-2 py-2 px-3 bg-[#1a1a1a] border border-dashed border-[#444] rounded-lg text-xs text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors"
                        >
                          <Plus size={14} />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ====== STYLE TAB ====== */}
              {activeTab === 'style' && (
                <div className="p-4 space-y-6">
                  {/* Color Presets */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm">Color Presets</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {colorPresets.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => {
                            updateConfig('primaryColor', preset.primary)
                            updateConfig('secondaryColor', preset.secondary)
                            updateConfig('backgroundColor', preset.bg)
                          }}
                          className={`relative p-3 rounded-xl border-2 transition-all ${
                            siteConfig.primaryColor === preset.primary
                              ? 'border-blue-500'
                              : 'border-transparent hover:border-[#444]'
                          }`}
                          style={{ background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})` }}
                          title={preset.name}
                        >
                          <span className="absolute inset-0 flex items-end justify-center pb-1 text-[10px] font-medium text-white/80 drop-shadow">
                            {preset.name.split(' ')[0]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Colors */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm">Custom Colors</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-400 block mb-1.5">Primary Color</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={siteConfig.primaryColor}
                            onChange={(e) => updateConfig('primaryColor', e.target.value)}
                            className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border border-[#333]"
                          />
                          <input
                            type="text"
                            value={siteConfig.primaryColor}
                            onChange={(e) => updateConfig('primaryColor', e.target.value)}
                            className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-gray-400 block mb-1.5">Secondary Color</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={siteConfig.secondaryColor}
                            onChange={(e) => updateConfig('secondaryColor', e.target.value)}
                            className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border border-[#333]"
                          />
                          <input
                            type="text"
                            value={siteConfig.secondaryColor}
                            onChange={(e) => updateConfig('secondaryColor', e.target.value)}
                            className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-gray-400 block mb-1.5">Background</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={siteConfig.backgroundColor}
                            onChange={(e) => updateConfig('backgroundColor', e.target.value)}
                            className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border border-[#333]"
                          />
                          <input
                            type="text"
                            value={siteConfig.backgroundColor}
                            onChange={(e) => updateConfig('backgroundColor', e.target.value)}
                            className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm">Typography</h3>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5">Font Family</label>
                      <select
                        value={siteConfig.fontFamily}
                        onChange={(e) => updateConfig('fontFamily', e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                      >
                        {fontOptions.map((font) => (
                          <option key={font.value} value={font.value}>
                            {font.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-4 bg-[#1a1a1a] rounded-xl border border-[#333]" style={{ fontFamily: siteConfig.fontFamily }}>
                      <p className="text-lg font-bold text-white">Heading Text</p>
                      <p className="text-sm text-gray-400 mt-1">Body text sample in selected font.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ====== CONTENT EDITOR TAB ====== */}
              {activeTab === 'content' && (
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm">Content Editor</h3>
                    {selectedSection && (
                      <span className="text-xs text-blue-400">Editing: {sections.find(s => s.id === selectedSection)?.title}</span>
                    )}
                  </div>

                  {selectedSection ? (
                    <div className="space-y-4">
                      {/* Dynamic content fields based on section type */}
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-gray-400 block mb-1.5">Section Title</label>
                          <input
                            type="text"
                            defaultValue={sections.find(s => s.id === selectedSection)?.title}
                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-400 block mb-1.5">Subtitle / Description</label>
                          <textarea
                            placeholder="Enter subtitle text..."
                            className="w-full h-24 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm resize-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-400 block mb-1.5">Button Text</label>
                          <input
                            type="text"
                            placeholder="Get Started →"
                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-400 block mb-1.5">Image URL</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="https://..."
                              className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                            />
                            <button className="px-3 py-2 bg-[#333] hover:bg-[#444] rounded-lg text-sm transition-colors">
                              <Image size={16} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                        Apply Changes
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <MousePointer2 size={32} className="mx-auto mb-3 opacity-50" />
                      <p className="text-sm">Select a section from the Sections tab to edit its content</p>
                    </div>
                  )}
                </div>
              )}

              {/* ====== SEO TAB ====== */}
              {activeTab === 'seo' && (
                <div className="p-4 space-y-4">
                  <h3 className="font-medium text-sm">SEO & Settings</h3>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5">Meta Title</label>
                      <input
                        type="text"
                        value={siteConfig.metaTitle}
                        onChange={(e) => updateConfig('metaTitle', e.target.value)}
                        maxLength={60}
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                      />
                      <p className="text-xs text-gray-600 mt-1">{60 - siteConfig.metaTitle.length} characters left</p>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5">Meta Description</label>
                      <textarea
                        value={siteConfig.metaDescription}
                        onChange={(e) => updateConfig('metaDescription', e.target.value)}
                        maxLength={160}
                        rows={3}
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm resize-none"
                      />
                      <p className="text-xs text-gray-600 mt-1">{160 - siteConfig.metaDescription.length} characters left</p>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5">Favicon URL</label>
                      <input
                        type="text"
                        placeholder="/favicon.ico"
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5">Open Graph Image</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="https://..."
                          className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                        />
                        <button className="px-3 py-2 bg-[#333] hover:bg-[#444] rounded-lg text-sm transition-colors">
                          <Image size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Domain Settings */}
                    <div className="pt-4 border-t border-[#333]">
                      <h4 className="text-sm font-medium mb-3">Domain Settings</h4>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-gray-400 block mb-1.5">Subdomain</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              defaultValue="mybrand"
                              className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                            />
                            <span className="text-sm text-gray-500 whitespace-nowrap">.fluxwith.app</span>
                          </div>
                        </div>

                        {isPremium && (
                          <div>
                            <label className="text-xs text-gray-400 block mb-1.5">Custom Domain (Premium)</label>
                            <input
                              type="text"
                              placeholder="mybrand.com"
                              className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <button className="w-full py-2 bg-[#333] hover:bg-[#444] text-white text-sm font-medium rounded-lg transition-colors">
                      Save SEO Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* ==================== MAIN CANVAS AREA ==================== */}
        <main className="flex-1 overflow-auto bg-[#0f0f0f] flex items-start justify-center p-6">
          <div
            className={`${deviceWidths[deviceView]} transition-all duration-300 ${
              deviceView !== 'desktop' ? 'border border-[#333] rounded-xl overflow-hidden shadow-2xl' : ''
            }`}
            style={{
              minHeight: deviceView === 'mobile' ? '667px' : deviceView === 'tablet' ? '1024px' : '100%',
              backgroundColor: siteConfig.backgroundColor,
              fontFamily: siteConfig.fontFamily,
            }}
          >
            {/* Live Preview Frame - This would render the actual generated website */}
            <div className="min-h-full">
              {/* Simulated Website Preview */}
              {sections.filter(s => s.visible).map((section, index) => (
                <section
                  key={section.id}
                  data-section-id={section.id}
                  className={`transition-all ${index > 0 ? 'border-t border-[#222]' : ''}`}
                  style={{
                    padding: section.type === 'hero' || section.type === 'cta' ? '80px 24px' : '48px 24px',
                    backgroundColor: section.type === 'footer' ? '#111' : 'transparent',
                  }}
                >
                  {/* Header Section */}
                  {section.type === 'header' && (
                    <header className="flex items-center justify-between max-w-6xl mx-auto">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                          style={{ backgroundColor: siteConfig.primaryColor, color: '#fff' }}
                        >
                          F
                        </div>
                        <span className="font-semibold">{siteConfig.name}</span>
                      </div>
                      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Features</a>
                        <a href="#" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                        <button
                          className="px-4 py-2 rounded-lg text-white font-medium"
                          style={{ backgroundColor: siteConfig.primaryColor }}
                        >
                          Get Started
                        </button>
                      </nav>
                    </header>
                  )}

                  {/* Hero Section */}
                  {section.type === 'hero' && (
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: `${siteConfig.primaryColor}20`, color: siteConfig.primaryColor }}>
                        <Sparkles size={12} />
                        AI-Powered Website Builder
                      </div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Build stunning websites{' '}
                        <span style={{ color: siteConfig.primaryColor }}>in seconds</span>
                      </h1>
                      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Describe your vision and watch AI create production-ready websites instantly.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                          className="px-8 py-3 rounded-lg font-medium text-white"
                          style={{ backgroundColor: siteConfig.primaryColor }}
                        >
                          Start Building Free →
                        </button>
                        <button className="px-8 py-3 rounded-lg font-medium border border-[#333] text-gray-300 hover:border-[#555] transition-colors">
                          View Examples
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Features Section */}
                  {section.type === 'features' && (
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
                        <p className="text-gray-400">Powerful features that make website creation effortless.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { icon: Zap, title: 'Lightning Fast', desc: 'Build complete websites in under 30 seconds.' },
                          { icon: Palette, title: 'Full Customization', desc: 'Colors, fonts, layouts — all customizable.' },
                          { icon: Code, title: 'Clean Code', desc: 'Export production-ready HTML/CSS anytime.' },
                        ].map((feature) => (
                          <div key={feature.title} className="p-6 rounded-xl bg-[#1a1a1a] border border-[#222]">
                            <feature.icon size={24} style={{ color: siteConfig.primaryColor }} className="mb-4" />
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pricing Section */}
                  {section.type === 'pricing' && (
                    <div className="max-w-5xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
                        <p className="text-gray-400">Start free. Scale as you grow.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { name: 'Free', price: '$0', features: ['5 sites/mo', 'Basic templates', 'Subdomain'] },
                          { name: 'Pro', price: '$19', popular: true, features: ['Unlimited sites', 'Custom domain', 'Code export', 'Priority support'] },
                          { name: 'Enterprise', price: '$49', features: ['Everything in Pro', 'Team access', 'API access', 'SLA'] },
                        ].map((plan) => (
                          <div
                            key={plan.name}
                            className={`p-6 rounded-xl border ${
                              plan.popular
                                ? 'border-current relative'
                                : 'border-[#222]'
                            }`}
                            style={plan.popular ? { borderColor: siteConfig.primaryColor } : {}}
                          >
                            {plan.popular && (
                              <span
                                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white"
                                style={{ backgroundColor: siteConfig.primaryColor }}
                              >
                                Most Popular
                              </span>
                            )}
                            <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                            <div className="mb-4">
                              <span className="text-3xl font-bold">{plan.price}</span>
                              <span className="text-gray-500">/month</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                              {plan.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                                  <span className="text-green-500">✓</span> {f}
                                </li>
                              ))}
                            </ul>
                            <button
                              className="w-full py-2 rounded-lg font-medium"
                              style={
                                plan.popular
                                  ? { backgroundColor: siteConfig.primaryColor, color: '#fff' }
                                  : { backgroundColor: '#222', color: '#ccc' }
                              }
                            >
                              Get Started
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonials Section */}
                  {section.type === 'testimonials' && (
                    <div className="max-w-5xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Loved by creators</h2>
                        <p className="text-gray-400">See what our users have to say.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { name: 'Sarah K.', role: 'Founder, StartupCo', quote: 'Built our landing page in 5 minutes. Incredible!' },
                          { name: 'Mike R.', role: 'Freelancer', quote: 'The best AI builder I have used. Period.' },
                          { name: 'Lisa T.', role: 'Marketing Lead', quote: 'Saved us weeks of development time.' },
                        ].map((testimonial) => (
                          <div key={testimonial.name} className="p-6 rounded-xl bg-[#1a1a1a] border border-[#222]">
                            <p className="text-gray-300 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                              <div>
                                <p className="font-medium text-sm">{testimonial.name}</p>
                                <p className="text-xs text-gray-500">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Section */}
                  {section.type === 'cta' && (
                    <div className="max-w-3xl mx-auto text-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to build something amazing?
                      </h2>
                      <p className="text-gray-400 mb-8">
                        Join thousands of creators using FluxWith. Start for free today.
                      </p>
                      <button
                        className="px-8 py-3 rounded-lg font-medium text-white text-lg"
                        style={{ backgroundColor: siteConfig.primaryColor }}
                      >
                        Get Started Free →
                      </button>
                    </div>
                  )}

                  {/* Footer Section */}
                  {section.type === 'footer' && (
                    <footer className="max-w-6xl mx-auto">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        {[
                          { title: 'Product', links: ['Features', 'Pricing', 'Templates', 'Showcase'] },
                          { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
                          { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Changelog'] },
                          { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'License'] },
                        ].map((group) => (
                          <div key={group.title}>
                            <h4 className="font-semibold mb-4 text-sm">{group.title}</h4>
                            <ul className="space-y-2">
                              {group.links.map((link) => (
                                <li key={link}>
                                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                        <p>© 2024 {siteConfig.name}. All rights reserved.</p>
                        <p>Built with ❤️ by FluxWith</p>
                      </div>
                    </footer>
                  )}
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ==================== PUBLISH MODAL ==================== */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] rounded-2xl w-full max-w-md border border-[#333] shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-[#333]">
              <h2 className="text-xl font-bold">Publish Your Website</h2>
              <button
                onClick={() => setShowPublishModal(false)}
                className="p-2 hover:bg-[#252525] rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Subdomain Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Choose your subdomain</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="my-awesome-site"
                    className="flex-1 bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your-site-name"
                  />
                  <span className="text-gray-500 text-sm whitespace-nowrap">.fluxwith.app</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Your site will be live at: <span className="text-blue-400">my-awesome-site.fluxwith.app</span>
                </p>
              </div>

              {/* Premium Domain Option */}
              {isPremium ? (
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <p className="text-sm text-blue-400 font-medium mb-2">🎉 Premium Feature Unlocked!</p>
                  <p className="text-xs text-gray-400">You can use a custom domain. Enter it below:</p>
                  <input
                    type="text"
                    placeholder="mybrand.com"
                    className="w-full mt-2 bg-[#111] border border-[#333] rounded-lg px-4 py-2 text-sm"
                  />
                </div>
              ) : (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-sm text-yellow-400 font-medium mb-2">⭐ Want a custom domain?</p>
                  <p className="text-xs text-gray-400 mb-3">Upgrade to Premium to use your own domain (e.g., mybrand.com)</p>
                  <button
                    onClick={() => setIsPremium(true)}
                    className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
                  >
                    Upgrade to Premium ($19/mo)
                  </button>
                </div>
              )}

              {/* Watermark Notice */}
              {!isPremium && (
                <div className="flex items-start gap-3 p-3 bg-[#111] rounded-lg">
                  <span className="text-lg">ℹ️</span>
                  <div>
                    <p className="text-sm text-gray-300">Free sites include a "Powered by FluxWith" badge in the footer.</p>
                    <p className="text-xs text-gray-500 mt-1">Upgrade to remove this watermark.</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPublishModal(false)}
                  className="flex-1 py-3 border border-[#333] rounded-lg font-medium text-gray-300 hover:bg-[#252525] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('🚀 Publishing your site... (This would trigger Netlify API)')
                    setShowPublishModal(false)
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Upload size={18} />
                  Publish Now
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
          background: #333;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
    </div>
  )
}
