
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dboy-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-dboy-white font-heading text-3xl font-bold mb-4 inline-block">
              DBOY<span className="text-dboy-pink">.</span>
            </Link>
            <p className="text-gray-400 mt-4 mb-6">
              Creating stunning visuals and exceptional design experiences for brands that want to stand out.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dboy-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dboy-pink transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@dboygraphics.com" className="text-gray-400 hover:text-dboy-pink transition-colors">
                <Mail size={20} />
              </a>
              <Link to="/contact" className="text-gray-400 hover:text-dboy-pink transition-colors">
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-heading text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-dboy-pink transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-dboy-pink transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-dboy-pink transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-dboy-pink transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-dboy-pink transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-heading text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#branding" className="text-gray-400 hover:text-dboy-pink transition-colors">Branding</Link></li>
              <li><Link to="/services#ui-ux" className="text-gray-400 hover:text-dboy-pink transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services#logo" className="text-gray-400 hover:text-dboy-pink transition-colors">Logo Design</Link></li>
              <li><Link to="/services#motion" className="text-gray-400 hover:text-dboy-pink transition-colors">Motion Graphics</Link></li>
              <li><Link to="/services#print" className="text-gray-400 hover:text-dboy-pink transition-colors">Print Design</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-heading text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Nairobi, Kenya , KE</p>
            <p className="text-gray-400 mb-2">contact@dboygraphics.com</p>
            <p className="text-gray-400 mb-4">+254 798 378896</p>
            <Link to="/contact" className="inline-block px-4 py-2 bg-dboy-pink hover:bg-dboy-pink/80 text-white rounded transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="border-t border-dboy-gray/20 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Dboy Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
