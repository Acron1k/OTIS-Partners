export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-50 pt-24 pb-12 border-t border-charcoal/5 relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 font-black text-[20vw] leading-none text-charcoal/[0.02] translate-x-1/4 -translate-y-1/4 select-none pointer-events-none uppercase">
        Otis
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">

          <div className="max-w-xs">
            <div className="mb-8">
              <span className="text-3xl font-black tracking-tighter text-charcoal block">OTIS</span>
            </div>
            <p className="text-charcoal/40 font-medium text-sm leading-relaxed mb-8">
              Мы создаем инструмент для зонирования пространств, который вдохновляет на новые архитектурные решения и помогает профессионалам зарабатывать.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-charcoal/30 mb-2">Навигация</span>
              <a href="#benefits" className="text-sm font-bold hover:text-primary transition-colors italic">Преимущества</a>
              <a href="#projects" className="text-sm font-bold hover:text-primary transition-colors italic">Кейсы</a>
              <a href="#terms" className="text-sm font-bold hover:text-primary transition-colors italic">Условия</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-charcoal/30 mb-2">Партнерам</span>
              <a href="#faq" className="text-sm font-bold hover:text-primary transition-colors italic">FAQ</a>
              <a href="#contact" className="text-sm font-bold hover:text-primary transition-colors italic">Стать партнером</a>
              <a href="https://t.me/otis_group_peregorodki" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-primary transition-colors italic text-primary">Telegram канал</a>
            </div>
            <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-charcoal/30 mb-2">Соцсети</span>
              <div className="flex gap-6">
                <a href="https://vk.com/otis_peregorodki" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-black border-b border-charcoal/10 hover:border-primary transition-all pb-1">ВКонтакте</a>
                <a href="https://t.me/otis_group_peregorodki" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-black border-b border-charcoal/10 hover:border-primary transition-all pb-1">Telegram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-charcoal/5 pt-12 gap-6">
          <p className="text-[10px] uppercase font-extrabold tracking-widest text-charcoal/30">
            © {currentYear} OTIS. Все права защищены.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase font-extrabold tracking-widest text-charcoal/30 hover:text-charcoal transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
