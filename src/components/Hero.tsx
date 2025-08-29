import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  const trustLogos = [
    { name: 'Shopify', width: 120 },
    { name: 'Stripe', width: 100 },
    { name: 'Vercel', width: 110 },
    { name: 'Google', width: 130 },
  ];

  return (
    <section className="section-lg bg-gradient-subtle overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">MVP Ready</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">6 AI модулей</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            {t('hero.title').split(' ').slice(0, 3).join(' ')}{' '}
            <span className="gradient-text">
              {t('hero.title').split(' ').slice(3).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" className="group">
              <Zap className="w-5 h-5 mr-2" />
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="w-4 h-4 mr-2" />
              {t('hero.watchDemo')}
            </Button>
          </div>

          {/* Trust Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{t('hero.trustedBy')}</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {trustLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="h-8 bg-muted-foreground/20 rounded"
                  style={{ width: logo.width }}
                >
                  <div className="w-full h-full flex items-center justify-center text-xs font-medium text-muted-foreground">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse-glow animation-delay-1000"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 bg-primary/5 rounded-full blur-md animate-pulse-glow animation-delay-2000"></div>
    </section>
  );
};

export default Hero;