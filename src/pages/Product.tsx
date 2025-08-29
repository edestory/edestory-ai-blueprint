import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Cpu, Globe, Shield, Zap, BarChart3, Users } from 'lucide-react';

const Product = () => {
  const modules = [
    {
      id: 'ai-architect',
      title: 'AI‑Архитектор',
      description: 'создание и оптимизация сайтов',
      status: 'MVP Ready',
      icon: Globe
    },
    {
      id: 'ai-content',
      title: 'AI‑Контент', 
      description: 'генерация текстов и медиа',
      status: 'MVP Ready',
      icon: Cpu
    },
    {
      id: 'ai-marketer',
      title: 'AI‑Маркетолог',
      description: 'трафик, реклама, SEO',
      status: 'Coming Q4 2025',
      icon: BarChart3
    },
    {
      id: 'ai-support',
      title: 'AI‑Поддержка',
      description: '24/7 сервис и продажи',
      status: 'Coming Q4 2025', 
      icon: Users
    },
    {
      id: 'ai-logistics',
      title: 'AI‑Логистика',
      description: 'закупки и поставки',
      status: 'Coming Q2 2026',
      icon: Shield
    },
    {
      id: 'ai-analyst',
      title: 'AI‑Аналитик',
      description: 'предиктивная аналитика',
      status: 'Coming Q1 2026',
      icon: Zap
    }
  ];

  const MetricComponent = ({ value, label, className = "" }: { value: string; label: string; className?: string }) => (
    <div className={`text-center ${className}`}>
      <div className="text-lg font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Платформа Edestory — операционная система e-commerce на Saleor</title>
        <meta name="description" content="6 AI-модулей: Архитектор, Контент, Маркетолог, Поддержка, Логистика, Аналитика. Мульти-тенант, RLS, запуск за 1 час." />
        <meta name="keywords" content="AI платформа, Saleor, e-commerce система, мульти-тенант, автоматизация" />
        <link rel="canonical" href="https://ede-story.com/product" />
      </Helmet>
      
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="section pb-20">
          <div className="container-wide text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
              Edestory — операционная система{' '}
              <span className="gradient-text">
                вашего e‑commerce
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Edestory — white‑label SaaS‑платформа, которая превращает ваш интернет‑магазин в управляемый данными бизнес. 
              Один оператор управляет до 1 000 SKU; архитектура масштабируется до 100 000 SKU силами двух человек.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Технологический стек
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 border-border-accent">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-primary mb-4">Frontend</h3>
                    <p className="text-muted-foreground">
                      Next.js 14 (React 18), Tailwind CSS, интеграция Lovable.dev
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-border-accent">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-primary mb-4">Backend</h3>
                    <p className="text-muted-foreground">
                      Saleor (headless), FastAPI (Python), PostgreSQL с Row‑Level Security
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-border-accent">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-primary mb-4">Инфраструктура</h3>
                    <p className="text-muted-foreground">
                      Vercel (frontend), Google Cloud Platform (backend), CI/CD GitHub Actions
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-border-accent">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-primary mb-4">Monitoring</h3>
                    <p className="text-muted-foreground">
                      Lighthouse CI, Prometheus
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="section">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Мульти‑тенант архитектура с RLS
              </h2>
              
              <div className="bg-card p-8 rounded-lg border border-border-accent mb-8">
                <p className="text-lg font-mono text-center mb-4">
                  100+ кастомных доменов → Vercel Edge → фронтенды Next.js → общее ядро Saleor → PostgreSQL (RLS) → слой AI‑сервисов → 6 модулей
                </p>
              </div>
              
              <div className="text-left max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-primary mb-4">Принципы:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• полная изоляция данных</li>
                  <li>• единое ядро — множество витрин</li>
                  <li>• автоматический деплой новых клиентов</li>
                  <li>• безопасная кастомизация через <strong>theme.json</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Modules Section */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                6 AI‑модулей (статусы)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => {
                const Icon = module.icon;
                const isReady = module.status === 'MVP Ready';
                
                return (
                  <Card key={module.id} className="p-6 border-border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                        <Badge variant={isReady ? 'default' : 'secondary'} className={isReady ? 'bg-green-100 text-green-800' : ''}>
                          {module.status}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">{module.title}</h3>
                      <p className="text-muted-foreground mb-4">{module.description}</p>
                      {isReady && (
                        <Button variant="outline" size="sm">
                          <a href={`/modules/${module.id}`}>Подробнее <ChevronRight className="ml-2 h-4 w-4" /></a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Template Service Section */}
        <section className="section">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Template‑as‑a‑Service
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                20+ готовых шаблонов для ниш (косметика, мода, органика, консалтинг и др.). 
                Каждый шаблон — «золотой стандард»: интеграция с Saleor, подключённые слоты для AI‑агентов, 
                вся стилизация вынесена в <strong>theme.json</strong>.
              </p>
              <Button>
                <a href="/templates">Посмотреть шаблоны <ChevronRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* Monetization Section */}
        <section className="section bg-muted-lighter">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Модель монетизации
              </h2>
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 border-border-accent">
                  <CardContent className="p-0 text-center">
                    <p className="text-xl mb-4">Revenue Share</p>
                    <div className="flex items-center justify-center gap-4 text-2xl font-bold text-primary mb-4">
                      <span>10%</span>
                      <span className="text-muted-foreground">→</span>
                      <span>–1%/год</span>
                      <span className="text-muted-foreground">→</span>
                      <span>до 5%</span>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Клиент отдельно оплачивает API и инфраструктуру
                    </p>
                    <p className="text-lg">
                      Наша цель — <strong className="text-primary">рост вашей прибыли</strong>, мы зарабатываем вместе с вами.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Section */}
        <section className="section">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                KPI и SLO
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-border-accent">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-4">Технические</h3>
                  <div className="space-y-3">
                    <MetricComponent value="99.9%" label="Uptime" />
                    <MetricComponent value="<200ms" label="API Response" />
                    <MetricComponent value=">90" label="Lighthouse Score" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 border-border-accent">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-4">Продуктовые</h3>
                  <div className="space-y-3">
                    <MetricComponent value=">70" label="NPS" />
                    <MetricComponent value=">60%" label="Adoption" />
                    <MetricComponent value="<2/мес" label="Тикеты на клиента" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 border-border-accent">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-4">Бизнес</h3>
                  <div className="space-y-3">
                    <MetricComponent value="20% MoM" label="MRR Growth" />
                    <MetricComponent value="3 мес" label="CAC Payback" />
                    <MetricComponent value=">5×" label="LTV/CAC" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-muted-lighter">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Готовы к запуску за 1 час?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg">
                <a href="/contact">Запросить демо</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="/templates">Посмотреть шаблоны <ChevronRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Product;