import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* Text Side */}
          <motion.div
            style={{ y: textY, opacity }}
            className="w-full lg:w-3/5 z-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-[10px] uppercase tracking-[.4em] font-bold text-primary">
                Interior Partnership Program
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="text-6xl sm:text-8xl lg:text-[10rem] font-serif font-black leading-[0.85] text-charcoal tracking-tighter"
            >
              Эстетика <br />
              <span className="italic font-light">прибыли.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 max-w-md"
            >
              <p className="text-xl text-charcoal/60 leading-relaxed font-light mb-8">
                Мы создаем перегородки, которые влюбляют. <br />
                Вы получаете <span className="text-charcoal font-bold">10% вознаграждения</span> за каждый реализованный проект.
              </p>

              <div className="flex items-center gap-8">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary text-sand-50 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-all duration-500 flex items-center gap-4 group"
                >
                  Стать партнёром
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <div className="w-full lg:w-2/3 lg:-ml-32 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <motion.img
                style={{ y: imgY }}
                src="/images/partitions/partition-1.jpg"
                alt="OTIS Partition"
                className="w-full h-[120%] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply" />
            </motion.div>

            {/* Overlay Label Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-12 -right-6 lg:-right-12 bg-sand-50 p-10 border border-charcoal/5 shadow-2xl max-w-xs hidden sm:block"
            >
              <span className="block text-[10px] uppercase tracking-[.3em] font-bold text-primary mb-4">Quality Index</span>
              <p className="font-serif text-2xl italic mb-4">«Каждая деталь имеет значение в архитектуре света»</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl font-black text-charcoal leading-none">200+</p>
                  <p className="text-[10px] uppercase font-bold text-charcoal/40">Партнёров</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-charcoal leading-none">10М+</p>
                  <p className="text-[10px] uppercase font-bold text-charcoal/40">Выплачено</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Large Text Stroke */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 font-serif font-black text-[25vw] leading-none text-charcoal/5 italic pointer-events-none select-none">
        OTIS
      </div>
    </section>
  );
}
