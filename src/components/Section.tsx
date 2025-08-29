import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'sm' | 'lg';
  as?: 'section' | 'div';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', as = 'section', ...props }, ref) => {
    const variantClasses = {
      default: 'section',
      sm: 'section-sm',
      lg: 'section-lg'
    };

    const Component = as as any;

    return (
      <Component
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';

export { Section };