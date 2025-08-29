import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, TrendingUp, Users, ShoppingCart, BarChart3, Zap } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 'd2c',
      title: 'D2C-бренды',
      description: 'Полный цикл от идеи до продаж',
      pain: 'Дорогая команда, долгий запуск, нестабильный контент/ROI',
      solution: 'AI-Архитектор + AI-Контент + AI-Маркетолог + AI-Консультант',
      result: 'Запуск за 1 час, поток контента, предсказуемый рост трафика/продаж',
      kpis: ['CAC↓', 'ROAS↑', 'NPS↑'],
      icon: <Target className="w-8 h-8" />,
      status: 'MVP Ready'
    },
    {
      id: 'amazon-to-d2c',
      title: 'Amazon-seller → D2C',
      description: 'Освобождение от зависимости маркетплейсов',
      pain: 'Зависимость от маркетплейса, комиссия/контроль, нет собственных данных',
      solution: 'Собственный D2C-сайт на Edestory, контент-кластеры, ретаргетинг, CRM',
      result: 'Собственная база клиентов, маржинальность выше, контроль бренда',
      kpis: ['D2C-выручка↑', 'LTV↑', 'ROMI↑'],
      icon: <ShoppingCart className="w-8 h-8" />,
      status: 'MVP Ready'
    },
    {
      id: 'retail',
      title: 'Традиционный ритейл',
      description: 'Цифровизация для производителей EU/US/UK/CA',
      pain: 'Сложная номенклатура, ручные закупки, «замороженный» склад',
      solution: 'AI-Архитектор + AI-Контент + AI-Логистика + AI-Аналитик',
      result: 'Сокращение out-of-stock, рост оборачиваемости, прозрачный BI',
      kpis: ['Оборачиваемость↑', 'Out-of-stock↓', 'NPS↑'],
      icon: <BarChart3 className="w-8 h-8" />,
      status: 'Coming Q1 2026'
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Edestory Solutions',
    url: 'https://ede-story.com/solutions',
    description: 'Готовые AI-решения для D2C-брендов, Amazon-seller → D2C миграции и традиционного ритейла',
    offers: solutions.map(solution => ({
      '@type': 'Offer',
      name: solution.title,
      description: solution.description,
      category: 'AI E-commerce Solution'
    }))
  };

  return (
    <>
      <Helmet>
        <title>Решения Edestory — D2C, Amazon-seller → D2C, Традиционный ритейл</title>
        <meta name="description" content="Готовые связки модулей под типовые сценарии. Боль → Решение → Результат → KPI. D2C-бренды, Amazon-seller миграция, традиционный ритейл." />
        <meta name="keywords" content="D2C решения, Amazon seller, традиционный ритейл, AI e-commerce, готовые решения" />
        <link rel="canonical" href="https://ede-story.com/solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Решения Edestory — D2C, Amazon-seller → D2C, Традиционный ритейл" />
        <meta property="og:description" content="Готовые связки модулей под типовые сценарии. Боль → Решение → Результат → KPI." />
        <meta property="og:url" content="https://ede-story.com/solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ede-story.com/og-solutions.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Решения Edestory — D2C, Amazon-seller → D2C" />
        <meta name="twitter:description" content="Готовые связки AI-модулей под типовые бизнес-сценарии" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section className="py-20 bg-gradient-subtle">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
                Решения для вашего бизнеса
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Выберите сценарий, под которого мы уже собрали лучшую связку AI-модулей
              </p>
            </div>
          </Container>
        </Section>

        {/* Solutions Grid */}
        <Section className="py-20">
          <Container>
            <div className="space-y-8 max-w-5xl mx-auto">
              {solutions.map((solution, index) => (
                <Card key={solution.id} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-subtle rounded-xl text-primary">
                          {solution.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-light text-foreground">
                            {solution.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground mt-1">
                            {solution.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge 
                        variant={solution.status === 'MVP Ready' ? 'default' : 'outline'}
                        className={solution.status === 'MVP Ready' ? 'bg-success text-success-foreground' : ''}
                      >
                        {solution.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Pain Point */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-destructive">Боль</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.pain}
                        </p>
                      </div>
                      
                      {/* Solution */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-primary">Решение</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.solution}
                        </p>
                      </div>
                      
                      {/* Result */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-success">Результат</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.result}
                        </p>
                      </div>
                    </div>
                    
                    {/* KPIs */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-foreground mr-2">KPI:</span>
                      {solution.kpis.map((kpi, kpiIndex) => (
                        <Badge key={kpiIndex} variant="outline" className="text-xs">
                          {kpi}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        size="lg" 
                        disabled={solution.status !== 'MVP Ready'}
                        className="flex-1"
                      >
                        Подробнее о решении
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      {solution.status === 'MVP Ready' && (
                        <Button variant="outline" size="lg">
                          Демо
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Custom Solution CTA */}
        <Section className="py-20 bg-muted/30">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Zap className="w-12 h-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-light text-foreground mb-4">
                Не нашли свой сценарий?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы создадим индивидуальное решение под ваши бизнес-процессы и требования
              </p>
              <Button size="lg" asChild>
                <a href="/contact">
                  Запросить консультацию
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Solutions;