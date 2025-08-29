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
import { ArrowRight, CheckCircle, MessageCircle, Users, Clock, Target, Settings, TrendingUp } from 'lucide-react';

const faqItems = [
  {
    question: "На каких языках работает AI-Поддержка?",
    answer: "Русский, английский, испанский, французский, немецкий с возможностью добавления других языков."
  },
  {
    question: "Как происходит обучение AI на специфике бизнеса?",
    answer: "Анализ истории обращений, продуктовой базы, FAQ, интеграция с базой знаний компании."
  },
  {
    question: "Можно ли переключить на живого оператора?",
    answer: "Да, эскалация к человеку при сложных вопросах или по запросу клиента."
  },
  {
    question: "Какие каналы поддержки охватывает?",
    answer: "Чат на сайте, email, социальные сети, мессенджеры, голосовые звонки."
  }
];

const workSteps = [
  {
    title: "Настройка и обучение",
    description: "Анализ продуктовой линейки, загрузка базы знаний, настройка сценариев и обучение AI"
  },
  {
    title: "Интеграция каналов",
    description: "Подключение чата, email, соцсетей, мессенджеров, настройка эскалации к операторам"
  },
  {
    title: "Оптимизация и аналитика",
    description: "Анализ обращений, оптимизация ответов, A/B тестирование, улучшение конверсии"
  }
];

const features = [
  "24/7 поддержка клиентов на всех каналах",
  "Персонализированные рекомендации продуктов",
  "Автоматическая обработка заказов и возвратов",
  "Интеграция с CRM и системами управления заказами",
  "Многоязычная поддержка с локализацией",
  "Аналитика качества обслуживания и удовлетворенности"
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
      "name": "AI-Поддержка",
      "item": "https://ede-story.com/product/ai-support"
    }
  ]
};

const AISupport = () => {
  return (
    <>
      <Helmet>
        <title>AI-Поддержка — клиентский сервис 24/7 | Edestory</title>
        <meta 
          name="description" 
          content="Автоматическая поддержка клиентов, персонализированные рекомендации, многоканальное обслуживание. Coming Q4 2025." 
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
            <ModuleBreadcrumbs moduleName="AI-Поддержка" />
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <Badge className="bg-orange-100 text-orange-800">Coming Q4 2025</Badge>
              </div>
              
              <h1 className="text-display mb-6 text-balance">
                AI‑Поддержка: ваш клиентский сервис работает 24/7
              </h1>
              
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>Персональный консультант для каждого клиента:</strong> мгновенные ответы, 
                умные рекомендации, автоматическое решение 80% обращений. Продажи растут, клиенты довольны.
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
                    дорогие операторы, долгое время ответа, неконсистентное качество, потеря клиентов
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
                    AI-консультант отвечает мгновенно, знает всю продуктовую линейку, персонализирует рекомендации
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
                    время ответа &lt;30 сек, решение 80% вопросов, +40% к конверсии, экономия на персонале
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
                value="< 30 сек"
                label="Время ответа"
                variant="accent"
              />
              <Metric
                value="80%"
                label="Автоматическое решение"
                variant="accent"
              />
              <Metric
                value="+40%"
                label="Рост конверсии"
                variant="accent"
              />
            </Grid>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Ожидаемый результат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Круглосуточная поддержка с <strong>мгновенными ответами</strong> и 
                  <strong>+40% к конверсии</strong> за счет персонализированных рекомендаций
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
                Готовы к клиентскому сервису нового уровня?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80">
                Запланированный релиз — Q4 2025. Присоединяйтесь к листу ожидания для раннего доступа.
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

export default AISupport;