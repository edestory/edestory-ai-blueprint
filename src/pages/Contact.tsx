import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call - replace with actual endpoint
    try {
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // For demo purposes, show success message
      alert('Сообщение отправлено! Мы свяжемся с вами в течение 24 часов.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      alert('Ошибка при отправке сообщения. Попробуйте позже.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light tracking-tight text-foreground mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Готовы начать? Расскажите нам о вашем проекте
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-foreground mb-8">
                Запросить демо
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Компания
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light text-foreground mb-8">
                Контактная информация
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Marbella, Spain<br/>
                    Costa del Sol
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    hello@ede-story.com
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Календарь встреч</h3>
                  <p className="text-muted-foreground mb-4">
                    Забронируйте 30-минутную демонстрацию
                  </p>
                  <Button variant="outline">
                    Забронировать встречу
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Рабочие часы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 18:00 CET<br/>
                    Сб-Вс: Только по предварительной записи
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
            <p className="text-muted-foreground">
              Карта: Marbella, Spain
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;