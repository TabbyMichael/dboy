
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
}

const ServiceCard = ({ id, title, description, icon: Icon, price }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="service-card bg-dboy-black p-6 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="mb-4 text-dboy-pink">
          <Icon size={32} />
        </div>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {price && (
          <p className="text-dboy-pink font-medium mb-4">Starting at {price}</p>
        )}
        <Link 
          to={`/services#${id}`} 
          className="inline-flex items-center text-white hover:text-dboy-pink transition-colors"
        >
          Learn more 
          <ArrowRight 
            size={16} 
            className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          />
        </Link>
      </div>
      <div className={`service-overlay absolute inset-0 bg-gradient-to-br from-dboy-pink/20 to-dboy-purple/10 opacity-0 transition-opacity duration-300 rounded-lg`}></div>
    </div>
  );
};

export default ServiceCard;
