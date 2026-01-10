import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const Header = lazy(() => import('./components/Header'))
const Hero = lazy(() => import('./components/Hero'))
const Benefits = lazy(() => import('./components/Benefits'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const PartnershipTerms = lazy(() => import('./components/PartnershipTerms'))
const Projects = lazy(() => import('./components/Projects'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Hero />
        <Benefits />
        <HowItWorks />
        <PartnershipTerms />
        <Projects />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full"
      />
    </div>
  )
}

export default App
