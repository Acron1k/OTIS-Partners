import { motion } from 'framer-motion';
import {
  Percent,
  Zap,
  ShieldCheck,
  Hammer,
  ArrowUpRight
} from 'lucide-react';

const benefits = [
  {
    title: "Комиссия партнерам",
    description: "Честная выплата за каждую реализованную перегородку.",
    icon: Percent,
    value: "10%",
    className: "md:col-span-3 md:row-span-1 bg-charcoal text-sand-50",
    isLarge: true
  },
  {
    title: "Расчёт за 15 минут",
    description: "Ценим время профессионалов.",
    icon: Zap,
    className: "bg-white",
  },
  {
    title: "Гарантия 5 лет",
    description: "На все изделия и монтаж.",
    icon: ShieldCheck,
    className: "bg-white",
  },
  {
    title: "Монтаж «под ключ»",
    description: "Контролируем каждый узел.",
    icon: Hammer,
    className: "bg-primary text-sand-50",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-sand-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] uppercase tracking-[.3em] font-extrabold text-primary mb-2 block">Преимущества</span>
            <h2 className="text-3xl md:text-6xl font-black text-charcoal leading-tight">
              Ваш успех в <span className="text-primary italic">деталях.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-charcoal/50 text-sm md:text-base max-w-xs font-medium leading-relaxed"
          >
            Работайте с лидером рынка. Мы берем на себя всю техническую часть.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl flex ${benefit.isLarge ? 'flex-col sm:flex-row items-start sm:items-center justify-between' : 'flex-col justify-between'} group cursor-default border border-charcoal/5 hover:border-primary/20 transition-all duration-500 ${benefit.className}`}
            >
              <div className={`${benefit.isLarge ? 'flex-grow w-full' : ''}`}>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <benefit.icon className={`w-5 h-5 md:w-6 md:h-6 ${benefit.className.includes('bg-charcoal') || benefit.className.includes('bg-primary') ? 'text-sand-50/40' : 'text-primary'}`} />
                  <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">{benefit.title}</h3>
                </div>

                {benefit.value && (
                  <div className="text-6xl md:text-9xl font-black text-primary mb-4 leading-none">
                    {benefit.value}
                  </div>
                )}

                <p className={`text-xs md:text-sm font-medium ${benefit.className.includes('text-sand-50') ? 'text-sand-50/60' : 'text-charcoal/50'}`}>
                  {benefit.description}
                </p>
              </div>

              {!benefit.isLarge && (
                <div className="mt-6 md:mt-8 flex justify-end">
                  <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 ${benefit.className.includes('text-sand-50') ? 'text-sand-50' : 'text-primary'}`} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
