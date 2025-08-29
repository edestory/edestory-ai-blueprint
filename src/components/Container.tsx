import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'narrow' | 'wide';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant = 'wide', ...props }, ref) => {
    const variantClasses = {
      narrow: 'container-narrow',
      wide: 'container-wide'
    };

    return (
      <div
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container };