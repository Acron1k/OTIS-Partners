import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const privileges = [
  {
    target: "Дизайнерам и хоумстеджерам",
    items: [
      "Помощь с технической частью",
      "Partner Box с образцами",
      "Консультации и расчёты",
      "Проектировщики могут допродавать"
    ]
  },
  {
    target: "Мебельным салонам",
    items: [
      "Образцы за нашу стоимость",
      "Обучение персонала",
      "Двери-купе и перегородки",
      "Расширение ассортимента"
    ]
  },
  {
    target: "Салонам дверей и онлайн-магазинам",
    items: [
      "Раздвижные системы под ключ",
      "Отслеживание в Кайтене",
      "Полный сервис от замера",
      "10% за переданный контакт"
    ]
  }
];

export default function PartnershipTerms() {
  return (
    <section id="terms" className="py-16 md:py-24 bg-charcoal text-sand-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          <div className="text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary mb-3 block">Условия</span>
            <h2 className="text-3xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
              Честный процент <br className="hidden md:block" />в <span className="text-primary italic">прозрачном партнерстве.</span>
            </h2>
            <div className="flex items-baseline justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-12">
              <span className="text-6xl md:text-[10rem] font-black text-primary leading-none">10%</span>
              <span className="text-lg md:text-2xl font-bold uppercase tracking-widest text-sand-50/40">Комиссия</span>
            </div>
            <p className="text-sm md:text-lg text-sand-50/50 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 font-medium">
              Мы создаем инфраструктуру, помогающую вам реализовывать проекты быстрее и качественнее.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-primary text-charcoal px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-sand-50 hover:text-charcoal transition-all duration-500"
            >
              Присоединиться к программе
            </button>
          </div>

          <div className="space-y-6 md:space-y-12 w-full">
            {privileges.map((group, idx) => (
              <motion.div
                key={group.target}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
              >
                <h3 className="text-xs md:text-xl font-bold mb-4 md:mb-6 text-primary uppercase tracking-widest">{group.target}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0" />
                      <span className="text-xs md:text-sm font-medium text-sand-50/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
