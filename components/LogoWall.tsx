import React from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoWallProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: Logo[];
  title?: string;
  cols?: 3 | 4 | 5 | 6;
  grayscale?: boolean;
}

const LogoWall = React.forwardRef<HTMLDivElement, LogoWallProps>(
  ({ className, logos, title, cols = 5, grayscale = false, ...props }, ref) => {
    const colsClasses = {
      3: 'grid-cols-2 md:grid-cols-3',
      4: 'grid-cols-2 md:grid-cols-4',
      5: 'grid-cols-3 md:grid-cols-5',
      6: 'grid-cols-3 md:grid-cols-6'
    };

    return (
      <div
        ref={ref}
        className={cn('text-center', className)}
        {...props}
      >
        {title && (
          <h3 className="text-sm font-medium text-muted-foreground mb-8">
            {title}
          </h3>
        )}
        
        <div className={cn(
          'grid gap-8 items-center justify-items-center',
          colsClasses[cols]
        )}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity',
                grayscale && 'grayscale hover:grayscale-0'
              )}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

LogoWall.displayName = 'LogoWall';

export { LogoWall, type Logo };