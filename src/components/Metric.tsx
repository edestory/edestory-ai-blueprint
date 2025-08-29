import React from 'react';
import { cn } from '@/lib/utils';

interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
  variant?: 'default' | 'accent';
}

const Metric = React.forwardRef<HTMLDivElement, MetricProps>(
  ({ className, value, label, description, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'text-foreground',
      accent: 'text-primary'
    };

    return (
      <div
        ref={ref}
        className={cn('text-center', className)}
        {...props}
      >
        <div className={cn(
          'text-3xl md:text-4xl font-light mb-2',
          variantClasses[variant]
        )}>
          {value}
        </div>
        <div className="text-sm font-medium text-foreground mb-1">
          {label}
        </div>
        {description && (
          <div className="text-xs text-muted-foreground">
            {description}
          </div>
        )}
      </div>
    );
  }
);

Metric.displayName = 'Metric';

export { Metric };