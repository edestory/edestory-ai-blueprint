import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateSlug?: string;
}

const steps = [
  {
    title: "Расскажите о вашем бизнесе",
    description: "Основная информация для настройки шаблона"
  },
  {
    title: "Выберите целевую аудиторию",
    description: "Это поможет настроить UX и контент"
  },
  {
    title: "Определите цели сайта",
    description: "Приоритизируем функции под ваши задачи"
  },
  {
    title: "Настройте брендинг",
    description: "Цвета, шрифты и стиль вашего бренда"
  },
  {
    title: "Выберите домен",
    description: "Где разместить ваш новый сайт"
  }
];

const OnboardingModal: React.FC<OnboardingModalProps> = ({ 
  open, 
  onOpenChange, 
  templateSlug 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    description: '',
    targetAudience: '',
    mainGoal: '',
    brandColors: '',
    domain: ''
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Завершение онбординга
      onOpenChange(false);
      // Здесь будет логика создания сайта
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="businessName">Название бизнеса</Label>
              <Input 
                id="businessName" 
                placeholder="Например: Beauty Store"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="businessType">Тип бизнеса</Label>
              <Select value={formData.businessType} onValueChange={(value) => setFormData({...formData, businessType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fashion">Мода и одежда</SelectItem>
                  <SelectItem value="beauty">Красота и косметика</SelectItem>
                  <SelectItem value="sports">Спорт и фитнес</SelectItem>
                  <SelectItem value="food">Еда и напитки</SelectItem>
                  <SelectItem value="tech">Технологии</SelectItem>
                  <SelectItem value="consulting">Консалтинг</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Краткое описание</Label>
              <Textarea 
                id="description"
                placeholder="Опишите ваш бизнес в 2-3 предложениях"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="targetAudience">Целевая аудитория</Label>
              <Select value={formData.targetAudience} onValueChange={(value) => setFormData({...formData, targetAudience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Кто ваши клиенты?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="young-adults">Молодые люди 18-30</SelectItem>
                  <SelectItem value="adults">Взрослые 30-45</SelectItem>
                  <SelectItem value="seniors">Зрелые 45+</SelectItem>
                  <SelectItem value="b2b">Бизнес-клиенты</SelectItem>
                  <SelectItem value="luxury">Премиум сегмент</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg cursor-pointer hover:border-accent">
                <h4 className="font-medium">B2C</h4>
                <p className="text-sm text-muted-foreground">Продажи частным лицам</p>
              </div>
              <div className="p-4 border rounded-lg cursor-pointer hover:border-accent">
                <h4 className="font-medium">B2B</h4>
                <p className="text-sm text-muted-foreground">Продажи бизнесу</p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label>Главная цель сайта</Label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {[
                  { value: 'sales', label: 'Продажи товаров', desc: 'Интернет-магазин с каталогом' },
                  { value: 'leads', label: 'Генерация лидов', desc: 'Сбор заявок и контактов' },
                  { value: 'branding', label: 'Представление бренда', desc: 'Имиджевый корпоративный сайт' },
                  { value: 'services', label: 'Продажа услуг', desc: 'Консультации, сервисы' }
                ].map((goal) => (
                  <div 
                    key={goal.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.mainGoal === goal.value ? 'border-accent bg-accent/5' : 'hover:border-accent/50'
                    }`}
                    onClick={() => setFormData({...formData, mainGoal: goal.value})}
                  >
                    <h4 className="font-medium">{goal.label}</h4>
                    <p className="text-sm text-muted-foreground">{goal.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label>Предпочтения по дизайну</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Минимализм', color: 'bg-gray-100' },
                  { name: 'Яркий', color: 'bg-accent' },
                  { name: 'Темная тема', color: 'bg-gray-800' },
                  { name: 'Корпоративный', color: 'bg-blue-600' }
                ].map((style) => (
                  <div 
                    key={style.name}
                    className={`p-4 rounded-lg cursor-pointer border hover:border-accent ${style.color === formData.brandColors ? 'border-accent' : ''}`}
                    onClick={() => setFormData({...formData, brandColors: style.color})}
                  >
                    <div className={`w-8 h-8 rounded mb-2 ${style.color}`} />
                    <span className="text-sm font-medium">{style.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="domain">Домен для сайта</Label>
              <Input 
                id="domain"
                placeholder="mystore.com"
                value={formData.domain}
                onChange={(e) => setFormData({...formData, domain: e.target.value})}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Или используйте временный поддомен: mystore.edestory.app
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Что происходит дальше:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Автоматический деплой на Vercel</li>
                <li>• Настройка Saleor backend</li>
                <li>• Генерация контента по вашей нише</li>
                <li>• Готовый сайт через 5-10 минут</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Шаг {currentStep + 1} из {steps.length}: {steps[currentStep].title}
          </DialogTitle>
          <p className="text-muted-foreground">{steps[currentStep].description}</p>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Прогресс</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>

          {renderStepContent()}

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            
            <Button onClick={handleNext} className="bg-accent hover:bg-accent/90">
              {currentStep === steps.length - 1 ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Создать сайт
                </>
              ) : (
                <>
                  Далее
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;