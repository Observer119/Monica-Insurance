import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Standort (Updated to Munich & Germany-wide) */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="VVV Monica Logo" 
                className="h-[0.5cm] w-[0.5cm] brightness-200"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Ihre persönliche Ansprechpartnerin für maßgeschneiderte Versicherungslösungen in München und ganz Deutschland.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Kontakt (Updated to include Mobile) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
            <li className="flex items-center space-x-2">
          <Phone size={18} />
      <div>
      <span className="text-white font-semibold">Kontakt:</span>
      </div>
      </li>
      <li className="flex items-center space-x-2">
    <Phone size={18} />
    <div>
      <a href="tel:+491711144557" className="text-gray-300 hover:text-primary transition-colors">
        Mobil: +49 171 1144557
      </a>
      <span className="text-gray-400 text-sm block">(auch WhatsApp)</span>
    </div>
  </li>
  <li className="flex items-center space-x-2">
    <Mail size={18} />
    <a href="mailto:m.meier@vorsorgewerk24.de" className="text-gray-300 hover:text-primary transition-colors">
      m.meier@vorsorgewerk24.de
    </a>
  </li>
</ul>
          </div>

          {/* Services (Added Privatkunden) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/privatkunden" className="text-gray-300 hover:text-primary transition-colors">
                  Privatkunden
                </Link>
              </li>
              <li>
                <Link to="/private/check" className="text-gray-300 hover:text-primary transition-colors">
                  Private Check
                </Link>
              </li>
              <li>
                <Link to="/Businesskunden" className="text-gray-300 hover:text-primary transition-colors">
        Businesskunden
            </Link>
        </li>
        <li>
          <Link to="/business/check" className="text-gray-300 hover:text-primary transition-colors">
                  Businesscheck
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-300 hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-300 hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Monica Meier Versicherungsberatung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
