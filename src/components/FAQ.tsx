import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Как и когда выплачивается вознаграждение?",
    answer: "Выплачиваем 10% в день поступления оплаты от клиента. Работаем официально по агентскому договору."
  },
  {
    question: "Что именно нужно делать партнёру?",
    answer: "Только передать контакт клиента или параметры проекта. Замер, 3D-макет, смета, монтаж, уборка — всё делаем мы сами."
  },
  {
    question: "Как вы помогаете дизайнерам и хоумстеджерам?",
    answer: "Консультируем по технической части, рассчитываем конструкции, помогаем с подбором материалов. Дизайнеры часто не знают нюансов — мы подсказываем."
  },
  {
    question: "Что предлагаете салонам и мебельным магазинам?",
    answer: "Для салонов: образцы за нашу стоимость + обучение персонала. Для мебельных магазинов: расширяете ассортимент — двери-купе, перегородки, раздвижные системы."
  },
  {
    question: "Можно ли отслеживать статус заказа?",
    answer: "Да, партнёры видят статус в реальном времени в Кайтене — от замера до завершения монтажа."
  },
  {
    question: "Как быстро происходит монтаж?",
    answer: "Доставка и монтаж выполняются за один день. После себя убираем — клиенту остаётся только наслаждаться результатом."
  },
  {
    question: "Смета может измениться после замера?",
    answer: "Предварительная смета не меняется, если клиент верно передал все данные и не меняет наполнение или систему в процессе."
  },
  {
    question: "Каковы сроки изготовления?",
    answer: "Стандартный цикл производства составляет от 7 до 14 рабочих дней."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary mb-2 block">Вопросы</span>
            <h2 className="text-3xl md:text-6xl font-black text-charcoal leading-tight mb-8">
              Остались <br className="hidden md:block" />вопросы? <span className="text-primary italic">Спросите.</span>
            </h2>
            <p className="text-charcoal/50 text-sm md:text-base font-medium leading-relaxed mb-8">
              Для дизайнеров, салонов, хоумстеджеров и мебельных магазинов.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[10px] md:text-xs uppercase tracking-widest font-black text-primary border-b border-primary/20 pb-2 hover:border-primary transition-all"
            >
              Задать свой вопрос
            </button>
          </div>

          <div className="lg:w-2/3 divide-y divide-charcoal/5 self-start w-full">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-base md:text-xl font-bold text-charcoal group-hover:text-primary transition-colors max-w-[85%]">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary" /> : <Plus className="w-4 h-4 md:w-[18px] md:h-[18px] text-charcoal/20" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 md:pb-8 text-charcoal/50 font-medium leading-relaxed max-w-2xl text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
