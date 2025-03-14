import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FormModal from './FormModal';

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (service: Partial<Service>) => void;
  isSubmitting?: boolean;
}

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
}

const ServiceFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: ServiceFormModalProps) => {
  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      price: '',
    });
  };

  return (
    <FormModal
      title="Add New Service"
      description="Create a new service by filling out the form below."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Service Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter service title"
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter service description"
            rows={4}
            required
          />
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter service price"
            required
          />
        </div>
      </div>
    </FormModal>
  );
};

export default ServiceFormModal;