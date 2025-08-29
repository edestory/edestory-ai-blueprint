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
import { ArrowRight, CheckCircle, Zap, Globe, Settings, Target, Users, TrendingUp } from 'lucide-react';

const faqItems = [
  {
    question: "Можно ли менять только theme.json?",
    answer: "Да, визуал меняется мгновенно, логика не затрагивается."
  },
  {
    question: "Сколько итераций дизайна?",
    answer: "До двух «усилений» на стадии концепта."
  },
  {
    question: "SEO‑фундамент включен?",
    answer: "Генерируем H‑иерархию, мета, FAQ/QA и схемы."
  },
  {
    question: "Поддерживаются ли кастомные шрифты?",
    answer: "Да, через Google Fonts и локальные файлы."
  }
];

const workSteps = [
  {
    title: "Стратегический анализ и структура",
    description: "5 ключевых вопросов → цели/УТП. Поиск и анализ топ‑5 конкурентов. Карта сайта (sitemap) и рекомендации по структуре (UX/CRO)"
  },
  {
    title: "Визуальная концепция и итерации", 
    description: "5 предложений стиля (минимализм → тёмная тема). Концепт‑макет главной: сетка, шрифты, палитра. До 2 итераций «усиления» дизайна"
  },
  {
    title: "Наполнение и финальная оптимизация",
    description: "Генерация первичного SEO‑контента под разделы. Чек‑лист из 60+ пунктов SEO/AIO. Передача готового пакета в разработку"
  }
];

const features = [
  "Безопасная стилизация через /content/theme.json",
  "Хлебные крошки, OG, JSON‑LD, FAQ автогенерация",
  "Интеграции: Saleor, Vercel, GCP, GA4, Webhooks",
  "Поддержка мультиязычности (RU/EN)",
  "Адаптивный дизайн под все устройства"
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
      "name": "AI-Архитектор",
      "item": "https://ede-story.com/product/ai-architect"
    }
  ]
};

const AIArchitect = () => {
  return (
    <>
      <Helmet>
        <title>AI-Архитектор — проектирование сайта за 30 минут | Edestory</title>
        <meta 
          name="description" 
          content="Анализ конкурентов, создание архитектуры UX/UI, безопасная кастомизация через theme.json. MVP Ready." 
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
            <ModuleBreadcrumbs moduleName="AI-Архитектор" />
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <Badge className="bg-green-100 text-green-800">MVP Ready</Badge>
              </div>
              
              <h1 className="text-display mb-6 text-balance">
                AI‑Архитектор: спроектируйте идеальный сайт за 30 минут
              </h1>
              
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>Ваш персональный стратег:</strong> анализирует лидеров ниши и создаёт архитектуру, 
                UX и визуал вашего сайта. Всё — через безопасную кастомизацию theme.json.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    Начать проектирование бесплатно
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">Запросить демо</Link>
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
                    недельные брифы, бесконечные правки, дорогостоящий дизайн, медленный запуск
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
                    AI‑Архитектор проводит онбординг, анализирует 5 лидеров, строит карту сайта, предлагает визуальные варианты
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
                    запуск за 1 час, структурный SEO‑фундамент, единый стиль, готовность к масштабированию
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
              <h2 className="text-headline mb-6">Фичи и интеграции</h2>
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
              <h2 className="text-headline mb-6">KPI и мини‑кейс</h2>
            </div>

            <Grid cols={3} gap="lg" className="mb-12">
              <Metric
                value="≤ 30 мин"
                label="Время до первого контента"
                variant="accent"
              />
              <Metric
                value="> 90"
                label="Lighthouse Score на старте"
                variant="accent"
              />
              <Metric
                value="60+"
                label="SEO-готовность из коробки"
                variant="accent"
              />
            </Grid>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Демо‑кейс</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  сайт «мода» запущен за <strong>58 мин</strong>; <strong>+23% конверсии</strong> vs старый шаблон
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
                Готовы спроектировать идеальный сайт?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Начать бесплатно
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

export default AIArchitect;