import React from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FAQItem[];
  title?: string;
  description?: string;
}

const FAQ = React.forwardRef<HTMLDivElement, FAQProps>(
  ({ className, items, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('max-w-3xl mx-auto', className)}
        {...props}
      >
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-lg font-light text-foreground mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground text-sm">
                {description}
              </p>
            )}
          </div>
        )}
        
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline text-sm">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
);

FAQ.displayName = 'FAQ';

export { FAQ, type FAQItem };