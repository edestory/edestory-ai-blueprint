import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, Package, Grid3X3, Lightbulb, DollarSign, FileText, Users, Mail, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  
  const [expandedSection, setExpandedSection] = useState<string | null>('product');

  const navigation = [
    {
      name: t('nav.product'),
      href: '/product',
      icon: Package,
      children: [
        { name: 'AI Architect', href: '/product/ai-architect' },
        { name: 'AI Content', href: '/product/ai-content' },
        { name: 'AI Marketer', href: '/product/ai-marketer' },
        { name: 'AI Support', href: '/product/ai-support' },
        { name: 'AI Logistics', href: '/product/ai-logistics' },
        { name: 'AI Analyst', href: '/product/ai-analyst' },
      ]
    },
    { name: t('nav.templates'), href: '/templates', icon: Grid3X3 },
    {
      name: t('nav.solutions'),
      href: '/solutions',
      icon: Lightbulb,
      children: [
        { name: 'D2C Brands', href: '/solutions/d2c' },
        { name: 'Amazon Sellers', href: '/solutions/amazon' },
        { name: 'Traditional Retail', href: '/solutions/retail' },
      ]
    },
    { name: t('nav.pricing'), href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/cases', icon: FileCheck },
    { name: t('nav.resources'), href: '/resources', icon: FileText },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  const isActiveSection = (item: any) => {
    if (item.children) {
      return item.children.some((child: any) => location.pathname === child.href) || location.pathname === item.href;
    }
    return location.pathname === item.href;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-normal ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-background border-r border-border z-50 transform transition-transform duration-normal ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link to="/" onClick={onClose} className="flex items-center space-x-3">
            <span className="font-light text-2xl tracking-wide text-foreground">edestory</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-colors duration-normal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <div className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  // Expandable section
                  <div>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors duration-normal ${
                        isActiveSection(item) 
                          ? 'bg-primary/5 text-primary' 
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-normal">{item.name}</span>
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform duration-normal ${
                          expandedSection === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Children */}
                    <div className={`mt-1 ml-8 space-y-1 overflow-hidden transition-all duration-normal ${
                      expandedSection === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={onClose}
                          className={`block p-2 rounded-md text-sm transition-colors duration-normal ${
                            location.pathname === child.href
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular link
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-normal ${
                      location.pathname === item.href
                        ? 'bg-primary/5 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-normal">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-border">
            <Button 
              variant="default" 
              className="w-full justify-center font-normal"
              onClick={onClose}
            >
              {t('common.demo')}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;