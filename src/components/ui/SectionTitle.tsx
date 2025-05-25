import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
      <div 
        className={`h-1 w-20 bg-primary mt-4 rounded ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionTitle;