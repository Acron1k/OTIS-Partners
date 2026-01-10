import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Send, AlertCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact-form'
import { sendToTelegram } from '@/lib/api/send-telegram'
import { sendToAMOCRM } from '@/lib/api/send-amocrm'

const partnerTypes = {
  designer: 'Дизайнер интерьера',
  homestager: 'Хоумстейджер',
  architect: 'Архитектор',
  other: 'Другое'
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Отправляем в Telegram и AMOCRM параллельно
      const [telegramResult, amocrmResult] = await Promise.all([
        sendToTelegram({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          partnerType: partnerTypes[data.partner_type],
          message: data.message
        }),
        sendToAMOCRM({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          partnerType: partnerTypes[data.partner_type],
          message: data.message
        })
      ])

      // Проверяем результаты
      if (!telegramResult.success && !amocrmResult.success) {
        throw new Error(
          `${telegramResult.error || 'Telegram error'}, ${amocrmResult.error || 'AMOCRM error'}`
        )
      }

      setSubmitStatus('success')
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-4 block">
              Связь
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Начнем <br />
              <span className="text-primary-400">диалог.</span>
            </h2>
            <div className="space-y-6 text-gray-400">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">
                  Местоположение
                </span>
                <p className="text-xl text-gray-200">Москва, ул. Гостиничный проезд, д. 8к1</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">
                  Email
                </span>
                <p className="text-xl text-gray-200">partners@otis-peregorodki.ru</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">
                  Телефон
                </span>
                <p className="text-xl text-gray-200">+7 499 325-74-57</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-gray-300">
                  Мы свяжемся с вами в течение 15 минут
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      {...register('name')}
                      placeholder="Ваше имя"
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary-500 outline-none transition-colors placeholder:text-gray-600 disabled:opacity-50"
                    />
                    {errors.name && (
                      <span className="text-xs text-primary-400 absolute -bottom-5 left-0 uppercase">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      {...register('email')}
                      placeholder="Email"
                      type="email"
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary-500 outline-none transition-colors placeholder:text-gray-600 disabled:opacity-50"
                    />
                    {errors.email && (
                      <span className="text-xs text-primary-400 absolute -bottom-5 left-0 uppercase">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      {...register('phone')}
                      placeholder="Телефон"
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary-500 outline-none transition-colors placeholder:text-gray-600 disabled:opacity-50"
                    />
                    {errors.phone && (
                      <span className="text-xs text-primary-400 absolute -bottom-5 left-0 uppercase">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      {...register('company')}
                      placeholder="Название бюро / Компании"
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary-500 outline-none transition-colors placeholder:text-gray-600 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="relative">
                  <select
                    {...register('partner_type')}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary-500 outline-none transition-colors text-gray-400 disabled:opacity-50 cursor-pointer"
                  >
                    <option value="">Тип партнёра</option>
                    {Object.entries(partnerTypes).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {errors.partner_type && (
                    <span className="text-xs text-primary-400 absolute -bottom-5 left-0 uppercase">
                      {errors.partner_type.message}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Опишите ваш текущий проект"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b-2 border-gray-700 py-4 focus:border-primary-500 outline-none transition-colors placeholder:text-gray-600 resize-none disabled:opacity-50"
                  />
                  {errors.message && (
                    <span className="text-xs text-primary-400 absolute -bottom-5 left-0 uppercase">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary-500/10 border border-primary-500 rounded-lg p-4 flex items-start gap-3"
                  >
                    <AlertCircle size={20} className="text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary-400 mb-1">Ошибка отправки</p>
                      <p className="text-sm text-gray-300">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Отправить заявку</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
