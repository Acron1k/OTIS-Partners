# Partner Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a creative, bold partner landing page for Otis Peregorodki that targets interior designers and homestagers with a 10% discount/reward partner program.

**Architecture:** React 18 + Vite SPA with smooth scroll between sections, sticky header, and form submission via webhook/email integration to existing CRM. Mobile-first responsive design with Framer Motion animations for creative visual impact.

**Tech Stack:**
- React 18 + Vite for fast development and HMR
- TypeScript for type safety
- CSS Modules or Tailwind CSS for styling
- Framer Motion for animations (creative style)
- React Hook Form + Zod for form validation
- Lucide React for icons
- Email service integration (SendGrid/EmailJS) or webhook to existing CRM

---

## Задача 1: Инициализация React + Vite проекта с TypeScript

**Агент:** GLM 4.7

**Файлы:**
- Создать: `package.json`
- Создать: `vite.config.ts`
- Создать: `tsconfig.json`
- Создать: `tsconfig.node.json`
- Создать: `index.html`
- Создать: `src/main.tsx`
- Создать: `src/App.tsx`
- Создать: `src/index.css`
- Создать: `tailwind.config.js`
- Создать: `postcss.config.js`
- Создать: `.gitignore`

**Шаги:**

1. Создать package.json со всеми зависимостями
   - React 18, Vite 5, TypeScript, Framer Motion, React Hook Form, Zod, Tailwind CSS, Lucide React

2. Создать vite.config.ts
   - Настроить Vite с React плагином, разделением кода на чанки, настройками HMR

