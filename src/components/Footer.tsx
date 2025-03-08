import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-950/80 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="mb-6">
              <img 
                src="/images/logo-enlarged-removebg.png" 
                alt="Renewable Power Solutions Logo" 
                className="h-16"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Providing premium renewable energy solutions to homes and businesses, helping you transition to a cleaner, more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(`#${item}`);
                    }}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 sliding-underline inline-block"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[ 
                "Solar Energy Solutions",
                "Energy Storage Systems",
                "Heat Pump Systems",
                "Residential Electrical",
                "Commercial Electrical",
                "Electrical Protection",
                "Maintenance & Repairs",
                "Energy Efficiency",
                "Compliance & Safety",
                "EV Charging Solutions",
                "Ventilation Systems",
                "Security Cameras",
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 sliding-underline inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">46 Brookfield Street, Hamilton East, Hamilton 3216 New Zealand</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+64 221970971</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@renewablepowersolutions.co.nz</span>
              </li>
            </ul>
            
            {/* <div className="mt-6">
              <h5 className="font-medium mb-3">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-none text-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold/50 flex-grow"
                />
                <button className="bg-gold hover:bg-gold-dark px-3 py-2 rounded-r-md transition-colors duration-300">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Renewable Power Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
