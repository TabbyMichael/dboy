
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="bg-white text-dboy-black min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Let's discuss your project. Reach out and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">Los Angeles, CA</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:contact@dboygraphics.com" className="text-dboy-pink hover:underline">
                    contact@dboygraphics.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+15551234567" className="text-dboy-pink hover:underline">(555) 123-4567</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-dboy-pink transition-colors">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-dboy-pink transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-dboy-pink transition-colors">
                    Behance
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-dboy-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map Placeholder</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
