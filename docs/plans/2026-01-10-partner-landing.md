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

## Phase 2: Header & Navigation (GLM 4.7)

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

## Phase 10: Contact Form (GLM 4.7 + Email Integration)

### Task 10: Create Contact Form with validation

**Files:**
- Create: `src/components/ContactForm.tsx`
- Create: `src/components/ContactForm.module.css`
- Create: `src/lib/validations/contact-form.ts`
- Create: `src/lib/api/send-email.ts`

**Step 1: Create Zod validation schema**

Define form fields: name, email, phone, company, partner_type, message

**Step 2: Create ContactForm component**

Implement form with React Hook Form, field inputs, validation errors, submit button

**Step 3: Add form styling**

Modern input design, error message styling, submit button states

**Step 4: Implement form submission handler**

Validate with Zod, prepare email data, call API, handle success/error states

**Step 5: Create email API function**

Implement send-email.ts with EmailJS or webhook integration to existing CRM

**Step 6: Add loading and success states**

Show spinner while submitting, success message after submission

**Step 7: Test form validation and submission**

Verify field validation works, email sends successfully

**Step 8: Commit**

```bash
git add .
git commit -m "feat: add Contact Form with validation and email integration"
```

---

## Phase 11: Footer (GLM 4.7)

### Task 11: Create Footer component

**Files:**
- Create: `src/components/Footer.tsx`
- Create: `src/components/Footer.module.css`

**Step 1: Create Footer component**

Company info, contact details, quick links, social links, copyright

**Step 2: Design footer layout**

Multi-column layout, responsive stacking on mobile

**Step 3: Add styling**

Modern footer design, hover effects on links

**Step 4: Test responsiveness**

Verify footer stacks correctly on mobile

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add Footer component"
```

---

## Phase 12: Performance Optimization (GLM 4.7)

### Task 12: Optimize performance

**Files:**
- Modify: `src/App.tsx`
- Modify: `vite.config.ts`

**Step 1: Implement code splitting**

Already done with lazy loading in App.tsx - verify it works

**Step 2: Add image optimization**

Use Next.js Image equivalent or lazy load images, add loading attributes

**Step 3: Optimize animations**

Reduce motion for users with prefers-reduced-motion, use transform instead of layout properties

**Step 4: Add service worker for caching**

Optional: Implement PWA with offline capability

**Step 5: Test performance**

Run Lighthouse audit, aim for 90+ score

**Step 6: Commit**

```bash
git add .
git commit -m "perf: optimize performance with code splitting and animation improvements"
```

---

## Phase 13: Mobile Adaptation (GLM 4.7)

### Task 13: Ensure full mobile responsiveness

**Files:**
- Modify: All component CSS files

**Step 1: Test all sections on mobile**

Open devtools with mobile viewport, test each section

**Step 2: Fix any mobile issues**

Check for horizontal scrolling, overlapping elements, font sizes, tap targets

**Step 3: Test on multiple breakpoints**

375px, 414px, 768px, 1024px, 1280px

**Step 4: Commit**

```bash
git add .
git commit -m "fix: ensure full mobile responsiveness"
```

---

## Phase 14: SEO & Meta Tags (GLM 4.7)

### Task 14: Optimize SEO

**Files:**
- Modify: `index.html`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/og-image.png`

**Step 1: Update meta tags in index.html**

Add Open Graph tags, Twitter cards, canonical URL, structured data

**Step 2: Create robots.txt**

Allow crawling of all pages

**Step 3: Create sitemap.xml**

List all pages and sections

**Step 4: Create OG image**

Design social sharing image (1200x630px) for Facebook/LinkedIn

**Step 5: Test meta tags**

Use Facebook Debugger and Twitter Card Validator

**Step 6: Commit**

```bash
git add .
git commit -m "feat: add SEO optimization with meta tags and sitemap"
```

---

## Phase 15: Testing & Deployment (GLM 4.7)

### Task 15: Final testing and deployment

**Files:**
- Create: `public/vercel.json` (if deploying to Vercel)
- Create: `.env.example`

**Step 1: Test all functionality**

- All sections render correctly
- Forms validate and submit
- Animations work smoothly
- Mobile responsive
- No console errors

**Step 2: Build production bundle**

Run: `npm run build`
Expected: Successful build with no errors

**Step 3: Test production build locally**

Run: `npm run preview`

**Step 4: Configure deployment**

Create vercel.json or other deployment config with environment variables

**Step 5: Deploy to production**

Push to git, deploy to Vercel/Netlify/custom server

**Step 6: Post-deployment testing**

- Test live site on all browsers
- Verify forms work in production
- Check analytics tracking

**Step 7: Final commit**

```bash
git add .
git commit -m "feat: complete partner landing page and deploy to production"
```

---

## Agent Assignments Summary

**GLM 4.7 Agent:**
- Phase 1: Project Setup & Foundation
- Phase 2: Header & Navigation
- Phase 10: Contact Form + Email Integration
- Phase 11: Footer
- Phase 12: Performance Optimization
- Phase 13: Mobile Adaptation
- Phase 14: SEO & Meta Tags
- Phase 15: Testing & Deployment

**Gemini-Pro Agent (with frontend-design skill):**
- Phase 3: Hero Section
- Phase 4: Benefits Section
- Phase 5: How It Works Section
- Phase 6: Partnership Terms Section
- Phase 7: Projects/Cases Section
- Phase 8: Testimonials Section
- Phase 9: FAQ Section
