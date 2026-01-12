import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Percent,
  Zap,
  ShieldCheck,
  Hammer,
  ArrowUpRight,
  Users,
  Clock,
  GraduationCap,
  HelpCircle,
  X
} from 'lucide-react';

const benefits = [
  {
    id: 'commission',
    title: "Комиссия партнерам",
    shortDesc: "Честная выплата за каждую реализованную перегородку.",
    fullDesc: "Выплачиваем 10% от суммы заказа в день поступления оплаты от клиента. Работаем официально по агентскому договору. Выплата производится без задержек на расчётный счёт или карту.",
    icon: Percent,
    value: "10%",
    className: "md:col-span-2 bg-charcoal text-sand-50",
    isLarge: true
  },
  {
    id: 'warranty',
    title: "Гарантия 5 лет",
    shortDesc: "На все изделия и монтаж.",
    fullDesc: "Предоставляем гарантию 5 лет на все материалы и выполненные работы. В случае возникновения проблем оперативно устраняем неисправности бесплатно. Замена фурнитуры при необходимости.",
    icon: ShieldCheck,
    className: "bg-primary text-charcoal",
    isHighlight: true
  },
  {
    id: 'only-contact',
    title: "Вам — только контакт",
    shortDesc: "Остальное берём на себя: от замера до монтажа.",
    fullDesc: "Ваша задача как партнёра — передать контакт клиента или параметры проекта. Всё остальное делаем мы: выезд замерщика, создание 3D-макета, расчёт сметы, изготовление, монтаж и уборка после установки.",
    icon: Zap,
    className: "bg-white",
  },
  {
    id: 'staff',
    title: "Свой штат специалистов",
    shortDesc: "Замерщики, проектировщики и монтажники — в штате.",
    fullDesc: "Все специалисты работают в штате компании, не аутсорс. Это гарантирует качество и контроль на каждом этапе. Наши проектировщики также являются менеджерами и могут допродавать услуги на объекте.",
    icon: Users,
    className: "bg-white",
  },
  {
    id: 'installation',
    title: "Монтаж — 1 день с уборкой",
    shortDesc: "Доставка и сборка за один день. Убираем за собой.",
    fullDesc: "Доставка и монтаж выполняются в один день. После завершения работ полностью убираем мусор и упаковку — клиенту остаётся только наслаждаться результатом. Никакого следа от монтажа.",
    icon: Clock,
    className: "bg-white",
  },
  {
    id: 'kaiten',
    title: "Отслеживание в Кайтене",
    shortDesc: "Онлайн-статус от замера до монтажа для дилеров.",
    fullDesc: "Партнёры получают доступ к системе отслеживания заказов в Кайтене. В реальном времени видят статус: замер назначен, замер выполнен, в производстве, монтаж назначен, монтаж завершён.",
    icon: Hammer,
    className: "bg-white",
  },
  {
    id: 'technical',
    title: "Помощь с технической частью",
    shortDesc: "Дизайнерам — консультируем и рассчитываем.",
    fullDesc: "Дизайнеры часто не знают технических нюансов раздвижных систем. Мы консультируем, помогаем с расчётами, подбираем правильные материалы. Делимся экспертностью для лучшего результата.",
    icon: HelpCircle,
    className: "bg-white",
  },
  {
    id: 'training',
    title: "Обучение и образцы для салонов",
    shortDesc: "Обучаем персонал, предоставляем образцы.",
    fullDesc: "Для мебельных салонов и showroom: обучаем персонал работе с нашими конструкциями, предоставляем образцы материалов за нашу стоимость. Помогаем вашим продавцам уверенно продавать нашу продукцию.",
    icon: GraduationCap,
    className: "bg-white",
  },
];

export default function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState<typeof benefits[0] | null>(null);

  return (
    <>
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
                Полный сервис <span className="text-primary italic">от нас.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-charcoal/50 text-sm md:text-base max-w-xs font-medium leading-relaxed"
            >
              Нажмите на любой блок, чтобы узнать подробнее. Для дизайнеров, салонов, хоумстеджеров и мебельных магазинов.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedBenefit(benefit)}
                className={`p-6 md:p-8 rounded-2xl flex ${benefit.isLarge ? 'flex-col sm:flex-row items-start sm:items-center justify-between' : 'flex-col justify-between'} group cursor-pointer border border-charcoal/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 ${benefit.className}`}
              >
                <div className={`${benefit.isLarge ? 'flex-grow w-full' : ''}`}>
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <benefit.icon className={`w-5 h-5 md:w-6 md:h-6 ${benefit.className.includes('bg-charcoal') ? 'text-sand-50/40' : benefit.className.includes('text-charcoal') ? 'text-charcoal/60' : 'text-primary'}`} />
                    <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">{benefit.title}</h3>
                  </div>

                  {benefit.value && (
                    <div className="text-6xl md:text-9xl font-black text-primary mb-4 leading-none">
                      {benefit.value}
                    </div>
                  )}

                  <p className={`text-xs md:text-sm font-medium ${benefit.className.includes('text-sand-50') ? 'text-sand-50/60' : benefit.className.includes('text-charcoal') ? 'text-charcoal/60' : 'text-charcoal/50'}`}>
                    {benefit.shortDesc}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 flex justify-end">
                  <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 ${benefit.className.includes('text-sand-50') || benefit.className.includes('text-charcoal') ? 'text-charcoal' : 'text-primary'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedBenefit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedBenefit(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-2xl ${selectedBenefit.className.includes('bg-charcoal') ? 'bg-charcoal text-sand-50' : selectedBenefit.className.includes('bg-primary') ? 'bg-primary text-charcoal' : 'bg-white text-charcoal'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBenefit(null)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${selectedBenefit.className.includes('bg-charcoal') ? 'hover:bg-sand-50/10 text-sand-50' : selectedBenefit.className.includes('bg-primary') ? 'hover:bg-charcoal/10 text-charcoal' : 'hover:bg-charcoal/5 text-charcoal'}`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 ${selectedBenefit.className.includes('bg-charcoal') ? 'bg-sand-50/10' : selectedBenefit.className.includes('bg-primary') ? 'bg-charcoal/10' : 'bg-primary/10'}`}
              >
                <selectedBenefit.icon className={`w-8 h-8 md:w-10 md:h-10 ${selectedBenefit.className.includes('bg-charcoal') || selectedBenefit.className.includes('bg-primary') ? 'text-primary' : 'text-primary'}`} />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl font-black mb-4"
              >
                {selectedBenefit.title}
              </motion.h3>

              {/* Value if exists */}
              {selectedBenefit.value && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl md:text-8xl font-black text-primary mb-6 leading-none"
                >
                  {selectedBenefit.value}
                </motion.div>
              )}

              {/* Full Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`text-base md:text-lg leading-relaxed ${selectedBenefit.className.includes('text-sand-50') ? 'text-sand-50/70' : 'text-charcoal/70'}`}
              >
                {selectedBenefit.fullDesc}
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`h-1 mt-8 rounded-full origin-left ${selectedBenefit.className.includes('bg-charcoal') || selectedBenefit.className.includes('bg-primary') ? 'bg-primary' : 'bg-primary'}`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
