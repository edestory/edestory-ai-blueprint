import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  industry: string;
  results: string[];
  image?: string;
  href?: string;
}

const CaseCard = React.forwardRef<HTMLDivElement, CaseCardProps>(
  ({ className, title, description, industry, results, image, href, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn('group hover:shadow-lg transition-shadow duration-normal', className)}
        {...props}
      >
        {image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-normal"
            />
          </div>
        )}
        
        <CardContent className="p-6">
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs">
              {industry}
            </Badge>
          </div>
          
          <h3 className="text-xl font-medium text-foreground mb-3">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="space-y-2 mb-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-sm text-muted-foreground">{result}</span>
              </div>
            ))}
          </div>
          
          {href && (
            <Button variant="outline" className="w-full" asChild>
              <a href={href}>Подробнее</a>
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }
);

CaseCard.displayName = 'CaseCard';

export { CaseCard };