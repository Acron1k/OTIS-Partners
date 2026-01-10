import { lazy, Suspense, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Header = lazy(() => import('./components/Header'))
const Hero = lazy(() => import('./components/Hero'))
const Benefits = lazy(() => import('./components/Benefits'))
const ProductsExpertise = lazy(() => import('./components/ProductsExpertise'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const PartnershipTerms = lazy(() => import('./components/PartnershipTerms'))
const Projects = lazy(() => import('./components/Projects'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    }
  }, [prefersReducedMotion])

  return (
    <div className="min-h-screen bg-sand-50">
      <Suspense fallback={<ComponentLoader />}>
        <Header />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Benefits />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProductsExpertise />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PartnershipTerms />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

function ComponentLoader() {
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = !prefersReducedMotion

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        animate={shouldAnimate ? { rotate: 360 } : undefined}
        transition={shouldAnimate ? { duration: 1, repeat: Infinity, ease: "linear" } : undefined}
        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
      />
    </div>
  )
}

function SectionLoader() {
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = !prefersReducedMotion

  return (
    <div className="flex items-center justify-center py-32">
      <motion.div
        animate={shouldAnimate ? { rotate: 360 } : undefined}
        transition={shouldAnimate ? { duration: 1, repeat: Infinity, ease: "linear" } : undefined}
        className="w-8 h-8 border-4 border-primary/30 border-t-transparent rounded-full"
      />
    </div>
  )
}

export default App
