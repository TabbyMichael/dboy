import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FormModal from './FormModal';

interface InvoiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (invoice: Partial<Invoice>) => void;
  isSubmitting?: boolean;
}

interface Invoice {
  id: string;
  client: string;
  project: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
}

const InvoiceFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: InvoiceFormModalProps) => {
  const [formData, setFormData] = useState<Partial<Invoice>>({
    client: '',
    project: '',
    amount: 0,
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: name === 'amount' ? parseFloat(value) || 0 : value 
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      client: '',
      project: '',
      amount: 0,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'pending',
    });
  };

  return (
    <FormModal
      title="Create New Invoice"
      description="Create a new invoice by filling out the form below."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <div className="space-y-4">
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

        <div>
          <Label htmlFor="project">Project</Label>
          <Input
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Enter project name"
            required
          />
        </div>

        <div>
          <Label htmlFor="amount">Amount (KSh)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            value={formData.amount?.toString()}
            onChange={handleChange}
            placeholder="Enter invoice amount"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="issueDate">Issue Date</Label>
            <Input
              id="issueDate"
              name="issueDate"
              type="date"
              value={formData.issueDate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              name="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </FormModal>
  );
};

export default InvoiceFormModal;