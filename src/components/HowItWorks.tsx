import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Заявка",
    description: "Связываетесь с нами любым удобным способом и передаете контакты клиента или параметры проекта.",
  },
  {
    id: "02",
    title: "Расчёт",
    description: "Мы готовим детальное коммерческое предложение и техническую документацию за 15 минут.",
  },
  {
    id: "03",
    title: "Реализация",
    description: "Изготавливаем конструкции и производим чистый монтаж силами собственных бригад.",
  },
  {
    id: "04",
    title: "Выплата",
    description: "Сразу после оплаты заказа клиентом вы получаете свое партнерское вознаграждение.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-3 block">Алгоритм</span>
          <h2 className="text-4xl md:text-6xl font-black text-charcoal leading-tight">
            Простая схема <span className="text-primary italic">взаимодействия.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <div className="text-6xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                {step.id}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-charcoal mb-4">
                {step.title}
              </h3>
              <p className="text-charcoal/50 font-medium text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
