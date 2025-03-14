
import { CalendarClock, Flag, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ActionButton from './ActionButton';

interface Project {
  id: string;
  title: string;
  client: string;
  status: 'new' | 'in-progress' | 'pending-approval' | 'completed';
  deadline: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  thumbnail: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'in-progress':
        return <Badge className="bg-amber-500">In Progress</Badge>;
      case 'pending-approval':
        return <Badge className="bg-purple-500">Pending Approval</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="outline" className="border-red-500 text-red-500">High Priority</Badge>;
      case 'medium':
        return <Badge variant="outline" className="border-amber-500 text-amber-500">Medium Priority</Badge>;
      case 'low':
        return <Badge variant="outline" className="border-green-500 text-green-500">Low Priority</Badge>;
      default:
        return null;
    }
  };

  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/50 text-white rounded-full">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Project</DropdownMenuItem>
              <DropdownMenuItem>Move to Completed</DropdownMenuItem>
              <DropdownMenuItem>Download Files</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Delete Project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex justify-between items-center">
            {getStatusBadge(project.status)}
            {getPriorityBadge(project.priority)}
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
        <p className="text-sm text-gray-500">Client: {project.client}</p>
        <p className="text-sm mt-2 line-clamp-2 text-gray-600">{project.description}</p>
        
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <CalendarClock className="h-4 w-4 mr-1" />
          <span>Due: {formatDate(project.deadline)}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <ActionButton type="view" onClick={() => console.log('View project:', project.id)} />
        <ActionButton type="edit" onClick={() => console.log('Edit project:', project.id)} />
        <ActionButton type="delete" onClick={() => console.log('Delete project:', project.id)} />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
