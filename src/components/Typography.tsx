import React from 'react';
import { cn } from '@/lib/utils';

// Единая система типографики на основе эталонного блока
export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-medium mb-3", className)}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

export const SubTitle = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <strong
    ref={ref}
    className={cn("text-accent font-medium", className)}
    {...props}
  />
));
SubTitle.displayName = "SubTitle";

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
));
Description.displayName = "Description";

// Для светлого фона
export const SectionTitleLight = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-medium mb-3 text-foreground", className)}
    {...props}
  />
));
SectionTitleLight.displayName = "SectionTitleLight";

// Для темного фона
export const SectionTitleDark = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-medium mb-3 text-white", className)}
    {...props}
  />
));
SectionTitleDark.displayName = "SectionTitleDark";

export const DescriptionLight = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
));
DescriptionLight.displayName = "DescriptionLight";

export const DescriptionDark = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm leading-relaxed text-white/80", className)}
    {...props}
  />
));
DescriptionDark.displayName = "DescriptionDark";