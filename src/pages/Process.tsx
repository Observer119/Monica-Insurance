import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Search, Lightbulb, CheckSquare, Shield, RefreshCw } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProcessStep from '../components/ui/ProcessStep';

const Process: React.FC = () => {
  const processSteps = [
    {
      icon: Target,
      title: "Ziele & Wünsche",
      description: "Sie erzählen – ich höre zu. In einem persönlichen Gespräch klären wir Ihre Situation, Ihre Ziele und was Ihnen wirklich wichtig ist."
    },
    {
      icon: Search,
      title: "Analyse",
      description: "Ich prüfe Ihre aktuelle Versicherung – lückenlos und verständlich. Wo zahlen Sie zu viel? Wo fehlt Schutz?"
    },
    {
      icon: Lightbulb,
      title: "Expertenbewertung",
      description: "Mit Erfahrung und Marktüberblick entwickle ich konkrete Empfehlungen – auf den Punkt, nachvollziehbar und unabhängig."
    },
    {
      icon: CheckSquare,
      title: "Kundenentscheidung",
      description: "Sie entscheiden – ganz in Ruhe. Ich berate transparent und ohne Verkaufsdruck."
    },
    {
      icon: Shield,
      title: "Umsetzung",
      description: "Ich erledige den Papierkram. Sie bekommen Klarheit, Struktur – und eine zuverlässige Begleitung."
    },
    {
      icon: RefreshCw,
      title: "Check-up",
      description: "Ihr Leben verändert sich – Ihr Schutz bleibt passend. Dafür gibt's regelmäßige Check-ups."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Ihr Weg zur optimalen Absicherung</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Als Ihre persönliche Versicherungsberaterin begleite ich Sie durch einen strukturierten, transparenten Prozess, der auf Ihre individuellen Bedürfnisse zugeschnitten ist. Persönlich, digital und deutschlandweit erreichbar.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Step-by-Step zu Ihrer Absicherung" 
            subtitle="Ein transparenter Prozess, der Sie in den Mittelpunkt stellt"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns unverbindlich sprechen – online, telefonisch oder persönlich.
          </p>
          <Link to="/kontakt" className="btn bg-white text-primary hover:bg-gray-100">
            Jetzt Termin vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
};

export default Process;