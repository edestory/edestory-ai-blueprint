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
    title: "AI-Агент: Архитектор Сайта",
    subtitle: "Спроектируйте идеальный сайт за 30 минут", 
    description: "Наш AI-архитектор выступит в роли вашего персонального стратега. Он проанализирует лидеров вашей ниши и создаст полную архитектуру, структуру и визуальную концепцию для вашего будущего сайта.",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-primary to-primary-dark",
    hasModal: true,
    modalId: "architect"
  },
  {
    title: "AI-Агент: Контент-Завод",
    subtitle: "Ваш личный отдел по созданию контента", 
    description: "Наш AI-агент работает как автономный «контент-завод». Он на основе утвержденной бизнес-стратегии создает весь необходимый контент — от текстов до видео — и складывает его в единую медиатеку для дальнейшего использования.",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-accent to-accent-light",
    hasModal: true,
    modalId: "content"
  },
  {
    title: "AI-Агент: Маркетолог",
    subtitle: "Ваш AI-маркетолог по росту клиентов и продаж",
    description: "Наш AI-маркетолог берет готовый контент из вашей медиатеки, распространяет его по всем каналам, управляет платным трафиком и отслеживает каждую метрику, чтобы обеспечить максимальный ROI для вашего бизнеса.",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-muted-foreground to-foreground",
    hasModal: true,
    modalId: "marketer"
  },
  {
    title: "AI-Агент: Консультант и Менеджер по Клиентскому Опыту",
    subtitle: "Превратите клиентский сервис в ваш главный двигатель продаж",
    description: "Наш AI-консультант — это ваш неутомимый менеджер по продажам и поддержке в одном лице. Он решает 90% запросов клиентов автоматически, увеличивая конверсию, средний чек и лояльность к вашему бренду.",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-accent-light to-accent",
    hasModal: true,
    modalId: "support"
  },
  {
    title: "AI-Агент: Аналитик",
    subtitle: "Ваш центр управления данными и решениями",
    description: "Централизованные заказы, клиенты, предиктивная аналитика для принятия решений на основе данных.",
    icon: <BarChart2 className="w-6 h-6" />,
    gradient: "from-primary-dark to-primary",
    hasModal: true,
    modalId: "analyst"
  },
  {
    title: "AI-Агент: Менеджер по Закупкам и Логистике",
    subtitle: "Превратите ваш склад из центра затрат в центр прибыли",
    description: "Наш AI-агент берет на себя самую сложную часть e-commerce: управление запасами и логистикой. Он автоматически поддерживает оптимальный уровень товаров, предотвращает дефицит и заморозку капитала, обеспечивая максимальную оборачиваемость ваших средств.",
    icon: <Truck className="w-6 h-6" />,
    gradient: "from-foreground to-muted-foreground",
    hasModal: true,
    modalId: "logistics"
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
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          {module.modalId === 'content' && (
                            <>
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
                            </>
                          )}

                          {module.modalId === 'architect' && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-semibold mb-4">
                                  AI Website Architect: Ваш цифровой стратег
                                </DialogTitle>
                              </DialogHeader>
                              
                              <div className="space-y-6 text-sm leading-relaxed">
                                <p>
                                  Забудьте о брифах, долгих согласованиях и сомнениях. Наш AI-архитектор — это элитный цифровой консультант, который проведет вас от первоначальной идеи до готового к запуску, высокоэффективного веб-сайта. Он видит проект целиком — от эстетики и пользовательского опыта до технического SEO и ваших бизнес-целей.
                                </p>
                                
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-primary">
                                    Как работает ваш AI-архитектор?
                                  </h3>
                                  <p className="mb-4 text-muted-foreground">
                                    Процесс разделен на три четкие фазы. Переход к следующей возможен только после вашего утверждения.
                                  </p>
                                  
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза I: Стратегический Анализ и Проектирование Структуры
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Глубокое погружение:</strong> Агент задаст вам 5 ключевых вопросов о вашем бизнесе, целях и уникальном предложении.</li>
                                        <li><strong>Анализ рынка:</strong> На основе ваших ответов он самостоятельно найдет и проанализирует топ-5 сайтов-лидеров в вашей нише.</li>
                                        <li><strong>Архитектурный план:</strong> Вы получите на утверждение детальный план будущего сайта, включающий карту всех страниц (Sitemap) и рекомендации по структуре, основанные на лучших мировых практиках.</li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза II: Визуальная Концепция и Итеративный Дизайн
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Интерактивный выбор стиля:</strong> Агент предложит вам 5 наиболее подходящих для вашей ниши визуальных стилей (от элегантного минимализма до технологичного Dark Mode).</li>
                                        <li><strong>Создание макета:</strong> После вашего выбора он мгновенно создаст и покажет концептуальный макет главной страницы, демонстрируя расположение блоков, шрифты и цветовую палитру.</li>
                                        <li><strong>Итеративное усиление:</strong> Не совсем то, что вы хотели? У вас будет возможность до двух раз "усилить дизайн", давая агенту простые команды, например, "сделать цвета ярче" или "использовать другой шрифт".</li>
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза III: Наполнение Контентом и Финальная Оптимизация
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Генерация контента:</strong> После финального утверждения дизайна агент заполнит каждую страницу сайта высококачественным, продающим и SEO-оптимизированным контентом.</li>
                                        <li><strong>Финальный аудит:</strong> Агент проведет полную проверку сайта по более чем 60 пунктам SEO и AIO (оптимизация для AI-поиска) и предоставит вам структурированный пакет материалов, готовый для передачи веб-разработчику.</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <p className="text-muted-foreground mt-6">
                                    Начните сейчас и получите стратегию вашего будущего сайта, созданную на основе данных, а не догадок.
                                  </p>
                                </div>
                              </div>
                            </>
                          )}

                          {module.modalId === 'marketer' && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-semibold mb-4">
                                  AI Marketer: Ваш центр управления трафиком и аналитикой
                                </DialogTitle>
                              </DialogHeader>
                              
                              <div className="space-y-6 text-sm leading-relaxed">
                                <p>
                                  Это не просто инструмент для запуска рекламы. AI-Маркетолог — это мозг вашей маркетинговой операции. Он отвечает за дистрибуцию контента, привлечение платного трафика и, что самое главное, за анализ эффективности и постоянную оптимизацию всей вашей маркетинговой стратегии.
                                </p>
                                
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-primary">
                                    Как работает ваш AI-Маркетолог?
                                  </h3>
                                  
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза I: Стратегический Анализ и Забор Контента
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Анализ конкурентов:</strong> Агент 24/7 мониторит рекламную активность и контент-стратегии ваших топ-5 конкурентов, находя их сильные и слабые стороны для использования в ваших кампаниях.</li>
                                        <li><strong>Работа с медиатекой:</strong> AI-Маркетолог напрямую подключен к центральному хранилищу, созданному "Контент-заводом". Он берет оттуда уже утвержденный вами, высококачественный контент для своих задач.</li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза II: Мультиканальное Распространение и Управление Трафиком
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Публикация в соцсетях:</strong> Агент автоматически публикует посты в ваших социальных сетях (Instagram, Facebook и др.) в оптимальное время для максимального органического охвата.</li>
                                        <li><strong>Управление платным трафиком:</strong> Создание кампаний, оптимизация бюджета, A/B тестирование 24/7 в Google Ads, Meta, TikTok и других сетях.</li>
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза III: Комплексный Анализ и Отчетность
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Центр аналитики:</strong> Единый центр для отслеживания всех ключевых маркетинговых метрик: органический охват, SEO-позиции, CAC и ROAS.</li>
                                        <li><strong>Прозрачный дашборд:</strong> В вашем личном кабинете вы видите только самые важные показатели в реальном времени для принятия стратегических решений на основе данных.</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <p className="text-muted-foreground mt-6">
                                    Принимайте решения на основе данных. Наш AI-маркетолог превратит ваш контент в прибыль.
                                  </p>
                                </div>
                              </div>
                            </>
                          )}

                          {module.modalId === 'support' && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-semibold mb-4">
                                  AI-Консультант: Больше чем чат-бот, лучше чем менеджер
                                </DialogTitle>
                              </DialogHeader>
                              
                              <div className="space-y-6 text-sm leading-relaxed">
                                <p>
                                  Забудьте о стандартных автоответчиках и долгом ожидании оператора. Наш AI-Консультант — это "лицо" вашей компании, единая точка контакта, способная не просто ответить на любой вопрос клиента, но и выполнить за него действие, предвосхищая его ожидания. Он превращает каждый диалог в возможность для продажи и укрепления лояльности.
                                </p>
                                
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-primary">
                                    Как работает ваш AI-Менеджер по Клиентскому Опыту?
                                  </h3>
                                  <p className="mb-4 text-muted-foreground">
                                    Агент работает по "Проактивному Циклу Обслуживания", который превращает стандартную поддержку в высокоэффективный процесс продаж.
                                  </p>
                                  
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Этап 1: Понимание с полуслова (Распознавание Намерения)
                                      </h4>
                                      <p className="text-muted-foreground ml-4">
                                        Агент мгновенно анализирует запрос клиента и определяет его тип: "Вопрос о продукте", "Статус заказа", "Хочу вернуть товар" и т.д., чтобы сразу предложить релевантное решение.
                                      </p>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Этап 2: Мгновенный доступ к данным (Сбор Контекста)
                                      </h4>
                                      <p className="text-muted-foreground ml-4">
                                        Определив намерение, агент в реальном времени обращается ко всей операционной информации вашей платформы: каталогу товаров, системе управления заказами (OMS), базе клиентов (CRM) и данным о наличии на складах.
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Этап 3: Действие, а не просто ответ (Гиперавтоматизация)
                                      </h4>
                                      <p className="text-muted-foreground ml-4">
                                        Это ключевое отличие. Агент не говорит, что делать, — он делает это за клиента. Например: "Ваш заказ №123 сейчас в пути. Вот ссылка для отслеживания" или "Я запустил процесс возврата. Следуйте инструкции, которую я отправил вам на email."
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Этап 4: Умные допродажи (Проактивное Предложение)
                                      </h4>
                                      <p className="text-muted-foreground ml-4">
                                        После успешного решения вопроса, если контекст позволяет, агент делает релевантное предложение, используя данные от AI-Маркетолога.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="mt-6">
                                    <h4 className="font-medium text-foreground mb-3">
                                      Ключевые компетенции вашего AI-Консультанта:
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                      <li><strong>Продажи и Персональные Рекомендации:</strong> Активно консультирует по ассортименту, сравнивает товары и предлагает персональные подборки.</li>
                                      <li><strong>Клиентский Сервис 24/7:</strong> Предоставляет информацию о статусе заказа, помогает с оплатой, автоматически оформляет возвраты.</li>
                                      <li><strong>Омниканальность:</strong> Бесшовно работает на сайте, в мессенджере и мобильном приложении.</li>
                                      <li><strong>Синергия с Экосистемой:</strong> Является точкой сборки всей AI-команды.</li>
                                    </ul>
                                  </div>

                                  <p className="text-muted-foreground mt-6">
                                    Позвольте AI создать безупречный клиентский опыт, который работает на вашу прибыль 24/7.
                                  </p>
                                </div>
                              </div>
                            </>
                          )}

                          {module.modalId === 'logistics' && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-semibold mb-4">
                                  AI Procurement & Logistics Manager: Ваш аналитический центр управления товарами
                                </DialogTitle>
                              </DialogHeader>
                              
                              <div className="space-y-6 text-sm leading-relaxed">
                                <p>
                                  Забудьте о сложных Excel-таблицах, упущенной выгоде из-за отсутствия товара (out-of-stock) и "замороженных" деньгах в неликвидных остатках. Наш AI-агент — это ваш персональный директор по закупкам и логистике, который использует данные для принятия идеальных решений по управлению запасами.
                                </p>
                                
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-primary">
                                    Как работает ваш AI-Менеджер по Закупкам?
                                  </h3>
                                  <p className="mb-4 text-muted-foreground">
                                    Этот агент является неотъемлемой частью нашей платформы и работает в тесной связке с другими модулями, получая от них все необходимые данные.
                                  </p>
                                  
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза I: Анализ и Прогнозирование
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Анализ данных о продажах:</strong> Агент в реальном времени анализирует данные о продажах из вашей CRM и ERP, понимая, какие товары продаются быстро, а какие — медленно.</li>
                                        <li><strong>Предиктивное моделирование:</strong> Используя исторические данные и информацию о трендах от AI-Маркетолога, он прогнозирует будущий спрос с учетом сезонности, праздников и запланированных рекламных кампаний.</li>
                                        <li><strong>Формирование "Карты Запасов":</strong> На основе анализа агент создает и утверждает с вами стратегию управления запасами: определяет идеальный минимальный и максимальный остаток (Min/Max) для каждой товарной позиции (SKU).</li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза II: Автономное Управление Закупками
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Автоматические заказы:</strong> Как только количество товара на складе достигает минимального порога, агент автоматически формирует и отправляет заказ утвержденному поставщику.</li>
                                        <li><strong>Управление поставщиками:</strong> Вы загружаете в систему базу своих поставщиков с их ценами и сроками поставки. Агент помогает отслеживать их надежность и может рекомендовать перераспределить заказы в пользу более эффективных партнеров.</li>
                                        <li><strong>Контроль оборачиваемости:</strong> Агент постоянно следит за оборачиваемостью каждой позиции. Если товар долго не продается, он автоматически помечает его как кандидата на распродажу или возврат поставщику и передает эту информацию AI-Маркетологу для запуска соответствующей акции.</li>
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">
                                        Фаза III: Оптимизация Логистики
                                      </h4>
                                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                        <li><strong>Интеграция с 3PL-операторами:</strong> Агент подключается к вашим логистическим партнерам через API.</li>
                                        <li><strong>Выбор оптимального маршрута:</strong> Для каждого заказа или поставки он автоматически подбирает самый быстрый и экономически выгодный способ доставки.</li>
                                        <li><strong>Прозрачная отчетность:</strong> В вашем личном кабинете вы видите полную картину движения товаров: что, когда и у кого нужно заказать, какие товары "залежались", и сколько вы экономите на логистике благодаря умной оптимизации.</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <p className="text-muted-foreground mt-6">
                                    Перестаньте терять деньги на неэффективном складе. Позвольте AI превратить ваши запасы в высокодоходный актив.
                                  </p>
                                </div>
                              </div>
                            </>
                          )}

                          {module.modalId === 'analyst' && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-semibold mb-4">
                                  AI-Аналитик: Ваш центр управления данными
                                </DialogTitle>
                              </DialogHeader>
                              
                              <div className="space-y-6 text-sm leading-relaxed">
                                <p>
                                  Централизованная система аналитики и управления данными для принятия решений на основе данных, а не догадок.
                                </p>
                              </div>
                            </>
                          )}
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
