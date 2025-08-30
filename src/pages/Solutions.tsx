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
import { ArrowRight, Target, TrendingUp, Users, ShoppingCart, BarChart3, Zap, Sparkles } from 'lucide-react';
import d2cImage from '@/assets/d2c-solution.jpg';
import amazonImage from '@/assets/amazon-to-d2c.jpg';
import retailImage from '@/assets/retail-solution.jpg';

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
      image: d2cImage,
      status: 'MVP Ready',
      gradient: 'from-blue-500 to-indigo-600'
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
      image: amazonImage,
      status: 'MVP Ready',
      gradient: 'from-orange-500 to-red-500'
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
      image: retailImage,
      status: 'Coming Q1 2026',
      gradient: 'from-purple-500 to-pink-500'
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
        <Section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,168,83,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,168,83,0.05),transparent_50%)]" />
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
                <Badge variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm">
                  Готовые решения
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
                Решения для вашего бизнеса
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Выберите сценарий, под который мы уже собрали лучшую связку AI-модулей
              </p>
            </div>
          </Container>
        </Section>

        {/* Solutions Grid */}
        <Section className="py-20">
          <Container>
            <div className="space-y-12 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <Card key={solution.id} className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={`${solution.title} solution`}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                          <div className="text-white">
                            {solution.icon}
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <Badge 
                          variant={solution.status === 'MVP Ready' ? 'default' : 'outline'}
                          className={`${solution.status === 'MVP Ready' ? 'bg-emerald-500 text-white' : 'bg-white/90 backdrop-blur-sm'} shadow-lg`}
                        >
                          {solution.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-3xl font-light text-foreground mb-2">
                          {solution.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">
                          {solution.description}
                        </CardDescription>
                      </CardHeader>
                  
                      <CardContent className="p-0 space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                          {/* Pain Point */}
                          <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full" />
                              Боль
                            </h4>
                            <p className="text-sm text-red-600 leading-relaxed">
                              {solution.pain}
                            </p>
                          </div>
                          
                          {/* Solution */}
                          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                            <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              Решение
                            </h4>
                            <p className="text-sm text-blue-600 leading-relaxed">
                              {solution.solution}
                            </p>
                          </div>
                          
                          {/* Result */}
                          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
                            <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                              Результат
                            </h4>
                            <p className="text-sm text-emerald-600 leading-relaxed">
                              {solution.result}
                            </p>
                          </div>
                        </div>
                        
                        {/* KPIs */}
                        <div className="pt-4 border-t border-border/20">
                          <span className="text-sm font-semibold text-foreground mb-3 block">Ключевые показатели (KPI):</span>
                          <div className="flex flex-wrap gap-2">
                            {solution.kpis.map((kpi, kpiIndex) => (
                              <Badge 
                                key={kpiIndex} 
                                variant="outline" 
                                className={`bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-sm`}
                              >
                                {kpi}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            size="lg" 
                            disabled={solution.status !== 'MVP Ready'}
                            className={`flex-1 bg-gradient-to-r ${solution.gradient} border-0 hover:shadow-lg transition-all`}
                          >
                            Подробнее о решении
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          {solution.status === 'MVP Ready' && (
                            <Button variant="outline" size="lg" className="border-2">
                              Демо
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </div>
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