import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Елена Соколова",
    role: "Дизайнер интерьеров",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300",
    content: "Сотрудничаю с OTIS уже второй год. Для меня критически важно качество монтажа, потому что это моё лицо перед заказчиком. Ребята ни разу не подвели.",
  },
  {
    id: 2,
    name: "Александр Морозов",
    role: "Основатель бюро Morozov Arch",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    content: "Единственные подрядчики, которые грамотно читают чертежи. Техническая поддержка на высоте, помогают решать сложные узлы еще на этапе планирования.",
  },
  {
    id: 3,
    name: "Марина Волкова",
    role: "Хоумстейджер",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300",
    content: "Благодаря OTIS я могу предлагать клиентам быстрые и стильные решения по зонированию. 10% комиссия выплачивается четко и вовремя.",
  },
  {
    id: 4,
    name: "Игорь Степанов",
    role: "Частный архитектор",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=300",
    content: "Прекрасный сервис и отношение к деталям. Очень удобно, что есть персональный менеджер, который всегда на связи.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-charcoal text-sand-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-3 block">Отзывы</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight italic">
              Мнение <span className="text-primary not-italic">профессионалов.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-4 border border-sand-50/10 hover:border-primary transition-colors rounded-full">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-4 border border-sand-50/10 hover:border-primary transition-colors rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center"
            >
              <div className="relative aspect-square max-w-[200px] lg:max-w-none mx-auto w-full lg:w-48 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-medium italic mb-10 leading-relaxed text-sand-50/80">
                  «{testimonials[currentIndex].content}»
                </p>
                <div>
                  <h4 className="text-xl font-bold tracking-tight mb-1 uppercase tracking-widest text-xs">{testimonials[currentIndex].name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-primary">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
