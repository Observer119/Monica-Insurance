import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="VVV Monica Logo" 
            className="h-[0.5cm] w-[0.5cm]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Startseite
          </NavLink>
          <NavLink 
            to="/fuer-wen" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Für Wen
          </NavLink>
          <NavLink 
            to="/arbeitsweise" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Arbeitsweise
          </NavLink>
          <NavLink 
            to="/Privatkunden" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Privatkunden
          </NavLink>
          <NavLink 
            to="/Businesskunden" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Businesskunden
          </NavLink>
          <NavLink 
            to="/kontakt" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Kontakt
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-dark focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Startseite
            </NavLink>
            <NavLink 
              to="/fuer-wen" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Für Wen
            </NavLink>
            <NavLink 
              to="/arbeitsweise" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Arbeitsweise
            </NavLink>
            <NavLink 
              to="/privatkunden" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Privatkunden
            </NavLink>
            <NavLink 
              to="/Businesskunden" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Businesskunden
            </NavLink>
            <NavLink 
              to="/kontakt" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
