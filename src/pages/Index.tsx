import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Metric } from '@/components/Metric';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SectionTitleLight, SubTitle, DescriptionLight } from '@/components/Typography';
import { 
  ArrowRight, CheckCircle, TrendingUp, Users, Globe, Zap, 
  Layers, Cpu, Brain, ShoppingBag, BarChart2, Truck,
  Shield, Clock, Award, Sparkles
} from 'lucide-react';
import heroImage from '@/assets/hero-ai-commerce.jpg';

const faqItems = [
  {
    question: "Можно ли запустить за 1 час?",
    answer: "Да. Стандартный онбординг — около 60 минут."
  },
  {
    question: "Как обеспечивается изоляция данных?",
    answer: "Через мульти‑тенант ядро и RLS в PostgreSQL."
  },
  {
    question: "Что включает 10%?",
    answer: "Лицензию платформы, доступ к 6 AI‑модулям, поддержку и обновления."
  },
  {
    question: "Сколько SKU тянет платформа?",
    answer: "Старт — до 1 000 SKU одним оператором; масштаб — до 100 000 SKU."
  },
  {
    question: "Где вы находитесь?",
    answer: "Marbella, Spain. Работаем с клиентами ЕС/Великобритания/США/Канада/ОАЭ."
  }
];

const onboardingSteps = [
  {
    title: "Диалог с AI (5 мин)",
    description: "цели, ниша, УТП"
  },
  {
    title: "Выбор шаблона (10 мин)",
    description: "галерея 20+ нишевых шаблонов"
  },
  {
    title: "Автодеплой (15 мин)",
    description: "Vercel + домен → живой сайт"
  },
  {
    title: "Генерация контента (15 мин)",
    description: "тексты/медиа под нишу"
  },
  {
    title: "Финальная проверка (15 мин)",
    description: "чек‑лист SEO/AIO → запуск"
  }
];

