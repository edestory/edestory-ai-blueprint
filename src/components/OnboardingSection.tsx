import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OnboardingSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('onboarding.steps.0.title'),
      description: t('onboarding.steps.0.description'),
    },
    {
      title: t('onboarding.steps.1.title'),
      description: t('onboarding.steps.1.description'),
    },
    {
      title: t('onboarding.steps.2.title'),
      description: t('onboarding.steps.2.description'),
    },
    {
      title: t('onboarding.steps.3.title'),
      description: t('onboarding.steps.3.description'),
    },
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('onboarding.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t('onboarding.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mx-auto lg:mx-0">
                    {index + 1}
                  </div>
                  
                  {/* Connector Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-full ml-4 w-8 h-8 text-primary/30" />
                  )}
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-8 h-8 border-2 border-primary/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary/50 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              Среднее время запуска: 45 минут
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;