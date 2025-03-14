
import { useState } from 'react';
import { Toaster } from 'sonner';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardOverview from '@/components/admin/DashboardOverview';
import ProjectManagement from '@/components/admin/ProjectManagement';
import ClientManagement from '@/components/admin/ClientManagement';
import PortfolioManagement from '@/components/admin/PortfolioManagement';
import InvoiceManagement from '@/components/admin/InvoiceManagement';
import MessagingSystem from '@/components/admin/MessagingSystem';
import ContentManagement from '@/components/admin/ContentManagement';
import SettingsPanel from '@/components/admin/SettingsPanel';

type AdminSection = 'dashboard' | 'projects' | 'clients' | 'portfolio' | 'invoices' | 'messages' | 'content' | 'settings';

const Admin = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'projects':
        return <ProjectManagement />;
      case 'clients':
        return <ClientManagement />;
      case 'portfolio':
        return <PortfolioManagement />;
      case 'invoices':
        return <InvoiceManagement />;
      case 'messages':
        return <MessagingSystem />;
      case 'content':
        return <ContentManagement />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Toaster position="top-right" />
      
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isOpen={isSidebarOpen}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {renderActiveSection()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
