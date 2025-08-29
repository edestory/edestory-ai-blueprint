import React from 'react';
import { 
  Layers, 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Truck, 
  BarChart3 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ModuleCard from './ModuleCard';

const ModulesSection = () => {
  const { t } = useLanguage();

  const modules = [
    {
      title: t('modules.architect.title'),
      description: t('modules.architect.description'),
      status: t('modules.architect.status'),
      icon: <Layers className="w-6 h-6" />,
      isReady: true
    },
    {
      title: t('modules.content.title'),
      description: t('modules.content.description'),
      status: t('modules.content.status'),
      icon: <FileText className="w-6 h-6" />,
      isReady: true
    },
    {
      title: t('modules.marketer.title'),
      description: t('modules.marketer.description'),
      status: t('modules.marketer.status'),
      icon: <TrendingUp className="w-6 h-6" />,
      isReady: false
    },
    {
      title: t('modules.support.title'),
      description: t('modules.support.description'),
      status: t('modules.support.status'),
      icon: <MessageSquare className="w-6 h-6" />,
      isReady: false
    },
    {
      title: t('modules.logistics.title'),
      description: t('modules.logistics.description'),
      status: t('modules.logistics.status'),
      icon: <Truck className="w-6 h-6" />,
      isReady: false
    },
    {
      title: t('modules.analyst.title'),
      description: t('modules.analyst.description'),
      status: t('modules.analyst.status'),
      icon: <BarChart3 className="w-6 h-6" />,
      isReady: false
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('modules.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t('modules.subtitle')}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ModuleCard {...module} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;