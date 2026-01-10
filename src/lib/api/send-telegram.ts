interface TelegramMessage {
  name: string
  email: string
  phone: string
  company?: string
  partnerType: string
  message?: string
}

export async function sendToTelegram(data: TelegramMessage): Promise<{ success: boolean; error?: string }> {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.error('Telegram credentials not configured')
    return { success: false, error: 'Telegram credentials not configured' }
  }

  const message = `
🆕 <b>Новая заявка на партнёрство</b>

👤 <b>Имя:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📱 <b>Телефон:</b> ${data.phone}
${data.company ? `🏢 <b>Компания:</b> ${data.company}` : ''}
👥 <b>Тип партнёра:</b> ${data.partnerType}
${data.message ? `💬 <b>Сообщение:</b> ${data.message}` : ''}
  `.trim()

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    const result = await response.json()

    if (!result.ok) {
      throw new Error(result.description || 'Failed to send to Telegram')
    }

    return { success: true }
  } catch (error) {
    console.error('Telegram API error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
