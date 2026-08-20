import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import FinalCta from '../components/landing/FinalCta'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      {/* Navigation */}
      <NavBar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Grid */}
      <Features />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Final CTA */}
      <FinalCta />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
