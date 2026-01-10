import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Анна Смирнова",
    role: "Architect / Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800",
    content: "Сотрудничаю с OTIS уже второй год. Для меня критически важно качество монтажа, потому что это моё лицо перед заказчиком. Ребята ни разу не подвели.",
  },
  {
    id: 2,
    name: "Дмитрий Волков",
    role: "Founder, Volkov Bureau",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800",
    content: "Единственные подрядчики, которые грамотно читают чертежи. Техническая поддержка на высоте, помогают решать сложные узлы еще на этапе планирования.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-charcoal text-sand-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div className="order-2 lg:order-1">
            <span className="text-[11px] sm:text-[10px] md:text-[10px] uppercase tracking-[.4em] font-bold text-primary mb-8 block">Voices</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-light mb-16 leading-tight">
                  «{testimonials[currentIndex].content}»
                </p>
                <div className="flex items-center justify-between border-t border-sand-50/10 pt-12">
                  <div>
                    <h4 className="text-2xl font-serif font-bold tracking-tight mb-2">{testimonials[currentIndex].name}</h4>
                    <p className="text-[11px] sm:text-[10px] md:text-[10px] uppercase tracking-widest font-bold text-primary">{testimonials[currentIndex].role}</p>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={prevSlide} className="p-4 border border-sand-50/20 hover:border-primary transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="p-4 border border-sand-50/20 hover:border-primary transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-1000"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
            {/* Floating text stroke */}
            <div className="absolute -bottom-12 -left-12 font-serif text-6xl sm:text-8xl font-black text-stroke text-sand-50/10 pointer-events-none hidden sm:block">
              REVIEW
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
