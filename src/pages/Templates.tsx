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
import { ArrowRight, Play, Settings, Zap, CheckCircle, Eye, Download } from 'lucide-react';
const templatesData = [
  {
    "id": "fashion-store",
    "title": "Fashion Store",
    "category": "Мода",
    "preview": "/templates/fashion.jpg",
    "description": "Элегантный шаблон для магазина одежды",
    "features": ["Product showcase", "Size guide", "Wishlist"],
    "demoUrl": "#"
  },
  {
    "id": "electronics",
    "title": "Electronics Hub", 
    "category": "Электроника",
    "preview": "/templates/electronics.jpg",
    "description": "Технологичный дизайн для электроники",
    "features": ["Spec comparison", "Reviews", "Tech specs"],
    "demoUrl": "#"
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
        <Section className="pt-16 pb-12">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-display mb-6 text-balance">
                Фабрика шаблонов Edestory
              </h1>
              <p className="text-body-large text-muted-foreground mb-8 text-balance">
                <strong>Выбирайте из 20+ готовых шаблонов для вашего бизнеса и запускайте магазин за 5–10 минут.</strong> 
                Каждый шаблон — «золотой стандарт»: интегрирован с Saleor, оптимизирован под SEO/AIO, 
                стилизуется через единый <strong>theme.json</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                  <Link to="/templates/how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    Посмотреть, как это работает
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
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
                      <div className="relative overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-muted to-muted-alt flex items-center justify-center">
                          <span className="text-muted-foreground">Preview Image</span>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge>{template.category}</Badge>
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

      <AIArchitectChat 
        isMinimized={isChatMinimized}
        onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
      />
    </>
  );
};

export default Templates;