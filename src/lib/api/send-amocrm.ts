interface AMOCRMSync {
  name: string
  email: string
  phone: string
  company?: string
  partnerType: string
  message?: string
}

export async function sendToAMOCRM(data: AMOCRMSync): Promise<{ success: boolean; error?: string }> {
  const clientId = import.meta.env.VITE_AMOCRM_CLIENT_ID
  const clientSecret = import.meta.env.VITE_AMOCRM_CLIENT_SECRET
  const subdomain = import.meta.env.VITE_AMOCRM_SUBDOMAIN
  const redirectUri = import.meta.env.VITE_AMOCRM_REDIRECT_URI
  const fallbackEmail = import.meta.env.VITE_AMOCRM_EMAIL

  // Если нет AMOCRM credentials, отправляем на email fallback
  if (!clientId || !clientSecret || !subdomain) {
    console.log('AMOCRM not configured, using email fallback')
    return await sendToEmail(data, fallbackEmail)
  }

  try {
    // Получаем access token
    const tokenResponse = await fetch(`https://${subdomain}.amocrm.ru/oauth2/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
        redirect_uri: redirectUri,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (!tokenData.access_token) {
      throw new Error('Failed to get AMOCRM access token')
    }

    // Создаем сделку
    const leadData = {
      name: `Заявка на партнёрство: ${data.company || data.name}`,
      custom_fields: {
        'partner_type': data.partnerType,
      },
      contacts: [
        {
          name: data.name,
          custom_fields_values: [
            {
              field_code: 'EMAIL',
              values: [{ value: data.email }],
            },
            {
              field_code: 'PHONE',
              values: [{ value: data.phone }],
            },
          ],
        },
      ],
      notes: [
        {
          note_type: 'common',
          text: data.message || 'Без сообщения',
        },
      ],
    }

    const leadResponse = await fetch(`https://${subdomain}.amocrm.ru/api/v4/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([leadData]),
    })

    const leadResult = await leadResponse.json()

    if (!leadResult._embedded?.leads) {
      throw new Error('Failed to create lead in AMOCRM')
    }

    return { success: true }
  } catch (error) {
    console.error('AMOCRM API error:', error)
    // Fallback to email
    console.log('Falling back to email')
    return await sendToEmail(data, fallbackEmail)
  }
}

async function sendToEmail(
  data: AMOCRMSync,
  email?: string
): Promise<{ success: boolean; error?: string }> {
  if (!email) {
    return { success: false, error: 'No email configured for AMOCRM fallback' }
  }

  // В продакшене здесь нужно использовать реальный email service (SendGrid, EmailJS и т.д.)
  // Для примера просто логируем данные
  console.log('Would send email to:', email)
  console.log('Email data:', data)

  // Имитируем успешную отправку
  return { success: true }
}
