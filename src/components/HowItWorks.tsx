import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Передаёте контакт",
    description: "Просто отправляете контакт клиента или параметры проекта. Больше ничего не нужно.",
  },
  {
    id: "02",
    title: "Замер + 3D-макет",
    description: "Наш замерщик выезжает, делает замер и готовит 3D-визуализацию с точной сметой.",
  },
  {
    id: "03",
    title: "Производство и монтаж",
    description: "Изготавливаем конструкции и монтируем за 1 день. Убираем за собой.",
  },
  {
    id: "04",
    title: "Ваша выплата",
    description: "Сразу после оплаты заказа клиентом вы получаете 10% партнерского вознаграждения.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary mb-2 block">Алгоритм</span>
          <h2 className="text-3xl md:text-6xl font-black text-charcoal leading-tight">
            Вы — <span className="text-primary italic">контакт.</span> Мы — всё остальное.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary/10 mb-4 md:mb-6 group-hover:text-primary/20 transition-colors">
                {step.id}
              </div>
              <h3 className="text-base md:text-lg font-bold uppercase tracking-widest text-charcoal mb-2 md:mb-4">
                {step.title}
              </h3>
              <p className="text-charcoal/50 font-medium text-xs md:text-sm leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-charcoal/40 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Отслеживайте статус заказа в реальном времени в Кайтене — от замера до завершения монтажа.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
