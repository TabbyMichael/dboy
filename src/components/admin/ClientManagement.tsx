
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search, UserPlus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ActionButton from './ActionButton';

// Mock client data
const mockClients = [
  {
    id: 'client-1',
    name: 'Alex Morgan',
    company: 'Cosmic Cafe',
    email: 'alex@cosmiccafe.com',
    phone: '+254 712 345 678',
    activeProjects: 2,
    totalProjects: 5,
    lastContact: '2023-11-25',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'client-2',
    name: 'Sarah Johnson',
    company: 'FitLife Inc.',
    email: 'sarah@fitlife.com',
    phone: '+254 723 456 789',
    activeProjects: 1,
    totalProjects: 3,
    lastContact: '2023-11-23',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'client-3',
    name: 'Michael Chang',
    company: 'NextGen Devices',
    email: 'michael@nextgen.com',
    phone: '+254 734 567 890',
    activeProjects: 0,
    totalProjects: 2,
    lastContact: '2023-11-15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'client-4',
    name: 'Emma Rodriguez',
    company: 'Pure Harvest',
    email: 'emma@pureharvest.com',
    phone: '+254 745 678 901',
    activeProjects: 0,
    totalProjects: 1,
    lastContact: '2023-11-10',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'client-5',
    name: 'Daniel Lee',
    company: 'Summit Outdoors',
    email: 'daniel@summit.com',
    phone: '+254 756 789 012',
    activeProjects: 1,
    totalProjects: 1,
    lastContact: '2023-11-28',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

const ClientManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredClients = mockClients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Client Management</h1>
        
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Client
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Search clients..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map(client => (
              <TableRow key={client.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={client.avatar} 
                      alt={client.name} 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{client.name}</span>
                  </div>
                </TableCell>
                <TableCell>{client.company}</TableCell>
                <TableCell>
                  <div>
                    <div>{client.email}</div>
                    <div className="text-sm text-gray-500">{client.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="font-medium mr-1">{client.activeProjects}</span> active / 
                    <span className="ml-1">{client.totalProjects}</span> total
                  </div>
                </TableCell>
                <TableCell>{formatDate(client.lastContact)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <ActionButton 
                      type="view" 
                      onClick={() => console.log('View client:', client.id)} 
                    />
                    <ActionButton 
                      type="edit" 
                      onClick={() => console.log('Edit client:', client.id)} 
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClientManagement;
