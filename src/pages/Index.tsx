import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Metric } from '@/components/Metric';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe, Zap } from 'lucide-react';

const faqItems = [
  {
    question: "Можно ли запустить за 1 час?",
    answer: "Да. Стандартный онбординг — около 60 минут."
  },
  {
    question: "Как обеспечивается изоляция данных?",
    answer: "Через мульти‑тенант ядро и RLS в PostgreSQL."
  },
  {
    question: "Что включает 10%?",
    answer: "Лицензию платформы, доступ к 6 AI‑модулям, поддержку и обновления."
  },
  {
    question: "Сколько SKU тянет платформа?",
    answer: "Старт — до 1 000 SKU одним оператором; масштаб — до 100 000 SKU."
  },
  {
    question: "Где вы находитесь?",
    answer: "Marbella, Spain. Работаем с клиентами ЕС/Великобритания/США/Канада/ОАЭ."
  }
];

const onboardingSteps = [
  {
    title: "Диалог с AI (5 мин)",
    description: "цели, ниша, УТП"
  },
  {
    title: "Выбор шаблона (10 мин)",
    description: "галерея 20+ нишевых шаблонов"
  },
  {
    title: "Автодеплой (15 мин)",
    description: "Vercel + домен → живой сайт"
  },
  {
    title: "Генерация контента (15 мин)",
    description: "тексты/медиа под нишу"
  },
  {
    title: "Финальная проверка (15 мин)",
    description: "чек‑лист SEO/AIO → запуск"
  }
];

const modules = [
  {
    title: "AI Website Architect",
    description: "Проектирует структуру, UX и визуал, анализируя лидеров вашей ниши",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "AI Content Factory",
    description: "Автономный «контент‑завод»: SEO‑тексты, описания, статьи, посты",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "AI Marketer",
    description: "Мультиканальный маркетинг: конкурентный анализ 24/7, кампании",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Умный семантический поиск",
    description: "На базе Google Vertex AI: понимает смысловые запросы",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "ERP/CRM на базе AI",
    description: "Централизованные заказы, клиенты, предиктивная аналитика",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    title: "AI‑Закупщик и AI‑Логист",
    description: "Прогноз спроса, автозаказы поставщикам, 3PL оптимизация",
    icon: <ArrowRight className="w-6 h-6" />
  }
];

const organizationLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Edestory",
  "url": "https://ede-story.com",
  "logo": "https://ede-story.com/logo.png",
  "description": "AI-powered e-commerce platform for creating online stores",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marbella",
    "addressCountry": "Spain"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-XXX-XXX-XXX",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://twitter.com/edestory",
    "https://linkedin.com/company/edestory"
  ]
};

const faqPageLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Edestory — AI-автоматизация e-commerce: запуск за 1 час, Rev-Share 10%</title>
        <meta 
          name="description" 
          content="White-label платформа на Saleor. 6 AI-модулей: сайт, контент, маркетинг, поддержка, логистика, аналитика. Запуск за 1 час. Marbella, Spain." 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageLD)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #565656, #5a5a5a)'}}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,168,83,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,168,83,0.03),transparent_50%)]" />
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-display mb-6 text-balance text-white">
                Ваша AI‑команда для управления e‑commerce бизнесом
              </h1>
              <p className="text-body-large text-gray-200 mb-12 text-balance">
                <strong>Мы предоставляем IT‑платформу «под ключ»</strong>, которая служит операционной 
                системой для вашего бизнеса. Наши автономные AI‑агенты автоматизируют до 80% рутины 
                и позволяют управлять магазином с ассортиментом до 100 000 товаров силами двух человек.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white border-0">
                  <Link to="/contact">
                    Запросить демо
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Link to="/product">Узнать подробнее</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* About Section */}
        <Section className="bg-muted">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-headline mb-6">
                Edestory: операционная система для роста вашей прибыли
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Мы продаём не просто сайт. Мы предоставляем <strong>результат</strong> — радикальное 
                повышение эффективности и прибыльности вашего e‑commerce. Платформа Edestory — готовое 
                решение «под ключ», заменяющее целый штат специалистов: от маркетолога и SEO до закупщика и логиста.
              </p>
            </div>
          </Container>
        </Section>

        {/* Technology Section */}
        <Section className="bg-muted-alt">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-headline mb-6">
                Технологии, которым доверяют лидеры
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                В основе Edestory — headless‑архитектура <strong>Saleor</strong> (Next.js, GraphQL), 
                проверенная мировыми брендами (Lush, Breitling, Dr. Martens). Это гарантирует:
              </p>
            </div>

            <Grid cols={3} className="mb-12">
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Скорость</h3>
                <p className="text-muted-foreground">
                  средняя загрузка страниц <strong>&lt; 1,5 с</strong> → выше конверсия и позиции в Google
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Гибкость</h3>
                <p className="text-muted-foreground">
                  лёгкая интеграция любых сервисов под любые бизнес‑задачи
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Надёжность</h3>
                <p className="text-muted-foreground">
                  технологии, выдерживающие миллионы посетителей
                </p>
              </div>
            </Grid>

            <div className="bg-background/70 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                <strong>Важно:</strong> В стартовой конфигурации оператор управляет до <strong>1 000 SKU</strong>. 
                При масштабировании архитектура поддерживает <strong>100 000 SKU</strong> под управлением двух операторов.
              </p>
            </div>
          </Container>
        </Section>

        {/* Modules Section */}
        <Section className="bg-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">
                Что входит в полную автоматизацию Edestory
              </h2>
            </div>

            <Grid cols={2} gap="lg">
              {modules.map((module, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {module.icon}
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Onboarding Section */}
        <Section className="bg-secondary">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">
                Онбординг за 1 час — как это работает
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <Steps steps={onboardingSteps} variant="numbered" />
            </div>
          </Container>
        </Section>

        {/* Architecture Section */}
        <Section className="bg-muted-alt">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-headline mb-6">
                Архитектура и безопасность данных
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Vercel Edge → Next.js → <strong>Saleor Core</strong> → PostgreSQL (RLS) → AI‑сервисы → 6 модулей
              </p>
              <p className="text-muted-foreground">
                Ключевые принципы: изоляция данных (Row‑Level Security), единое ядро, множество фронтендов, 
                автоматический деплой новых клиентов.
              </p>
            </div>
          </Container>
        </Section>

        {/* Financial Benefits Section */}
        <Section className="bg-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">
                Пример финансовой выгоды (референс‑кейс)
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <Grid cols={3} gap="lg" className="text-center">
                <Metric
                  value="€125k/год"
                  label="До (типичный стек)"
                  variant="default"
                />
                <Metric
                  value="€37k/год"
                  label="После (на Edestory)"
                  variant="accent"
                />
                <Metric
                  value="~€88k/год"
                  label="Экономия"
                  variant="accent"
                />
              </Grid>
            </div>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section className="bg-muted">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline mb-6">
                Ценообразование (коротко)
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Модель <strong>Revenue Share</strong>: <strong>10%</strong> от оборота в первый год → 
                <strong>–1% ежегодно</strong> до минимума <strong>5%</strong>
              </p>
              <p className="text-muted-foreground">
                Отдельно: рекламные бюджеты, внешние API и инфраструктура.
              </p>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-secondary">
          <Container>
            <FAQ 
              title="FAQ (AIO)" 
              items={faqItems}
            />
          </Container>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
