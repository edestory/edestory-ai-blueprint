import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, Settings, Zap, BarChart3, Users } from 'lucide-react';

const modules = [
  {
    title: "AI‑Архитектор",
    description: "создание и оптимизация сайтов",
    status: "MVP Ready",
    statusType: "ready" as const
  },
  {
    title: "AI‑Контент",
    description: "генерация текстов и медиа",
    status: "MVP Ready",
    statusType: "ready" as const
  },
  {
    title: "AI‑Маркетолог",
    description: "трафик, реклама, SEO",
    status: "Coming Q4 2025",
    statusType: "coming" as const
  },
  {
    title: "AI‑Поддержка",
    description: "24/7 сервис и продажи",
    status: "Coming Q4 2025",
    statusType: "coming" as const
  },
  {
    title: "AI‑Логистика",
    description: "закупки и поставки",
    status: "Coming Q2 2026",
    statusType: "future" as const
  },
  {
    title: "AI‑Аналитик",
    description: "предиктивная аналитика",
    status: "Coming Q1 2026",
    statusType: "future" as const
  }
];

const kpis = [
  {
    category: "Технические",
    metrics: ["Uptime 99.9%", "API <200ms", "Lighthouse >90"]
  },
  {
    category: "Продуктовые",
    metrics: ["NPS >70", "Adoption >60%", "тикеты <2/клиент/мес"]
  },
  {
    category: "Бизнес",
    metrics: ["MRR Growth 20% MoM", "CAC Payback 3 мес", "LTV/CAC >5×"]
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

const breadcrumbLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://ede-story.com"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Платформа",
      "item": "https://ede-story.com/product"
    }
  ]
};

const Product = () => {
  const getStatusBadge = (statusType: "ready" | "coming" | "future") => {
    const variants = {
      ready: { variant: "default" as const, className: "bg-green-100 text-green-800" },
      coming: { variant: "secondary" as const, className: "bg-yellow-100 text-yellow-800" },
      future: { variant: "outline" as const, className: "bg-gray-100 text-gray-600" }
    };
    return variants[statusType];
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
          {JSON.stringify(organizationLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLD)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section className="pt-16 pb-12">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-display mb-6 text-balance">
                Edestory — операционная система вашего e‑commerce
              </h1>
              <p className="text-body-large text-muted-foreground text-balance">
                Edestory — white‑label SaaS‑платформа, которая превращает ваш интернет‑магазин в управляемый 
                данными бизнес. Один оператор управляет до 1 000 SKU; архитектура масштабируется до 
                100 000 SKU силами двух человек.
              </p>
            </div>
          </Container>
        </Section>

        {/* Tech Stack Section */}
        <Section className="bg-muted/30">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-headline mb-8">
                Технологический стек
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
                  <p className="text-sm text-muted-foreground">
                    Next.js 14 (React 18), Tailwind CSS, интеграция Lovable.dev
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Backend</h3>
                  <p className="text-sm text-muted-foreground">
                    Saleor (headless), FastAPI (Python), PostgreSQL с Row‑Level Security
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Инфраструктура</h3>
                  <p className="text-sm text-muted-foreground">
                    Vercel (frontend), Google Cloud Platform (backend), CI/CD GitHub Actions
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Lighthouse CI, Prometheus
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Architecture Section */}
        <Section>
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-headline mb-6">
                Мульти‑тенант архитектура с RLS
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                100+ кастомных доменов → Vercel Edge → фронтенды Next.js → общее ядро Saleor → PostgreSQL (RLS) → 
                слой AI‑сервисов → 6 модулей
              </p>
              
              <div className="bg-background/70 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-3xl mx-auto">
                <h3 className="font-semibold mb-4">Принципы:</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• полная изоляция данных</li>
                  <li>• единое ядро — множество витрин</li>
                  <li>• автоматический деплой новых клиентов</li>
                  <li>• безопасная кастомизация через <strong>theme.json</strong></li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Modules Section */}
        <Section className="bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">
                6 AI‑модулей (статусы)
              </h2>
            </div>

            <Grid cols={2} gap="lg">
              {modules.map((module, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <Badge 
                        variant={getStatusBadge(module.statusType).variant}
                        className={getStatusBadge(module.statusType).className}
                      >
                        {module.status}
                      </Badge>
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

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-6">
                Ссылки на детальные страницы модулей:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="outline" size="sm">
                  <Link to="/solutions">Модули решений</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/templates">Шаблоны</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/cases">Кейсы</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Templates Section */}
        <Section>
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-headline mb-6">
                Template‑as‑a‑Service
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                20+ готовых шаблонов для ниш (косметика, мода, органика, консалтинг и др.). 
                Каждый шаблон — «золотой стандарт»: интеграция с Saleor, подключённые слоты 
                для AI‑агентов, вся стилизация вынесена в <strong>theme.json</strong>.
              </p>
              
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/templates">
                  Посмотреть шаблоны
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </Section>

        {/* Monetization Section */}
        <Section className="bg-muted/30">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline mb-6">
                Модель монетизации
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Revenue Share: 10% в первый год → –1%/год до 5%. Клиент отдельно оплачивает API 
                и инфраструктуру. Наша цель — <strong>рост вашей прибыли</strong>, мы зарабатываем вместе с вами.
              </p>
            </div>
          </Container>
        </Section>

        {/* KPI Section */}
        <Section>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">
                KPI и SLO
              </h2>
            </div>

            <Grid cols={3} gap="lg">
              {kpis.map((kpi, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{kpi.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {kpi.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary text-primary-foreground">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline mb-6 text-primary-foreground">
                Готовы к запуску за 1 час?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Запросить демо
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/templates">Посмотреть шаблоны</Link>
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