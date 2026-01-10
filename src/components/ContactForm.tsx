import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import InputMask from 'react-input-mask';

const formSchema = z.object({
  name: z.string().min(2, 'Представьтесь, пожалуйста'),
  email: z.string().email('Некорректный email'),
  phone: z.string().min(10, 'Введите корректный номер'),
  company: z.string().optional(),
  message: z.string().min(10, 'Расскажите немного о вашем проекте'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: ''
    }
  });

  const onSubmit = (data: FormData) => {
    // Очистка номера телефона от маски для отправки (только цифры)
    const cleanPhone = data.phone.replace(/\D/g, '');
    // Гарантируем формат +7... даже если ввели 8...
    const formattedPhone = cleanPhone.startsWith('8')
      ? '+7' + cleanPhone.slice(1)
      : cleanPhone.startsWith('7')
        ? '+' + cleanPhone
        : '+7' + cleanPhone;

    console.log({ ...data, phone: formattedPhone });
    alert(`Заявка отправлена. Мы свяжемся с вами в ближайшее время!\nТелефон для CRM: ${formattedPhone}`);
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
                <p className="text-lg font-bold text-sand-50">г. Москва, Дмитровское шоссе 71Б, офис 403</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-3 block">Email</span>
                <a href="mailto:peregorodki-otis@yandex.ru" className="text-lg font-bold text-sand-50 hover:text-primary transition-colors">peregorodki-otis@yandex.ru</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-3 block">Телефон</span>
                <a href="tel:+79955008882" className="text-xl font-bold text-sand-50 hover:text-primary transition-colors">+7 (995) 500-88-82</a>
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
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <InputMask
                        mask="+7 (999) 999-99-99"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      >
                        {(inputProps: any) => (
                          <input
                            {...inputProps}
                            type="text"
                            placeholder="Телефон: +7 (___) ___-__-__"
                            className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium"
                          />
                        )}
                      </InputMask>
                    )}
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
