import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ImageSelector from './ImageSelector';
import FormModal from './FormModal';

interface ClientFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (client: Partial<Client>) => void;
  isSubmitting?: boolean;
}

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  activeProjects?: number;
  totalProjects?: number;
  lastContact?: string;
  avatar: string;
}

const ClientFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: ClientFormModalProps) => {
  const [formData, setFormData] = useState<Partial<Client>>({
    name: '',
    company: '',
    email: '',
    phone: '',
    avatar: '',
    lastContact: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      avatar: '',
      lastContact: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <FormModal
      title="Add New Client"
      description="Create a new client by filling out the form below."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Client Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter client name"
            required
          />
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="lastContact">Last Contact Date</Label>
          <Input
            id="lastContact"
            name="lastContact"
            type="date"
            value={formData.lastContact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <ImageSelector
            label="Client Avatar"
            selectedImage={formData.avatar}
            onSelect={(url) => setFormData((prev) => ({ ...prev, avatar: url }))}
            type="avatar"
          />
        </div>
      </div>
    </FormModal>
  );
};

export default ClientFormModal;