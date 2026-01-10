import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-50 pt-32 pb-12 border-t border-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">

          <div className="max-w-xs">
            <div className="mb-8">
              <span className="text-4xl font-black tracking-widest text-charcoal block">OTIS</span>
              <span className="text-[10px] tracking-[.4em] font-bold text-primary">ARCHITECTURAL</span>
            </div>
            <p className="text-charcoal/40 font-light leading-relaxed">
              Мы создаем инструмент для зонирования пространств, который вдохновляет на новые архитектурные решения.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 mb-2">Navigation</span>
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors italic">Преимущества</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors italic">Кейсы</a>
              <a href="#terms" className="text-sm font-medium hover:text-primary transition-colors italic">Условия</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 mb-2">Support</span>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors italic">FAQ</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors italic">Контакты</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors italic">Telegram</a>
            </div>
            <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 mb-2">Social</span>
              <div className="flex gap-6">
                <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-charcoal/10 hover:border-primary transition-all">Instagram</a>
                <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-charcoal/10 hover:border-primary transition-all">Bēhance</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-charcoal/5 pt-12 gap-6">
          <p className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30">
            © {currentYear} OTIS Gmbh. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 hover:text-charcoal transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="container mx-auto px-6 mt-12 overflow-hidden">
        <h2 className="text-[18vw] font-serif font-black text-charcoal/[0.02] leading-none text-center select-none pointer-events-none">
          PARTNERSHIP
        </h2>
      </div>
    </footer>
  );
}
