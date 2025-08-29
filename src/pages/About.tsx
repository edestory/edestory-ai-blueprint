import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light tracking-tight text-foreground mb-6">
              О нас
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы создаем будущее e-commerce с помощью искусственного интеллекта
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-foreground mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Democratize e-commerce by providing AI-powered tools that make creating 
                and managing online stores accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы верим, что каждый предприниматель должен иметь доступ к передовым 
                технологиям для развития своего бизнеса.
              </p>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Технологический стек</h3>
                  <p className="text-muted-foreground">Next.js, Saleor, GCP, Vercel</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Безопасность</h3>
                  <p className="text-muted-foreground">Row Level Security (RLS), GDPR</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Местоположение</h3>
                  <p className="text-muted-foreground">Marbella, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">
              Команда
            </h2>
            <p className="text-lg text-muted-foreground">
              Эксперты в области AI, e-commerce и технологий
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium text-foreground mb-2">Team Member {i}</h3>
                <p className="text-muted-foreground">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground text-center mb-16">
              Наши ценности
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Инновации
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы постоянно исследуем новые технологии и подходы к решению бизнес-задач.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Простота
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сложные технологии должны быть простыми в использовании.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Качество
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый продукт проходит тщательное тестирование и оптимизацию.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Поддержка
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы всегда готовы помочь нашим клиентам достичь успеха.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;