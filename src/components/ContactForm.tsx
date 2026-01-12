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
    const cleanPhone = data.phone.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('8')
      ? '+7' + cleanPhone.slice(1)
      : cleanPhone.startsWith('7')
        ? '+' + cleanPhone
        : '+7' + cleanPhone;

    console.log({ ...data, phone: formattedPhone });
    alert(`Заявка отправлена!`);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-charcoal text-sand-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

          <div className="text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-4 block">Связь</span>
            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8 md:mb-12">
              Начнем <br className="hidden md:block" />ваш <span className="text-primary italic">проект.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-2 md:mb-3 block">Адрес</span>
                <p className="text-base md:text-lg font-bold text-sand-50">г. Москва, шоссе Дмитровское 71Б, оф. 403</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-2 md:mb-3 block">Email</span>
                <a href="mailto:peregorodki-otis@yandex.ru" className="text-base md:text-lg font-bold text-sand-50 hover:text-primary transition-colors">peregorodki-otis@yandex.ru</a>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[9px] md:text-[10px] uppercase font-extrabold tracking-widest text-sand-50/20 mb-2 md:mb-3 block">Телефон</span>
                <a href="tel:+79955008882" className="text-lg md:text-xl font-bold text-sand-50 hover:text-primary transition-colors">+7 (995) 500-88-82</a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:space-y-10">
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                <div className="relative">
                  <input
                    {...register('name')}
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium text-sm md:text-base"
                  />
                  {errors.name && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.name.message}</span>}
                </div>
                <div className="relative">
                  <input
                    {...register('email')}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium text-sm md:text-base"
                  />
                  {errors.email && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
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
                            placeholder="Телефон"
                            className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium text-sm md:text-base"
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
                    placeholder="Компания"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  {...register('message')}
                  rows={2}
                  placeholder="Ваш проект"
                  className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-primary outline-none transition-colors placeholder:text-sand-50/20 font-medium resize-none shadow-none text-sm md:text-base"
                />
                {errors.message && <span className="text-[10px] text-primary absolute -bottom-6 left-0 uppercase font-black tracking-widest">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full py-6 md:py-8 text-xs font-black uppercase tracking-[0.4em] bg-primary text-charcoal hover:bg-sand-50 hover:text-charcoal transition-all duration-700 shadow-2xl shadow-primary/20"
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
