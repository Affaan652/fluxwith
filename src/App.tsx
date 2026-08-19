import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import ConfigWarning from './components/ConfigWarning'
import ErrorBoundary from './components/ErrorBoundary'
import Landing from './pages/Landing'
import Showcase from './pages/Showcase'
import PricingPage from './pages/PricingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ConfigWarning />
          <Routes>
            {/* Main landing page with 3D animations */}
            <Route path="/" element={<Landing />} />
            
            {/* Features showcase page - Page 2 */}
            <Route path="/showcase" element={<Showcase />} />
            
            {/* Dedicated pricing page - Page 3 */}
            <Route path="/pricing" element={<PricingPage />} />
            
            {/* Auth pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Legal pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
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
