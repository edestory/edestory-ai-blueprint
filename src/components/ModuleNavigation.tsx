import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Grid } from '@/components/Grid';

const modules = [
  {
    title: "AI-Архитектор",
    description: "проектирование сайта за 30 минут",
    status: "MVP Ready",
    statusType: "ready" as const,
    url: "/product/ai-architect"
  },
  {
    title: "AI-Контент",
    description: "генерация текстов и медиа",
    status: "MVP Ready", 
    statusType: "ready" as const,
    url: "/product/ai-content"
  },
  {
    title: "AI-Маркетолог",
    description: "трафик, реклама, SEO",
    status: "Coming Q4 2025",
    statusType: "coming" as const,
    url: "/product/ai-marketer"
  },
  {
    title: "AI-Поддержка",
    description: "24/7 сервис и продажи",
    status: "Coming Q4 2025",
    statusType: "coming" as const,
    url: "/product/ai-support"
  },
  {
    title: "AI-Логистика",
    description: "закупки и поставки",
    status: "Coming Q2 2026",
    statusType: "future" as const,
    url: "/product/ai-logistics"
  },
  {
    title: "AI-Аналитик",
    description: "предиктивная аналитика",
    status: "Coming Q1 2026",
    statusType: "future" as const,
    url: "/product/ai-analyst"
  }
];

const ModuleNavigation: React.FC = () => {
  const getStatusBadge = (statusType: "ready" | "coming" | "future") => {
    const variants = {
      ready: { variant: "default" as const, className: "bg-green-100 text-green-800" },
      coming: { variant: "secondary" as const, className: "bg-orange-100 text-orange-800" },
      future: { variant: "outline" as const, className: "bg-gray-100 text-gray-600" }
    };
    return variants[statusType];
  };

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-6 text-center">Другие AI-модули</h3>
      <Grid cols={3} gap="md">
        {modules.map((module, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{module.title}</CardTitle>
                <Badge 
                  variant={getStatusBadge(module.statusType).variant}
                  className={getStatusBadge(module.statusType).className}
                >
                  {module.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {module.description}
              </CardDescription>
              <Link 
                to={module.url}
                className="text-accent hover:text-accent-light text-sm font-medium"
              >
                Узнать больше →
              </Link>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default ModuleNavigation;