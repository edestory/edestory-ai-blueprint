import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  status: string;
  icon: React.ReactNode;
  isReady?: boolean;
}

const ModuleCard = ({ title, description, status, icon, isReady }: ModuleCardProps) => {
  return (
    <Card className="relative overflow-hidden group card-hover bg-white border-border/50 shadow-sm">
      {/* Subtle Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-normal"></div>
      
      <CardHeader className="relative pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-sm">
            {icon}
          </div>
          
          <Badge 
            variant={isReady ? "default" : "secondary"}
            className={`${
              isReady 
                ? 'bg-primary/10 text-primary border-primary/20 font-normal' 
                : 'bg-muted text-muted-foreground border-border font-normal'
            }`}
          >
            {isReady ? (
              <CheckCircle className="w-3 h-3 mr-1" />
            ) : (
              <Clock className="w-3 h-3 mr-1" />
            )}
            {status}
          </Badge>
        </div>
        
        <CardTitle className="text-xl font-normal text-foreground leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative pt-0">
        <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-base">
          {description}
        </CardDescription>
        
        {isReady && (
          <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-normal text-primary hover:text-primary-dark">
            Узнать больше
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-normal" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ModuleCard;