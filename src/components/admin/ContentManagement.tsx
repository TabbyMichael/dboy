import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit, Filter, PlusCircle, Save, Trash } from 'lucide-react';
import { services, testimonials } from '@/data';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import ServiceFormModal from './modals/ServiceFormModal';

type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
}

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [servicesList, setServicesList] = useState<Service[]>(services);
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Website Content Management</h1>
      
      <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
        </TabsList>
        
        <TabsContent value="services" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Manage Services</h2>
            <Button onClick={() => setIsServiceModalOpen(true)}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Service
            </Button>
          </div>
          
          <div className="space-y-4">
            {servicesList.map((service, index) => (
              <div key={service.id} className="border rounded-md p-4 flex items-start justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="font-medium">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                  <p className="text-dboy-pink font-medium mt-1">{service.price}</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <ServiceFormModal
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            isSubmitting={isSubmitting}
            onSubmit={async (serviceData) => {
              setIsSubmitting(true);
              try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (!serviceData.title || !serviceData.description || !serviceData.price) {
                  throw new Error('All fields are required');
                }
                
                const newService: Service = {
                  id: `service-${Date.now()}`,
                  title: serviceData.title,
                  description: serviceData.description,
                  price: serviceData.price
                };
                
                setServicesList(prev => [newService, ...prev]);
                setIsServiceModalOpen(false);
                
                toast({
                  title: "Service added",
                  description: "New service has been added successfully.",
                });
              } catch (error) {
                toast({
                  title: "Error",
                  description: "Failed to add service. Please try again.",
                  variant: "destructive",
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          />
        </TabsContent>
        
        <TabsContent value="testimonials" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Manage Testimonials</h2>
            <Button>Add New Testimonial</Button>
          </div>
          
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border rounded-md p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mt-3 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          <ServiceFormModal
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            isSubmitting={isSubmitting}
            onSubmit={async (serviceData) => {
              setIsSubmitting(true);
              try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (!serviceData.title || !serviceData.description || !serviceData.price) {
                  throw new Error('All fields are required');
                }
                
                const newService: Service = {
                  id: `service-${Date.now()}`,
                  title: serviceData.title,
                  description: serviceData.description,
                  price: serviceData.price
                };
                
                setServicesList(prev => [newService, ...prev]);
                setIsServiceModalOpen(false);
                
                toast({
                  title: "Service added",
                  description: "New service has been added successfully.",
                });
              } catch (error) {
                toast({
                  title: "Error",
                  description: "Failed to add service. Please try again.",
                  variant: "destructive",
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          />
        </TabsContent>
        
        <TabsContent value="homepage" className="space-y-6">
          <h2 className="text-xl font-semibold">Edit Homepage Content</h2>
          
          <div className="border rounded-md p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Hero Section</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Headline</label>
                  <Input 
                    defaultValue="Creative solutions for bold brands" 
                    className="max-w-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subheadline</label>
                  <Input 
                    defaultValue="Award-winning graphic design services that help brands stand out in today's crowded marketplace" 
                    className="max-w-md"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">CTA Section</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">CTA Title</label>
                  <Input 
                    defaultValue="Ready to start your project?" 
                    className="max-w-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">CTA Text</label>
                  <Input 
                    defaultValue="Let's collaborate to create something amazing together. Reach out and let's discuss your vision." 
                    className="max-w-md"
                  />
                </div>
              </div>
            </div>
            
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>

          <ServiceFormModal
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            isSubmitting={isSubmitting}
            onSubmit={async (serviceData) => {
              setIsSubmitting(true);
              try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (!serviceData.title || !serviceData.description || !serviceData.price) {
                  throw new Error('All fields are required');
                }
                
                const newService: Service = {
                  id: `service-${Date.now()}`,
                  title: serviceData.title,
                  description: serviceData.description,
                  price: serviceData.price
                };
                
                setServicesList(prev => [newService, ...prev]);
                setIsServiceModalOpen(false);
                
                toast({
                  title: "Service added",
                  description: "New service has been added successfully.",
                });
              } catch (error) {
                toast({
                  title: "Error",
                  description: "Failed to add service. Please try again.",
                  variant: "destructive",
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
