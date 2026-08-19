import NavBar from '../components/landing/NavBar'
import Hero3D from '../components/landing/Hero3D'
import StudioStrip from '../components/landing/StudioStrip'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import FeatureComparison from '../components/landing/FeatureComparison'
import Testimonials from '../components/landing/Testimonials'
import FinalCta from '../components/landing/FinalCta'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen bg-void overflow-hidden">
      {/* Navigation */}
      <NavBar />
      
      {/* Hero Section with 3D Animation */}
      <Hero3D />
      
      {/* Trusted By / Studio Strip */}
      <StudioStrip />
      
      {/* Features Grid */}
      <Features />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Feature Comparison Table */}
      <FeatureComparison />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Final CTA */}
      <FinalCta />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
