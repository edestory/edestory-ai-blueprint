import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Zap, Shield, Globe, Cpu, BarChart3, Users } from 'lucide-react';

const Index = () => {
  const modules = [
    {
      id: 'ai-architect',
      title: 'AI Website Architect',
      description: 'Проектирует структуру, UX и визуал, анализируя лидеров вашей ниши',
      icon: Globe,
      status: 'MVP Ready'
    },
    {
      id: 'ai-content',
      title: 'AI Content Factory',
      description: 'Автономный «контент‑завод»: SEO‑тексты, описания, статьи, посты',
      icon: Cpu,
      status: 'MVP Ready'
    },
    {
      id: 'ai-marketer', 
      title: 'AI Marketer',
      description: 'Мультиканальный маркетинг: конкурентный анализ 24/7, кампании',
      icon: BarChart3,
      status: 'В разработке'
    },
    {
      id: 'ai-search',
      title: 'Умный семантический поиск',
      description: 'На базе Google Vertex AI: понимает смысловые запросы',
      icon: Zap,
      status: 'MVP Ready'
    },
    {
      id: 'ai-erp',
      title: 'ERP/CRM на базе AI',
      description: 'Централизованные заказы, клиенты, предиктивная аналитика',
      icon: Shield,
      status: 'В разработке'
    },
    {
      id: 'ai-logistics',
      title: 'AI‑Закупщик и AI‑Логист',
      description: 'Прогноз спроса, автозаказы поставщикам, 3PL оптимизация',
      icon: Users,
      status: 'В планах'
    }
  ];

  const onboardingSteps = [
    { number: 1, title: 'Диалог с AI (5 мин)', description: 'цели, ниша, УТП' },
    { number: 2, title: 'Выбор шаблона (10 мин)', description: 'галерея 20+ нишевых шаблонов' },
    { number: 3, title: 'Автодеплой (15 мин)', description: 'Vercel + домен → живой сайт' },
    { number: 4, title: 'Генерация контента (15 мин)', description: 'тексты/медиа под нишу' },
    { number: 5, title: 'Финальная проверка (15 мин)', description: 'чек‑лист SEO/AIO → запуск' }
  ];

  const faqs = [
    {
      question: 'Можно ли запустить за 1 час?',
      answer: 'Да. Стандартный онбординг — около 60 минут.'
    },
    {
      question: 'Как обеспечивается изоляция данных?',
      answer: 'Через мульти‑тенант ядро и RLS в PostgreSQL.'
    },
    {
      question: 'Что включает 10%?',
      answer: 'Лицензию платформы, доступ к 6 AI‑модулям, поддержку и обновления.'
    },
    {
      question: 'Сколько SKU тянет платформа?',
      answer: 'Старт — до 1 000 SKU одним оператором; масштаб — до 100 000 SKU.'
    },
    {
      question: 'Где вы находитесь?',
      answer: 'Marbella, Spain. Работаем с клиентами ЕС/Великобритания/США/Канада/ОАЭ.'
    }
  ];

  const MetricComponent = ({ value, label, className = "" }: { value: string; label: string; className?: string }) => (
    <div className={`text-center ${className}`}>
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Edestory — AI-автоматизация e-commerce: запуск за 1 час, Rev-Share 10%</title>
        <meta name="description" content="White-label платформа на Saleor. 6 AI-модулей: сайт, контент, маркетинг, поддержка, логистика, аналитика. Запуск за 1 час. Marbella, Spain." />
        <meta name="keywords" content="AI e-commerce, автоматизация интернет-магазин, Saleor, white-label платформа" />
        <link rel="canonical" href="https://ede-story.com/" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section pt-32 pb-20">
          <div className="container-wide text-center">
            <Badge className="mb-6 bg-muted-lighter text-primary border-border-accent">
              AI-автоматизация e-commerce
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
              Ваша AI‑команда для управления{' '}
              <span className="gradient-text">
                e‑commerce бизнесом
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Мы предоставляем IT‑платформу «под ключ», которая служит операционной системой для вашего бизнеса. 
              Наши автономные AI‑агенты автоматизируют до 80% рутины и позволяют управлять магазином с ассортиментом 
              до 100 000 товаров силами двух человек.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="text-lg px-8 py-4">
                <a href="/contact">Запросить демо</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <a href="/product">Узнать подробнее <ChevronRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Edestory: операционная система для роста вашей прибыли
              </h2>
              <p className="text-xl text-muted-foreground">
                Мы продаём не просто сайт. Мы предоставляем <strong className="text-primary">результат</strong> — 
                радикальное повышение эффективности и прибыльности вашего e‑commerce. Платформа Edestory — готовое 
                решение «под ключ», заменяющее целый штат специалистов: от маркетолога и SEO до закупщика и логиста.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="section">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Технологии, которым доверяют лидеры
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                В основе Edestory — headless‑архитектура <strong>Saleor</strong> (Next.js, GraphQL), 
                проверенная мировыми брендами (Lush, Breitling, Dr. Martens). Это гарантирует:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-border-accent">
                <CardContent className="p-0">
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Скорость</h3>
                  <p className="text-muted-foreground">средняя загрузка страниц <strong>&lt; 1,5 с</strong> → выше конверсия и позиции в Google</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-border-accent">
                <CardContent className="p-0">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Гибкость</h3>
                  <p className="text-muted-foreground">лёгкая интеграция любых сервисов под любые бизнес‑задачи</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-border-accent">
                <CardContent className="p-0">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Надёжность</h3>
                  <p className="text-muted-foreground">технологии, выдерживающие миллионы посетителей</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg mt-12 border border-border-accent">
              <p className="text-lg">
                <strong>Важно:</strong> В стартовой конфигурации оператор управляет до <strong>1 000 SKU</strong>. 
                При масштабировании архитектура поддерживает <strong>100 000 SKU</strong> под управлением двух операторов.
              </p>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Что входит в полную автоматизацию Edestory
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <Card key={module.id} className="p-6 border-border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                        <Badge variant={module.status === 'MVP Ready' ? 'default' : 'secondary'}>
                          {module.status}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Onboarding Section */}
        <section className="section">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Онбординг за 1 час — как это работает
              </h2>
            </div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              {onboardingSteps.map((step, index) => (
                <div key={step.number} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Архитектура и безопасность данных
              </h2>
              <div className="bg-card p-8 rounded-lg border border-border-accent">
                <p className="text-lg font-mono text-center">
                  Vercel Edge → Next.js → <strong className="text-primary">Saleor Core</strong> → PostgreSQL (RLS) → AI‑сервисы → 6 модулей
                </p>
                <p className="text-muted-foreground mt-4">
                  Ключевые принципы: изоляция данных (Row‑Level Security), единое ядро, множество фронтендов, 
                  автоматический деплой новых клиентов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Benefits */}
        <section className="section">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Пример финансовой выгоды (референс‑кейс)
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 border-border-accent">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-8">
                    <MetricComponent 
                      value="€125k/год"
                      label="До (типичный стек)"
                      className="text-red-600"
                    />
                    <MetricComponent 
                      value="€37k/год"
                      label="После (на Edestory)"
                      className="text-green-600"
                    />
                  </div>
                  <div className="mt-6 pt-6 border-t border-border-accent">
                    <MetricComponent 
                      value="~€88k/год"
                      label="Экономия"
                      className="text-primary"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ценообразование (коротко)
              </h2>
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 border-border-accent">
                  <CardContent className="p-0 text-center">
                    <p className="text-xl mb-4">
                      Модель <strong className="text-primary">Revenue Share</strong>
                    </p>
                    <p className="text-2xl font-bold text-primary mb-2">10%</p>
                    <p className="text-muted-foreground mb-4">от оборота в первый год</p>
                    <p className="text-lg">
                      <strong className="text-primary">–1% ежегодно</strong> до минимума <strong className="text-primary">5%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Отдельно: рекламные бюджеты, внешние API и инфраструктура.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                FAQ (AIO)
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 border-border-accent">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
