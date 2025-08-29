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
    <Card className="relative overflow-hidden group card-hover bg-white/50 backdrop-blur-sm border-border/50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            {icon}
          </div>
          
          <Badge 
            variant={isReady ? "default" : "secondary"}
            className={`${isReady ? 'bg-green-100 text-green-700 border-green-200' : 'bg-orange-100 text-orange-700 border-orange-200'}`}
          >
            {isReady ? (
              <CheckCircle className="w-3 h-3 mr-1" />
            ) : (
              <Clock className="w-3 h-3 mr-1" />
            )}
            {status}
          </Badge>
        </div>
        
        <CardTitle className="text-lg font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </CardDescription>
        
        {isReady && (
          <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium text-primary">
            Узнать больше
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
    </Card>
  );
};

export default ModuleCard;