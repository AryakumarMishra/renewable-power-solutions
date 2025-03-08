
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Oceanview Residence",
    location: "Coastal Home Solar Installation",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1525&auto=format&fit=crop",
    description: "Complete residential solar power system installation with battery backup for this stunning coastal property.",
    tags: ["Residential", "Solar Panels", "Battery Storage"]
  },
  {
    id: 2,
    title: "City Center Office Complex",
    location: "Commercial Solar Project",
    image: "https://images.unsplash.com/photo-1611365892117-ee24be8e1185?q=80&w=1740&auto=format&fit=crop",
    description: "Large-scale solar installation for a multi-story office building, significantly reducing operating costs.",
    tags: ["Commercial", "Solar Panels", "Energy Efficiency"]
  },
  {
    id: 3,
    title: "Greenview Community Center",
    location: "Public Building Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1744&auto=format&fit=crop",
    description: "Solar panel installation with smart energy management system for this community facility.",
    tags: ["Public", "Solar Panels", "Smart Systems"]
  },
  {
    id: 4,
    title: "Sunset Farm",
    location: "Agricultural Solar Installation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop",
    description: "Extensive solar array installation to power agricultural operations and reduce running costs.",
    tags: ["Agricultural", "Solar Panels", "Off-Grid"]
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsPerView = 3;
  const maxSlides = Math.ceil(projects.length / projectsPerView);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const visibleProjects = () => {
    const start = currentSlide * projectsPerView;
    return projects.slice(start, start + projectsPerView);
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
    <section id="projects" className="section py-24 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">Our Projects</span>
          <h2 className="section-title mt-4">Featured <span className="text-gold">Renewable Energy</span> Installations</h2>
          <p className="section-subtitle text-gray-600">
            Explore some of our recent projects that demonstrate our expertise in delivering high-quality renewable energy solutions.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8 animate-on-scroll">
            <h3 className="text-2xl font-bold font-playfair">Recent Projects</h3>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full border border-gray-300 hover:border-gold text-gray-600 hover:text-gold transition-colors duration-300"
                disabled={isTransitioning}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full border border-gray-300 hover:border-gold text-gray-600 hover:text-gold transition-colors duration-300"
                disabled={isTransitioning}
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out w-full`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)] p-2 animate-on-scroll"
                  style={{ transitionDelay: `${(project.id % projectsPerView) * 100}ms` }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end">
                        <div className="p-6 text-white">
                          <h4 className="text-lg font-bold">{project.title}</h4>
                          <p className="text-sm opacity-80">{project.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === currentSlide ? 'bg-gold' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact" className="inline-block border-2 border-gold hover:bg-gold text-gold hover:text-white px-8 py-3 rounded transition-all duration-300 hover:-translate-y-1 font-medium">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
