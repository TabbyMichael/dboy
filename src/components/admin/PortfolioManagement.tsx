
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioProjects } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ActionButton from './ActionButton';

const PortfolioManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Portfolio Management</h1>
        
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Portfolio Item
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects.map(project => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-48">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <Badge className="absolute top-2 right-2 bg-dboy-pink">
                  Featured
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {project.category} • {project.client}
              </p>
              <p className="text-sm line-clamp-2 text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <ActionButton type="edit" onClick={() => console.log('Edit portfolio:', project.id)} />
                <ActionButton type="delete" onClick={() => console.log('Delete portfolio:', project.id)} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioManagement;
