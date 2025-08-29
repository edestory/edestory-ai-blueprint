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
import { ArrowRight, CheckCircle, FileText, Search, Globe, Target, Settings, TrendingUp } from 'lucide-react';

const faqItems = [
  {
    question: "Какие типы контента генерируются?",
    answer: "SEO-тексты, описания товаров, статьи блога, посты для соцсетей, email-рассылки."
  },
  {
    question: "Насколько уникальный контент?",
    answer: "100% уникальность, проверка на антиплагиат, адаптация под ваш бренд и тон."
  },
  {
    question: "Можно ли редактировать контент?",
    answer: "Да, все тексты можно дорабатывать через удобный редактор с сохранением SEO."
  },
  {
    question: "Поддерживается ли мультиязычность?",
    answer: "Да, генерация на русском, английском и других языках с учетом локализации."
  }
];

const workSteps = [
  {
    title: "Анализ ниши и брендинг",
    description: "Изучение конкурентов, определение тона бренда, создание контент-стратегии и семантического ядра"
  },
  {
    title: "Массовая генерация контента",
    description: "Создание SEO-текстов, описаний товаров, статей блога, постов для соцсетей на основе ключевых слов"
  },
  {
    title: "Оптимизация и публикация",
    description: "Проверка на уникальность, SEO-оптимизация, форматирование и автопубликация в CMS"
  }
];

const features = [
  "Генерация 1000+ товарных описаний за час",
  "SEO-оптимизация с учетом семантики",
  "Автоматическое создание метатегов и структурированных данных",
  "Интеграция с Saleor, WordPress, Shopify",
  "Проверка уникальности и качества контента",
  "Мультиформатный вывод (HTML, Markdown, JSON)"
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
      "name": "AI-Контент",
      "item": "https://ede-story.com/product/ai-content"
    }
  ]
};

const AIContent = () => {
  return (
    <>
      <Helmet>
        <title>AI-Контент — автогенерация текстов и SEO за минуты | Edestory</title>
        <meta 
          name="description" 
          content="Массовое создание уникального контента: описания товаров, SEO-тексты, статьи. 1000+ текстов за час. MVP Ready." 
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
            <ModuleBreadcrumbs moduleName="AI-Контент" />
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <Badge className="bg-green-100 text-green-800">MVP Ready</Badge>
              </div>
              
              <h1 className="text-display mb-6 text-balance">
                AI‑Контент: автономный «контент‑завод» для вашего e‑commerce
              </h1>
              
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>Массовое производство контента:</strong> SEO‑тексты, описания товаров, статьи, посты. 
                1000+ уникальных текстов за час с полной SEO-оптимизацией.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    Начать генерацию бесплатно
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
                    месяцы на написание описаний, дорогие копирайтеры, неконсистентный контент, плохой SEO
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
                    AI‑генерация всех типов контента с SEO‑оптимизацией, проверкой уникальности и адаптацией под бренд
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
                    1000+ текстов за час, рост органического трафика на 200%+, экономия 90% времени на контенте
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
              <h2 className="text-headline mb-6">KPI и мини‑кейс</h2>
            </div>

            <Grid cols={3} gap="lg" className="mb-12">
              <Metric
                value="1000+"
                label="Текстов за час"
                variant="accent"
              />
              <Metric
                value="100%"
                label="Уникальность контента"
                variant="accent"
              />
              <Metric
                value="+200%"
                label="Рост органического трафика"
                variant="accent"
              />
            </Grid>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Демо‑кейс</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Интернет-магазин электроники: <strong>5000 описаний товаров</strong> за 3 часа, 
                  <strong>+150% органического трафика</strong> за 2 месяца
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
                Готовы автоматизировать создание контента?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Начать бесплатно
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/templates">Посмотреть примеры</Link>
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

export default AIContent;