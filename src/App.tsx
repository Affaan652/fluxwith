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
import Blog from './pages/Blog'
import Community from './pages/Community'

// Company pages
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

// Auth pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Builder from './pages/Builder'

// Legal pages
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import CookiePolicy from './pages/CookiePolicy'

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
            
            {/* Resources */}
            <Route path="/docs" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            
            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Legal pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            
            {/* Protected dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected builder workspace */}
            <Route
              path="/builder"
              element={
                <ProtectedRoute>
                  <Builder />
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
