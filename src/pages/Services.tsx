
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, testimonials } from '@/data';

const ServicesPage = () => {
  const location = useLocation();
  const servicesRef = useRef<{[key: string]: HTMLDivElement | null}>({});

  // Handle scroll to section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      // Remove the # from the hash
      const id = location.hash.substring(1);
      const element = servicesRef.current[id];
      
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // Account for fixed header
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-white text-dboy-black min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Professional graphic design services tailored to elevate your brand and achieve your business goals.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
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
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-dboy-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-dboy-pink text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Discovery</h3>
              <p className="text-gray-700">
                Understanding your brand, goals, target audience, and project requirements through in-depth consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-dboy-pink text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Strategy</h3>
              <p className="text-gray-700">
                Developing a creative plan and approach that aligns with your objectives and resonates with your audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-dboy-pink text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Creation</h3>
              <p className="text-gray-700">
                Bringing ideas to life through creative execution, with multiple concepts and iterations as needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-dboy-pink text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Refinement</h3>
              <p className="text-gray-700">
                Polishing the selected concept based on your feedback until we achieve the perfect final product.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Services in Detail</h2>
          
          {services.map(service => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                id={service.id} 
                className="mb-16 scroll-mt-32"
                ref={el => servicesRef.current[service.id] = el}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 md:order-1`}>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <p className="mb-4">
                      <span className="font-semibold">Starting at:</span>{' '}
                      <span className="text-dboy-pink font-bold">{service.price}</span>
                    </p>
                    <div className="mt-6">
                      <a 
                        href="/contact" 
                        className="inline-block px-6 py-3 bg-dboy-pink text-white font-medium rounded hover:bg-dboy-pink/90 transition-colors"
                      >
                        Request This Service
                      </a>
                    </div>
                  </div>
                  <div className={`bg-dboy-black/5 p-12 rounded-lg order-1 md:order-2 flex items-center justify-center`}>
                    <div className="text-dboy-pink">
                      <IconComponent size={32} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. A logo design might take 2-3 weeks, while a 
                complete branding package could take 4-8 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">What is your revision policy?</h3>
              <p className="text-gray-700">
                Most projects include 2-3 rounds of revisions to ensure your complete satisfaction. Additional revisions 
                can be arranged at an hourly rate if needed.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Do you offer rush services?</h3>
              <p className="text-gray-700">
                Yes, rush services are available for an additional fee, depending on current workload and project complexity. 
                Please contact me to discuss your specific deadline requirements.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">How do payments work?</h3>
              <p className="text-gray-700">
                Typically, I require a 50% deposit to secure your project in my schedule, with the remaining balance due 
                upon project completion. For larger projects, we can arrange a payment schedule with multiple milestones.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Do you work with clients remotely?</h3>
              <p className="text-gray-700">
                Absolutely! I work with clients worldwide. We can communicate via email, phone, video calls, and project 
                management tools to ensure smooth collaboration regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dboy-pink to-dboy-purple text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next design project and create something that truly stands out.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-dboy-pink font-medium rounded-md hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
