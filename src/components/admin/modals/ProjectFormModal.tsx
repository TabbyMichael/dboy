import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ImageSelector from './ImageSelector';
import FormModal from './FormModal';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Partial<Project>) => void;
  isSubmitting?: boolean;
}

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

const ProjectFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: ProjectFormModalProps) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    client: '',
    status: 'new',
    deadline: new Date().toISOString().split('T')[0],
    description: '',
    priority: 'medium',
    thumbnail: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      title: '',
      client: '',
      status: 'new',
      deadline: new Date().toISOString().split('T')[0],
      description: '',
      priority: 'medium',
      thumbnail: '',
    });
  };

  return (
    <FormModal
      title="Add New Project"
      description="Create a new project by filling out the form below."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Project Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            required
          />
        </div>

        <div>
          <Label htmlFor="client">Client</Label>
          <Input
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            placeholder="Enter client name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleSelectChange('status', value)}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="pending-approval">Pending Approval</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="priority">Priority</Label>
            <Select
              value={formData.priority}
              onValueChange={(value) => handleSelectChange('priority', value)}
            >
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <ImageSelector
            label="Project Thumbnail"
            selectedImage={formData.thumbnail}
            onSelect={(url) => setFormData((prev) => ({ ...prev, thumbnail: url }))}
            type="thumbnail"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows={4}
            required
          />
        </div>
      </div>
    </FormModal>
  );
};

export default ProjectFormModal;