import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

interface LeadFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  title?: string;
  description?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

const LeadForm = React.forwardRef<HTMLFormElement, LeadFormProps>(
  ({ className, title, description, onSubmit, ...props }, ref) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        if (onSubmit) {
          onSubmit(formData);
        } else {
          // Default API call
          const response = await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          
          if (response.ok) {
            setFormData({ name: '', email: '', company: '', message: '' });
          }
        }
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (field: keyof FormData) => (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn('space-y-6', className)}
        {...props}
      >
        {(title || description) && (
          <div className="text-center mb-8">
            {title && (
              <h3 className="text-2xl font-light text-foreground mb-4">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange('name')}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
        </div>

        <Input
          placeholder="Компания (необязательно)"
          value={formData.company}
          onChange={handleChange('company')}
        />

        <Textarea
          placeholder="Расскажите о вашем проекте..."
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить запрос'}
        </Button>
      </form>
    );
  }
);

LeadForm.displayName = 'LeadForm';

export { LeadForm, type FormData };