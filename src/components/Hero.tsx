
import React, { useEffect, useRef } from 'react';
import { Sun, Zap, Leaf } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    const services = document.getElementById('services');
    if (services) {
      const offset = 80; // Height of your fixed navbar
      const elementPosition = services.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="relative" ref={heroRef}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1548778052-311f4bc2b501?q=80&w=2048&auto=format&fit=crop')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>
      </div>

      <div className="relative z-20 min-h-[110vh] flex flex-col justify-center items-center px-4 md:px-8 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block mb-4 animate-on-scroll">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 border border-gold/20 backdrop-blur-sm text-sm font-medium">
              <Sun size={16} className="mr-2" /> Powering a greener future
            </span>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll">
            <span className="block">Sustainable Energy</span>
            <span className="block text-gold mt-2">For Your Home & Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed animate-on-scroll">
            Renewable Power Solutions provides premium solar and electrical services designed to reduce your energy costs while contributing to a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-on-scroll">
            <button 
              onClick={scrollToServices}
              className="px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-medium"
            >
              Our Services
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white hover:border-gold text-white hover:text-gold rounded-md transition-all duration-300 hover:-translate-y-1 font-medium"
            >
              Get a Quote
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-0 right-0 flex justify-center animate-on-scroll">
          <div className="flex space-x-16 md:space-x-4 px-6 py-4 rounded-xl glass animate-fade-in">
            <div className="text-center">
              <div className="mb-2 text-gold flex justify-center">
                <Sun className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium">Clean Energy</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-gold flex justify-center">
                <Zap className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium">Cost Efficient</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-gold flex justify-center">
                <Leaf className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium">Eco-friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
