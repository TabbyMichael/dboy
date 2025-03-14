
import { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock client messages
const mockClients = [
  {
    id: 'client-1',
    name: 'Alex Morgan',
    company: 'Cosmic Cafe',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    lastMessage: 'I love the initial concepts! Can we discuss a few tweaks?',
    time: '10:30 AM',
    unread: true,
  },
  {
    id: 'client-2',
    name: 'Sarah Johnson',
    company: 'FitLife Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    lastMessage: 'When can we expect the revised UI mockups?',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 'client-3',
    name: 'Michael Chang',
    company: 'NextGen Devices',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    lastMessage: 'The video looks amazing! Our team is very impressed.',
    time: 'Nov 24',
    unread: false,
  },
  {
    id: 'client-4',
    name: 'Emma Rodriguez',
    company: 'Pure Harvest',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    lastMessage: 'Thank you for the packaging designs. They look perfect!',
    time: 'Nov 20',
    unread: false,
  },
];

// Mock conversation for the first client
const mockConversation = [
  {
    id: 'msg-1',
    sender: 'client',
    text: 'Hi there! I wanted to check in on the branding project for Cosmic Cafe.',
    time: '10:15 AM',
  },
  {
    id: 'msg-2',
    sender: 'me',
    text: 'Hi Alex! I've just emailed you the initial concepts for the logo and brand identity. Let me know what you think!',
    time: '10:20 AM',
  },
  {
    id: 'msg-3',
    sender: 'client',
    text: 'I received them, thank you! I love the initial concepts! Can we discuss a few tweaks?',
    time: '10:30 AM',
  },
];

const MessagingSystem = () => {
  const [selectedClient, setSelectedClient] = useState(mockClients[0]);
  const [message, setMessage] = useState('');
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Messaging & Client Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Client List */}
        <div className="border rounded-md overflow-hidden">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search conversations..."
                className="pl-10"
              />
            </div>
          </div>
          
          <ScrollArea className="h-[calc(100vh-260px)]">
            {mockClients.map(client => (
              <div
                key={client.id}
                className={`p-3 flex items-center space-x-3 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedClient.id === client.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => setSelectedClient(client)}
              >
                <div className="relative">
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  {client.unread && (
                    <span className="absolute -top-1 -right-1 bg-dboy-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      !
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium truncate">{client.name}</h3>
                    <span className="text-xs text-gray-500">{client.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{client.company}</p>
                  <p className="text-sm truncate">{client.lastMessage}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        
        {/* Chat Area */}
        <div className="border rounded-md overflow-hidden col-span-2 flex flex-col">
          {/* Chat Header */}
          <div className="p-3 border-b flex items-center space-x-3 bg-gray-50">
            <img
              src={selectedClient.avatar}
              alt={selectedClient.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{selectedClient.name}</h3>
              <p className="text-sm text-gray-500">{selectedClient.company}</p>
            </div>
          </div>
          
          {/* Messages */}
          <ScrollArea className="flex-1 p-4 h-[calc(100vh-330px)]">
            <div className="space-y-4">
              {mockConversation.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === 'me'
                        ? 'bg-dboy-pink text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-xs block mt-1 ${
                        msg.sender === 'me' ? 'text-pink-100' : 'text-gray-500'
                      } text-right`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Message Input */}
          <div className="p-3 border-t flex items-center space-x-2">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingSystem;
