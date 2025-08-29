import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TemplateCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  category: string;
  preview?: string;
  features: string[];
  href?: string;
  demoUrl?: string;
}

const TemplateCard = React.forwardRef<HTMLDivElement, TemplateCardProps>(
  ({ className, title, description, category, preview, features, href, demoUrl, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn('group hover:shadow-lg transition-shadow duration-normal', className)}
        {...props}
      >
        {preview && (
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img
              src={preview}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-normal"
            />
          </div>
        )}
        
        <CardContent className="p-6">
          <div className="mb-3">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-medium text-foreground mb-3">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          
          <ul className="space-y-1 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-2">
            {demoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Демо
                </a>
              </Button>
            )}
            {href && (
              <Button size="sm" className="flex-1" asChild>
                <a href={href}>Выбрать</a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

TemplateCard.displayName = 'TemplateCard';

export { TemplateCard };