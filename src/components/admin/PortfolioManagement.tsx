
import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioProjects } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ActionButton from './ActionButton';
import { useToast } from '@/hooks/use-toast';
import PortfolioFormModal from './modals/PortfolioFormModal';

const PortfolioManagement = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState(portfolioProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleAddPortfolio = async (portfolioData: Partial<{
    id: string;
    title: string;
    category: string;
    client: string;
    image: string;
    featured: boolean;
    description: string;
    tags: string[];
  }>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newPortfolio: {
        id: string;
        title: string;
        category: string;
        client: string;
        image: string;
        featured: boolean;
        description: string;
        tags: string[];
      } = {
        id: `portfolio-${Date.now()}`,
        title: portfolioData.title || '',
        category: portfolioData.category || '',
        client: portfolioData.client || '',
        image: portfolioData.image || '',
        featured: portfolioData.featured || false,
        description: portfolioData.description || '',
        tags: portfolioData.tags || []
      };
      
      setProjects(prev => [newPortfolio, ...prev]);
      setIsModalOpen(false);
      
      toast({
        title: "Portfolio item added",
        description: "New portfolio item has been added successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add portfolio item. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Portfolio Management</h1>
        
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Portfolio Item
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
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
      
      {/* Portfolio Form Modal */}
      <PortfolioFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPortfolio}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default PortfolioManagement;
