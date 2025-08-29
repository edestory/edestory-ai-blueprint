import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Steps } from '@/components/Steps';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, Zap, CheckCircle, Settings, Globe, Download } from 'lucide-react';

const processSteps = [
  {
    title: "Выбор шаблона (2 мин)",
    description: "Просматриваете галерею, выбираете подходящий под вашу нишу шаблон"
  },
  {
    title: "Онбординг с AI (3 мин)",
    description: "AI-Архитектор задаёт 5 вопросов о бизнесе, целях и предпочтениях"
  },
  {
    title: "Автодеплой (2 мин)",
    description: "Система автоматически разворачивает сайт на Vercel с вашим доменом"
  },
  {
    title: "Кастомизация (3 мин)",
    description: "Настраиваете цвета, шрифты, логотип через интуитивную панель"
  },
  {
    title: "Финальная проверка (1 мин)",
    description: "Проверяете результат, при необходимости корректируете детали"
  }
];

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Молниеносная скорость",
    description: "От выбора до готового сайта — максимум 11 минут"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Умная автоматизация",
    description: "AI делает всю техническую работу за вас"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Production-ready",
    description: "Готовый к продакшену сайт с SSL и CDN"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "SEO из коробки",
    description: "Оптимизация поисковых систем включена по умолчанию"
  }
];

const HowItWorks = () => {
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Edestory",
    "url": "https://ede-story.com"
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
        "name": "Шаблоны",
        "item": "https://ede-story.com/templates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Как это работает",
        "item": "https://ede-story.com/templates/how-it-works"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Как работает фабрика шаблонов Edestory — процесс за 10 минут</title>
        <meta 
          name="description" 
          content="Пошаговый процесс создания сайта: выбор шаблона → AI-онбординг → автодеплой → кастомизация → запуск. Максимум 10 минут." 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationLD)}
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
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-display mb-6 text-balance">
                Как работает фабрика шаблонов
              </h1>
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>От идеи до готового сайта за 10 минут.</strong> Узнайте, как наша платформа 
                автоматизирует весь процесс создания профессионального интернет-магазина.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-medium">10 минут</span>
                </div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="font-medium">5 шагов</span>
                </div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">Готовый результат</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Process Steps */}
        <Section className="bg-muted">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">5 шагов до готового сайта</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Каждый шаг занимает не более 3 минут. Вся техническая работа автоматизирована.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <Steps steps={processSteps} variant="connected" />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 p-6 bg-background rounded-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10</div>
                  <div className="text-sm text-muted-foreground">минут максимум</div>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">✓</div>
                  <div className="text-sm text-muted-foreground">Готовый сайт</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Features */}
        <Section className="bg-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline mb-6">Почему это так быстро?</h2>
            </div>

            <Grid cols={2} gap="lg">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Technical Details */}
        <Section className="bg-muted-alt">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-headline mb-6">Что происходит под капотом</h2>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Автоматический деплой</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Клонирование шаблона из Git-репозитория</li>
                      <li>• Настройка переменных окружения</li>
                      <li>• Деплой на Vercel Edge Network</li>
                      <li>• Подключение домена и SSL-сертификата</li>
                    </ul>
                  </div>
                  <div className="bg-background p-6 rounded-lg border">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
{`git clone template-repo
npm install
vercel deploy --prod
ssl-cert auto-generate`}
                    </pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 bg-background p-6 rounded-lg border">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
{`{
  "colors": {
    "primary": "#E6A853",
    "background": "#ffffff"
  },
  "fonts": {
    "heading": "Inter"
  }
}`}
                    </pre>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-xl font-semibold mb-4">Живая кастомизация</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Все стили через единый theme.json</li>
                      <li>• Hot-reload изменений в реальном времени</li>
                      <li>• Валидация CSS-переменных</li>
                      <li>• Автосохранение настроек</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">AI-генерация контента</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Анализ ниши и конкурентов</li>
                      <li>• Генерация SEO-текстов</li>
                      <li>• Создание структуры каталога</li>
                      <li>• Настройка мета-тегов и схем</li>
                    </ul>
                  </div>
                  <div className="bg-background p-6 rounded-lg border">
                    <div className="space-y-2 text-sm">
                      <div className="text-accent">✓ SEO Title генерирован</div>
                      <div className="text-accent">✓ Meta Description создан</div>
                      <div className="text-accent">✓ H1-H3 структура готова</div>
                      <div className="text-accent">✓ JSON-LD схемы добавлены</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary text-primary-foreground">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline mb-6 text-primary-foreground">
                Готовы создать свой сайт за 10 минут?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80">
                Выберите шаблон и запустите автоматический процесс прямо сейчас
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/templates">
                    <Download className="mr-2 h-5 w-5" />
                    Выбрать шаблон
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Задать вопросы</Link>
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

export default HowItWorks;