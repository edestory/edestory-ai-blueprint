import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import TemplateFilter from '@/components/TemplateFilter';
import OnboardingModal from '@/components/OnboardingModal';
import CustomizationPanel from '@/components/CustomizationPanel';
import AIArchitectChat from '@/components/AIArchitectChat';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Play, Settings, Zap, CheckCircle, Eye, Download, Sparkles } from 'lucide-react';
import fashionImage from '@/assets/template-fashion.jpg';
import electronicsImage from '@/assets/template-electronics.jpg';
import beautyImage from '@/assets/template-beauty.jpg';
import consultingImage from '@/assets/template-consulting.jpg';

const templatesData = [
  {
    "id": "fashion-store",
    "title": "Fashion Store",
    "category": "Мода",
    "preview": fashionImage,
    "description": "Элегантный шаблон для магазина одежды",
    "features": ["Product showcase", "Size guide", "Wishlist", "AR Try-on"],
    "demoUrl": "#",
    "gradient": "from-pink-500 to-purple-500"
  },
  {
    "id": "electronics",
    "title": "Electronics Hub", 
    "category": "Электроника", 
    "preview": electronicsImage,
    "description": "Технологичный дизайн для электроники",
    "features": ["Spec comparison", "Reviews", "Tech specs", "Warranty"],
    "demoUrl": "#",
    "gradient": "from-blue-500 to-cyan-500"
  },
  {
    "id": "beauty-store",
    "title": "Beauty Studio",
    "category": "Косметика",
    "preview": beautyImage,
    "description": "Минималистичный дизайн в духе Glossier",
    "features": ["Virtual makeup", "Skin analysis", "Beauty tips", "Tutorials"],
    "demoUrl": "#",
    "gradient": "from-rose-400 to-pink-500"
  },
  {
    "id": "consulting",
    "title": "Premium Consulting",
    "category": "Консалтинг",
    "preview": consultingImage,
    "description": "Строгий корпоративный стиль для B2B",
    "features": ["Team showcase", "Case studies", "Expertise areas", "Client portal"],
    "demoUrl": "#",
    "gradient": "from-gray-600 to-gray-800"
  },
  {
    "id": "food-delivery",
    "title": "Food Delivery",
    "category": "Еда",
    "preview": "/api/placeholder/800/600",
    "description": "Аппетитный дизайн для доставки еды",
    "features": ["Live tracking", "Menu builder", "Reviews", "Loyalty program"],
    "demoUrl": "#",
    "gradient": "from-orange-500 to-red-500"
  },
  {
    "id": "fitness",
    "title": "Fitness Studio", 
    "category": "Спорт",
    "preview": "/api/placeholder/800/600",
    "description": "Энергичный дизайн для фитнес-индустрии",
    "features": ["Workout plans", "Progress tracking", "Nutrition", "Community"],
    "demoUrl": "#",
    "gradient": "from-emerald-500 to-teal-500"
  }
];

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [filteredTemplates, setFilteredTemplates] = useState(templatesData);

  const handleFilterChange = (filters: any) => {
    let filtered = [...templatesData];
    
    // Поиск по названию и описанию
    if (filters.search) {
      filtered = filtered.filter(template => 
        template.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        template.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    // Фильтр по категории
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(template => 
        template.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }
    
    setFilteredTemplates(filtered);
  };

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    setShowOnboarding(true);
    setShowAIChat(true);
    setIsChatMinimized(false);
  };

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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Фабрика шаблонов Edestory — 20+ нишевых тем, запуск за 10 минут</title>
        <meta 
          name="description" 
          content="Витрина готовых Next.js шаблонов с глубокой интеграцией Saleor. Выбор → автодеплой → кастомизация через theme.json → запуск." 
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
        <Section className="pt-24 pb-12 bg-gradient-to-br from-primary via-primary-dark to-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,168,83,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,168,83,0.05),transparent_50%)]" />
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
                <Badge variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm">
                  20+ готовых шаблонов
                </Badge>
              </div>
              
              <h1 className="text-display mb-6 text-balance text-white">
                Фабрика шаблонов Edestory
              </h1>
              <p className="text-body-large text-gray-200 mb-8 text-balance">
                <strong>Выбирайте из 20+ готовых шаблонов для вашего бизнеса и запускайте магазин за 5–10 минут.</strong> 
                Каждый шаблон — «золотой стандарт»: интегрирован с Saleor, оптимизирован под SEO/AIO, 
                стилизуется через единый <strong>theme.json</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white border-0">
                  <Link to="/templates/how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    Посмотреть, как это работает
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => setShowAIChat(true)}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Консультация AI-Архитектора
                </Button>
              </div>
            </div>

            {/* Template Filter */}
            <TemplateFilter 
              onFilterChange={handleFilterChange} 
              totalCount={filteredTemplates.length}
            />
          </Container>
        </Section>

        {/* What You Get Section */}
        <Section className="bg-muted py-12">
          <Container>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Что вы получаете</h2>
            </div>
            
            <Grid cols={3} gap="lg">
              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <CardTitle>Полноценный рабочий сайт</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    на вашем домене с полной функциональностью e-commerce
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Settings className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <CardTitle>Админку Saleor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    для управления каталогом товаров и заказами
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <CardTitle>Живую кастомизацию</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    с AI‑Архитектором: логотип, цвета, шрифты
                  </CardDescription>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        </Section>

        {/* Templates Gallery */}
        <Section className="bg-background">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Популярные шаблоны</h2>
                <p className="text-muted-foreground">
                  Найдено шаблонов: <strong>{filteredTemplates.length}</strong>
                </p>
              </div>
              
              {showCustomization && (
                <Button
                  variant="outline"
                  onClick={() => setShowCustomization(false)}
                >
                  Скрыть панель кастомизации
                </Button>
              )}
            </div>

            <div className="flex gap-8">
              <div className="flex-1">
                <Grid cols={3} gap="lg">
                  {filteredTemplates.map((template) => (
                    <Card key={template.id} className="card-hover group">
                      <div className="relative overflow-hidden rounded-t-lg">
                        {template.preview.startsWith('/api/') ? (
                          <div className="w-full aspect-video bg-gradient-to-br from-muted-alt to-secondary flex items-center justify-center">
                            <div className="text-center">
                              <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${template.gradient} flex items-center justify-center`}>
                                <Sparkles className="w-8 h-8 text-white" />
                              </div>
                              <span className="text-muted-foreground font-medium">Coming Soon</span>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={template.preview} 
                            alt={`${template.title} template preview`}
                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <Badge className={`bg-gradient-to-r ${template.gradient} text-white border-0 shadow-lg`}>
                            {template.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
                            <span className="text-xs font-medium text-gray-800">Live Preview</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium">Особенности:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {template.features.slice(0, 3).map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {template.features.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{template.features.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex-1"
                              asChild
                            >
                              <Link to={`/templates/${template.id}`}>
                                <Eye className="w-4 h-4 mr-1" />
                                Демо
                              </Link>
                            </Button>
                            <Button 
                              size="sm" 
                              className="flex-1 bg-accent hover:bg-accent/90"
                              onClick={() => handleSelectTemplate(template.id)}
                            >
                              Выбрать
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </div>

              {showCustomization && (
                <div className="w-80">
                  <CustomizationPanel />
                </div>
              )}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Шаблоны по заданным критериям не найдены
                </p>
                <Button variant="outline" onClick={() => handleFilterChange({})}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary text-primary-foreground">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline mb-6 text-primary-foreground">
                Не нашли подходящий шаблон?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80">
                AI-Архитектор создаст уникальный дизайн специально для вашего бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/product/ai-architect">
                    Создать уникальный дизайн
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Запросить консультацию</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />

      {/* Modals and Chat */}
      <OnboardingModal 
        open={showOnboarding}
        onOpenChange={setShowOnboarding}
        templateSlug={selectedTemplate || undefined}
      />

      {/* AI Chat Widget - показывается только после выбора шаблона */}
      {showAIChat && selectedTemplate && (
        <AIArchitectChat 
          isMinimized={isChatMinimized}
          onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
        />
      )}
    </>
  );
};

export default Templates;