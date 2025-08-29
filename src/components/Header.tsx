import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.product'), href: '/product' },
    { name: t('nav.templates'), href: '/templates' },
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.resources'), href: '/resources' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 backdrop-elegant">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Savoy Style */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-lg">E</span>
            </div>
            <span className="font-light text-2xl tracking-wide text-foreground">EDESTORY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.slice(1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-normal transition-colors duration-normal ${
                  location.pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-normal"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-normal tracking-wide">{language}</span>
            </button>

            {/* CTA Button */}
            <Button variant="default" size="sm" className="hidden md:inline-flex font-normal">
              {t('common.demo')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-normal"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border backdrop-elegant">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.slice(1).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-normal transition-colors duration-normal ${
                    location.pathname === item.href
                      ? 'bg-primary/5 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4 py-3 flex items-center justify-between border-t border-border mt-4 pt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-normal"
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase font-normal tracking-wide">{language === 'ru' ? 'Русский' : 'English'}</span>
                </button>
                
                <Button variant="default" size="sm" onClick={() => setIsOpen(false)} className="font-normal">
                  {t('common.demo')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;