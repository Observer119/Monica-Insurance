import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {  
  Heart,  
  Home,  
  PiggyBank,  
  Lightbulb, 
  Shield 
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  color: string;
  bgColor: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, items, color, bgColor }) => (
  <div className={`rounded-lg shadow-lg p-8 hover:shadow-xl transition-all ${bgColor} border-l-4 ${color}`}>
    <div className={`${color.replace('border', 'text')} mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <Shield className={`${color.replace('border', 'text')} flex-shrink-0 mr-2`} size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Privatkunden = () => {
  const services = [
    {
      icon: <Heart size={32} />,
      title: "Gesundheit",
      description: "Optimaler Gesundheitsschutz - gesetzlich oder privat, ganz nach Ihrem Bedarf.",
      items: [
        "Gesetzliche Krankenversicherung (inkl. Optimierung)",
        "Private Vollkrankenversicherung",
        "Zusatzversicherungen (z. B. Zahn, Krankenhaus, ambulant)"
      ],
      color: "border-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Home size={32} />,
      title: "Besitz & Recht",
      description: "Schützen Sie, was Ihnen gehört - umfassend und zuverlässig.",
      items: [
        "Privathaftpflichtversicherung",
        "Hausratversicherung",
        "Wohngebäudeversicherung",
        "Rechtsschutzversicherung",
        "Kfz-Versicherung",
        "Tierhalterhaftpflicht",
        "Tierkrankenversicherung"
      ],
      color: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
     icon: <PiggyBank size={32} />,
      title: "Zukunft & Einkommen",
      description: "Vorsorge für Ihre finanzielle Sicherheit - heute und morgen.",
      items: [
        "Private Rentenversicherung",
        "Berufsunfähigkeitsversicherung",
        "Unfallversicherung"
      ],
      color: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
    icon: <Lightbulb size={32} />,
      title: "Ergänzende Services",
      description: "Auch über Versicherungen hinaus bestens beraten.",
      items: [
        "Vermittlung von Finanzanlagen",
        "Strom- & Gastarifoptimierung",
        "Telekommunikationslösungen"
      ],
      color: "border-amber-500",
      bgColor: "bg-amber-50"
    }
  ];

 return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Sicherheit für jede Lebenslage</h1>
          <p className="text-xl text-gray-600">
            Individuelle, unabhängige Beratung für Ihre Absicherung, Vorsorge und finanzielle Zukunft.
          </p>
        </div>
      </section>

    {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
                color={service.color}
                bgColor={service.bgColor}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Ich finde mit Ihnen gemeinsam die passenden Lösungen für Ihre Absicherung - unabhängig, verständlich und persönlich.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Wie gut sind Sie wirklich abgesichert?
          </h2>
          <p className="text-lg mb-8">
            Finden Sie es jetzt heraus – in nur 3 Minuten, kostenfrei & unverbindlich!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link  
              to="selbst-check"  
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Jetzt Schnellcheck starten
            </Link>
            <Link  
              to="/kontakt"  
              className="btn bg-white/10 text-white hover:bg-white/20"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      {/* Outlet for Child Page */}
      <Outlet />
    </>
  );
};

export default Privatkunden;