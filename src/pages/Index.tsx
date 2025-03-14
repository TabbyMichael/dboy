
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { portfolioProjects, services, testimonials, clients } from '@/data';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const featuredProjects = portfolioProjects.filter(project => project.featured).slice(0, 4);
  const featuredServices = services.slice(0, 3);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-dboy-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-dboy-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            className="absolute min-w-full min-h-full object-cover opacity-30"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-graphic-designer-working-with-tablet-186-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dboy-black via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Creative solutions for<br />
              <span className="text-dboy-pink">bold</span> brands
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Award-winning graphic design services that help brands stand out in today's crowded marketplace
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-dboy-pink hover:bg-dboy-pink/90 text-white px-6 py-6"
                size="lg"
              >
                <Link to="/contact">Hire Me</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-6 py-6"
                size="lg"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <ArrowDown size={32} />
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section className="py-24 bg-dboy-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my most impactful projects that showcase my skills and expertise in graphic design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                client={project.client}
                featured={project.featured}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline" 
              className="border-dboy-black text-dboy-black hover:bg-dboy-black hover:text-white"
            >
              <Link to="/portfolio" className="inline-flex items-center">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map(service => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline" 
              className="border-dboy-black text-dboy-black hover:bg-dboy-black hover:text-white"
            >
              <Link to="/services" className="inline-flex items-center">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'}`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${index === activeTestimonial ? 'bg-dboy-pink' : 'bg-gray-600'}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Clients & Collaborations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proud to have worked with these amazing brands and organizations.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img src={client.logo} alt={client.name} className="h-12 md:h-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-dboy-pink to-dboy-purple text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. Reach out and let's discuss your vision.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-dboy-pink hover:bg-white/90"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
