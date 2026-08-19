import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import ConfigWarning from './components/ConfigWarning'
import ErrorBoundary from './components/ErrorBoundary'
// Main pages
import Landing from './pages/Landing'
import Showcase from './pages/Showcase'
import PricingPage from './pages/PricingPage'
// Product & Features
import Product from './pages/Product'
import FeaturesPage from './pages/FeaturesPage'
// Resources pages
import Documentation from './pages/Documentation'
import ApiReference from './pages/ApiReference'
import Guides from './pages/Guides'
import Blog from './pages/Blog'
import Community from './pages/Community'
// Company pages
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import Press from './pages/Press'
// Product updates
import Changelog from './pages/Changelog'
import Roadmap from './pages/Roadmap'
// Auth pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
// Legal pages
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import CookiePolicy from './pages/CookiePolicy'
import Gdpr from './pages/Gdpr'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ConfigWarning />
          <Routes>
            {/* Main landing page */}
            <Route path="/" element={<Landing />} />
            
            {/* Product & Features */}
            <Route path="/product" element={<Product />} />
            <Route path="/features" element={<FeaturesPage />} />
            
            {/* Pricing & Showcase */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/showcase" element={<Showcase />} />
            
            {/* Changelog & Roadmap */}
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/roadmap" element={<Roadmap />} />
            
            {/* Resources */}
            <Route path="/docs" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            
            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/press" element={<Press />} />
            
            {/* Auth pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Legal pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<Gdpr />} />
            
            {/* Protected dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
