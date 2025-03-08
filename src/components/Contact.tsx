import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ContactInfo = () => {
  return (
    <div className="bg-black p-8 rounded-lg text-white">
      <h3 className="text-2xl font-bold mb-6 font-playfair">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-2 bg-gold/20 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h4 className="font-medium text-gold mb-1">Our Location</h4>
            <p className="text-gray-300">46 Brookfield Street, Hamilton East, Hamilton 3216 
            New Zealand</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-2 bg-gold/20 rounded-full mr-4">
            <Phone className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h4 className="font-medium text-gold mb-1">Phone Number</h4>
            <p className="text-gray-300">+64 221970971</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-2 bg-gold/20 rounded-full mr-4">
            <Mail className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h4 className="font-medium text-gold mb-1">Email Address</h4>
            <p className="text-gray-300 break-words max-w-full">info@renewablepowersolutions.co.nz</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h4 className="text-lg font-medium mb-4">Business Hours</h4>
        <div className="space-y-1 text-gray-300">
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Make a POST request to your backend API endpoint
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('There was a problem submitting the form');
      }

      setFormStatus('success');
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
      });

      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset form status after a few seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      toast({
        title: "Error submitting the form",
        description: "There was an issue with the submission. Please try again.",
        variant: 'destructive', // A toast variant for errors
      });
    }
  };

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
    <section id="contact" className="section py-24" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">Contact Us</span>
          <h2 className="section-title mt-4">Ready to <span className="text-gold">Power</span> Your Future?</h2>
          <p className="section-subtitle text-gray-600">
            Contact us today to discuss your renewable energy needs and discover how we can help you transition to cleaner, more affordable power.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll order-2 lg:order-1">
            <ContactInfo />
          </div>
          
          <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: '200ms' }}>
            <div className="bg-black p-8 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-white">Get in Touch</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="solar">Solar Energy Solutions</option>
                      <option value="battery">Energy Storage Systems</option>
                      <option value="residential">Heat Pump Systems</option>
                      <option value="commercial">Residential Electrical</option>
                      <option value="maintenance">Commercial Electrical</option>
                      <option value="audit">Electrical Protection</option>
                      <option value="audit">Maintenance & Repairs</option>
                      <option value="audit">Energy Efficiency</option>
                      <option value="audit">Compliance & Safety</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 rounded-md shadow-md transition-all duration-300 hover:shadow-lg relative ${
                    formStatus === 'submitting' ? 'opacity-75' : ''
                  }`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? (
                    <span className="flex items-center justify-center">
                      Message Sent <CheckCircle className="ml-2 h-5 w-5" />
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
