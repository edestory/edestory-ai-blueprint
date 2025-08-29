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
    <section className="section-lg bg-primary overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-12">
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-sm font-normal text-white">MVP Ready</span>
            <span className="text-sm text-white/60">•</span>
            <span className="text-sm text-white/80">6 AI модулей</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-display font-light text-white mb-8 text-balance">
            {t('hero.title').split(' ').slice(0, 3).join(' ')}{' '}
            <span className="font-normal">
              {t('hero.title').split(' ').slice(3).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-large text-white/80 mb-12 max-w-3xl mx-auto text-balance">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button variant="secondary" size="lg" className="group px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-normal" />
            </Button>
            
            <Button variant="ghost" size="lg" className="group text-white border-white/20 hover:bg-white/10 px-8 py-4">
              <Play className="w-4 h-4 mr-2" />
              {t('hero.watchDemo')}
            </Button>
          </div>

          {/* Trust Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Users className="w-4 h-4" />
              <span>{t('hero.trustedBy')}</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
              {trustLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="h-10 bg-white/10 rounded-sm"
                  style={{ width: logo.width }}
                >
                  <div className="w-full h-full flex items-center justify-center text-xs font-light text-white/80 tracking-wider">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-white/3 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-8 w-16 h-16 bg-white/2 rounded-full blur-lg"></div>
    </section>
  );
};

export default Hero;