import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Umbrella } from 'lucide-react';

const Header = () => {
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
        <Link to="/" className="flex items-center space-x-2">
          <Umbrella size={32} className="text-primary" />
          <span className="font-bold text-xl">Monica Meier</span>
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
            to="/ueber-mich" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Über Mich
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
            to="/services/privatkunden" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Privatkunden
          </NavLink>
          <NavLink 
            to="/services/private/check" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Private Check
          </NavLink>
          <NavLink 
            to="/services/Businesskunden" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Businesskunden
          </NavLink>
          <NavLink 
            to="/services/business/check" 
            className={({ isActive }) => 
              `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            Business Check
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
              to="/ueber-mich" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Über Mich
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
              to="/services/privatkunden" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Privatkunden
            </NavLink>
            <NavLink 
              to="/services/private/check" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Private Check
            </NavLink>
            <NavLink 
              to="/services/Businesskunden" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Businesskunden
            </NavLink>
            <NavLink 
              to="/services/business/check" 
              className={({ isActive }) => 
                `block py-2 font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Business Check
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
