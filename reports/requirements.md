# REQUIREMENTS - EDESTORY CORPORATE LANDING

## Источник правды (агрегированные требования)

### Техническая архитектура
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + CSS Variables  
- **Deployment:** Ready for GitHub export
- **i18n:** Русский (основной), English

### Фирменный стиль EDESTORY

#### Цветовая палитра
- `--primary: #3d3d3d` (темно-графитовый)
- `--foreground: #171717` (черный текст)  
- `--accent: #E6A853` (золотистый)
- `--burgundy: #8B2635` (бордовый для негативных акцентов)
- `--muted: #fcfcfc` (светло-серый #1)
- `--secondary: #f5f5f5` (светло-серый #2)

#### Типографика
- **Шрифт:** Montserrat (Google Fonts)
- **Веса:** 300, 400, 500, 600, 700
- **Display:** clamp(2.5rem, 5vw, 4rem)

### SEO требования
- Title ≤ 60 символов
- Description ≤ 160 символов  
- Один H1 на страницу
- Правильная иерархия H2/H3
- JSON-LD: Organization, SoftwareApplication, FAQPage
- Open Graph + Twitter Cards
- Canonical URLs

### Производительность  
- Lighthouse ≥ 95 во всех категориях
- LCP < 2.5s
- CLS < 0.1  
- INP < 200ms

### Доступность (WCAG 2.2 AA)
- Контрастность ≥ 4.5:1
- Семантичная HTML
- Навигация с клавиатуры
- Alt тексты для изображений

### Безопасность
- CSP headers
- XSS protection
- HSTS  
- Input sanitization

### Контент структура
Уже утвержденная структура:
- Главный экран (Hero)
- Проблема (Pain Point)  
- Решение (Solution)
- Как работает (How It Works)
- Бизнес-модель 
- Почему мы (Why Us)
- Призыв к действию (CTA)