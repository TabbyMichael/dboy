
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

const PortfolioFilter = ({ categories, onFilterChange, activeFilter }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={activeFilter === 'all' ? 'default' : 'outline'}
        className={`rounded-full ${
          activeFilter === 'all' 
            ? 'bg-dboy-pink hover:bg-dboy-pink/90 text-white' 
            : 'border-dboy-gray/20 hover:bg-dboy-pink/10 hover:text-dboy-pink'
        }`}
        onClick={() => onFilterChange('all')}
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? 'default' : 'outline'}
          className={`rounded-full ${
            activeFilter === category 
              ? 'bg-dboy-pink hover:bg-dboy-pink/90 text-white' 
              : 'border-dboy-gray/20 hover:bg-dboy-pink/10 hover:text-dboy-pink'
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
