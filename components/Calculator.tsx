import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface CalculatorProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

interface CalculatorData {
  currentRevenue: number;
  currentCosts: number;
  targetGrowth: number;
}

const Calculator = React.forwardRef<HTMLDivElement, CalculatorProps>(
  ({ className, title, description, ...props }, ref) => {
    const [data, setData] = useState<CalculatorData>({
      currentRevenue: 0,
      currentCosts: 0,
      targetGrowth: 0
    });

    const handleChange = (field: keyof CalculatorData) => (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = parseFloat(e.target.value) || 0;
      setData(prev => ({ ...prev, [field]: value }));
    };

    const calculateResults = () => {
      const currentProfit = data.currentRevenue - data.currentCosts;
      const projectedRevenue = data.currentRevenue * (1 + data.targetGrowth / 100);
      const edestoryCosts = projectedRevenue * 0.1; // 10% revenue share
      const projectedProfit = projectedRevenue - edestoryCosts;
      const savings = data.currentCosts - edestoryCosts;
      
      return {
        currentProfit,
        projectedRevenue,
        edestoryCosts,
        projectedProfit,
        savings: Math.max(0, savings)
      };
    };

    const results = calculateResults();

    return (
      <div
        ref={ref}
        className={cn('max-w-4xl mx-auto', className)}
        {...props}
      >
        {(title || description) && (
          <div className="text-center mb-8">
            {title && (
              <h3 className="text-2xl font-light text-foreground mb-4">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Введите ваши данные</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="revenue">Текущая выручка (€/год)</Label>
                <Input
                  id="revenue"
                  type="number"
                  placeholder="100000"
                  value={data.currentRevenue || ''}
                  onChange={handleChange('currentRevenue')}
                />
              </div>
              
              <div>
                <Label htmlFor="costs">Текущие затраты на IT (€/год)</Label>
                <Input
                  id="costs"
                  type="number"
                  placeholder="50000"
                  value={data.currentCosts || ''}
                  onChange={handleChange('currentCosts')}
                />
              </div>
              
              <div>
                <Label htmlFor="growth">Целевой рост (%)</Label>
                <Input
                  id="growth"
                  type="number"
                  placeholder="50"
                  value={data.targetGrowth || ''}
                  onChange={handleChange('targetGrowth')}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Прогноз с Edestory</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Проектируемая выручка:</span>
                <span className="font-medium">€{results.projectedRevenue.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Затраты на Edestory (10%):</span>
                <span className="font-medium">€{results.edestoryCosts.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Экономия на IT:</span>
                <span className="font-medium text-accent">€{results.savings.toLocaleString()}</span>
              </div>
              
              <hr className="border-border" />
              
              <div className="flex justify-between text-lg">
                <span className="font-medium">Итоговая прибыль:</span>
                <span className="font-bold text-primary">€{results.projectedProfit.toLocaleString()}</span>
              </div>
              
              <div className="pt-4">
                <Button className="w-full" size="lg">
                  Запросить консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
);

Calculator.displayName = 'Calculator';

export { Calculator };