import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
  {
    id: "01",
    title: "Инициация",
    description: "Простая регистрация в партнерской сети через форму или звонок менеджеру.",
  },
  {
    id: "02",
    title: "Интеграция",
    description: "Передаете параметры проекта. Мы готовим расчет за 15 минут.",
  },
  {
    id: "03",
    title: "Продакшн",
    description: "Производим перегородки по вашим размерам с контролем качества на каждом этапе.",
  },
  {
    id: "04",
    title: "Результат",
    description: "Монтаж завершен, клиент счастлив. Вы получаете 10% на ваш счет.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-sand-50 border-y border-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[.4em] font-bold text-primary mb-4 block">Process</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-charcoal">
            Путь к <span className="italic font-light">совершенству.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-[1px] bg-primary/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <span className={`text-8xl font-serif font-black mb-8 transition-transform duration-500 group-hover:-translate-y-2 inline-block ${styles.stepNumber}`}>
                    {step.id}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-[.2em] text-charcoal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/50 font-light text-center lg:text-left leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
