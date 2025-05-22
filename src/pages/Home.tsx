import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Star,
  Shield,
  Users,
  MessageCircle,
  Briefcase
} from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import SectionTitle from '../components/ui/SectionTitle';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Versicherungsberatung" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-bold mb-4 leading-tight">
              Ihre Ansprechpartnerin für Versicherung, Finanzen, Investment & Energie.
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Vertrauensvoll. Vorsorglich. Verlässlich.
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Klar. Verständlich. An Ihrer Seite.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Jetzt Beratung anfordern
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section bg-gray-light">
        <div className="container-custom">
          <SectionTitle 
            title="Mein VVV-Versprechen an Sie" 
            subtitle="Vertrauen. Vorsorge. Verlässlichkeit."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="text-primary mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vertrauensvolle Beratung</h3>
              <p className="text-gray-600">Echte Nähe statt anonymer Hotline. Persönlich, ehrlich und verständlich - auf Augenhöhe.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="text-primary mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vorsorgliche Planung</h3>
              <p className="text-gray-600">So individuell wie Sie: Ihre Zukunft im Blick - vorausschauend, angepasst und mit Weitblick geplant.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="text-primary mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verlässlicher Service</h3>
              <p className="text-gray-600">Kompetent, klar und herzlich: Ich begleite Sie durch den gesamten Prozess - vom Erstgespräch bis zur laufenden Betreuung.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/ueber-mich" className="btn-primary">
              Mehr über mich erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Für wen ist meine Versicherung gemacht?" 
            subtitle="Maßgeschneiderte Lösungen für jeden Bedarf"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <Users className="text-primary mr-4" size={32} />
                <h3 className="text-xl font-semibold">Privatkunden - Singles, Paare & Familien</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Individuelle Absicherung und Vorsorge für jede Lebensphase - verständlich und auf Ihre Ziele abgestimmt.
              </p>
              <Link to="/private" className="btn-primary">
                Erfahren für Privatkunden
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <Briefcase className="text-primary mr-4" size={32} />
                <h3 className="text-xl font-semibold">Selbständige & Unternehmen</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Strategische Versicherungslösungen für Unternehmer und Betriebe - mit Fokus auf Absicherung, Mitarbeiterbindung und Zukunftssicherheit.
              </p>
              <Link to="/business" className="btn-primary">
                Erfahren für Unternehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section bg-gray-light">
        <div className="container-custom">
          <SectionTitle 
            title="Warum mit mir?" 
            subtitle="Ihre Vorteile auf einen Blick"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Shield}
              title="Unabhängige Beratung"
              description="Unabhängige Beratung statt Produktverkauf."
            />
            <FeatureCard 
              icon={MessageCircle}
              title="Persönlich & Digital"
              description="Persönlich vor Ort & digital in ganz Deutschland."
            />
            <FeatureCard 
              icon={Target}
              title="Langfristige Lösungen"
              description="Spezialisiert auf langfristige Lösungen mit echtem Mehrwert."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Bereit für eine persönliche Beratung?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
          <Link to="/kontakt" className="btn bg-white text-primary hover:bg-gray-100">
            Jetzt Beratung anfordern
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;