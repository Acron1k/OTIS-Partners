import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-sand-50"
    >
      {/* Background Image - Full Height */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/partitions/partition-1.jpg"
          alt="OTIS Partition"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-50 via-sand-50/95 to-sand-50/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 lg:mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-primary rounded-full hidden lg:block" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-extrabold text-primary">
                Партнерская программа
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl xl:text-8xl font-black leading-[1.1] md:leading-[1.05] text-charcoal tracking-tighter mb-6 md:mb-8"
            >
              Получайте <span className="text-primary">10%</span> <br className="hidden md:block" />
              за рекомендацию.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-charcoal/70 leading-relaxed mb-8 md:mb-10 max-w-lg"
              >
                Передайте контакт клиента — мы сделаем замер, 3D-макет и монтаж. Для дизайнеров, салонов и мебельных магазинов.
              </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary text-charcoal px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-charcoal hover:text-sand-50 transition-all duration-500 flex items-center justify-center gap-4 group shadow-xl shadow-primary/20"
              >
                Стать партнёром
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-sand-50 object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Partner"
                  />
                ))}
                <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-sand-50 bg-charcoal/10 text-[10px] font-bold text-charcoal/50">
                  +20
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-auto lg:absolute lg:right-24 lg:bottom-12 bg-white/90 backdrop-blur-sm p-6 md:p-8 border border-charcoal/5 shadow-xl flex flex-col gap-4 md:gap-6 rounded-2xl max-w-xs"
          >
            <div className="flex justify-between items-end border-b border-charcoal/5 pb-4">
              <div>
                <p className="text-2xl md:text-3xl font-black text-charcoal leading-none mb-1">20+</p>
                <p className="text-[10px] uppercase font-bold text-charcoal/40 tracking-widest">Партнёров</p>
              </div>
              <div className="text-right">
                <p className="text-2xl md:text-3xl font-black text-primary leading-none mb-1">3М+</p>
                <p className="text-[10px] uppercase font-bold text-charcoal/40 tracking-widest text-right">Выплачено</p>
              </div>
            </div>
            <p className="text-[11px] md:text-xs text-charcoal/60 leading-relaxed">
              Профессионалы выбирают наши решения
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
