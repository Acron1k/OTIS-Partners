import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-sand-50"
    >
      {/* Background Image with Grain Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/partitions/partition-1.jpg"
          alt="OTIS Partition"
          className="w-full h-full object-cover object-center scale-x-[-1]"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        {/* Noise texture for atmosphere */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]" />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 right-10 md:right-32 text-[12vw] md:text-[8vw] font-black text-primary/20 leading-none select-none"
      >
        10%
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-32 left-10 md:left-20 text-[8vw] md:text-[5vw] font-black text-sand-50 leading-none select-none"
      >
        OTIS
      </motion.div>

      {/* Main Content - Centered Layout */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-primary/10 backdrop-blur-md border border-primary/40">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase">
                Партнерская программа
              </span>
            </span>
          </motion.div>

          {/* Main Headline with Massive 10% */}
          <div className="relative">
            {/* Giant 10% Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -top-32 md:-top-48 left-1/2 -translate-x-1/2 text-[20vw] md:text-[28vw] font-black text-primary leading-none select-none pointer-events-none"
            >
              10%
            </motion.div>

            {/* Main Text */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-sand-50 leading-tight tracking-tight"
            >
              <span className="block mb-2 md:mb-4">Зарабатывайте</span>
              <span className="block relative">
                <span className="text-primary">на перегородках</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 h-3 md:h-4 bg-primary/40"
                />
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 md:mt-10 text-base md:text-xl text-sand-50/70 max-w-xl leading-relaxed"
          >
            Передайте контакт — получайте <span className="text-primary font-bold">10%</span>.<br className="hidden md:block" />
            Замер, монтаж, уборка — мы берём на себя.
          </motion.p>

          {/* CTA & Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-6 md:gap-8"
          >
            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-4 md:px-12 md:py-5 bg-primary text-charcoal text-sm md:text-base font-black uppercase tracking-widest hover:bg-sand-50 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-4">
                Стать партнёром
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            {/* Divider */}
            <span className="hidden sm:block text-sand-50/30 text-2xl">•</span>

            {/* Target Audience */}
            <span className="text-sand-50/60 text-sm md:text-base">
              Для <span className="text-sand-50">дизайнеров</span> и <span className="text-sand-50">салонов</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats Cards - Glassmorphism */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 right-6 md:right-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-5 md:p-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-black text-primary">20+</span>
              <span className="text-xs md:text-sm text-sand-50/60 uppercase tracking-wider border-l border-white/10 pl-3">партнёров</span>
            </div>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-5 md:p-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-black text-sand-50">3М+</span>
              <span className="text-xs md:text-sm text-sand-50/60 uppercase tracking-wider border-l border-white/10 pl-3">выплачено</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 md:bottom-12 right-6 md:right-12"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-sand-50/50 hover:text-primary transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest">Листайте</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 h-1 bg-primary"
      />
    </section>
  );
}
