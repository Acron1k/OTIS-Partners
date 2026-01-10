import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Как и когда выплачиваются вознаграждения?",
    answer: "Мы выплачиваем 10% в день поступления оплаты от клиента. Работаем официально по агентскому договору."
  },
  {
    question: "Вы предоставляете образцы материалов?",
    answer: "Профессиональным партнерам мы предоставляем Partner Box с образцами стекла и профилей."
  },
  {
    question: "Есть ли ограничения по сложности?",
    answer: "Мы специализируемся на индивидуальных решениях любой сложности из стекла и алюминия."
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
              Помогаем <br className="hidden md:block" />разобраться <span className="text-primary italic">в деталях.</span>
            </h2>
            <p className="text-charcoal/50 text-sm md:text-base font-medium leading-relaxed mb-8">
              Все, что вам нужно знать о технических и юридических аспектах сотрудничества.
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
                    {openIndex === index ? <Minus size={16} md:size={18} className="text-primary" /> : <Plus size={16} md:size={18} className="text-charcoal/20" />}
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
                      <p className="pb-6 md:pb-8 text-charcoal/50 font-medium leading-relaxed max-w-2xl text-sm md:text-base italic">
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
