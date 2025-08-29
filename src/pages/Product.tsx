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
import { useLanguage } from '@/contexts/LanguageContext';

const Product = () => {
  const modules = [
    {
      title: "AI‑Архитектор",
      description: "создание и оптимизация сайтов",
      status: "MVP Ready",
      link: "/modules/architect"
    },
    {
      title: "AI‑Контент",
      description: "генерация текстов и медиа",
      status: "MVP Ready",
      link: "/modules/content"
    },
    {
      title: "AI‑Маркетолог",
      description: "трафик, реклама, SEO",
      status: "Coming Q4 2025",
      link: "/modules/marketer"
    },
    {
      title: "AI‑Поддержка",
      description: "24/7 сервис и продажи",
      status: "Coming Q4 2025",
      link: "/modules/support"
    },
    {
      title: "AI‑Логистика",
      description: "закупки и поставки",
      status: "Coming Q2 2026",
      link: "/modules/logistics"
    },
    {
      title: "AI‑Аналитик",
      description: "предиктивная аналитика",
      status: "Coming Q1 2026",
      link: "/modules/analytics"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Edestory",
    url: "https://ede-story.com",
    logo: "https://ede-story.com/logo.png",
    description: "AI-powered e-commerce platform for creating online stores"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://ede-story.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Платформа",
        item: "https://ede-story.com/product"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Платформа Edestory — операционная система e-commerce на Saleor</title>
        <meta 
          name="description" 
          content="6 AI-модулей: Архитектор, Контент, Маркетолог, Поддержка, Логистика, Аналитика. Мульти-тенант, RLS, запуск за 1 час." 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-subtle" padding="xl">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Edestory — операционная система вашего e‑commerce
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Edestory — white‑label SaaS‑платформа, которая превращает ваш интернет‑магазин в управляемый данными бизнес. 
                Один оператор управляет до 1 000 SKU; архитектура масштабируется до 100 000 SKU силами двух человек.
              </p>
            </div>
          </Container>
        </Section>

        {/* Tech Stack */}
        <Section>
          <Container>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              Технологический стек
            </h2>
            <Grid cols={2} gap="lg" className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-foreground mb-4">Frontend</h3>
                  <p className="text-muted-foreground">
                    <strong>Next.js 14</strong> (React 18), Tailwind CSS, интеграция Lovable.dev
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-foreground mb-4">Backend</h3>
                  <p className="text-muted-foreground">
                    <strong>Saleor</strong> (headless), FastAPI (Python), PostgreSQL с Row‑Level Security
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-foreground mb-4">Инфраструктура</h3>
                  <p className="text-muted-foreground">
                    <strong>Vercel</strong> (frontend), Google Cloud Platform (backend), CI/CD GitHub Actions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-foreground mb-4">Monitoring</h3>
                  <p className="text-muted-foreground">
                    <strong>Lighthouse CI</strong>, Prometheus
                  </p>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        </Section>

        {/* Architecture */}
        <Section variant="muted">
          <Container>
            <div className="text-center max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12">
                Мульти‑тенант архитектура с RLS
              </h2>
              <div className="bg-card p-8 rounded-lg mb-8">
                <p className="text-lg font-mono text-center text-muted-foreground mb-6">
                  100+ кастомных доменов → Vercel Edge → фронтенды Next.js → общее ядро Saleor → PostgreSQL (RLS) → слой AI‑сервисов → 6 модулей
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-foreground">Изоляция данных</div>
                    <div className="text-muted-foreground">Row-Level Security</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-foreground">Единое ядро</div>
                    <div className="text-muted-foreground">Множество витрин</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-foreground">Автодеплой</div>
                    <div className="text-muted-foreground">Новых клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-foreground">Кастомизация</div>
                    <div className="text-muted-foreground">Через theme.json</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* AI Modules */}
        <Section>
          <Container>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              6 AI‑модулей (статусы)
            </h2>
            <Grid cols={2} gap="lg" className="mb-12">
              {modules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = module.link}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={module.status === "MVP Ready" ? "default" : "secondary"}>
                        {module.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {module.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={module.link}>Подробнее</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Ссылки на детальные страницы модулей:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {modules.map((module, index) => (
                  <Button key={index} variant="outline" size="sm" asChild>
                    <a href={module.link}>{module.title}</a>
                  </Button>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Templates */}
        <Section variant="muted">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Template‑as‑a‑Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                20+ готовых шаблонов для ниш (косметика, мода, органика, консалтинг и др.). 
                Каждый шаблон — «золотой стандарт»: интеграция с Saleor, подключённые слоты для AI‑агентов, 
                вся стилизация вынесена в <strong>theme.json</strong>.
              </p>
              <Button variant="outline" asChild>
                <a href="/templates">Посмотреть шаблоны</a>
              </Button>
            </div>
          </Container>
        </Section>

        {/* Monetization */}
        <Section>
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Модель монетизации
              </h2>
              <Card className="p-8">
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Revenue Share: <strong>10%</strong> в первый год → <strong>–1%/год</strong> до <strong>5%</strong>. 
                    Клиент отдельно оплачивает API и инфраструктуру.
                  </p>
                  <p className="text-muted-foreground">
                    Наша цель — <strong>рост вашей прибыли</strong>, мы зарабатываем вместе с вами.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        {/* KPIs */}
        <Section variant="muted">
          <Container>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              KPI и SLO
            </h2>
            <Grid cols={3} gap="lg">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-foreground mb-4">Технические</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Uptime 99.9%</div>
                    <div>API &lt;200ms</div>
                    <div>Lighthouse &gt;90</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-foreground mb-4">Продуктовые</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>NPS &gt;70</div>
                    <div>Adoption &gt;60%</div>
                    <div>Тикеты &lt;2/клиент/мес</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-foreground mb-4">Бизнес</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>MRR Growth 20% MoM</div>
                    <div>CAC Payback 3 мес</div>
                    <div>LTV/CAC &gt;5×</div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section>
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Готовы к запуску за 1 час?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Запросить демо</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/templates">Посмотреть шаблоны</a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Product;