import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-md py-2' // Lighten on scroll
          : 'bg-transparent py-4' // Dark background when not scrolled
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img
                src="/images/logo-enlarged-removebg.png"
                alt="Renewable Power Solutions Logo"
                className="h-20 md:h-14 mr-3 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition-colors duration-300 sliding-underline ${
                  location.pathname === link.href
                    ? 'text-gold'
                    : scrolled
                    ? 'text-gray-100'
                    : 'text-gray-300'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${scrolled ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass-dark absolute w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white font-medium hover:text-gold transition-colors duration-300"
            >
              {link.text}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-4 bg-gold text-center text-white rounded font-medium shadow-md"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
