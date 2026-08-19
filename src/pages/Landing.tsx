import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import FinalCta from '../components/landing/FinalCta'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
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
