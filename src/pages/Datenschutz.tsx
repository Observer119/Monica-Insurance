import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Datenschutz: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <SectionTitle title="Datenschutzerklärung" />
        
        <div className="prose max-w-none">
          <h3>1. Verantwortlicher im Sinne der DSGVO</h3>
          <p>
            Für die Verarbeitung personenbezogener Daten im Rahmen dieser Website ist verantwortlich:<br />
            Monica Meier<br />
            Starnberger Str. 24<br />
            82131 Gauting<br />
            Tel: +49 89 20175965<br />
            E-Mail: m.meier@vorsorgewerk24.de
          </p>
          
          <p>
            Ich bin als selbstständige Vermittlerin tätig und arbeite in Kooperation mit den folgenden Partnerunternehmen:
          </p>
          <ul>
            <li>A&K Vorsorgespezialisten UG, Sonnenhang 10A, 51381 Leverkusen – im Bereich Versicherungsvermittlung</li>
            <li>4Motion GmbH, Rosa-Luxemburg-Str. 19/21, 04103 Leipzig – im Bereich Energievermittlung (Strom und Gas)</li>
          </ul>
          
          <p>
            Die Vermittlung erfolgt im Namen und auf Rechnung des jeweiligen Kooperationspartners.<br />
            Makler- bzw. Vermittlungsverträge kommen ausschließlich zwischen dem Kunden und dem jeweiligen Partnerunternehmen zustande.
          </p>

          <h3>2. Zwecke der Datenverarbeitung & Rechtsgrundlagen</h3>
          <h4>Betrieb dieser Website</h4>
          <ul>
            <li>Zweck: Technische Bereitstellung, Sicherheit, Optimierung</li>
            <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
          </ul>

          <h4>Kontaktaufnahme über das Formular oder per E-Mail</h4>
          <ul>
            <li>Zweck: Vertragsanbahnung und Weiterleitung an die jeweiligen Kooperationspartner</li>
            <li>Rechtsgrundlagen:</li>
            <ul>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über die Webseite)</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</li>
            </ul>
          </ul>

          <h4>Verarbeitung durch A&K Vorsorgespezialisten im Rahmen des Maklermandats</h4>
          <ul>
            <li>Zweck: Beratung, Vermittlung, Betreuung von Versicherungs- bzw. Energieverträgen</li>
            <li>Verantwortlicher: A&K Vorsorgespezialisten UG bzw. 4Motion GmbH</li>
            <li>Rechtsgrundlagen:</li>
            <ul>
              <li>Art. 6 Abs. 1 lit. b DSGVO (Maklervertrag)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, insbesondere bei Gesundheitsdaten)</li>
            </ul>
          </ul>

          <h3>3. Kategorien verarbeiteter Daten</h3>
          <ul>
            <li>Name, E-Mail-Adresse, Telefonnummer</li>
            <li>Inhaltsdaten aus Anfragen oder Formularen</li>
            <li>Gegebenenfalls Angaben zum Versicherungsbedarf</li>
            <li>Technische Daten (z. B. IP-Adresse, Datum/Uhrzeit, Browser)</li>
          </ul>

          <h3>4. Speicherdauer</h3>
          <ul>
            <li>Leaddaten auf dieser Website: maximal 6 Monate nach letzter Aktivität oder Einwilligung.</li>
            <li>Vertragsdaten bei A&K Vorsorgespezialisten: während der Mandatsdauer und gemäß gesetzlichen Aufbewahrungsfristen.</li>
            <ul>
              <li>6 Jahre (z. B. Korrespondenz)</li>
              <li>10 Jahre (z. B. Abrechnungsdaten, steuerlich relevante Unterlagen)</li>
            </ul>
          </ul>

          <h3>5. Betroffenenrechte</h3>
          <p>Sie haben das Recht auf:</p>
          <ul>
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO), soweit keine gesetzlichen Pflichten entgegenstehen</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>

          <p>
            Für die Verarbeitung über meine Website wenden Sie sich bitte an:<br />
            Monica Meier, E-Mail: m.meier@vorsorgewerk24.de
          </p>
          
          <p>
            Für Anliegen zur Datenverarbeitung im Rahmen der Vermittlung wenden Sie sich bitte direkt an den jeweiligen Kooperationspartner.
          </p>

          <h3>6. Beschwerderecht bei der Aufsichtsbehörde</h3>
          <p>
            Sie haben das Recht, sich bei Ihrer Landesdatenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass Ihre personenbezogenen Daten unrechtmäßig verarbeitet werden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;