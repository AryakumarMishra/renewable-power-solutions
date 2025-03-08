
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('opacity-100');
              el.classList.remove('opacity-0', 'translate-y-10');
            }, i * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="section py-24" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">About Us</span>
            <h2 className="section-title mt-4">Leading the Way in <span className="text-gold">Renewable</span> Energy Solutions</h2>
            
            <p className="text-gray-300 mb-6">
              Renewable Power Solutions was founded with a clear vision: to make clean, sustainable energy accessible to everyone. Our team of certified professionals brings together decades of experience in the electrical and renewable energy sectors.
            </p>
            
            <p className="text-gray-300 mb-6">
              We pride ourselves on delivering tailored solutions that not only reduce your carbon footprint but also provide significant cost savings. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the industry.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Certified Professionals</h4>
                  <p className="text-gray-300">Our team consists of fully certified and experienced renewable energy specialists.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Quality Materials</h4>
                  <p className="text-gray-300">We use only the highest quality, efficient, and durable components in all our installations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Custom Solutions</h4>
                  <p className="text-gray-300">Every project is tailored to meet the specific needs and circumstances of our clients.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-gold/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gold/10 rounded-full z-0"></div>
            
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470&auto=format&fit=crop" 
                alt="Solar panel installation" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-8 right-8 bg-gray-950/80 text-white rounded-lg p-4 shadow-lg z-20">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-gold font-bold text-2xl">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-gold font-bold text-2xl">500+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-gold font-bold text-2xl">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>


          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll text-center border border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gold/10 rounded-full">
                <Award className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair text-white">Our Mission</h3>
            <p className="text-gray-400">To accelerate the transition to sustainable energy through innovative, high-quality solutions that benefit our customers and the planet.</p>
          </div>

          <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll text-center border border-gray-700" style={{ transitionDelay: '100ms' }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gold/10 rounded-full">
                <Users className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair text-white">Our Team</h3>
            <p className="text-gray-400">A dedicated group of renewable energy experts committed to delivering exceptional service and sustainable solutions.</p>
          </div>

          <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll text-center border border-gray-700" style={{ transitionDelay: '200ms' }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gold/10 rounded-full">
                <Award className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair text-white">Our Values</h3>
            <p className="text-gray-400">Integrity, innovation, excellence, and sustainability guide every aspect of our operations and customer interactions.</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
