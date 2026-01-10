import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Преимущества', href: '#benefits' },
  { name: 'Процесс', href: '#how-it-works' },
  { name: 'Условия', href: '#terms' },
  { name: 'Кейсы', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] ${styles.header} ${isScrolled ? styles.scrolled : 'py-8'}`}
    >
      <div className="container mx-auto px-6 overflow-hidden w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="group cursor-pointer flex flex-col items-start"
            onClick={() => scrollToSection('#hero')}
          >
            <span className="text-xl font-bold tracking-widest text-charcoal">OTIS</span>
            <span className="text-[11px] sm:text-[10px] md:text-[10px] tracking-[0.3em] font-medium text-primary mt-[-4px] group-hover:pl-2 transition-all duration-500">
              ARCHITECTURAL
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-xs font-semibold text-charcoal/70 hover:text-primary transition-colors py-2 ${styles.navLink}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="border border-charcoal text-charcoal px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-sand-50 transition-all duration-500"
            >
              Связаться
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal z-[110] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className={styles.mobileMenu}
          >
            <div className="flex flex-col h-full justify-center p-12 space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-4xl font-serif font-black text-charcoal hover:text-primary"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => scrollToSection('#contact')}
                className="text-left py-4 border-b border-charcoal/10 text-xl font-bold uppercase tracking-widest text-primary"
              >
                Стать партнёром
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
