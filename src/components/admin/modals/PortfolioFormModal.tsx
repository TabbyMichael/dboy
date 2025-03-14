import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import ImageSelector from './ImageSelector';
import FormModal from './FormModal';

interface PortfolioFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (portfolio: Partial<Portfolio>) => void;
  isSubmitting?: boolean;
}

interface Portfolio {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  featured: boolean;
  description: string;
  tags: string[];
}

const PortfolioFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: PortfolioFormModalProps) => {
  const [formData, setFormData] = useState<Partial<Portfolio>>({
    title: '',
    category: '',
    client: '',
    image: '',
    featured: false,
    description: '',
    tags: [],
  });

  const [tagsInput, setTagsInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, featured: checked }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagsInput.trim() && !formData.tags?.includes(tagsInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagsInput.trim()],
      }));
      setTagsInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tag) || [],
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      title: '',
      category: '',
      client: '',
      image: '',
      featured: false,
      description: '',
      tags: [],
    });
    setTagsInput('');
  };

  return (
    <FormModal
      title="Add New Portfolio Item"
      description="Create a new portfolio item by filling out the form below."
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleSelectChange('category', value)}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Branding">Branding</SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                <SelectItem value="Web Design">Web Design</SelectItem>
                <SelectItem value="Motion Graphics">Motion Graphics</SelectItem>
                <SelectItem value="Logo Design">Logo Design</SelectItem>
                <SelectItem value="Print Design">Print Design</SelectItem>
              </SelectContent>
            </Select>
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
        </div>

        <div>
          <ImageSelector
            label="Portfolio Image"
            selectedImage={formData.image}
            onSelect={(url) => setFormData((prev) => ({ ...prev, image: url }))}
            type="thumbnail"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="featured"
            checked={formData.featured}
            onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor="featured" className="cursor-pointer">Featured project</Label>
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

        <div>
          <Label htmlFor="tags">Tags</Label>
          <div className="flex space-x-2">
            <Input
              id="tags"
              value={tagsInput}
              onChange={handleTagsChange}
              placeholder="Enter a tag"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              Add
            </button>
          </div>
          {formData.tags && formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-sm"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </FormModal>
  );
};

export default PortfolioFormModal;