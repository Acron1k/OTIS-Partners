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
      className="relative min-h-[calc(100vh-80px)] flex items-center pt-20 lg:pt-0 overflow-hidden bg-sand-50"
    >
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-primary">
                Партнерская программа
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] text-charcoal tracking-tighter mb-8"
            >
              Эстетика <br />
              вашей <span className="text-primary">прибыли.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg"
            >
              Создавайте премиальные пространства. Получайте <span className="text-charcoal font-bold">10% вознаграждения</span> за каждую реализованную перегородку в вашем проекте.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <button
                onClick={scrollToContact}
                className="bg-primary text-sand-50 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-all duration-500 flex items-center gap-4 group shadow-xl shadow-primary/20"
              >
                Стать партнёром
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-sand-50 object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Partner"
                  />
                ))}
                <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-sand-50 bg-sand-100 text-[10px] font-bold text-charcoal/50">
                  +20
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/3] lg:aspect-square xl:aspect-[4/3] overflow-hidden shadow-2xl rounded-2xl border border-charcoal/5"
            >
              <img
                src="/images/partitions/partition-1.jpg"
                alt="OTIS Partition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/5" />
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-8 -left-0 lg:-left-12 bg-white p-8 border border-charcoal/5 shadow-2xl flex flex-col gap-6 min-w-[280px] rounded-xl"
            >
              <div className="flex justify-between items-end border-b border-charcoal/5 pb-4">
                <div>
                  <p className="text-3xl font-black text-charcoal leading-none mb-1">20+</p>
                  <p className="text-[10px] uppercase font-bold text-charcoal/40 tracking-widest">Партнёров</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-primary leading-none mb-1">3М+</p>
                  <p className="text-[10px] uppercase font-bold text-charcoal/40 tracking-widest text-right">Выплачено</p>
                </div>
              </div>
              <p className="text-xs text-charcoal/60 leading-relaxed italic">
                «Мы гордимся тем, что профессионалы выбирают наши решения для своих лучших проектов»
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
