import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'accent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'lg', children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-background',
      muted: 'bg-muted/30',
      accent: 'bg-gradient-subtle'
    };

    const paddingClasses = {
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-20',
      xl: 'py-24'
    };

    return (
      <section
        ref={ref}
        className={cn(
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };