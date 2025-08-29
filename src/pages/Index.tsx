import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Metric } from '@/components/Metric';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';
import ChatWidget from '@/components/ChatWidget';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const faqData = [
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
      status: "MVP Ready"
    },
    {
      title: "AI Content Factory",
      description: "Автономный «контент‑завод»: SEO‑тексты, описания, статьи, посты",
      status: "MVP Ready"
    },
    {
      title: "AI Marketer",
      description: "Мультиканальный маркетинг: конкурентный анализ 24/7, кампании",
      status: "В разработке"
    },
    {
      title: "Умный семантический поиск",
      description: "На базе Google Vertex AI: понимает смысловые запросы",
      status: "В разработке"
    },
    {
      title: "ERP/CRM на базе AI",
      description: "Централизованные заказы, клиенты, предиктивная аналитика",
      status: "В планах"
    },
    {
      title: "AI‑Закупщик и AI‑Логист",
      description: "Прогноз спроса, автозаказы поставщикам, 3PL оптимизация",
      status: "В планах"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Edestory",
    url: "https://ede-story.com",
    logo: "https://ede-story.com/logo.png",
    description: "AI-powered e-commerce platform for creating online stores",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marbella",
      addressCountry: "Spain",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-XXX-XXX-XXX",
      contactType: "customer service",
    },
    sameAs: [
      "https://twitter.com/edestory",
      "https://linkedin.com/company/edestory",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Edestory — AI-автоматизация e-commerce: запуск за 1 час, Rev-Share 10%</title>
        <meta 
          name="description" 
          content="White-label платформа на Saleor. 6 AI-модулей: сайт, контент, маркетинг, поддержка, логистика, аналитика. Запуск за 1 час. Marbella, Spain." 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-subtle" padding="xl">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Ваша AI‑команда для управления e‑commerce бизнесом
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Мы предоставляем IT‑платформу «под ключ», которая служит операционной системой для вашего бизнеса. 
                Наши автономные AI‑агенты автоматизируют до 80% рутины и позволяют управлять магазином с ассортиментом до 100 000 товаров силами двух человек.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Запросить демо</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/product">Узнать подробнее</a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Value Proposition */}
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Edestory: операционная система для роста вашей прибыли
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы продаём не просто сайт. Мы предоставляем <strong>результат</strong> — радикальное повышение 
                эффективности и прибыльности вашего e‑commerce. Платформа Edestory — готовое решение «под ключ», 
                заменяющее целый штат специалистов: от маркетолога и SEO до закупщика и логиста.
              </p>
            </div>
          </Container>
        </Section>

        {/* Technologies */}
        <Section variant="muted">
          <Container>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              Технологии, которым доверяют лидеры
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                В основе Edestory — headless‑архитектура <strong>Saleor</strong> (Next.js, GraphQL), 
                проверенная мировыми брендами (Lush, Breitling, Dr. Martens). Это гарантирует:
              </p>
              
              <Grid cols={3} className="mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-medium text-foreground mb-2">Скорость</h3>
                    <p className="text-sm text-muted-foreground">
                      средняя загрузка страниц <strong>&lt; 1,5 с</strong> → выше конверсия и позиции в Google
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-medium text-foreground mb-2">Гибкость</h3>
                    <p className="text-sm text-muted-foreground">
                      лёгкая интеграция любых сервисов под любые бизнес‑задачи
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-medium text-foreground mb-2">Надёжность</h3>
                    <p className="text-sm text-muted-foreground">
                      технологии, выдерживающие миллионы посетителей
                    </p>
                  </CardContent>
                </Card>
              </Grid>

              <div className="bg-card border-l-4 border-primary p-6 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Важно:</strong> В стартовой конфигурации оператор управляет до <strong>1 000 SKU</strong>. 
                  При масштабировании архитектура поддерживает <strong>100 000 SKU</strong> под управлением двух операторов.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Modules */}
        <Section>
          <Container>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              Что входит в полную автоматизацию Edestory
            </h2>
            <Grid cols={2} gap="lg">
              {modules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Badge variant={module.status === "MVP Ready" ? "default" : "secondary"}>
                        {module.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {module.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Onboarding */}
        <Section variant="muted">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
                Онбординг за 1 час — как это работает
              </h2>
              <Steps steps={onboardingSteps} variant="numbered" />
            </div>
          </Container>
        </Section>

        {/* Architecture */}
        <Section>
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Архитектура и безопасность данных
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <p className="text-lg font-mono text-center text-muted-foreground">
                  Vercel Edge → Next.js → <strong>Saleor Core</strong> → PostgreSQL (RLS) → AI‑сервисы → 6 модулей
                </p>
              </div>
              <p className="text-muted-foreground">
                Ключевые принципы: изоляция данных (Row‑Level Security), единое ядро, 
                множество фронтендов, автоматический деплой новых клиентов.
              </p>
            </div>
          </Container>
        </Section>

        {/* Financial Benefits */}
        <Section variant="muted">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12">
                Пример финансовой выгоды (референс‑кейс)
              </h2>
              <Grid cols={3} gap="lg">
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

        {/* Pricing */}
        <Section>
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Ценообразование (коротко)
              </h2>
              <Card className="p-8">
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Модель <strong>Revenue Share</strong>: <strong>10%</strong> от оборота в первый год → 
                    <strong>–1% ежегодно</strong> до минимума <strong>5%</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Отдельно: рекламные бюджеты, внешние API и инфраструктура.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section variant="muted">
          <Container>
            <FAQ 
              title="FAQ (AIO)"
              items={faqData}
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <Section>
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Готовы начать?
              </h2>
              <Button size="lg" asChild>
                <a href="/contact">Запросить демо</a>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
