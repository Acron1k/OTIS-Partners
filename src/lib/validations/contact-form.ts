import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Пожалуйста, укажите ваше имя'),
  email: z.string().email('Укажите корректный email'),
  phone: z.string().min(10, 'Укажите корректный номер телефона'),
  company: z.string().optional(),
  partner_type: z.enum(['designer', 'homestager', 'architect', 'other'], {
    required_error: 'Выберите тип партнёра',
  }),
  message: z.string().min(10, 'Расскажите подробнее о вашем проекте'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
