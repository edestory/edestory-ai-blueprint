import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, Award, Globe, Rocket, Heart, Target, 
  MapPin, Calendar, Mail, Phone, Sparkles 
} from 'lucide-react';
import teamImage from '@/assets/team-collaboration.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>О компании Edestory — Команда AI-экспертов из Marbella, Spain</title>
        <meta name="description" content="Edestory — международная команда AI-разработчиков и e-commerce экспертов. Создаем будущее онлайн-торговли с помощью искусственного интеллекта." />
        <meta name="keywords" content="о компании, команда Edestory, AI разработчики, e-commerce эксперты, Marbella" />
        <link rel="canonical" href="https://ede-story.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="О компании Edestory — Команда AI-экспертов" />
        <meta property="og:description" content="Международная команда создает будущее e-commerce с помощью AI" />
        <meta property="og:url" content="https://ede-story.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Edestory',
            url: 'https://ede-story.com',
            description: 'AI-powered e-commerce platform development company',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Marbella',
              addressCountry: 'Spain'
            },
            foundingDate: '2024'
          })}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <Section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,168,83,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,168,83,0.05),transparent_50%)]" />
          
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-accent" />
                  <Badge variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm">
                    Международная команда
                  </Badge>
                </div>
                
                <h1 className="text-5xl font-light tracking-tight text-white mb-6">
                  О нас
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  Мы создаем будущее e-commerce с помощью искусственного интеллекта
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-accent mb-1">2024</div>
                    <div className="text-sm text-gray-300">Год основания</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-accent mb-1">15+</div>
                    <div className="text-sm text-gray-300">Экспертов в команде</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Команда Edestory"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="font-medium">Наша команда в Marbella</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Values Section */}
        <Section className="py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-6">Наши ценности</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Принципы, которые направляют нашу работу и отношения с клиентами
              </p>
            </div>
          </Container>
        </Section>
      </div>

      <Footer />
    </>
  );
};

export default About;