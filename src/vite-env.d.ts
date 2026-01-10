/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_TOKEN: string
  readonly VITE_TELEGRAM_CHAT_ID: string
  readonly VITE_AMOCRM_CLIENT_ID?: string
  readonly VITE_AMOCRM_CLIENT_SECRET?: string
  readonly VITE_AMOCRM_REDIRECT_URI?: string
  readonly VITE_AMOCRM_SUBDOMAIN?: string
  readonly VITE_AMOCRM_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
