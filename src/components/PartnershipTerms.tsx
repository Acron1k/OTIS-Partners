import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const privileges = [
  {
    target: "Дизайнерам",
    items: [
      "Partner Box с образцами материалов",
      "Полная база 3D моделей (3ds Max, Revit)",
      "Фотосессия реализованного объекта",
      "Упоминание в наших соцсетях"
    ]
  },
  {
    target: "Архитекторам",
    items: [
      "Техническое сопровождение (DWG/BIM)",
      "Расчет сложных статических нагрузок",
      "Помощь в проектировании узлов",
      "Шеф-монтаж на объекте"
    ]
  },
  {
    target: "Хоумстейджерам",
    items: [
      "Готовые модули со склада",
      "Монтаж в сжатые сроки (от 48 часов)",
      "Специальная бюджетная линейка",
      "Экспресс-выезд замерщика"
    ]
  }
];

export default function PartnershipTerms() {
  return (
    <section id="terms" className="py-24 bg-charcoal text-sand-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-4 block text-left">Условия</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Честный процент <br />в <span className="text-primary italic">прозрачном партнерстве.</span>
            </h2>
            <div className="flex items-baseline gap-4 mb-12">
              <span className="text-8xl md:text-[10rem] font-black text-primary leading-none">10%</span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-sand-50/40">Комиссия</span>
            </div>
            <p className="text-lg text-sand-50/50 mb-12 max-w-md font-medium">
              Мы не просто платим за рекомендации. Мы создаем инфраструктуру, помогающую вам реализовывать проекты быстрее и качественнее.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-sand-50 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-sand-50 hover:text-charcoal transition-all duration-500"
            >
              Присоедениться к программе
            </button>
          </div>

          <div className="space-y-12">
            {privileges.map((group, idx) => (
              <motion.div
                key={group.target}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
              >
                <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-widest text-xs">{group.target}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-sand-50/70 italic">{item}</span>
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
