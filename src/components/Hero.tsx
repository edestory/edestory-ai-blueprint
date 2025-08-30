import React, { useState } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);

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
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-sm font-normal text-white">MVP Ready</span>
            <span className="text-sm text-white/60">•</span>
            <span className="text-sm text-white/80">6 AI модулей</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[4.1rem] font-light text-white mb-6 text-balance leading-tight">
            Ваша AI-команда для управления<br />
            <span className="font-normal">E-commerce бизнесом</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-4xl mx-auto text-balance">
            Мы предоставляем IT-платформу "под ключ", которая служит операционной системой для вашего бизнеса. 
            Наши автономные AI-агенты заменяют целый штат, автоматизируя 80% рутины и позволяя управлять 
            магазином в 100,000 товаров силами двух человек.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group px-8 py-4"
              onClick={() => setShowDetails(!showDetails)}
            >
              <Zap className="w-5 h-5 mr-2" />
              Узнать подробнее
              {showDetails ? (
                <ChevronUp className="w-4 h-4 ml-2 group-hover:translate-y-[-2px] transition-transform duration-normal" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-normal" />
              )}
            </Button>
            
            <Button variant="ghost" size="lg" className="group text-white border-white/20 hover:bg-white/10 px-8 py-4">
              <Play className="w-4 h-4 mr-2" />
              Смотреть демо
            </Button>
          </div>

          {/* Detailed Information - Expandable */}
          {showDetails && (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16 text-left max-w-4xl mx-auto">
              <h2 className="text-2xl font-normal text-white mb-6 text-center">
                Edestory: Операционная система для роста вашей прибыли
              </h2>
              
              <div className="space-y-6 text-white/90">
                <p className="text-base leading-relaxed">
                  Мы продаем не просто сайт. Мы предоставляем результат — радикальное повышение эффективности 
                  и прибыльности вашего e-commerce бизнеса. Наша платформа — это готовое решение "под ключ", 
                  которое заменяет собой целый штат дорогостоящих специалистов, от маркетолога до закупщика.
                </p>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Технологии, которым доверяют лидеры</h3>
                  <p className="text-base leading-relaxed mb-4">
                    В основе Edestory лежат передовые технологии, проверенные годами и используемые мировыми 
                    лидерами ритейла, такими как Lush, Breitling и Dr. Martens. Мы строим ваш бизнес на 
                    headless-архитектуре Saleor, что гарантирует:
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Молниеносную скорость:</strong> Загрузка любой страницы вашего сайта в среднем менее 1.5 секунды. Это напрямую влияет на конверсию и позиции в Google.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Безграничную гибкость:</strong> Наша архитектура позволяет легко интегрировать любые сервисы и адаптировать сайт под любые бизнес-задачи без ограничений.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Надежность и масштабируемость:</strong> Технологии, способные выдерживать миллионы посетителей, теперь доступны вашему бизнесу.</span>
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-4 italic">
                    Выбирая Edestory, вы получаете не просто красивый сайт, а перспективного технологического 
                    партнера, который обеспечивает вашему бизнесу конкурентное преимущество на годы вперед.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Что входит в полную автоматизацию от Edestory?</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Наша платформа — это экосистема автономных AI-агентов, каждый из которых отвечает за свою сферу вашего бизнеса:
                  </p>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong className="text-accent">AI Website Architect:</strong> Ваш персональный стратег, который проектирует структуру, дизайн и пользовательский опыт вашего сайта на основе анализа лидеров вашей ниши.
                    </div>
                    <div>
                      <strong className="text-accent">AI Content Factory:</strong> Автономный "контент-завод", который генерирует SEO-оптимизированные тексты, статьи для блога, посты для соцсетей и видеоролики, работая по утвержденному контент-плану.
                    </div>
                    <div>
                      <strong className="text-accent">AI Marketer:</strong> Умный маркетолог, который постоянно анализирует стратегии ваших топ-5 конкурентов и на основе этих данных автоматически создает и оптимизирует ваши рекламные кампании в Google Ads, Meta, TikTok для достижения максимального ROI.
                    </div>
                    <div>
                      <strong className="text-accent">Умный семантический поиск:</strong> Система на базе Google Vertex AI, которая понимает смысл запроса клиента, а не просто ищет по словам. Ваши клиенты могут писать, как думают («что-то стильное для офиса»), а поиск предложит им самые релевантные товары.
                    </div>
                    <div>
                      <strong className="text-accent">Собственная ERP и CRM на базе AI:</strong> Централизованное управление заказами, клиентами и финансами с предиктивной аналитикой.
                    </div>
                    <div>
                      <strong className="text-accent">AI-Закупщик и AI-Логист:</strong> Автоматизация управления запасами, прогнозирование спроса и оптимизация логистических цепочек.
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-base font-medium text-accent mb-2">Оптимизация для будущего: SEO и AIO</h4>
                  <p className="text-sm leading-relaxed">
                    Ваш сайт, созданный на платформе Edestory, будет построен с учетом требований поисковых систем и AI-моделей (AIO - AI Answer Optimization). Это означает, что не только Google, но и ChatGPT, Gemini и другие AI-ассистенты будут рекомендовать ваш магазин своим пользователям, обеспечивая вам поток органического трафика на годы вперед.
                  </p>
                </div>

                <p className="text-center text-base font-medium text-accent">
                  Edestory — это не расход, это инвестиция в вашу прибыль.
                </p>
              </div>
            </div>
          )}

          {/* Trust Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Users className="w-4 h-4" />
              <span>Технологиям доверяют</span>
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