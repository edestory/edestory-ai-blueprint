import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
  iconElement?: React.ReactElement;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ 
  type, 
  onClick, 
  children, 
  icon: Icon,
  iconElement 
}) => {
  return (
    <button
      className={`hero-btn hero-btn--${type}`}
      onClick={onClick}
      type="button"
    >
      {Icon && <Icon size={20} />}
      {iconElement}
      <span>{children}</span>
    </button>
  );
};