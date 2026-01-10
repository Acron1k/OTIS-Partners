import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Architect",
    reward: "10%",
    description: "Для масштабных объектов и сложного остекления.",
    features: [
      "Техническая поддержка (DWG/BIM)",
      "Расчет статических нагрузок",
      "Приоритетный менеджер проекта",
      "Шеф-монтаж на объекте",
    ]
  },
  {
    name: "Designer",
    reward: "10%",
    popular: true,
    description: "Максимальная гибкость для творческих интерьеров.",
    features: [
      "Partner Box с образцами материалов",
      "3D модели всех коллекций",
      "Выплата бонусов в день оплаты",
      "Фотосессия готового объекта",
    ]
  },
  {
    name: "Homestager",
    reward: "10%",
    description: "Быстрые решения для инвест-проектов.",
    features: [
      "Готовые модули со склада",
      "Монтаж за 48 часов",
      "Бюджетная линейка Slim",
      "Экспресс-коннект с замерщиком",
    ]
  }
];

export default function PartnershipTerms() {
  return (
    <section id="terms" className="py-32 bg-sand-50 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-charcoal/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-charcoal/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-charcoal/5 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-[10px] md:text-[10px] uppercase tracking-[.4em] font-bold text-primary mb-4 block">Membership</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black text-charcoal leading-none">
              Выигрывают <br /><span className="italic font-light">все.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`p-12 md:p-16 flex flex-col items-start ${index !== 2 ? 'md:border-r border-charcoal/5' : ''} ${tier.popular ? 'bg-sand-100/50' : ''}`}
            >
              <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-[.3em] text-primary mb-6">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-serif font-black text-charcoal">{tier.reward}</span>
                </div>
                <p className="text-charcoal/50 font-light leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-6 mb-16 flex-grow w-full">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-charcoal/5 pb-4 last:border-0 hover:pl-2 transition-all duration-300 group">
                    <Check className="w-4 h-4 text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs uppercase tracking-widest font-bold text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-6 text-[11px] sm:text-[10px] md:text-[10px] font-bold uppercase tracking-[.3em] transition-all duration-500 border border-charcoal ${tier.popular ? 'bg-charcoal text-sand-50 hover:bg-primary hover:border-primary' : 'hover:bg-charcoal hover:text-sand-50'
                  }`}
              >
                Join Program
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
