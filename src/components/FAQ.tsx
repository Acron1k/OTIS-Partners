import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Как и когда выплачиваются вознаграждения?",
    answer: "Мы выплачиваем 10% в день поступления оплаты от клиента. Работаем официально: на расчетный счет ИП/ООО или банковскую карту по агентскому договору."
  },
  {
    question: "Вы предоставляете образцы материалов?",
    answer: "Да, для постоянных партнеров у нас есть Partner Box — стильный бокс с образцами всех видов закаленного стекла, профилей и фурнитуры."
  },
  {
    question: "Есть ли ограничения по сложности проектов?",
    answer: "Мы специализируемся на индивидуальных решениях. Если конструкцию физически возможно реализовать из стекла и алюминия — мы это сделаем."
  },
  {
    question: "Каковы сроки изготовления и монтажа?",
    answer: "Стандартный цикл производства составляет от 7 до 14 рабочих дней в зависимости от сложности и выбранной конфигурации."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-3 block">Вопросы</span>
            <h2 className="text-4xl md:text-6xl font-black text-charcoal leading-none mb-10">
              Помогаем разобраться <span className="text-primary italic">в деталях.</span>
            </h2>
            <p className="text-charcoal/50 font-medium leading-relaxed mb-10">
              Все, что вам нужно знать о технических и юридических аспектах нашего сотрудничества.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs uppercase tracking-widest font-black text-primary border-b border-primary/20 pb-2 hover:border-primary transition-all"
            >
              Задать свой вопрос
            </button>
          </div>

          <div className="lg:w-2/3 divide-y divide-charcoal/5">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-lg md:text-xl font-bold text-charcoal group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-8 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={18} className="text-primary" /> : <Plus size={18} className="text-charcoal/20" />}
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
                      <p className="pb-8 text-charcoal/50 font-medium leading-relaxed max-w-2xl text-base italic">
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
