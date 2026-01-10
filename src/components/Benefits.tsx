import { motion } from 'framer-motion';
import {
  Percent,
  Zap,
  Ruler,
  ShieldCheck,
  Hammer,
  CreditCard,
  Headphones,
  ArrowUpRight
} from 'lucide-react';

const benefits = [
  {
    title: "10% Комиссия",
    description: "Честное вознаграждение за ваше доверие и рекомендации.",
    icon: Percent,
    className: "md:col-span-2 md:row-span-2 bg-charcoal text-sand-50",
  },
  {
    title: "Расчёт за 15 мин",
    description: "Ценим время профессионалов.",
    icon: Zap,
    className: "bg-white",
  },
  {
    title: "Бесплатный замер",
    description: "МКАД + 20км.",
    icon: Ruler,
    className: "bg-white",
  },
  {
    title: "Гарантия 5 лет",
    description: "На изделия и монтаж.",
    icon: ShieldCheck,
    className: "bg-white",
  },
  {
    title: "Рассрочка 0%",
    description: "Без скрытых условий.",
    icon: CreditCard,
    className: "bg-white md:col-span-2",
  },
  {
    title: "Монтаж «под ключ»",
    description: "Контролируем каждый узел.",
    icon: Hammer,
    className: "bg-primary text-sand-50",
  },
  {
    title: "Support",
    description: "Личный менеджер 24/7.",
    icon: Headphones,
    className: "bg-white",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 bg-sand-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-primary mb-4 block">Standards</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-charcoal leading-none">
              Инфраструктура <br /><span className="italic font-light">вашего успеха.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-charcoal/50 max-w-xs font-light"
          >
            Мы упростили все процессы, чтобы вы могли сосредоточиться на творчестве, а мы — на техническом совершенстве.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-none flex flex-col justify-between group cursor-default border border-charcoal/5 hover:border-primary/30 transition-all duration-700 ${benefit.className}`}
            >
              <div>
                <benefit.icon className={`w-8 h-8 mb-12 transition-transform duration-500 group-hover:scale-110 ${benefit.className.includes('bg-charcoal') || benefit.className.includes('bg-primary') ? 'text-sand-50/50' : 'text-primary'}`} />
                <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">{benefit.title}</h3>
                <p className={`text-sm font-light ${benefit.className.includes('text-sand-50') ? 'text-sand-50/60' : 'text-charcoal/60'}`}>
                  {benefit.description}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <ArrowUpRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ${benefit.className.includes('text-sand-50') ? 'text-sand-50' : 'text-primary'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
