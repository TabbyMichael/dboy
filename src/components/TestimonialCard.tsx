
import { Quote } from 'lucide-react';

export interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, position, company, image }: TestimonialProps) => {
  return (
    <div className="bg-dboy-black p-8 rounded-lg shadow-lg relative">
      <div className="absolute -top-3 left-8 text-dboy-pink">
        <Quote size={32} />
      </div>
      <div className="pt-6">
        <p className="text-gray-300 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="text-white font-medium">{name}</h4>
            <p className="text-gray-400 text-sm">{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
