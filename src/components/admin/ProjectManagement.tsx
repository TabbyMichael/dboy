import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter, SortDesc } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import ProjectFormModal from './modals/ProjectFormModal';

// Define the project type to match the one in ProjectCard.tsx
type Project = {
  id: string;
  title: string;
  client: string;
  status: 'new' | 'in-progress' | 'pending-approval' | 'completed';
  deadline: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  thumbnail: string;
};

// Mock project data with correctly typed status values
const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Cosmic Cafe Branding Refresh',
    client: 'Cosmic Cafe',
    status: 'in-progress',
    deadline: '2023-12-15',
    description: 'Refreshing the brand identity for Cosmic Cafe with a modern touch while preserving their space theme.',
    priority: 'high',
    thumbnail: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'proj-2',
    title: 'FitLife Mobile App UI Update',
    client: 'FitLife Inc.',
    status: 'in-progress',
    deadline: '2023-12-05',
    description: 'Updating the user interface for their fitness tracking app to improve user engagement and accessibility.',
    priority: 'medium',
    thumbnail: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'proj-3',
    title: 'Summit Outdoors Logo Design',
    client: 'Summit Outdoors',
    status: 'pending-approval',
    deadline: '2023-11-30',
    description: 'Creating a bold, adventurous logo for an outdoor expedition company.',
    priority: 'low',
    thumbnail: 'https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'proj-4',
    title: 'Pure Harvest Packaging Design',
    client: 'Pure Harvest',
    status: 'completed',
    deadline: '2023-11-15',
    description: 'Designing eco-friendly packaging for organic food products with a focus on sustainability.',
    priority: 'medium',
    thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'proj-5',
    title: 'NextGen Product Video',
    client: 'NextGen Devices',
    status: 'new',
    deadline: '2023-12-20',
    description: 'Creating an engaging product showcase video for their new tech product line.',
    priority: 'high',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  }
];

type ProjectStatus = 'all' | 'new' | 'in-progress' | 'pending-approval' | 'completed';

const ProjectManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<ProjectStatus>('all');
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeTab);
    
  const handleAddProject = async (projectData: Partial<Project>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newProject: Project = {
        id: `proj-${Date.now()}`,
        ...projectData as Omit<Project, 'id'>
      };
      
      setProjects(prev => [newProject, ...prev]);
      setIsModalOpen(false);
      
      toast({
        title: "Project created",
        description: "New project has been added successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Project Management</h1>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <SortDesc className="h-4 w-4 mr-2" />
            Sort
          </Button>
          <Button size="sm" onClick={() => setIsModalOpen(true)}>
            <PlusCircle className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as ProjectStatus)}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="pending-approval">Pending Approval</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <Alert>
              <AlertDescription>
                No projects found with the selected status.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>
      </Tabs>

      {/* Project Form Modal */}
      <ProjectFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProject}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default ProjectManagement;