3. Создать конфигурации TypeScript
   - Настроить tsconfig.json и tsconfig.node.json с strict режимом и алиасами путей (@/*)

4. Создать index.html с мета-тегами
   - Добавить SEO мета-теги, Google Fonts (Inter), настройки viewport

5. Создать src/index.css
   - Настроить Tailwind CSS, базовые стили, плавную прокрутку, поддержку уменьшения анимаций

6. Создать конфиги Tailwind и PostCSS
   - Настроить Tailwind с кастомной цветовой палитрой, основными цветами, шрифтом

7. Создать src/main.tsx
   - Настроить React root с StrictMode

8. Создать src/App.tsx с lazy loading
   - Импортировать все секции как lazy компоненты, добавить спиннер загрузки, настроить AnimatePresence

9. Установить зависимости
   - Выполнить: `npm install`

10. Запустить dev сервер
    - Выполнить: `npm run dev`
    - Ожидается: Сервер запускается на http://localhost:3000

11. Закоммитить
    ```bash
    git add .
    git commit -m "feat: initialize React + Vite project with TypeScript and Tailwind CSS"
    ```

---

## Phase 2: Header & Navigation (gemini-pro)

### Task 2: Create Header component with sticky navigation

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.module.css`

**Step 1: Create Header component**

Implement sticky header with scroll detection, mobile menu, navigation links to sections, CTA button

**Step 2: Add styling with CSS Modules**

Style header, logo, navigation links, mobile menu, contact info, CTA button with responsive breakpoints

**Step 3: Add Framer Motion animations**

Animate header slide-in, nav items stagger, mobile menu slide-in/out

**Step 4: Update App.tsx to include Header**

Import and render Header component before Hero

**Step 5: Test responsive behavior**

Verify sticky header, mobile menu toggle, smooth scroll to sections

**Step 6: Commit**

```bash
git add .
git commit -m "feat: add Header component with sticky navigation and mobile menu"
```

---

## Задача 3: Главная секция (Hero) с креативным дизайном и перегородкой

**Агент:** Gemini-Pro с frontend-design skill

**Что нужно сделать:**

Создать главную секцию (Hero), которая сразу привлекает внимание и показывает продукт:
- Большой заголовок "Зарабатывайте на своих проектах"
- Поясняющий текст о программе: "10% скидка на все заказы + вознаграждение за рекомендации. Дизайнерам интерьера, хоумстейджерам и архитекторам."
- Бейдж "Эксклюзивная партнёрская программа"
- Статистика: 200+ партнёров, ₽10M+ выплачено
- Две кнопки: "Стать партнёром" (яркая) и "Узнать больше" (контрастная)
- **Изображение перегородки из готовых файлов** в папке `public/images/partitions/`

**Изображения для использования:**
В папке `public/images/partitions/` находятся 3 сгенерированных изображения перегородок:
- `partition-1.jpg` - для Hero секции (крупное, основное)
- `partition-2.jpg` - можно использовать для других секций (например, в карточках проектов или фоне)
- `partition-3.jpg` - можно использовать для других секций (например, в отзывах или как декоративный элемент)

Для Hero секции использовать `partition-1.jpg` как основной визуальный элемент.

**Креативные эффекты:**
- Параллакс эффект для фоновых элементов и изображения перегородки
- Парящие геометрические фигуры на фоне, которые медленно вращаются
- Градиентный текст в заголовке (красный оттенок бренда)
- Изображение перегородки имеет легкое покачивание или эффект параллакс при скролле
- Анимированная статистика при появлении на экране

**Адаптивность:**
- На десктопе: текст слева, изображение перегородки справа (крупно)
- На планшете: всё центрировано, изображение меньше
- На мобильных: изображение скрывается или становится очень маленьким, только текст и кнопки вертикально

**Технические детали для реализации:**
- Изображения находятся в `public/images/partitions/`
- Пути к изображениям: `/images/partitions/partition-1.jpg` и т.д.
- Использовать тег `<img>` с `loading="lazy"` для оптимизации

---

## Задача 4: Секция преимуществ партнёрства

**Агент:** Gemini-Pro с frontend-design skill

**Что нужно сделать:**

Создать секцию, которая показывает, почему выгодно стать партнёром:
- Заголовок "Почему выбирают нас?" или "Преимущества партнёрства"
- Карточки преимуществ (6-8 штук) с иконками и описаниями

**Карточки преимуществ:**
- 10% скидка на все заказы партнёра
- Вознаграждение за рекомендации клиентов
- Быстрый расчёт стоимости (в течение 15 минут)
- Бесплатный замер в пределах МКАД +20км
- Гарантия на изделия и работы до 5 лет
- Доставка и установка "под ключ"
- Рассрочка 0% без переплаты
- Персональный менеджер для партнёров

**Дизайн и анимации:**
- Сетка карточек: 3 колонки на десктопе, 2 на планшете, 1 на мобильных
- Каждая карточка с иконкой (можно использовать Lucide React)
- При наведении карточка немного поднимается и подсвечивается
- Карточки появляются каскадно при скролле
- Иконки имеют акцентный цвет (красный бренда)

**Адаптивность:**
- На десктопе: сетка 3x2 или 4x2 в зависимости от количества карточек
- На планшете: сетка 2x4
- На мобильных: вертикальный список карточек

---

## Phase 5: How It Works Section (Gemini-Pro with frontend-design skill)

### Task 5: Create How It Works section

**Files:**
- Create: `src/components/HowItWorks.tsx`
- Create: `src/components/HowItWorks.module.css`

**Step 1: Create step-by-step process component**

4 steps with numbers/icons, titles, descriptions

**Step 2: Design timeline layout**

Horizontal layout with connecting lines on desktop, vertical on mobile

**Step 3: Add scroll-triggered animations**

Animate steps on scroll into view using useInView

**Step 4: Style timeline section**

Step cards, connecting lines, number badges

**Step 5: Test scroll animations**

Verify steps animate when entering viewport

**Step 6: Commit**

```bash
git add .
git commit -m "feat: add How It Works section with scroll animations"
```

---

## Phase 6: Partnership Terms Section (Gemini-Pro with frontend-design skill)

### Task 6: Create Partnership Terms section

**Files:**
- Create: `src/components/PartnershipTerms.tsx`
- Create: `src/components/PartnershipTerms.module.css`

**Step 1: Create terms component**

Section title, pricing cards (Designer, Homestager, Architect tiers), benefits per tier

**Step 2: Design pricing cards layout**

3 cards in grid, highlight recommended tier, comparison table

**Step 3: Add hover effects and animations**

Card hover lift, recommended tier pulse effect

**Step 4: Style pricing section**

Modern card design, badge for recommended, comparison table

**Step 5: Test card interactions**

Verify hover effects, mobile layout stacks cards

**Step 6: Commit**

```bash
git add .
git commit -m "feat: add Partnership Terms section with pricing cards"
```

---

## Phase 7: Projects/Cases Section (Gemini-Pro with frontend-design skill)

### Task 7: Create Projects/Cases section

**Files:**
- Create: `src/components/Projects.tsx`
- Create: `src/components/Projects.module.css`

**Step 1: Create projects gallery component**

Grid of project cards with images, titles, descriptions, prices, project types

**Step 2: Design project cards layout**

Masonry or grid layout, hover reveals details

**Step 3: Add filtering by project type**

Filter buttons for apartment, office, commercial projects

**Step 4: Add animations**

Card entrance animations, filter transition animations

**Step 5: Style gallery**

Image styling, card hover effects, filter button styles

**Step 6: Test filtering and interactions**

Verify filters work, cards display correctly

**Step 7: Commit**

```bash
git add .
git commit -m "feat: add Projects/Cases gallery with filtering"
```

---

## Phase 8: Testimonials Section (Gemini-Pro with frontend-design skill)

### Task 8: Create Testimonials section

**Files:**
- Create: `src/components/Testimonials.tsx`
- Create: `src/components/Testimonials.module.css`

**Step 1: Create testimonials carousel component**

Review cards with quotes, author info, ratings, partner type badges

**Step 2: Implement carousel functionality**

Auto-scroll, manual navigation arrows, dots indicators

**Step 3: Design testimonial cards**

Modern card design, quote icon styling, author avatars

**Step 4: Add animations**

Carousel slide transitions, card hover effects

**Step 5: Style testimonials section**

Card styling, navigation buttons, indicator dots

**Step 6: Test carousel functionality**

Verify auto-scroll works, navigation works

**Step 7: Commit**

```bash
git add .
git commit -m "feat: add Testimonials carousel section"
```

---

## Phase 9: FAQ Section (Gemini-Pro with frontend-design skill)

### Task 9: Create FAQ section

**Files:**
- Create: `src/components/FAQ.tsx`
- Create: `src/components/FAQ.module.css`

**Step 1: Create FAQ accordion component**

List of questions and answers with expand/collapse functionality

**Step 2: Implement accordion logic**

State management for open/close items, animate height changes

**Step 3: Design FAQ items**

Question styling, answer styling, expand/collapse icons

**Step 4: Add Framer Motion animations**

Smooth height transitions, rotate icon on expand

**Step 5: Style FAQ section**

Question hover effects, answer typography

**Step 6: Test accordion functionality**

Verify expand/collapse works smoothly

**Step 7: Commit**

```bash
git add .
git commit -m "feat: add FAQ accordion section"
```

---

## Задача 10: Форма заявки с валидацией

**Агент:** GLM 4.7

**Что нужно сделать:**

Создать форму заявки на партнёрство с валидацией и интеграцией:
- Поля формы: имя, email, телефон, компания, тип партнёра, сообщение
- Валидация всех полей на клиенте (обязательные поля, формат email, телефона)
- Показ ошибок валидации рядом с полями
- Индикатор загрузки при отправке
- Сообщение об успехе после отправки

**Интеграция с Telegram:**
- При отправке формы данные отправляются в Telegram-бота
- Форматирование сообщения с информацией о заявке
- Обработка успешной/неудачной отправки

**Интеграция с AMOCRM:**
- Если есть прямой доступ к AMOCRM API - создавать сделку сразу
- Если нет - отправлять данные на email с адресом AMOCRM для автоматического создания сделки
- Использовать webhook или API для интеграции

**Дизайн формы:**
- Современные поля ввода с плавающими лейблами
- Кнопка "Отправить заявку" с эффектом при наведении
- Красные ошибки валидации под полями
- Спиннер загрузки вместо текста кнопки при отправке
- Со об успехе с зелёным индикатором

**Технические детали:**
- Использовать React Hook Form для управления формой
- Zod для схемы валидации
- Отправлять данные в два места: Telegram + AMOCRM (или email)

---

## Задача 11: Футер сайта

**Агент:** GLM 4.7

**Что нужно сделать:**

Создать футер сайта с полезной информацией:
- Информация о компании Otis Peregorodki
- Контактные данные (телефон, email, адрес)
- Быстрые ссылки к секциям сайта
- Ссылки на соцсети (Telegram, WhatsApp, Instagram и т.д.)
- Копирайт с годом

**Дизайн футера:**
- Мультиколоночный layout на десктопе
- Вертикальный стек на мобильных
- Современный, чистый дизайн
- Эффект при наведении на ссылки
- Цветовая схема в соответствии с брендом (красные акценты)

**Адаптивность:**
- На десктопе: 3-4 колонки
- На планшете: 2x2 сетка
- На мобильных: всё вертикально

---

## Задача 12: Оптимизация производительности

**Агент:** GLM 4.7

**Что нужно сделать:**

Проверить и оптимизировать производительность сайта:
- Проверить что код разделение (code splitting) работает корректно
- Добавить lazy loading для всех изображений
- Оптимизировать анимации (использовать transform, не layout properties)
- Проверить поддержку prefers-reduced-motion для accessibility
- Добавить атрибут loading="lazy" к изображениям
- Проверить размер бандлей, при необходимости разделить дальше

**Тестирование производительности:**
- Запустить Lighthouse audit
- Добиться 90+ баллов по Performance
- Проверить First Contentful Paint (FCP)
- Проверить Largest Contentful Paint (LCP)
- Проверить Cumulative Layout Shift (CLS)
- Проверить Time to Interactive (TTI)

**Дополнительные оптимизации:**
- Сжатие изображений (WebP формат)
- Удаление неиспользуемого код
- Минимизация CSS

---

## Задача 13: Мобильная адаптация

**Агент:** GLM 4.7

**Что нужно сделать:**

Проверить и исправить все проблемы на мобильных устройствах:
- Открыть devtools с мобильным viewport
- Проверить каждую секцию на разных размерах экрана
- Найти и исправить проблемы с горизонтальным скроллом
- Проверить на перекрытие элементов
- Проверить размер шрифтов на маленьких экранах
- Проверить размер tap targets (минимум 44x44px)
- Проверить работу мобильного меню

**Тестируемые breakpoint'ы:**
- 375px (iPhone SE)
- 414px (iPhone 12/13/14)
- 768px (iPad)
- 1024px (iPad Pro)
- 1280px (маленький десктоп)

**Проверить на реальных устройствах:**
- iPhone (iOS Safari)
- Android (Chrome)
- iPad

---

## Задача 14: SEO оптимизация

**Агент:** GLM 4.7

**Что нужно сделать:**

Оптимизировать сайт для поисковых систем:
- Обновить мета-теги в index.html
- Добавить Open Graph теги для Facebook/LinkedIn
- Добавить Twitter Card теги
- Указать canonical URL
- Добавить структурированные данные (JSON-LD)
- Создать robots.txt (разрешить индексацию)
- Создать sitemap.xml

**Мета-теги:**
- Title: оптимизированный для SEO (до 60 символов)
- Description: оптимизированный для SEO (до 160 символов)
- Keywords: партнёрская программа, перегородки, дизайнеры интерьера
- Open Graph: title, description, image, url, type
- Twitter Card: title, description, image, card type

**OG Image:**
- Использовать одно из сгенерированных изображений перегородок
- Размер: 1200x630px
- Добавить текст "Партнёрская программа Otis"

**Тестирование:**
- Facebook Sharing Debugger
- Twitter Card Validator
- Google Rich Results Test
- Проверить структурированные данные в Google Search Console

---

## Задача 15: Тестирование и деплой на Vercel

**Агент:** GLM 4.7

**Что нужно сделать:**

Финальное тестирование и деплой на Vercel для показа клиенту:

**Финальное тестирование:**
- Проверить что все секции рендерятся корректно
- Проверить что форма валидируется и отправляется (Telegram + AMOCRM)
- Проверить что все анимации работают плавно
- Проверить мобильную адаптивность
- Проверить что нет ошибок в console
- Проверить все ссылки и навигацию

**Сборка production:**
- Запустить `npm run build`
- Убедиться что сборка прошла без ошибок
- Запустить `npm run preview` для локального тестирования

**Подготовка к Vercel:**
- Создать `.env.example` с примером переменных окружения:
  - TELEGRAM_BOT_TOKEN
  - TELEGRAM_CHAT_ID
  - AMOCRM_API_KEY (если используется прямой API)
  - AMOCRM_EMAIL (если отправляется на email)
- Создать `vercel.json` с конфигурацией деплоя
- Настроить build command: `npm run build`
- Настроить output directory: `dist`

**Деплой на Vercel:**
- Запушить код в GitHub
- Подключить репозиторий к Vercel
- Добавить переменные окружения в Vercel Environment Variables
- Деплойнуть
- Получить URL для показа клиенту

**Пост-деплой тестирование:**
- Открыть сайт на разных браузерах (Chrome, Safari, Firefox)
- Проверить что форма работает в production (Telegram + AMOCRM)
- Проверить что все анимации работают
- Проверить мобильную версию
- Получить URL для показа клиенту (vercel.app или кастомный домен)

---

## Сводка по агентам

**Задачи для GLM 4.7:**
- ✅ Задача 1: Инициализация проекта (выполнена)
- Задача 10: Форма заявки с валидацией (Telegram + AMOCRM)
- Задача 11: Футер сайта
- Задача 12: Оптимизация производительности
- Задача 13: Мобильная адаптация
- Задача 14: SEO оптимизация
- Задача 15: Тестирование и деплой на Vercel

**Задачи для Gemini-Pro (с frontend-design skill):**
- ✅ Задача 2: Шапка сайта с навигацией (выполнена агентом)
- ✅ Задача 3: Главная секция (Hero) с перегородкой (выполнена агентом)
- ✅ Задача 4: Секция преимуществ (выполнена агентом)
- ✅ Задача 5: Секция "Как это работает" (выполнена агентом)
- ✅ Задача 6: Секция условий партнёрства (выполнена агентом)
- ✅ Задача 7: Секция проектов/кейсов (выполнена агентом)
- ✅ Задача 8: Секция отзывов (выполнена агентом)
- ✅ Задача 9: Секция FAQ (выполнена агентом)
