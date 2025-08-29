import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep?: number;
  variant?: 'default' | 'numbered' | 'connected';
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ className, steps, currentStep = 0, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-6', className)}
        {...props}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              'flex gap-4 items-start',
              variant === 'connected' && index !== steps.length - 1 && 'relative'
            )}
          >
            {variant === 'connected' && index !== steps.length - 1 && (
              <div className="absolute left-4 top-10 w-0.5 h-6 bg-border" />
            )}
            
            <div className={cn(
              'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
              index <= currentStep 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground'
            )}>
              {variant === 'numbered' ? (
                <span className="text-sm font-medium">{index + 1}</span>
              ) : (
                step.icon || <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Steps.displayName = 'Steps';

export { Steps, type Step };