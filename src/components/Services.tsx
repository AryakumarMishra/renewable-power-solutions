import React, { useEffect, useRef } from 'react';
import { Sun, Battery, Home, Lightbulb, Shield, LucideIcon, ArrowRight, Zap, Thermometer, Factory, CloudLightning, Wrench, Cpu, Fan, Camera } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="bg-black p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-800 animate-on-scroll relative overflow-hidden group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-gold/10 rounded-full transition-all duration-300 group-hover:scale-150"></div>
      <div className="relative z-10">
        <div className="p-3 bg-gold/10 rounded-lg inline-block mb-4">
          <Icon className="h-6 w-6 text-gold" />
        </div>
        <h3 className="text-xl font-bold font-playfair mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href="#contact" className="inline-flex items-center text-gold group-hover:underline font-medium">
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const Services = () => {
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
    <section id="services" className="section py-24 bg-black" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">Our Services</span>
          <h2 className="section-title mt-4 text-white">Comprehensive <span className="text-gold">Electrical & Solar</span> Solutions</h2>
          <p className="section-subtitle text-gray-400">
            Renewable Power Solutions offers a complete range of electrical and renewable energy services for residential and commercial properties, helping you transition to cleaner, more efficient power.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Solar Services */}
          <ServiceCard 
            icon={Sun} 
            title="Solar Energy Solutions" 
            description="Custom solar panel systems for residential and commercial properties, maximizing energy production and reducing carbon footprint. Includes installation, maintenance, and system design."
            delay={0}
          />
          <ServiceCard 
            icon={Battery} 
            title="Energy Storage Systems" 
            description="Advanced battery storage solutions that store excess solar energy for use during outages or peak pricing periods, providing energy independence and backup power."
            delay={100}
          />
          
          {/* Heat Pump Services */}
          <ServiceCard 
            icon={Thermometer} 
            title="Heat Pump Systems" 
            description="Energy-efficient heat pump installation and maintenance for heating and cooling, significantly reducing energy consumption while providing year-round comfort."
            delay={200}
          />
          
          {/* Electrical Services */}
          <ServiceCard 
            icon={Home} 
            title="Residential Electrical" 
            description="Complete electrical services for homes including wiring, renovations, rewiring projects, and energy efficiency solutions with a focus on safety and reliability."
            delay={300}
          />
          <ServiceCard 
            icon={Factory} 
            title="Commercial Electrical" 
            description="Comprehensive electrical solutions for businesses and industrial properties, including power systems, lighting, energy management, and safety compliance."
            delay={400}
          />
          <ServiceCard 
            icon={CloudLightning} 
            title="Electrical Protection" 
            description="Protection systems including surge protection, lightning arresters, and safety equipment to safeguard your property, appliances and electronics from electrical hazards."
            delay={500}
          />
          
          {/* Maintenance & Support */}
          <ServiceCard 
            icon={Wrench} 
            title="Maintenance & Repairs" 
            description="Regular maintenance, emergency repairs, and troubleshooting for all electrical systems and renewable energy installations, available 24/7 for your peace of mind."
            delay={600}
          />
          <ServiceCard 
            icon={Lightbulb} 
            title="Energy Efficiency" 
            description="Comprehensive energy audits and solutions to optimize your energy usage, reduce utility bills, and improve the sustainability of your home or business."
            delay={700}
          />
          <ServiceCard 
            icon={Shield} 
            title="Compliance & Safety" 
            description="Thorough electrical safety inspections, compliance checks, and certification for residential and commercial properties to ensure your systems meet all regulations."
            delay={800}
          />
          
          {/* New Services */}
          <ServiceCard 
            icon={Cpu} 
            title="EV Charging Solutions" 
            description="Professional Electric Vehicle charging solutions for residential and commercial properties, providing comprehensive and accessible options to support sustainable transportation, making electric vehicle charging convenient and reliable."
            delay={600}
          />
          <ServiceCard 
            icon={Fan} 
            title="Ventilation Systems" 
            description="High-efficiency ventilation solutions that improve indoor air quality, reduce humidity, and create healthier living and working environments for your property."
            delay={700}
          />
          <ServiceCard 
            icon={Camera} 
            title="Security Cameras" 
            description="State-of-the-art security camera systems with professional installation, monitoring options, and integration with your existing electrical infrastructure."
            delay={800}
          />
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact" className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-medium">
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
