import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Преимущества', href: '#benefits' },
  { name: 'Продукция', href: '#products-expertise' },
  { name: 'Схема работы', href: '#how-it-works' },
  { name: 'Условия', href: '#terms' },
  { name: 'Кейсы', href: '#projects' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-sand-50/95 backdrop-blur-md py-3 mobile-landscape:py-2 shadow-sm border-b border-charcoal/5'
          : 'bg-transparent py-6 md:py-8 mobile-landscape:py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 mobile-landscape:px-4">
        <div className="flex items-center justify-between gap-2">
          <div
            className="cursor-pointer flex flex-col items-start shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={`text-xl md:text-2xl mobile-landscape:text-lg font-black tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-charcoal' : 'text-sand-50'
            }`}>
              OTIS
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal/70 hover:text-primary' : 'text-sand-50/80 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                isScrolled
                  ? 'bg-primary text-charcoal hover:bg-charcoal hover:text-sand-50'
                  : 'bg-primary/10 border border-primary/40 text-primary hover:bg-primary hover:text-charcoal'
              }`}
            >
              Стать партнёром
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 mobile-landscape:p-1.5 transition-colors duration-300 shrink-0 ${
              isScrolled ? 'text-charcoal' : 'text-sand-50'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} className="mobile-landscape:w-5 mobile-landscape:h-5" /> : <Menu size={24} className="mobile-landscape:w-5 mobile-landscape:h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-sand-50 border-b border-charcoal/5 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-lg font-bold text-charcoal uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full py-4 bg-primary text-charcoal font-bold uppercase tracking-widest rounded-full"
              >
                Стать партнёром
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
