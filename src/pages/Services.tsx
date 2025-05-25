import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Home, 
  Briefcase, 
  Shield, 
  PiggyBank, 
  Users, 
  Umbrella,
  Building
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';

const Services: React.FC = () => {
  const privatkunden = [
    {
      icon: Heart,
      title: "Gesundheitsabsicherung",
      description: "Gesetzliche und private Krankenversicherungen, Zusatzversicherungen und Pflegeversicherungen für optimalen Gesundheitsschutz."
    },
    {
      icon: Home,
      title: "Sach- & Rechtsschutz",
      description: "Haftpflicht-, Hausrat- und Rechtsschutzversicherungen zum Schutz Ihres Eigentums und Ihrer Rechte."
    },
    {
      icon: PiggyBank,
      title: "Zukunft & Einkommen",
      description: "Altersvorsorge, Berufsunfähigkeitsversicherungen und Einkommensschutz für finanzielle Sicherheit."
    },
    {
      icon: Shield,
      title: "Zusätzliche Leistungen",
      description: "Finanzanlagen, Energieoptimierung und spezielle Versicherungslösungen für besondere Bedürfnisse."
    }
  ];

  const businesskunden = [
    {
      icon: Building,
      title: "Unternehmensabsicherung",
      description: "Betriebshaftpflicht, Gebäude- und Inhaltsversicherungen für umfassenden Schutz Ihres Unternehmens."
    },
    {
      icon: Umbrella,
      title: "Risikomanagement",
      description: "Betriebsunterbrechung, Cyber-Versicherung und Rechtsschutz zur Absicherung vor unerwarteten Geschäftsrisiken."
    },
    {
      icon: Users,
      title: "Mitarbeitervorsorge",
      description: "Betriebliche Altersvorsorge, Gruppenunfallversicherungen und Gesundheitsleistungen für Ihre Mitarbeiter."
    },
    {
      icon: Briefcase,
      title: "Spezielle Branchenlösungen",
      description: "Maßgeschneiderte Versicherungspakete für spezifische Branchen und Unternehmensanforderungen."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Meine Leistungen</h1>
          <p className="text-xl text-gray-600">
            Umfassende Versicherungslösungen für Privat- und Geschäftskunden
          </p>
        </div>
      </section>
      
      {/* Private Clients Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Sicherheit für jede Lebenslage" 
            subtitle="Maßgeschneiderte Lösungen für Privatkunden"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privatkunden.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Clients Section */}
      <section className="section bg-gray-light">
        <div className="container-custom">
          <SectionTitle 
            title="Rundum-Schutz für Ihr Unternehmen" 
            subtitle="Spezielle Lösungen für Geschäftskunden und Selbstständige"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesskunden.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Sie wünschen eine unverbindliche Beratung?
              </h2>
              <p className="text-lg mb-8">
                Kontaktieren Sie mich für ein persönliches Gespräch. Gemeinsam finden wir die optimale Versicherungslösung für Sie.
              </p>
              <Link to="/kontakt" className="btn bg-white text-primary hover:bg-gray-100">
                Jetzt Beratung anfordern
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Beratungsgespräch" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;