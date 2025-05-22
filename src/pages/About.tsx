import React from 'react';
import { CheckCircle, Award, Clock } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-bold mb-4">Monica Meier – Ihre unabhängige Versicherungsberaterin in München </h1>
            <p className="text-xl text-gray-600 mb-6">
            Erfahren Sie, warum Monica Meier Menschen statt Verträge berät.
            </p>
          <p className="text-xl text-gray-600 mb-6">
            Persönlich, unabhängig, verständlich.
          </p>
          <p className="text-xl text-gray-600">
          Beratung für Privatpersonen & Unternehmen.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src="/.jpg" 
                alt="Monica Meier" 
                className="w-[35mm] h-[45mm] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left Side - About Monica Meier */}
            <div className="space-y-6">

              {/* Über mich Section - Softest Green */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-3">Über mich – Monica Meier</h2>
                <p className="text-lg mb-4">Unabhängige Versicherungsberaterin mit Herz.</p>
                <p className="text-lg font-medium mb-4">
                  Vertrauen. Vorsorge. Verlässlichkeit. – Das ist mein persönliches VVV-Versprechen an Sie.
                </p>
                <p className="text-lg">Ich berate Menschen, nicht Verträge.</p>
              </div>

              {/* Was ich anbiete Section - Light Green */}
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Was ich anbiete:</h3>
                <p>Ich bringe Struktur, Klarheit und Verlässlichkeit in Ihre Absicherung – ohne Fachsprache, ohne Verkaufsdruck.</p>
              </div>

              {/* Was ich nicht mache Section - Medium Green */}
              <div className="bg-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Was ich nicht mache:</h3>
                <p>Unnötige Versicherungen verkaufen oder Standardlösungen überstülpen.</p>
              </div>

              {/* Warum ich diesen Weg gehe Section - Soft Green */}
              <div className="bg-green-300 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Warum ich diesen Weg gehe?</h3>
                <p className="mb-3">Viele verlieren bei Versicherungen den Überblick – zu viele Begriffe, zu wenig Orientierung.</p>
                <p className="mb-3">
                  Ich helfe dabei, Ordnung reinzubringen: Was brauchen Sie wirklich? Was ist überflüssig? Was schützt Sie langfristig?
                </p>
                <p>Ich arbeite direkt mit meinen Kundinnen und Kunden – persönlich oder digital.<br /> In München, Starnberg und ganz Deutschland.</p>
              </div>

            </div>

            {/* Right Side - What Clients Can Expect */}
            <div className="space-y-8">

              {/* Was Sie erwarten dürfen Section with Background */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Was Sie erwarten dürfen:</h3>
                <p className="mb-4">Mit langjähriger Erfahrung und fundiertem Fachwissen sorge ich dafür, dass Sie optimal abgesichert sind – ohne unnötige Kosten, aber mit genau dem Schutz, den Sie wirklich brauchen.</p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Unabhängigkeit:</strong> Ich bin an keine Versicherungsgesellschaft gebunden.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Transparenz:</strong> Sie wissen jederzeit, worum es geht.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Verlässlichkeit:</strong> Ich bleibe Ihre Ansprechpartnerin, egal wie sich Ihr Leben verändert.</p>
                  </div>
                </div>

                <p className="mt-4">Ich analysiere Ihre aktuelle Absicherung und zeige Ihnen, wo echte Lücken sind – damit Sie sich weder über- noch unterversichern.</p>
              </div>

              {/* Call to Action Section */}
              <div className="bg-gray-light p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Wenn Sie Klarheit und einen ehrlichen Blick auf Ihre Absicherung suchen – lassen Sie uns sprechen.
                </h3>
                <Link to="/kontakt" className="btn-primary inline-block">
                  Jetzt Beratung anfordern
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;