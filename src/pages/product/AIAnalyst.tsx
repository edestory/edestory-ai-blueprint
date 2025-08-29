import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleBreadcrumbs from '@/components/ModuleBreadcrumbs';
import ModuleNavigation from '@/components/ModuleNavigation';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';
import { Metric } from '@/components/Metric';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Brain, Target, Settings, Activity } from 'lucide-react';

const faqItems = [
  {
    question: "Какие данные анализирует AI-Аналитик?",
    answer: "Продажи, клиенты, маркетинг, операции, финансы, внешние факторы рынка и конкуренции."
  },
  {
    question: "Насколько точны прогнозы AI?",
    answer: "Точность прогнозов 85-95% в зависимости от типа данных и временного горизонта."
  },
  {
    question: "Можно ли настроить собственные метрики?",
    answer: "Да, создание кастомных KPI, дашбордов и автоматических отчетов под специфику бизнеса."
  },
  {
    question: "Интегрируется ли с внешними системами?",
    answer: "Да, интеграция с Google Analytics, CRM, ERP, рекламными платформами, социальными сетями."
  }
];

const workSteps = [
  {
    title: "Сбор и интеграция данных",
    description: "Подключение всех источников данных, настройка ETL-процессов, создание единого хранилища"
  },
  {
    title: "Анализ и моделирование",
    description: "AI-анализ паттернов, создание предиктивных моделей, выявление инсайтов и возможностей"
  },
  {
    title: "Автоматизация и оптимизация",
    description: "Настройка автоматических отчетов, алертов, рекомендаций для принятия решений"
  }
];

const features = [
  "Предиктивная аналитика продаж и трендов",
  "Сегментация клиентов и LTV-прогнозы",
  "Анализ эффективности маркетинговых каналов",
  "Мониторинг операционных метрик в реальном времени",
  "Автоматические инсайты и рекомендации",
  "Интеграция с BI-системами и внешними API"
];

const organizationLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Edestory",
  "url": "https://ede-story.com"
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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI-Аналитик",
      "item": "https://ede-story.com/product/ai-analyst"
    }
  ]
};

const AIAnalyst = () => {
  return (
    <>
      <Helmet>
        <title>AI-Аналитик — предиктивная аналитика бизнеса | Edestory</title>
        <meta 
          name="description" 
          content="Автоматический анализ данных, прогнозы продаж, сегментация клиентов, бизнес-инсайты. Coming Q1 2026." 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageLD)}
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
            <ModuleBreadcrumbs moduleName="AI-Аналитик" />
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <Badge className="bg-gray-100 text-gray-600">Coming Q1 2026</Badge>
              </div>
              
              <h1 className="text-display mb-6 text-balance">
                AI‑Аналитик: предиктивная аналитика для умных решений
              </h1>
              
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>Ваш персональный data scientist:</strong> автоматически анализирует все данные бизнеса, 
                прогнозирует тренды, находит скрытые инсайты и рекомендует оптимальные решения.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    Присоединиться к листу ожидания
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">Узнать о раннем доступе</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Pain-Solution-Result Section */}
        <Section className="bg-muted">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">Боль → Решение → Результат</h2>
            </div>

            <Grid cols={3} gap="lg">
              <Card className="text-center">
                <CardHeader>
                  <Target className="w-12 h-12 mx-auto mb-4 text-red-500" />
                  <CardTitle className="text-xl">Боль</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    решения интуитивно, данные в разных системах, дорогие аналитики, медленные отчеты
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Settings className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <CardTitle className="text-xl">Решение</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    AI собирает данные из всех источников, находит паттерны, прогнозирует и рекомендует действия
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <CardTitle className="text-xl">Результат</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    точные прогнозы 95%+, данные в реальном времени, рост прибыли на 25%+, быстрые решения
                  </CardDescription>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        </Section>

        {/* How it Works Section */}
        <Section className="bg-muted-alt">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">Как работает (3 фазы)</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Steps steps={workSteps} variant="connected" />
            </div>
          </Container>
        </Section>

        {/* Features Section */}
        <Section className="bg-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">Фичи и возможности</h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* KPI and Case Section */}
        <Section className="bg-secondary">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">Планируемые KPI</h2>
            </div>

            <Grid cols={3} gap="lg" className="mb-12">
              <Metric
                value="95%+"
                label="Точность прогнозов"
                variant="accent"
              />
              <Metric
                value="Real-time"
                label="Скорость аналитики"
                variant="accent"
              />
              <Metric
                value="+25%"
                label="Рост прибыли"
                variant="accent"
              />
            </Grid>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Ожидаемый результат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Принятие решений на основе данных с <strong>точностью прогнозов 95%+</strong> и 
                  <strong>ростом прибыли на 25%+</strong>
                </p>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-muted-alt">
          <Container>
            <FAQ items={faqItems} />
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary text-primary-foreground">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline mb-6 text-primary-foreground">
                Готовы к аналитике нового уровня?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80">
                Запланированный релиз — Q1 2026. Присоединяйтесь к листу ожидания для раннего доступа.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Присоединиться к листу ожидания
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Узнать подробности</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Module Navigation */}
        <Section className="bg-background">
          <Container>
            <ModuleNavigation />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default AIAnalyst;