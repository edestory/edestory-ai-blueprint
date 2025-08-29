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
import { ArrowRight, CheckCircle, Truck, Package, BarChart3, Target, Settings, TrendingUp } from 'lucide-react';

const faqItems = [
  {
    question: "С какими поставщиками интегрируется AI-Логистика?",
    answer: "Большинство крупных поставщиков через API, EDI, или автоматизированные каталоги."
  },
  {
    question: "Как происходит прогнозирование спроса?",
    answer: "Анализ исторических данных, сезонности, трендов, внешних факторов и поведения клиентов."
  },
  {
    question: "Можно ли контролировать автоматические заказы?",
    answer: "Да, настройка лимитов, подтверждения заказов, исключения для определенных товаров."
  },
  {
    question: "Работает ли с международными поставщиками?",
    answer: "Да, поддержка различных валют, таможенного оформления и международной логистики."
  }
];

const workSteps = [
  {
    title: "Анализ и интеграция",
    description: "Интеграция с поставщиками и 3PL, анализ исторических данных продаж и движения товаров"
  },
  {
    title: "Прогнозирование и планирование",
    description: "AI-прогноз спроса, оптимизация уровней запасов, автоматическое планирование закупок"
  },
  {
    title: "Автоматизация и оптимизация",
    description: "Автоматические заказы поставщикам, оптимизация логистических маршрутов и складских процессов"
  }
];

const features = [
  "Предиктивный анализ спроса с точностью 95%+",
  "Автоматические заказы поставщикам по алгоритмам",
  "Оптимизация складских запасов и оборачиваемости",
  "Интеграция с 3PL и курьерскими службами",
  "Управление возвратами и утилизацией",
  "Мультивалютность и международная логистика"
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
      "name": "AI-Логистика",
      "item": "https://ede-story.com/product/ai-logistics"
    }
  ]
};

const AILogistics = () => {
  return (
    <>
      <Helmet>
        <title>AI-Логистика — умные закупки и поставки | Edestory</title>
        <meta 
          name="description" 
          content="Прогноз спроса, автоматические заказы поставщикам, оптимизация 3PL. Снижение складских остатков на 30%. Coming Q2 2026." 
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
            <ModuleBreadcrumbs moduleName="AI-Логистика" />
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <Badge className="bg-gray-100 text-gray-600">Coming Q2 2026</Badge>
              </div>
              
              <h1 className="text-display mb-6 text-balance">
                AI‑Логистика: умный закупщик и логист в одном
              </h1>
              
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>Никогда не упускайте продажи из-за недостатка товара:</strong> AI прогнозирует спрос, 
                автоматически заказывает у поставщиков, оптимизирует склады и логистику.
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
                    затоваренность, дефициты, ручное планирование, дорогая логистика, потери на складе
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
                    AI-прогноз спроса, автозаказы поставщикам, оптимизация маршрутов и складских процессов
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
                    снижение остатков на 30%, рост оборачиваемости в 2 раза, экономия на логистике 25%
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
                label="Точность прогноза спроса"
                variant="accent"
              />
              <Metric
                value="-30%"
                label="Сокращение остатков"
                variant="accent"
              />
              <Metric
                value="x2"
                label="Рост оборачиваемости"
                variant="accent"
              />
            </Grid>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Ожидаемый результат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Полная автоматизация закупок и логистики с <strong>экономией 25%</strong> на складских 
                  и логистических операциях
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
                Готовы к умной логистике?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80">
                Запланированный релиз — Q2 2026. Присоединяйтесь к листу ожидания для раннего доступа.
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

export default AILogistics;