import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Users, Lock } from 'lucide-react';

const Legal = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Legal Information - Edestory',
    description: 'Политика конфиденциальности, пользовательское соглашение и условия использования Edestory',
    url: 'https://ede-story.com/legal'
  };

  return (
    <>
      <Helmet>
        <title>Правовая информация — Политика конфиденциальности, Пользовательское соглашение | Edestory</title>
        <meta name="description" content="Политика конфиденциальности, пользовательское соглашение, условия использования и GDPR compliance для платформы Edestory." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://ede-story.com/legal" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        <Section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Shield className="w-16 h-16 mx-auto text-primary mb-6" />
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
                Правовая информация
              </h1>
              <p className="text-lg text-muted-foreground">
                Прозрачность и защита данных — основа нашей работы
              </p>
            </div>
          </Container>
        </Section>

        <Section className="py-20">
          <Container>
            <Tabs defaultValue="privacy" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="privacy" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span className="hidden sm:inline">Конфиденциальность</span>
                  <span className="sm:hidden">Privacy</span>
                </TabsTrigger>
                <TabsTrigger value="terms" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Пользовательское</span>
                  <span className="sm:hidden">Terms</span>
                </TabsTrigger>
                <TabsTrigger value="gdpr" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">GDPR</span>
                </TabsTrigger>
                <TabsTrigger value="cookies" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Cookies</span>
                </TabsTrigger>
              </TabsList>

              {/* Privacy Policy */}
              <TabsContent value="privacy" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Lock className="w-6 h-6 text-primary" />
                      Политика конфиденциальности
                    </CardTitle>
                    <CardDescription>
                      Последнее обновление: 29 августа 2024 г.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <div className="space-y-6 text-sm">
                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">1. Общие положения</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации 
                          о пользователях платформы Edestory (далее — «Платформа»), которая принадлежит и управляется 
                          компанией Edestory Limited, зарегистрированной в Испании.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">2. Собираемая информация</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-foreground">Персональные данные:</h4>
                            <ul className="mt-1 space-y-1 text-muted-foreground">
                              <li>• Имя, фамилия, email-адрес</li>
                              <li>• Название компании и должность</li>
                              <li>• Телефон для связи (по желанию)</li>
                              <li>• Платёжная информация (обрабатывается Stripe)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Техническая информация:</h4>
                            <ul className="mt-1 space-y-1 text-muted-foreground">
                              <li>• IP-адрес, тип браузера, ОС</li>
                              <li>• Cookies и аналитические данные</li>
                              <li>• Логи использования платформы</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">3. Цели обработки данных</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Предоставление услуг платформы</li>
                          <li>• Техническая поддержка пользователей</li>
                          <li>• Улучшение качества сервиса</li>
                          <li>• Выполнение договорных обязательств</li>
                          <li>• Соблюдение требований законодательства</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">4. Передача данных третьим лицам</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением:
                        </p>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          <li>• Сервис-провайдеров (Stripe, Vercel, Google Analytics)</li>
                          <li>• Случаев, требуемых законодательством</li>
                          <li>• Защиты прав и безопасности платформы</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">5. Безопасность данных</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Мы применяем современные технические и организационные меры защиты: SSL-шифрование, 
                          Row Level Security (RLS), регулярные аудиты безопасности, ограниченный доступ к данным.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">6. Ваши права</h3>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Право на доступ к персональным данным</li>
                          <li>• Право на исправление неточных данных</li>
                          <li>• Право на удаление данных («право на забвение»)</li>
                          <li>• Право на ограничение обработки</li>
                          <li>• Право на портируемость данных</li>
                          <li>• Право на отзыв согласия</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">7. Контактная информация</h3>
                        <p className="text-muted-foreground">
                          По вопросам обработки персональных данных обращайтесь: 
                          <strong className="text-foreground"> privacy@ede-story.com</strong>
                        </p>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Terms of Service */}
              <TabsContent value="terms" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      Пользовательское соглашение
                    </CardTitle>
                    <CardDescription>
                      Условия использования платформы Edestory
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <div className="space-y-6 text-sm">
                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">1. Предмет соглашения</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Настоящее соглашение регулирует отношения между Edestory Limited и пользователями 
                          платформы по предоставлению AI-инструментов для создания и управления интернет-магазинами.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">2. Условия использования</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Платформа предназначена для коммерческого использования</li>
                          <li>• Пользователь обязуется использовать сервис в соответствии с законодательством</li>
                          <li>• Запрещено создание контента, нарушающего права третьих лиц</li>
                          <li>• Пользователь несёт ответственность за безопасность учётной записи</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">3. Условия оплаты</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Revenue Share: 10% в первый год, -1%/год до минимума 5%</li>
                          <li>• Комиссия рассчитывается с валовой выручки</li>
                          <li>• Оплата производится ежемесячно до 15 числа следующего месяца</li>
                          <li>• При задержке платежа более 30 дней доступ может быть приостановлен</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">4. Интеллектуальная собственность</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Все права на платформу, её код, дизайн и AI-алгоритмы принадлежат Edestory. 
                          Контент, создаваемый пользователем, остаётся его собственностью.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">5. Ограничение ответственности</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Edestory не несёт ответственности за косвенные убытки, упущенную выгоду, 
                          действия третьих лиц. Общая ответственность ограничена суммой, 
                          выплаченной пользователем за 12 месяцев.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">6. Расторжение соглашения</h3>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Любая сторона может расторгнуть соглашение с уведомлением за 30 дней</li>
                          <li>• При нарушении условий соглашение может быть расторгнуто немедленно</li>
                          <li>• После расторжения данные удаляются в течение 90 дней</li>
                        </ul>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* GDPR Compliance */}
              <TabsContent value="gdpr" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      GDPR Compliance
                    </CardTitle>
                    <CardDescription>
                      Соответствие Общему регламенту защиты данных ЕС
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <div className="space-y-6 text-sm">
                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Права субъектов данных</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-foreground">Право на информацию</h4>
                              <p className="text-muted-foreground text-xs">
                                Прозрачная информация о том, как мы обрабатываем ваши данные
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Право на доступ</h4>
                              <p className="text-muted-foreground text-xs">
                                Получение копии всех данных, которые мы о вас храним
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Право на исправление</h4>
                              <p className="text-muted-foreground text-xs">
                                Исправление неточных или неполных данных
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-foreground">Право на удаление</h4>
                              <p className="text-muted-foreground text-xs">
                                «Право на забвение» — удаление ваших данных
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Право на портируемость</h4>
                              <p className="text-muted-foreground text-xs">
                                Получение данных в структурированном формате
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Право возражения</h4>
                              <p className="text-muted-foreground text-xs">
                                Возражение против обработки в маркетинговых целях
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Правовые основания обработки</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Договор:</strong> для предоставления услуг платформы</li>
                          <li>• <strong>Законный интерес:</strong> для улучшения сервиса и безопасности</li>
                          <li>• <strong>Согласие:</strong> для маркетинговых коммуникаций</li>
                          <li>• <strong>Законодательство:</strong> для соблюдения правовых требований</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Международные передачи данных</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Данные могут передаваться за пределы ЕС только при наличии адекватных гарантий: 
                          решения Европейской комиссии об адекватности, стандартные договорные клаузулы, 
                          или сертификация согласно схемам передачи данных.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Реализация прав</h3>
                        <p className="text-muted-foreground">
                          Для реализации своих прав обращайтесь к нашему сотруднику по защите данных: 
                          <strong className="text-foreground"> dpo@ede-story.com</strong>
                        </p>
                        <p className="text-muted-foreground mt-2">
                          Срок рассмотрения запросов: до 30 дней (может быть продлён до 60 дней в сложных случаях).
                        </p>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Cookie Policy */}
              <TabsContent value="cookies" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      Политика использования Cookie
                    </CardTitle>
                    <CardDescription>
                      Информация о файлах cookie и аналогичных технологиях
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <div className="space-y-6 text-sm">
                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Что такое Cookie</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
                          при посещении нашего сайта. Они помогают улучшить работу сайта и предоставить 
                          персонализированный опыт.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Типы используемых Cookie</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-foreground">Необходимые Cookie</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              Обеспечивают базовое функционирование сайта: авторизация, безопасность, 
                              настройки сессии. Эти файлы не могут быть отключены.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-foreground">Аналитические Cookie</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              Google Analytics для анализа трафика и поведения пользователей. 
                              Помогают улучшить работу сайта.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground">Функциональные Cookie</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              Запоминают ваши предпочтения: язык интерфейса, тема оформления, 
                              настройки личного кабинета.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground">Маркетинговые Cookie</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              Используются для показа релевантной рекламы и отслеживания 
                              эффективности рекламных кампаний.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Управление Cookie</h3>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          Вы можете управлять использованием Cookie в настройках вашего браузера. 
                          Обратите внимание, что отключение некоторых Cookie может повлиять на функциональность сайта.
                        </p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• <strong>Chrome:</strong> Настройки → Конфиденциальность и безопасность → Cookie</li>
                          <li>• <strong>Firefox:</strong> Настройки → Приватность и защита → Cookie</li>
                          <li>• <strong>Safari:</strong> Настройки → Конфиденциальность → Cookie</li>
                          <li>• <strong>Edge:</strong> Настройки → Cookie и разрешения сайтов</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Сроки хранения</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Сессионные Cookie:</strong> удаляются при закрытии браузера</li>
                          <li>• <strong>Постоянные Cookie:</strong> хранятся от 1 месяца до 2 лет</li>
                          <li>• <strong>Аналитические Cookie:</strong> до 2 лет (Google Analytics)</li>
                          <li>• <strong>Функциональные Cookie:</strong> до 1 года</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-medium text-foreground mb-3">Контакты</h3>
                        <p className="text-muted-foreground">
                          Вопросы по использованию Cookie: <strong className="text-foreground">cookies@ede-story.com</strong>
                        </p>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Legal;