const modules = [
  {
    title: "AI Website Architect",
    description: "Проектирует структуру, UX и визуал, анализируя лидеров вашей ниши",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-primary to-primary-dark"
  },
  {
    title: "AI-Агент: Контент-Завод",
    subtitle: "Ваш личный отдел по созданию контента", 
    description: "Автономный «контент‑завод»: SEO‑тексты, описания, статьи, посты",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-accent to-accent-light",
    hasModal: true
  },
  {
    title: "AI Marketer",
    description: "Мультиканальный маркетинг: конкурентный анализ 24/7, кампании",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-muted-foreground to-foreground"
  },
  {
    title: "Умный семантический поиск",
    description: "На базе Google Vertex AI: понимает смысловые запросы",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-accent-light to-accent"
  },
  {
    title: "ERP/CRM на базе AI",
    description: "Централизованные заказы, клиенты, предиктивная аналитика",
    icon: <BarChart2 className="w-6 h-6" />,
    gradient: "from-primary-dark to-primary"
  },
  {
    title: "AI‑Закупщик и AI‑Логист",
    description: "Прогноз спроса, автозаказы поставщикам, 3PL оптимизация",
    icon: <Truck className="w-6 h-6" />,
    gradient: "from-foreground to-muted-foreground"
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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Edestory — AI-автоматизация e-commerce: запуск за 1 час, Rev-Share 10%</title>
        <meta 
          name="description" 
          content="White-label платформа на Saleor. 6 AI-модулей: сайт, контент, маркетинг, поддержка, логистика, аналитика. Запуск за 1 час. Marbella, Spain." 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageLD)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 text-white relative overflow-hidden min-h-[80vh] flex items-center" style={{background: 'linear-gradient(135deg, #3d3d3d, #414141)'}}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,168,83,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,168,83,0.03),transparent_50%)]" />
          
          {/* Hero Image */}
          <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden opacity-20">
            <img 
              src={heroImage} 
              alt="AI-powered e-commerce platform interface" 
              className="w-full h-full object-cover object-left"
            />
          </div>
          
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <Badge variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm">
                    AI-powered автоматизация
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-balance text-white">
                  Ваша AI‑команда для управления e‑commerce бизнесом
                </h1>
                <p className="text-base md:text-lg text-gray-200 mb-8 text-balance">
                  <strong>Мы предоставляем IT‑платформу «под ключ»</strong>, которая служит операционной 
                  системой для вашего бизнеса. Наши автономные AI‑агенты автоматизируют до 80% рутины 
                  и позволяют управлять магазином с ассортиментом до 100 000 товаров силами двух человек.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white border-0">
                    <Link to="/contact">
                      Запросить демо
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                    <Link to="/product">Узнать подробнее</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-semibold text-accent mb-1">1 час</div>
                    <div className="text-sm text-gray-300">Время запуска</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-accent mb-1">80%</div>
                    <div className="text-sm text-gray-300">Автоматизации</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-accent mb-1">100k</div>
                    <div className="text-sm text-gray-300">Товаров в каталоге</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* About Section */}
        <Section className="bg-muted">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-headline mb-6">
                Edestory: операционная система для роста вашей прибыли
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Мы продаём не просто сайт. Мы предоставляем <strong>результат</strong> — радикальное 
                повышение эффективности и прибыльности вашего e‑commerce. Платформа Edestory — готовое 
                решение «под ключ», заменяющее целый штат специалистов: от маркетолога и SEO до закупщика и логиста.
              </p>
            </div>
          </Container>
        </Section>

        {/* Technology Section */}
        <Section className="bg-muted-alt">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <SectionTitleLight>
                Технологии, которым доверяют лидеры
              </SectionTitleLight>
              <DescriptionLight className="mb-8">
                В основе Edestory — headless‑архитектура <SubTitle>Saleor</SubTitle> (Next.js, GraphQL), 
                проверенная мировыми брендами (Lush, Breitling, Dr. Martens). Это гарантирует:
              </DescriptionLight>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-0 bg-gradient-to-br from-muted to-secondary hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <SubTitle>Скорость</SubTitle>
                </CardHeader>
                <CardContent>
                  <DescriptionLight>
                    средняя загрузка страниц <SubTitle>&lt; 1,5 с</SubTitle> → выше конверсия и позиции в Google
                  </DescriptionLight>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-muted to-secondary hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <SubTitle>Гибкость</SubTitle>
                </CardHeader>
                <CardContent>
                  <DescriptionLight>
                    лёгкая интеграция любых сервисов под любые бизнес‑задачи
                  </DescriptionLight>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-muted to-secondary hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <SubTitle>Надёжность</SubTitle>
                </CardHeader>
                <CardContent>
                  <DescriptionLight>
                    технологии, выдерживающие миллионы посетителей
                  </DescriptionLight>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background/70 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-3xl mx-auto">
              <DescriptionLight>
                <SubTitle>Важно:</SubTitle> В стартовой конфигурации оператор управляет до <SubTitle>1 000 SKU</SubTitle>. 
                При масштабировании архитектура поддерживает <SubTitle>100 000 SKU</SubTitle> под управлением двух операторов.
              </DescriptionLight>
            </div>
          </Container>
        </Section>

        {/* Modules Section */}
        <Section className="bg-background">
          <Container>
            <div className="text-center mb-12">
              <SectionTitleLight>
                Что входит в стартовую автоматизацию Edestory
              </SectionTitleLight>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${module.gradient} group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <div className="text-white">
                          {module.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <SubTitle className="text-base group-hover:text-primary transition-colors">
                          {module.title}
                        </SubTitle>
                        {module.subtitle && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {module.subtitle}
                          </p>
                        )}
                        <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent mt-3 group-hover:w-full transition-all duration-300" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <DescriptionLight className="group-hover:text-foreground transition-colors">
                      {module.description}
                    </DescriptionLight>
                    
                    {module.hasModal && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            Посмотреть, как это работает
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-semibold mb-4">
                              AI Content Factory: Ваш внутренний креативный отдел
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6 text-sm leading-relaxed">
                            <p>
                              Забудьте о поиске копирайтеров, дизайнеров и видеографов. "Контент-завод" — это неотъемлемая часть нашей e-commerce платформы, которая берет на себя всю работу по созданию контента, необходимого для жизни и роста вашего бренда.
                            </p>
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-3 text-primary">
                                Как работает ваш AI-Контент-Завод?
                              </h3>
                              
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-foreground mb-2">
                                    Фаза I: Получение Задания от Архитектора
                                  </h4>
                                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                    <li>
                                      <strong>Никаких лишних вопросов:</strong> Этот агент не проводит с вами отдельных интервью. Он получает всю необходимую информацию напрямую от AI-Архитектора после того, как вы утвердили общую стратегию сайта.
                                    </li>
                                    <li>
                                      <strong>"Библия Контента" как основа:</strong> Вся работа строится на основе фундаментального документа — вашей персональной "Библии Контента", которая включает контент-стратегию, рубрики, форматы и Tone of Voice. Это гарантирует, что 100% создаваемого контента идеально соответствует вашему бренду с первого дня.
                                    </li>
                                  </ul>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-foreground mb-2">
                                    Фаза II: Автономная Генерация Контента
                                  </h4>
                                  <p className="text-muted-foreground ml-4">
                                    <strong>Создание контент-плана:</strong> На основе "Библии Контента" агент еженедельно или ежемесячно генерирует и предлагает вам на утверждение детальный контент-план.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Onboarding Section */}
        <Section className="bg-secondary">
          <Container>
            <div className="text-center mb-12">
              <SectionTitleLight>
                Онбординг за 1 час — как это работает
              </SectionTitleLight>
            </div>

            <div className="max-w-2xl mx-auto">
              <Steps steps={onboardingSteps} variant="numbered" />
            </div>
          </Container>
        </Section>

        {/* Architecture Section */}
        <Section className="bg-muted-alt">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <SectionTitleLight>
                Архитектура и безопасность данных
              </SectionTitleLight>
              <DescriptionLight className="mb-8">
                Vercel Edge → Next.js → <SubTitle>Saleor Core</SubTitle> → PostgreSQL (RLS) → AI‑сервисы → 6 модулей
              </DescriptionLight>
              <DescriptionLight>
                Ключевые принципы: изоляция данных (Row‑Level Security), единое ядро, множество фронтендов, 
                автоматический деплой новых клиентов.
              </DescriptionLight>
            </div>
          </Container>
        </Section>

        {/* Financial Benefits Section */}
        <Section className="bg-background">
          <Container>
            <div className="text-center mb-12">
              <SectionTitleLight>
                Пример финансовой выгоды (референс‑кейс)
              </SectionTitleLight>
            </div>

            <div className="max-w-2xl mx-auto">
              <Grid cols={3} gap="lg" className="text-center">
                <Metric
                  value="€125k/год"
                  label="До (типичный стек)"
                  variant="default"
                />
                <Metric
                  value="€37k/год"
                  label="После (на Edestory)"
                  variant="accent"
                />
                <Metric
                  value="~€88k/год"
                  label="Экономия"
                  variant="accent"
                />
              </Grid>
            </div>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section className="bg-muted">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <SectionTitleLight>
                Ценообразование (коротко)
              </SectionTitleLight>
              <DescriptionLight className="mb-8">
                Модель <SubTitle>Revenue Share</SubTitle>: <SubTitle>10%</SubTitle> от оборота в первый год → 
                <SubTitle>–1% ежегодно</SubTitle> до минимума <SubTitle>5%</SubTitle>
              </DescriptionLight>
              <DescriptionLight>
                Отдельно: рекламные бюджеты, внешние API и инфраструктура.
              </DescriptionLight>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-secondary">
          <Container>
            <FAQ 
              title="FAQ (AIO)" 
              items={faqItems}
            />
          </Container>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
