import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Impressum: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <SectionTitle title="Impressum" />
        
        <div className="prose max-w-none">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Monica Meier<br />
            Starnberger Str. 24<br />
            82131 Gauting
          </p>
          
          <h3>Kontakt</h3>
          <p>
            Telefon: +49 89 20175965<br />
            E-Mail: m.meier@vorsorgewerk24.de
          </p>
          
          <h3>Berufsrechtliche Angaben</h3>
          <p>
            Selbstständige Vermittlerin<br />
            Kooperation mit:<br />
            - A&K Vorsorgespezialisten UG (Versicherungsvermittlung)<br />
            - 4Motion GmbH (Energievermittlung)
          </p>
          
          <h3>Haftungshinweis</h3>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
          
          <h3>EU-Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          
          <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;