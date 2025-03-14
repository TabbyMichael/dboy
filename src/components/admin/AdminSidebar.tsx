
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  ImageIcon, 
  Receipt, 
  MessageCircle, 
  FileText, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

type AdminSectionType = 'dashboard' | 'projects' | 'clients' | 'portfolio' | 'invoices' | 'messages' | 'content' | 'settings';

interface AdminSidebarProps {
  activeSection: AdminSectionType;
  setActiveSection: (section: AdminSectionType) => void;
  isOpen: boolean;
}

const AdminSidebar = ({ activeSection, setActiveSection, isOpen }: AdminSidebarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: ClipboardList },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'portfolio', label: 'Portfolio', icon: ImageIcon },
    { id: 'invoices', label: 'Invoices', icon: Receipt },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'content', label: 'Website Content', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside 
      className={cn(
        "bg-dboy-black text-white transition-all duration-300 flex flex-col",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <Link to="/" className={cn("font-bold text-white", !isOpen && "hidden")}>
          DBOY ADMIN
        </Link>
        {!isOpen && (
          <span className="mx-auto text-2xl font-bold">D</span>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id as AdminSectionType)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200",
                  activeSection === item.id 
                    ? "bg-dboy-pink text-white" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                <item.icon size={20} />
                {isOpen && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <Link 
          to="/" 
          className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <LogOut size={20} />
          {isOpen && <span>Back to Site</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
