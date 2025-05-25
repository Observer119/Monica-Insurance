import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  step, 
  title, 
  description, 
  icon: Icon 
}) => {
  return (
    <div className="flex items-start space-x-4 md:space-x-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
          <Icon size={24} aria-hidden="true" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">
          <span className="sr-only">Schritt {step}: </span>
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;