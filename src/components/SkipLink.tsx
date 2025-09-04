import React from 'react';

const SkipLink = () => {
  return (
    <a 
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:z-50 transition-all"
      tabIndex={0}
    >
      Перейти к основному содержанию
    </a>
  );
};

export default SkipLink;