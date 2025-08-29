import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomizationPanel from '@/components/CustomizationPanel';
import OnboardingModal from '@/components/OnboardingModal';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Eye, Settings, Download, ExternalLink, Smartphone, Monitor, Tablet } from 'lucide-react';
const templatesData = [
  {
    "id": "fashion-store",
    "title": "Fashion Store",
    "category": "Мода",
    "preview": "/templates/fashion.jpg",
    "description": "Элегантный шаблон для магазина одежды",
    "features": ["Product showcase", "Size guide", "Wishlist"],
    "demoUrl": "#"
  }
];

const TemplateDemo = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showCustomization, setShowCustomization] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  const template = templatesData.find(t => t.id === slug);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Шаблон не найден</h1>
          <Button asChild>
            <Link to="/templates">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к шаблонам
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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
        "name": template.title,
        "item": `https://ede-story.com/templates/${slug}`
      }
    ]
  };

  const deviceClasses = {
    desktop: 'w-full h-96',
    tablet: 'w-3/4 h-96 mx-auto',
    mobile: 'w-80 h-96 mx-auto'
  };

  return (
    <>
      <Helmet>
        <title>{template.title} — демо шаблона | Edestory</title>
        <meta 
          name="description" 
          content={`Демонстрация шаблона ${template.title}: ${template.description}. Попробуйте кастомизацию в реальном времени.`} 
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
        {/* Header Section */}
        <Section className="pt-8 pb-4 border-b">
          <Container>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" asChild>
                  <Link to="/templates">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    К шаблонам
                  </Link>
                </Button>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold">{template.title}</h1>
                    <Badge>{template.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{template.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={deviceView === 'desktop' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setDeviceView('desktop')}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={deviceView === 'tablet' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setDeviceView('tablet')}
                  >
                    <Tablet className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={deviceView === 'mobile' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setDeviceView('mobile')}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  variant={showCustomization ? 'secondary' : 'outline'}
                  onClick={() => setShowCustomization(!showCustomization)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Кастомизация
                </Button>
                
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => setShowOnboarding(true)}
                >
                  Выбрать шаблон
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Demo Preview */}
        <Section className="py-0">
          <Container className="max-w-none">
            <div className="flex gap-4 h-screen">
              {/* Main Preview Area */}
              <div className="flex-1 bg-muted/30 p-4">
                <div className={`${deviceClasses[deviceView]} bg-background border rounded-lg shadow-lg overflow-hidden relative`}>
                  {/* Mock Website Preview */}
                  <div className="h-full bg-gradient-to-b from-background to-muted/50 p-6">
                    <div className="mb-6">
                      <div className="h-12 bg-primary/10 rounded mb-4 flex items-center px-4">
                        <div className="w-24 h-6 bg-primary/20 rounded mr-auto" />
                        <div className="flex gap-2">
                          <div className="w-16 h-4 bg-muted-foreground/20 rounded" />
                          <div className="w-16 h-4 bg-muted-foreground/20 rounded" />
                          <div className="w-16 h-4 bg-accent rounded" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="h-8 bg-foreground/10 rounded mb-4 mx-auto w-3/4" />
                        <div className="h-4 bg-muted-foreground/20 rounded mb-2 mx-auto w-1/2" />
                        <div className="h-4 bg-muted-foreground/20 rounded mx-auto w-2/3" />
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="bg-background border rounded p-3">
                            <div className="aspect-square bg-muted rounded mb-2" />
                            <div className="h-3 bg-muted-foreground/20 rounded mb-1" />
                            <div className="h-3 bg-muted-foreground/10 rounded w-2/3" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      Live Preview
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    Это демонстрация шаблона. В реальном проекте здесь будет ваш контент.
                  </p>
                </div>
              </div>

              {/* Customization Sidebar */}
              {showCustomization && (
                <div className="w-80 border-l bg-background p-4 overflow-y-auto">
                  <CustomizationPanel />
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* Template Details */}
        <Section className="bg-muted border-t">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">О шаблоне</h2>
                <p className="text-muted-foreground mb-6">{template.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Особенности:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {template.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Подходит для:</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{template.category}</Badge>
                      <Badge variant="outline">E-commerce</Badge>
                      <Badge variant="outline">B2C</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Технические характеристики</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Технологии</div>
                        <div className="text-muted-foreground">Next.js 14, Saleor, Tailwind</div>
                      </div>
                      <div>
                        <div className="font-medium">Время загрузки</div>
                        <div className="text-muted-foreground">&lt; 1.5 сек</div>
                      </div>
                      <div>
                        <div className="font-medium">SEO Score</div>
                        <div className="text-muted-foreground">95+/100</div>
                      </div>
                      <div>
                        <div className="font-medium">Мобильная версия</div>
                        <div className="text-muted-foreground">Адаптивный</div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t space-y-2">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Открыть в новой вкладке
                        </a>
                      </Button>
                      <Button size="sm" className="w-full bg-accent hover:bg-accent/90" onClick={() => setShowOnboarding(true)}>
                        <Download className="w-4 h-4 mr-2" />
                        Создать сайт на основе шаблона
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Templates */}
        <Section className="bg-background">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Похожие шаблоны</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {templatesData
                .filter(t => t.category === template.category && t.id !== template.id)
                .slice(0, 3)
                .map((relatedTemplate) => (
                <Card key={relatedTemplate.id} className="card-hover">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted-alt" />
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedTemplate.title}</CardTitle>
                    <CardDescription>{relatedTemplate.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link to={`/templates/${relatedTemplate.id}`}>
                          <Eye className="w-4 h-4 mr-1" />
                          Демо
                        </Link>
                      </Button>
                      <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                        Выбрать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />

      <OnboardingModal 
        open={showOnboarding}
        onOpenChange={setShowOnboarding}
        templateSlug={slug}
      />
    </>
  );
};

export default TemplateDemo;