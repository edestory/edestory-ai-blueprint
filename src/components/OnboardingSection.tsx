import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionTitleLight, DescriptionLight } from '@/components/Typography';

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
    <section className="section bg-secondary/20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <SectionTitleLight>
            {t('onboarding.title')}
          </SectionTitleLight>
          <DescriptionLight className="text-balance">
            {t('onboarding.subtitle')}
          </DescriptionLight>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-light text-xl shadow-md mx-auto lg:mx-0">
                    {index + 1}
                  </div>
                  
                  {/* Connector Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-full ml-6 w-6 h-6 text-primary/30" />
                  )}
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-base font-medium text-foreground mb-4">
                    {step.title}
                  </h3>
                  <DescriptionLight>
                    {step.description}
                  </DescriptionLight>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-8 h-8 border border-primary/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary/40 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 bg-primary/5 border border-primary/20 rounded-full px-8 py-4 mb-8">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-normal text-primary">
              Среднее время запуска: 45 минут
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;