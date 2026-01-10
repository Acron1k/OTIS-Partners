import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Как это работает', href: '#how-it-works' },
    { name: 'Условия', href: '#terms' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Telegram', href: '#', icon: Send },
    { name: 'WhatsApp', href: '#', icon: Send },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className="bg-charcoal-900 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company */}
          <div className={styles.column}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="text-3xl font-black tracking-widest text-sand-50 block">OTIS</span>
                <span className="text-[11px] sm:text-[10px] md:text-[10px] tracking-[0.3em] font-bold text-primary block mt-1">ARCHITECTURAL</span>
              </div>
              <p className="text-sand-50/60 leading-relaxed text-sm">
                Мы создаем перегородки, которые влюбляют. Партнёрская программа для архитекторов и дизайнеров.
              </p>
            </motion.div>
          </div>

          {/* Contacts */}
          <div className={styles.column}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[11px] sm:text-[10px] md:text-[10px] uppercase font-bold tracking-widest text-primary mb-6 block">Контакты</span>
              <div className="space-y-4">
                <a href="tel:+79990000000" className="flex items-center gap-3 text-sand-50/80 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 text-sand-50/40 group-hover:text-primary transition-colors" />
                  <span className="text-sm">+7 (999) 000-00-00</span>
                </a>
                <a href="mailto:info@otis.ru" className="flex items-center gap-3 text-sand-50/80 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 text-sand-50/40 group-hover:text-primary transition-colors" />
                  <span className="text-sm">info@otis.ru</span>
                </a>
                <div className="flex items-center gap-3 text-sand-50/80">
                  <MapPin className="w-4 h-4 text-sand-50/40" />
                  <span className="text-sm">Москва, Россия</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className={styles.column}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-[11px] sm:text-[10px] md:text-[10px] uppercase font-bold tracking-widest text-primary mb-6 block">Навигация</span>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-sand-50/80 hover:text-primary transition-colors relative inline-block group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social */}
          <div className={styles.column}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-[11px] sm:text-[10px] md:text-[10px] uppercase font-bold tracking-widest text-primary mb-6 block">Соцсети</span>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-sand-50/80 hover:text-primary transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-sand-50/40 group-hover:text-primary transition-colors" />
                    <span className="text-sm">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-sand-50/10 pt-8"
        >
          <p className="text-center text-xs text-sand-50/40 uppercase tracking-widest">
            © 2026 OTIS ARCHITECTURAL. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
