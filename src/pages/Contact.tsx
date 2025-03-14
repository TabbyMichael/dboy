
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
                  <p className="text-gray-600">Nairobi, Kenya, CA</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:contact@dboygraphics.com" className="text-dboy-pink hover:underline">
                    contact@dboygraphics.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+15551234567" className="text-dboy-pink hover:underline">+254 798 378896</a>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.462334755275!2d36.88661185!3d-1.2191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15b9d18c9c7d%3A0x3b1e47589c9b6fd1!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637000000000!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
