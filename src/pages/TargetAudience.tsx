import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const TargetAudience: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Für wen ist meine Versicherung gemacht?</h1>
          <p className="text-xl text-gray-600">
            Maßgeschneiderte Versicherungslösungen für Privat- und Geschäftskunden
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Private Clients */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Users className="text-primary mr-4" size={32} />
                <h2 className="text-2xl font-semibold">Privatkunden - Singles, Paare & Familien</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Individuelle Absicherung und Vorsorge für jede Lebensphase - verständlich und auf Ihre Ziele abgestimmt.
              </p>
              <Link 
                to="/services/private" 
                className="btn-primary inline-flex items-center"
              >
                Mehr erfahren für Privatkunden
              </Link>
            </div>

            {/* Business Clients */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Briefcase className="text-primary mr-4" size={32} />
                <h2 className="text-2xl font-semibold">Selbständige & Unternehmen</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Strategische Versicherungslösungen für Unternehmer und Betriebe - mit Fokus auf Absicherung, Mitarbeiterbindung und Zukunftssicherheit.
              </p>
              <Link 
                to="/services/business" 
                className="btn-primary inline-flex items-center"
              >
                Mehr erfahren für Unternehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TargetAudience;