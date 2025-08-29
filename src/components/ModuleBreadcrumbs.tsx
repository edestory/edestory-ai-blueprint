import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface ModuleBreadcrumbsProps {
  moduleName: string;
}

const ModuleBreadcrumbs: React.FC<ModuleBreadcrumbsProps> = ({ moduleName }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      <Link to="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Главная
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link to="/product" className="hover:text-foreground transition-colors">
        Платформа
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground font-medium">{moduleName}</span>
    </nav>
  );
};

export default ModuleBreadcrumbs;