
import { useState } from 'react';
import { PlusCircle, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import InvoiceFormModal from './modals/InvoiceFormModal';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Mock invoice data
const mockInvoices = [
  {
    id: 'INV-001',
    client: 'Cosmic Cafe',
    project: 'Branding Package',
    amount: 320000,
    issueDate: '2023-11-01',
    dueDate: '2023-11-15',
    status: 'paid',
  },
  {
    id: 'INV-002',
    client: 'FitLife Inc.',
    project: 'Mobile App UI Design',
    amount: 390000,
    issueDate: '2023-11-05',
    dueDate: '2023-11-20',
    status: 'paid',
  },
  {
    id: 'INV-003',
    client: 'NextGen Devices',
    project: 'Product Video',
    amount: 195000,
    issueDate: '2023-11-10',
    dueDate: '2023-11-25',
    status: 'pending',
  },
  {
    id: 'INV-004',
    client: 'Summit Outdoors',
    project: 'Logo Design',
    amount: 105000,
    issueDate: '2023-11-15',
    dueDate: '2023-11-30',
    status: 'pending',
  },
  {
    id: 'INV-005',
    client: 'Pure Harvest',
    project: 'Packaging Design',
    amount: 78000,
    issueDate: '2023-10-20',
    dueDate: '2023-11-05',
    status: 'overdue',
  },
];

const InvoiceManagement = () => {
  const { toast } = useToast();
  const [invoices, setInvoices] = useState(mockInvoices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleAddInvoice = async (invoiceData: Partial<{
    id: string;
    client: string;
    project: string;
    amount: number;
    issueDate: string;
    dueDate: string;
    status: string;
  }>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newInvoice: {
        id: string;
        client: string;
        project: string;
        amount: number;
        issueDate: string;
        dueDate: string;
        status: string;
      } = {
        id: `INV-${String(invoices.length + 1).padStart(3, '0')}`,
        client: invoiceData.client || '',
        project: invoiceData.project || '',
        amount: invoiceData.amount || 0,
        issueDate: invoiceData.issueDate || new Date().toISOString().split('T')[0],
        dueDate: invoiceData.dueDate || '',
        status: invoiceData.status || 'pending'
      };
      
      setInvoices(prev => [newInvoice, ...prev]);
      setIsModalOpen(false);
      
      toast({
        title: "Invoice created",
        description: "New invoice has been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create invoice. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-500">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-500">Overdue</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Invoice Management</h1>
        
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={() => setIsModalOpen(true)}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create New Invoice
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Client & Project</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map(invoice => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>
                  <div className="font-medium">{invoice.client}</div>
                  <div className="text-sm text-gray-500">{invoice.project}</div>
                </TableCell>
                <TableCell>Ksh {invoice.amount.toLocaleString()}</TableCell>
                <TableCell>{formatDate(invoice.issueDate)}</TableCell>
                <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8"
                    onClick={() => console.log('Download invoice:', invoice.id)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Invoice Form Modal */}
      <InvoiceFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddInvoice}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default InvoiceManagement;
