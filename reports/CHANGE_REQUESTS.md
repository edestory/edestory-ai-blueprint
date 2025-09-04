# CHANGE REQUESTS - EDESTORY

## Предложения по улучшению (после релиза)

### HIGH IMPACT / LOW EFFORT ⭐⭐⭐
1. **Self-hosted шрифты** (2 часа)
   - Заменить Google Fonts на локальные файлы
   - Impact: +15 Lighthouse Performance
   - Effort: Low

2. **WebP изображения** (4 часа)  
   - Конвертация всех изображений в WebP/AVIF
   - Impact: Сокращение загрузки на 30-50%
   - Effort: Medium

### HIGH IMPACT / MEDIUM EFFORT ⭐⭐
3. **Динамический OG генератор** (1 день)
   - API маршрут для генерации OG изображений
   - Impact: Улучшение sharing в соцсетях
   - Effort: Medium

4. **Тестирование** (2 дня)
   - Unit + E2E тесты для критичных путей
   - Impact: Стабильность и confidence
   - Effort: High

### MEDIUM IMPACT / LOW EFFORT ⭐
5. **Cookie consent** (4 часа)
   - GDPR совместимый баннер согласия
   - Impact: Юридическая защита
   - Effort: Low

6. **Мониторинг ошибок** (2 часа)
   - Интеграция Sentry для отслеживания багов
   - Impact: Быстрое реагирование на проблемы
   - Effort: Low

## НЕ рекомендуется (пока)

### Сложные изменения архитектуры
- Переход на Next.js (слишком рискованно)
- Микрофронтенды (преждевременно)
- Server-side rendering (не нужно пока)

---
*Приоритизировать по бизнес-ценности и техническим рискам*