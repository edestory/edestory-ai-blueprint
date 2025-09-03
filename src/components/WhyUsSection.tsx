import React from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Globe, Shield } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <Section className="bg-muted">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-foreground">
            Наш подход — это больше, чем технология.
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Мы создали уникальную экосистему, которая обеспечивает долгосрочный успех, а не краткосрочные продажи.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mb-8">
                Подробнее о нашем подходе
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl mb-4">Почему именно EDESTORY AI?</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Модель Win-Win-Win
                  </h4>
                  <p className="text-muted-foreground">У нас зарабатывают все: вы получаете рост прибыли, ваш покупатель — лучший сервис и честную цену, а мы — вознаграждение за результат.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Уникальный доступ к рынку
                  </h4>
                  <p className="text-muted-foreground">Мы работаем через эксклюзивную сеть доверенных агентов в Китае, что позволяет нам эффективно находить партнеров.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    30 лет экспертизы
                  </h4>
                  <p className="text-muted-foreground">В основе проекта — глубокое понимание e-commerce, автоматизации и специфики работы с азиатскими производителями.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Бренд, который любят
                  </h4>
                  <p className="text-muted-foreground">Мы помогаем вам строить прямые отношения с клиентами, превращая их в преданных поклонников вашего бренда.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Win-Win-Win</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Все участники процесса получают максимальную выгоду
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Доступ к рынку</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Эксклюзивная сеть агентов и партнеров
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">30 лет опыта</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Глубокая экспертиза в e-commerce и автоматизации
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Лояльный бренд</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Превращаем клиентов в преданных поклонников
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};