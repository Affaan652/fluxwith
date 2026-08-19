import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
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
    <div className="min-h-screen bg-void">
      <NavBar />
      <Hero />
      <StudioStrip />
      <Features />
      <HowItWorks />
      <Pricing />
      <FeatureComparison />
      <Testimonials />
      <FinalCta />
      <Footer />
    </div>
  )
}
