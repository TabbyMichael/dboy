
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  client?: string;
  featured?: boolean;
}

const ProjectCard = ({ id, title, category, image, client, featured = false }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/portfolio/${id}`}
      className={`group block relative overflow-hidden rounded-lg ${featured ? 'col-span-1 md:col-span-2 row-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-t from-dboy-black/90 via-dboy-black/50 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
        <div className="transform transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-dboy-pink text-sm font-medium mb-2">{category}</p>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-1">{title}</h3>
          {client && <p className="text-gray-300 text-sm mb-4">Client: {client}</p>}
          <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mr-2">View Project</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
      {featured && (
        <div className="absolute top-4 right-4 bg-dboy-pink text-white text-xs px-2 py-1 rounded">
          Featured
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
