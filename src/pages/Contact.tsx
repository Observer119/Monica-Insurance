import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-600">
            Ich freue mich auf Ihre Nachricht. Sprechen wir über Ihre individuelle Absicherung.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle title="Schreiben Sie mir" />
              <ContactForm />
            </div>
            
            {/* Contact Info & Map */}
            <div>
              <SectionTitle title="Kontaktinformationen" />
              
              <div className="bg-gray-light p-8 rounded-lg mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Telefon</h4>
                      <a href="tel:+498920175965" className="text-gray-600 hover:text-primary transition-colors">
                        +49 89 20175965
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">E-Mail</h4>
                      <a href="mailto:m.meier@vorsorgewerk24.de" className="text-gray-600 hover:text-primary transition-colors">
                        m.meier@vorsorgewerk24.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Standort</h4>
                      <p className="text-gray-600">
                        München und Umgebung<br />
                        Beratung deutschlandweit verfügbar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Erreichbarkeit</h4>
                      <p className="text-gray-600">
                        Montag - Freitag: 9:00 - 20:00 Uhr<br />
                        Samstag: 9:00 - 15:00 Uhr<br />
                        Oder nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
               <iframe 
                src="https://www.google.com/maps/embed/v1/place?    key=YOUR_API_KEY&q=München,Germany"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                title="Standort München"
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Direct Contact CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Lieber direkt sprechen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Für eine persönliche Beratung rufen Sie mich gerne an oder senden Sie eine WhatsApp-Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+498920175965" 
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              <Phone size={20} className="mr-2" /> Anrufen
            </a>
            <a 
              href="https://wa.me/+491711144557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-[#128C7E]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;