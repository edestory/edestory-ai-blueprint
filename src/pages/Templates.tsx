import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Templates = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('nav.templates')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Готовые шаблоны для быстрого запуска вашего D2C бренда
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Templates;