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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, Download, FileText, Clock, User, ArrowRight, Search } from 'lucide-react';
import resourcesImage from '@/assets/resources-hub.jpg';
import blogHeroImage from '@/assets/blog-hero.jpg';
import d2cGuideImage from '@/assets/d2c-guide.jpg';
import analyticsDashboardImage from '@/assets/analytics-dashboard.jpg';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: '1',
      title: 'Как запустить D2C-бренд за 30 дней: пошаговый гайд',
      excerpt: 'Полное руководство по созданию бренда от идеи до первых продаж с использованием AI-инструментов.',
      category: 'D2C Strategy',
      readTime: '12 мин',
      author: 'Команда Edestory',
      date: '2024-08-25',
      image: d2cGuideImage,
      featured: true
    },
    {
      id: '2', 
      title: 'AI в e-commerce: 15 способов автоматизировать продажи',
      excerpt: 'Практические кейсы использования ИИ для увеличения конверсии и снижения операционных затрат.',
      category: 'AI Technology',
      readTime: '8 мин',
      author: 'AI Team',
      date: '2024-08-20',
      image: analyticsDashboardImage,
      featured: true
    },
    {
      id: '3',
      title: 'Revenue Share vs Фиксированная плата: что выбрать?',
      excerpt: 'Сравнительный анализ бизнес-моделей для e-commerce платформ и стартапов.',
      category: 'Business Models',
      readTime: '6 мин',
      author: 'Business Team',
      date: '2024-08-15',
      image: '/blog/revenue-models.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'SEO для e-commerce в 2024: что изменилось',
      excerpt: 'Новые алгоритмы поисковых систем и их влияние на продвижение интернет-магазинов.',
      category: 'SEO & Marketing',
      readTime: '10 мин',
      author: 'SEO Team',
      date: '2024-08-10',
      image: '/blog/seo-2024.jpg',
      featured: false
    }
  ];

  const guides = [
    {
      id: '1',
      title: 'Полный гайд по настройке AI-Архитектора',
      description: 'Пошаговая инструкция по созданию структуры сайта за 30 минут',
      type: 'PDF',
      pages: '24 страницы',
      downloadUrl: '/guides/ai-architect-guide.pdf'
    },
    {
      id: '2',
      title: 'Шаблоны контента для e-commerce',
      description: '50+ готовых шаблонов для описаний товаров, email-рассылок и лендингов',
      type: 'ZIP',
      pages: '100+ шаблонов',
      downloadUrl: '/guides/content-templates.zip'
    },
    {
      id: '3',
      title: 'Чек-лист запуска D2C-магазина',
      description: '120 пунктов для проверки перед запуском: от технических до маркетинговых',
      type: 'PDF',
      pages: '16 страниц',
      downloadUrl: '/guides/d2c-checklist.pdf'
    }
  ];

  const webinars = [
    {
      id: '1',
      title: 'AI-driven e-commerce: практические кейсы',
      description: 'Разбор 5 успешных проектов и их метрики',
      duration: '45 мин',
      date: '2024-09-05',
      speaker: 'CTO Edestory',
      registrationUrl: '/webinars/ai-ecommerce-cases'
    },
    {
      id: '2',
      title: 'От Amazon к собственному D2C: стратегия миграции',
      description: 'Как безболезненно перевести трафик с маркетплейса на свой сайт',
      duration: '60 мин',
      date: '2024-09-12',
      speaker: 'Head of Growth',
      registrationUrl: '/webinars/amazon-to-d2c'
    }
  ];

  const filteredContent = (content: any[], category?: string) => {
    return content.filter(item => {
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !category || item.category === category;
      
      return matchesSearch && matchesCategory;
    });
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Edestory Resources',
    description: 'Блог, гайды и полезные материалы для D2C предпринимателей',
    url: 'https://ede-story.com/resources',
    publisher: {
      '@type': 'Organization',
      name: 'Edestory',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ede-story.com/logo.png'
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Ресурсы Edestory — Блог, гайды, вебинары для D2C предпринимателей</title>
        <meta name="description" content="Блог, гайды и полезные материалы для D2C предпринимателей. AI в e-commerce, стратегии запуска, практические кейсы и экспертная аналитика." />
        <meta name="keywords" content="D2C блог, AI e-commerce, гайды, вебинары, ресурсы для предпринимателей" />
        <link rel="canonical" href="https://ede-story.com/resources" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ресурсы Edestory — Блог, гайды для D2C" />
        <meta property="og:description" content="Практические материалы для запуска и развития D2C-бизнеса" />
        <meta property="og:url" content="https://ede-story.com/resources" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section className="py-24 bg-gradient-subtle">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
                Ресурсы и знания
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Блог, гайды и полезные материалы для D2C предпринимателей
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Поиск по материалам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Content Tabs */}
        <Section className="py-24">
          <Container>
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="blog" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Блог
                </TabsTrigger>
                <TabsTrigger value="guides" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Гайды
                </TabsTrigger>
                <TabsTrigger value="webinars" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Вебинары
                </TabsTrigger>
              </TabsList>

              {/* Blog Content */}
              <TabsContent value="blog" className="space-y-8">
                {/* Featured Posts */}
                <div className="mb-12">
                  <h2 className="text-2xl font-light text-foreground mb-6">Рекомендуем</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredContent(blogPosts.filter(post => post.featured)).map((post) => (
                      <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                         <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                           <img 
                             src={post.image} 
                             alt={post.title}
                             className="w-full h-full object-cover"
                           />
                         </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <User className="w-3 h-3" />
                              {post.author} • {new Date(post.date).toLocaleDateString('ru-RU')}
                            </div>
                            <Button variant="ghost" size="sm">
                              Читать <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* All Posts */}
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">Все статьи</h2>
                  <div className="space-y-6">
                    {filteredContent(blogPosts.filter(post => !post.featured)).map((post) => (
                      <Card key={post.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                           <div className="flex gap-6">
                             <div className="w-32 h-20 bg-gradient-subtle rounded-lg flex-shrink-0 overflow-hidden">
                               <img 
                                 src={blogHeroImage} 
                                 alt="Blog thumbnail"
                                 className="w-full h-full object-cover"
                               />
                             </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">{post.category}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime}
                                </span>
                              </div>
                              <h3 className="text-lg font-medium text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <User className="w-3 h-3" />
                                  {post.author} • {new Date(post.date).toLocaleDateString('ru-RU')}
                                </div>
                                <Button variant="ghost" size="sm">
                                  Читать <ArrowRight className="w-3 h-3 ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Guides Content */}
              <TabsContent value="guides">
                <Grid cols={1} gap="lg" className="max-w-4xl mx-auto">
                  {filteredContent(guides).map((guide) => (
                    <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 bg-gradient-subtle rounded-xl flex items-center justify-center">
                              <Download className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-foreground mb-2">
                                {guide.title}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                {guide.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <Badge variant="outline">{guide.type}</Badge>
                                <span>{guide.pages}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="ml-4">
                            Скачать
                            <Download className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </TabsContent>

              {/* Webinars Content */}
              <TabsContent value="webinars">
                <Grid cols={1} gap="lg" className="max-w-4xl mx-auto">
                  {filteredContent(webinars).map((webinar) => (
                    <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 bg-gradient-subtle rounded-xl flex items-center justify-center">
                              <Video className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-foreground mb-2">
                                {webinar.title}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                {webinar.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {webinar.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <User className="w-3 h-3" />
                                  {webinar.speaker}
                                </span>
                                <span>{new Date(webinar.date).toLocaleDateString('ru-RU')}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="ml-4">
                            Регистрация
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </TabsContent>
            </Tabs>
          </Container>
        </Section>

        {/* Newsletter CTA */}
        <Section className="py-24 bg-muted/30">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                Получайте новые материалы первыми
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Еженедельная рассылка с практическими кейсами, трендами и инсайтами от экспертов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="lg">
                  Подписаться
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

export default Resources;