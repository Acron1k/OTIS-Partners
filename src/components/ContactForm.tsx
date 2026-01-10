import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Представьтесь, пожалуйста'),
  email: z.string().email('Некорректный email'),
  phone: z.string().min(10, 'Введите корректный номер'),
  company: z.string().optional(),
  message: z.string().min(10, 'Расскажите немного о вашем проекте'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Заявка отправлена. Мы свяжемся с вами в ближайшее время!');
  };

  return (
    <section id="contact" className="py-24 bg-charcoal text-sand-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">

          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-4 block text-left">Связь</span>
            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-12">
              Начнем <br />ваш <span className="text-primary italic">проект.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-3 block">Адрес</span>
                <p className="text-lg font-bold text-sand-50">Москва, Центр дизайна Artplay</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-3 block">Email</span>
                <p className="text-lg font-bold text-sand-50">partners@otis-walls.ru</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-3 block">Телефон</span>
                <p className="text-xl font-bold text-sand-50">8 (800) 555-35-35</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    {...register('name')}
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium"
                  />
                  {errors.name && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.name.message}</span>}
                </div>
                <div className="relative">
                  <input
                    {...register('email')}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium"
                  />
                  {errors.email && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    {...register('phone')}
                    placeholder="Телефон"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium"
                  />
                  {errors.phone && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.phone.message}</span>}
                </div>
                <div className="relative">
                  <input
                    {...register('company')}
                    placeholder="Бюро / Компания"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  {...register('message')}
                  rows={3}
                  placeholder="Коротко о вашей задаче"
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium resize-none shadow-none"
                />
                {errors.message && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full py-8 text-xs font-black uppercase tracking-[0.4em] bg-primary text-sand-50 hover:bg-sand-50 hover:text-charcoal transition-all duration-700 shadow-2xl shadow-primary/20"
              >
                Отправить запрос
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
