import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Gavel,
  Building2,
  Zap,
  Server,
  Users,
  Shield,
  HeartHandshake
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, items }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all">
    <div className="text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <Shield className="text-primary flex-shrink-0 mr-2" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Businesskunden: React.FC = () => {
  const services = [
    {
      icon: <Gavel size={32} />,
      title: "Haftung & Recht",
      description: "Für rechtliche Sicherheit bei betrieblichen Tätigkeiten, Produkthaftung und Streitfällen.",
      items: [
        "Betriebshaftpflichtversicherung",
        "Firmenrechtsschutzversicherung",
        "Produkthaftpflichtversicherung"
      ]
    },
    {
      icon: <Building2 size={32} />,
      title: "Eigentum & Technik",
      description: "Absicherung Ihrer Betriebsausstattung, Technik, Maschinen und Firmengebäude.",
      items: [
        "Inhaltsversicherung",
        "Gebäudeversicherung",
        "Elektronikversicherung",
        "Maschinenversicherung"
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "Betriebsunterbrechung",
      description: "Wenn der Betrieb stillsteht oder die IT versagt – finanzieller Schutz für Notfälle.",
      items: [
        "Ertragsausfall-/Betriebsunterbrechungsversicherung",
        "Notfallplanung",
        "Risikoanalyse"
      ]
    },
    {
      icon: <Server size={32} />,
      title: "IT-Sicherheit",
      description: "Wenn der Betrieb stillsteht oder die IT versagt – finanzieller Schutz für Notfälle.",
      items: [
        "Cyberversicherung",
        "Datenschutzversicherung",
        "IT-Risikomanagement"
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Mitarbeiterbindung",
      description: "Attraktive Zusatzleistungen für Ihre Mitarbeitenden – steuerlich gefördert und sozial wirksam.",
      items: [
        "Betriebliche Krankenversicherung (bKV)",
        "Gruppenunfallversicherung",
        "Mitarbeiter-Benefits"
      ]
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Vorsorge",
      description: "Attraktive Zusatzleistungen für Ihre Mitarbeitenden – steuerlich gefördert und sozial wirksam.",
      items: [
        "Betriebliche Altersvorsorge (bAV)",
        "Geschäftsführer-Versorgung",
        "Key-Person-Absicherung"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Schutz für Ihr Unternehmen und Ihre Mitarbeiter</h1>
          <p className="text-xl text-gray-600 mb-6">
            Passgenaue Versicherungslösungen für Ihr Unternehmen – abgestimmt auf Ihre Branche, Mitarbeiterzahl und spezifischen Risiken.
          </p>
          <p className="text-xl text-gray-600">
            Sind Ihre wichtigsten Unternehmenswerte wirklich umfassend abgesichert? Als Unternehmer tragen Sie große Verantwortung – für Ihr Geschäft, Ihre Mitarbeiter und Ihre Zukunft. Mit unserer unabhängigen Beratung helfen wir Ihnen, betriebliche Risiken frühzeitig zu erkennen und optimal abzusichern.
          </p>
          <div className="mt-8">
            <Link 
              to="/businesskunden/check" 
              className="btn-primary"
            >
              Jetzt ersten Unternehmens-Check durchführen
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Unsere Leistungen für Ihren Rundum-Schutz" 
            subtitle="Maßgeschneiderte Versicherungslösungen für Ihr Unternehmen"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Check CTA */}
      <section className="section bg-gray-light">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <SectionTitle 
              title="Ihr erster Überblick: Unternehmens-Check" 
              subtitle="Wie gut ist Ihr Unternehmen aktuell abgesichert?"
            />
            <p className="text-gray-600 mb-8">
              Mit unserem kostenlosen ersten Unternehmens-Check erhalten Sie in wenigen Minuten einen Überblick über mögliche Absicherungslücken und Chancen – einfach, schnell und unverbindlich.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              (Hinweis: Der Check ersetzt keine vollständige Risikoanalyse.)
            </p>
            <Link 
              to="/businesskunden/check" 
              className="btn-primary"
            >
              Jetzt ersten Check durchführen
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Maßgeschneiderte Versicherungskonzepte für Ihr Unternehmen"
              />
              <p className="text-gray-600 mb-6">
                Jedes Unternehmen ist einzigartig – genau wie die Risiken, die es trägt. Wir entwickeln für Sie ein individuelles, transparentes und unabhängiges Versicherungskonzept, maßgeschneidert auf Ihre Branche, Unternehmensgröße und Bedürfnisse.
              </p>
              <Link 
                to="/kontakt" 
                className="btn-primary"
              >
                Jetzt unverbindlich beraten lassen
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Geschäftsberatung" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Businesskunden;