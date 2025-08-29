import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ModulesSection from '@/components/ModulesSection';
import OnboardingSection from '@/components/OnboardingSection';
import ChatWidget from '@/components/ChatWidget';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ModulesSection />
        <OnboardingSection />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
