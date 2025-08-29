import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Cases = () => {
  const cases = [
    {
      title: "Fashion-бренд увеличил конверсию на 340%",
      client: "Premium Fashion Brand",
      industry: "Мода",
      challenge: "Низкая конверсия, устаревший дизайн, плохой UX",
      solution: "AI Architect + AI Content + Redesign",
      results: {
        conversion: "+340%",
        revenue: "+280%", 
        pageSpeed: "+65%"
      },
      timeline: "3 месяца"
    },
    {
      title: "Маркетплейс электроники автоматизировал контент",
      client: "Electronics Marketplace",
      industry: "Электроника",
      challenge: "Ручное создание описаний 10000+ товаров",
      solution: "AI Content + AI Marketer",
      results: {
        timeReduction: "-90%",
        contentQuality: "+150%",
        seoTraffic: "+220%"
      },
      timeline: "2 месяца"
    },
    {
      title: "D2C beauty-стартап запустился за 30 дней",
      client: "Beauty Startup",
      industry: "Красота",
      challenge: "Быстрый запуск с ограниченным бюджетом",
      solution: "AI Architect + Template + AI Content",
      results: {
        launchTime: "30 дней",
        costReduction: "-70%",
        timeToMarket: "-80%"
      },
      timeline: "1 месяц"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light tracking-tight text-foreground mb-6">
              Кейсы успешных проектов
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Реальные результаты наших клиентов с использованием AI-платформы Edestory
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container-wide">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Case Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <Badge variant="outline" className="mb-4">
                        {caseStudy.industry}
                      </Badge>
                      <h2 className="text-2xl font-light text-foreground mb-3">
                        {caseStudy.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {caseStudy.client} • {caseStudy.timeline}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-foreground mb-2">Вызов</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-foreground mb-2">Решение</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <Button variant="outline">
                      Подробнее о кейсе
                    </Button>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-foreground mb-4">Результаты</h3>
                    {Object.entries(caseStudy.results).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-muted rounded-xl">
                        <div className="text-2xl font-light text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="text-center">
            <h2 className="text-3xl font-light text-foreground mb-6">
              Готовы стать следующим успешным кейсом?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к компаниям, которые уже трансформировали свой бизнес с помощью AI
            </p>
            <Button size="lg">
              Запросить демо
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;