import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { CheckCircle, TrendingDown, Calculator, DollarSign, Users, Zap, Sparkles, Euro, CreditCard } from 'lucide-react';
import calculatorImage from '@/assets/pricing-calculator.jpg';

const Pricing = () => {
  const [revenue, setRevenue] = useState([100000]);
  
  const calculateFee = (revenueAmount: number, year: number = 1) => {
    const baseRate = 10;
    const reductionPerYear = 1;
    const minRate = 5;
    const currentRate = Math.max(minRate, baseRate - (reductionPerYear * (year - 1)));
    return {
      rate: currentRate,
      fee: (revenueAmount * currentRate) / 100
    };
  };

  const years = [1, 2, 3, 4, 5];
  
  const includedFeatures = [
    'Все AI-модули по вашему плану',
    'Безлимитные обновления продукта',
    'Техническая поддержка 24/7',
    'Онбординг с персональным менеджером',
    'SSL-сертификаты и безопасность',
    'CDN и глобальная доставка контента',
    'Резервное копирование данных',
    'Мониторинг производительности'
  ];

  const separateServices = [
    { service: 'Рекламные бюджеты', note: 'Google Ads, Facebook, TikTok - прямые расходы' },
    { service: 'Внешние API', note: 'Платежные системы, SMS, email-сервисы' },
    { service: 'Логистика/3PL', note: 'Склады, доставка, фулфилмент' },
    { service: 'Кастомная разработка', note: 'Индивидуальные интеграции под проект' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: 'Edestory Revenue Share Pricing',
    description: 'Revenue share модель: 10% в первый год, затем -1% ежегодно до минимума 5%',
    price: '10',
    priceCurrency: 'USD',
    additionalType: 'Percentage',
    eligibleQuantity: {
      '@type': 'QuantitativeValue',
      value: 1,
      unitText: 'year'
    }
  };

  return (
    <>
      <Helmet>
        <title>Ценообразование Edestory — Revenue Share 10% → 5%</title>
        <meta name="description" content="10% в первый год, затем -1% ежегодно до минимума 5%. Включено: лицензия, модули, обновления, поддержка. Отдельно: API, реклама, логистика." />
        <meta name="keywords" content="ценообразование, revenue share, комиссия, стоимость, тарифы Edestory" />
        <link rel="canonical" href="https://ede-story.com/pricing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ценообразование Edestory — Revenue Share 10% → 5%" />
        <meta property="og:description" content="Прозрачная модель: 10% от оборота в первый год, затем снижение до 5%" />
        <meta property="og:url" content="https://ede-story.com/pricing" />
        <meta property="og:type" content="website" />
        
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
                <Euro className="w-8 h-8 text-accent animate-pulse" />
                <Badge variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm">
                  Прозрачная модель оплаты
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
                Цены и условия
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Revenue Share: <strong className="text-accent">10%</strong> от оборота → <strong className="text-accent">-1%/год</strong> до минимума <strong className="text-accent">5%</strong>
              </p>
              <Badge variant="outline" className="text-base px-6 py-2 bg-white/10 border-white/30 text-white backdrop-blur-sm">
                Нет скрытых комиссий • Нет абонентской платы
              </Badge>
            </div>
          </Container>
        </Section>

        {/* Interactive Calculator */}
        <Section className="py-24">
          <Container>
            <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Calculator className="w-8 h-8 text-primary" />
                  Калькулятор выгоды
                </CardTitle>
                <CardDescription>
                  Посмотрите, как снижается комиссия с каждым годом
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Ваш месячный оборот: <span className="text-primary font-semibold">${revenue[0].toLocaleString()}</span>
                  </label>
                  <Slider
                    value={revenue}
                    onValueChange={setRevenue}
                    max={1000000}
                    min={10000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>$10K</span>
                    <span>$1M</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {years.map((year) => {
                    const yearlyRevenue = revenue[0] * 12;
                    const { rate, fee } = calculateFee(yearlyRevenue, year);
                    const monthlyFee = fee / 12;
                    
                    return (
                      <Card key={year} className={`text-center ${year === 1 ? 'border-primary' : 'border-border'}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Год {year}</CardTitle>
                          <div className="flex items-center justify-center">
                            <TrendingDown className="w-4 h-4 text-success mr-1" />
                            <span className="text-2xl font-light text-primary">{rate}%</span>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-sm text-muted-foreground mb-1">Комиссия/месяц</div>
                          <div className="font-semibold text-foreground">${monthlyFee.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground mt-2">
                            ${fee.toLocaleString()}/год
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="text-center bg-gradient-subtle rounded-xl p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Экономия за 5 лет
                  </h3>
                  <div className="text-3xl font-light text-success">
                    ${((calculateFee(revenue[0] * 12 * 5, 1).fee - 
                        (calculateFee(revenue[0] * 12, 1).fee + 
                         calculateFee(revenue[0] * 12, 2).fee + 
                         calculateFee(revenue[0] * 12, 3).fee + 
                         calculateFee(revenue[0] * 12, 4).fee + 
                         calculateFee(revenue[0] * 12, 5).fee))).toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    по сравнению с фиксированной ставкой 10%
                  </p>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* What's Included */}
        <Section className="py-24 bg-muted/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-success" />
                  Включено в стоимость
                </h2>
                <div className="space-y-3">
                  {includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-accent" />
                  Оплачивается отдельно
                </h2>
                <div className="space-y-4">
                  {separateServices.map((item, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-1">{item.service}</h4>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground text-center mb-12">
                Часто задаваемые вопросы
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Есть ли скрытые комиссии?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Нет. Вы платите только revenue share от валового оборота. Никаких setup fees, 
                      абонентских плат или дополнительных комиссий за функции платформы.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Как считается оборот?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Валовая выручка от продаж через вашу Edestory-платформу до вычета возвратов, 
                      налогов и операционных расходов. Рекламные бюджеты не учитываются.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Можно ли зафиксировать тариф?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      При оборотах от $1M/месяц возможна фиксация тарифа на уровне 7-8% на длительный период. 
                      Обсуждается индивидуально.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="py-24 bg-gradient-subtle">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Zap className="w-12 h-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-light text-foreground mb-4">
                Готовы начать?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Первый месяц бесплатно • Настройка за 1 час • Без долгосрочных обязательств
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Запросить демо</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/templates">Выбрать шаблон</a>
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

export default Pricing;