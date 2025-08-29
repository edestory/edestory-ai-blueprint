export type Language = 'ru' | 'en';

export interface Translation {
  [key: string]: string | Translation;
}

export const translations = {
  ru: {
    common: {
      demo: 'Запросить демо',
      learnMore: 'Узнать больше',
      getStarted: 'Начать работу',
      contact: 'Связаться',
      about: 'О нас',
      back: 'Назад',
      next: 'Далее',
      loading: 'Загрузка...',
      error: 'Ошибка',
      success: 'Успешно',
    },
    nav: {
      home: 'Главная',
      product: 'Продукт',
      platform: 'Платформа',
      templates: 'Шаблоны',
      solutions: 'Решения',
      pricing: 'Цены',
      cases: 'Кейсы',
      resources: 'Ресурсы',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      title: 'AI-платформа для мгновенного запуска D2C бренда',
      subtitle: 'Полный цикл от идеи до первых продаж за 1 час. 6 AI-модулей, готовые шаблоны и мгновенный деплой.',
      cta: 'Запросить демо',
      watchDemo: 'Посмотреть демо',
      trustedBy: 'Нам доверяют',
    },
    modules: {
      title: 'Полный набор AI-модулей',
      subtitle: 'Все, что нужно для запуска и масштабирования D2C бренда',
      architect: {
        title: 'AI-Архитектор',
        description: 'Умный конструктор сайтов с персонализацией под вашу нишу',
        status: 'MVP Ready'
      },
      content: {
        title: 'AI-Контент',
        description: 'Генерация SEO-текстов, описаний товаров и маркетинговых материалов',
        status: 'MVP Ready'
      },
      marketer: {
        title: 'AI-Маркетолог',
        description: 'Стратегии продвижения, рекламные кампании и аналитика',
        status: 'Q4 2025'
      },
      support: {
        title: 'AI-Поддержка',
        description: 'Чат-бот для клиентского сервиса и обработки заказов',
        status: 'Q4 2025'
      },
      logistics: {
        title: 'AI-Логистика',
        description: 'Управление складом, доставкой и фулфилментом',
        status: 'Q2 2026'
      },
      analyst: {
        title: 'AI-Аналитик',
        description: 'Бизнес-аналитика, прогнозирование и оптимизация',
        status: 'Q1 2026'
      }
    },
    onboarding: {
      title: 'Запуск за 1 час',
      subtitle: 'Простой процесс от идеи до готового магазина',
      steps: [
        {
          title: 'Выберите нишу',
          description: 'AI анализирует вашу целевую аудиторию и конкурентов'
        },
        {
          title: 'Настройте дизайн',
          description: 'Персонализируйте шаблон под ваш бренд'
        },
        {
          title: 'Добавьте товары',
          description: 'AI сгенерирует описания и SEO-контент'
        },
        {
          title: 'Запустите магазин',
          description: 'Мгновенный деплой на собственном домене'
        }
      ]
    },
    footer: {
      company: 'Компания',
      product: 'Продукт',
      resources: 'Ресурсы',
      legal: 'Правовая информация',
      address: 'Marbella, Spain',
      rights: '© 2024 Edestory. Все права защищены.'
    }
  },
  en: {
    common: {
      demo: 'Request Demo',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contact: 'Contact',
      about: 'About',
      back: 'Back',
      next: 'Next',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
    nav: {
      home: 'Home',
      product: 'Product',
      platform: 'Platform',
      templates: 'Templates',
      solutions: 'Solutions',
      pricing: 'Pricing',
      cases: 'Cases',
      resources: 'Resources',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'AI Platform for Instant D2C Brand Launch',
      subtitle: 'Complete cycle from idea to first sales in 1 hour. 6 AI modules, ready templates and instant deployment.',
      cta: 'Request Demo',
      watchDemo: 'Watch Demo',
      trustedBy: 'Trusted by',
    },
    modules: {
      title: 'Complete AI Module Suite',
      subtitle: 'Everything you need to launch and scale your D2C brand',
      architect: {
        title: 'AI Architect',
        description: 'Smart website builder with niche personalization',
        status: 'MVP Ready'
      },
      content: {
        title: 'AI Content',
        description: 'Generate SEO copy, product descriptions and marketing materials',
        status: 'MVP Ready'
      },
      marketer: {
        title: 'AI Marketer',
        description: 'Marketing strategies, ad campaigns and analytics',
        status: 'Q4 2025'
      },
      support: {
        title: 'AI Support',
        description: 'Customer service chatbot and order processing',
        status: 'Q4 2025'
      },
      logistics: {
        title: 'AI Logistics',
        description: 'Inventory, shipping and fulfillment management',
        status: 'Q2 2026'
      },
      analyst: {
        title: 'AI Analyst',
        description: 'Business analytics, forecasting and optimization',
        status: 'Q1 2026'
      }
    },
    onboarding: {
      title: 'Launch in 1 Hour',
      subtitle: 'Simple process from idea to ready store',
      steps: [
        {
          title: 'Choose Niche',
          description: 'AI analyzes your target audience and competitors'
        },
        {
          title: 'Setup Design',
          description: 'Personalize template for your brand'
        },
        {
          title: 'Add Products',
          description: 'AI generates descriptions and SEO content'
        },
        {
          title: 'Launch Store',
          description: 'Instant deployment on your domain'
        }
      ]
    },
    footer: {
      company: 'Company',
      product: 'Product',
      resources: 'Resources',
      legal: 'Legal',
      address: 'Marbella, Spain',
      rights: '© 2024 Edestory. All rights reserved.'
    }
  }
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let current: any = translations[lang];
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof current === 'string' ? current : key;
}