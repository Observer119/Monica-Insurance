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
                      <a href="tel:01711046897" className="text-gray-600 hover:text-primary transition-colors">
                        0171 / 1046897
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">E-Mail</h4>
                      <a href="mailto:info@monica-meier.de" className="text-gray-600 hover:text-primary transition-colors">
                        info@monica-meier.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Standort</h4>
                      <p className="text-gray-600">
                        Günzburg und Umgebung<br />
                        Beratung deutschlandweit verfügbar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Erreichbarkeit</h4>
                      <p className="text-gray-600">
                        Montag - Freitag: 9:00 - 18:00 Uhr<br />
                        Oder nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21386.834583809293!2d10.260775199999999!3d48.45472505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799f9a0a1b16a3d%3A0x41f6bb7a5df5f686!2zR8O8bnpidXJn!5e0!3m2!1sde!2sde!4v1624434146583!5m2!1sde!2sde" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy"
                  title="Standort Günzburg"
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
              href="tel:01711046897" 
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              <Phone size={20} className="mr-2" /> Anrufen
            </a>
            <a 
              href="https://wa.me/491711046897" 
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