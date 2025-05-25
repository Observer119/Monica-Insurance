import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link = "/kontakt" }) => {
  return (
    <div className="card h-full flex flex-col hover:border-primary hover:border transition-all">
      <div className="mb-4 text-primary-light p-3 inline-flex rounded-full bg-primary bg-opacity-10">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link to={link} className="text-primary font-medium mt-4 inline-block hover:underline">
        Mehr erfahren
      </Link>
    </div>
  );
};

export default ServiceCard