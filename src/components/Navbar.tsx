
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dboy-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-dboy-white font-heading text-2xl font-bold">
            DBOY<span className="text-dboy-pink">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-dboy-white hover:text-dboy-pink transition-colors">Home</Link>
            <Link to="/portfolio" className="text-dboy-white hover:text-dboy-pink transition-colors">Portfolio</Link>
            <Link to="/about" className="text-dboy-white hover:text-dboy-pink transition-colors">About</Link>
            <Link to="/services" className="text-dboy-white hover:text-dboy-pink transition-colors">Services</Link>
            <Link to="/contact" className="text-dboy-white hover:text-dboy-pink transition-colors">Contact</Link>
            <Link to="/admin">
              <Button className="bg-dboy-pink hover:bg-dboy-pink/80 text-white">Admin</Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-5 pb-4 absolute top-full left-0 w-full bg-dboy-black border-t border-dboy-gray/20 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-dboy-white hover:text-dboy-pink transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/portfolio" className="text-dboy-white hover:text-dboy-pink transition-colors py-2" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link to="/about" className="text-dboy-white hover:text-dboy-pink transition-colors py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="text-dboy-white hover:text-dboy-pink transition-colors py-2" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/contact" className="text-dboy-white hover:text-dboy-pink transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                <Button className="bg-dboy-pink hover:bg-dboy-pink/80 text-white w-full">Admin</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
