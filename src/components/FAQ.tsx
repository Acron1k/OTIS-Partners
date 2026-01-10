import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Как выплачиваются вознаграждения?",
    answer: "Мы выплачиваем 10% в день поступления оплаты от клиента. Работаем официально: на расчетный счет ИП/ООО или банковскую карту по агентскому договору."
  },
  {
    question: "Предоставляете ли вы образцы материалов?",
    answer: "Да, для постоянных партнеров у нас есть Partner Box — стильный бокс с образцами всех видов закаленного стекла, профилей и фурнитуры."
  },
  {
    question: "Есть ли ограничения по сложности проектов?",
    answer: "Мы специализируемся на кастомных решениях. Если это физически возможно реализовать из стекла и алюминия — мы это сделаем."
  },
  {
    question: "Сроки изготовления и монтажа?",
    answer: "Стандартный цикл производства составляет от 7 до 14 рабочих дней в зависимости от сложности и выбранной фурнитуры."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <span className="text-[11px] sm:text-[10px] md:text-[10px] uppercase tracking-[.4em] font-bold text-primary mb-4 block">Knowledge</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black text-charcoal leading-none mb-12">
              Вопросы и <br /><span className="italic font-light">ответы.</span>
            </h2>
            <p className="text-charcoal/50 font-light leading-relaxed mb-12">
              Все, что вам нужно знать о технических и юридических аспектах сотрудничества.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs uppercase tracking-widest font-bold text-primary border-b border-primary pb-2 hover:opacity-70 transition-opacity"
            >
              Задать свой вопрос
            </button>
          </div>

          <div className="lg:w-2/3 space-y-0 border-t border-charcoal/10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-10 flex items-center justify-between text-left group min-h-[60px]"
                >
                  <span className="text-xl md:text-2xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-8 transition-transform duration-500 p-4 -m-4 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-charcoal/30" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-10 text-charcoal/50 font-light leading-relaxed max-w-2xl text-lg">
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
