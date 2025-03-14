
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Save, LockIcon, UserCog, ChevronRight } from 'lucide-react';

const SettingsPanel = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  return (
    <div className="space-y-6 pb-10">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6 mt-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-dboy-pink flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>
            <div>
              <h2 className="text-xl font-semibold">Dboy Graphics Admin</h2>
              <p className="text-gray-500">admin@dboygraphics.com</p>
            </div>
            <Button variant="outline">Change Photo</Button>
          </div>
          
          <div className="space-y-4 max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Dboy" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Admin" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="admin@dboygraphics.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+254 712 345 678" />
            </div>
            
            <div className="pt-4">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 mt-6">
          <div className="space-y-4 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Password & Security</h2>
            
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            
            <div className="pt-4">
              <Button>
                <LockIcon className="h-4 w-4 mr-2" />
                Update Password
              </Button>
            </div>
            
            <div className="pt-6 pb-2">
              <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Enhance your account security</h4>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline">
                  Setup <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive email updates about your account activity</p>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications} 
                />
              </div>
            </div>
            
            <div className="border-t pt-6 space-y-3">
              <h3 className="font-medium mb-2">Email me when:</h3>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="newProjectSwitch" className="flex-1">A new project is created</Label>
                <Switch id="newProjectSwitch" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="clientMessageSwitch" className="flex-1">A client sends a message</Label>
                <Switch id="clientMessageSwitch" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="projectCompleteSwitch" className="flex-1">A project is marked as complete</Label>
                <Switch id="projectCompleteSwitch" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="invoiceSwitch" className="flex-1">An invoice payment is received</Label>
                <Switch id="invoiceSwitch" defaultChecked />
              </div>
            </div>
            
            <div className="pt-4">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-gray-500">Switch between light and dark theme</p>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode} 
                />
              </div>
            </div>
            
            <div className="space-y-3 border-t pt-6">
              <h3 className="font-medium">Danger Zone</h3>
              <div className="border border-red-200 rounded-md p-4 bg-red-50">
                <h4 className="font-medium text-red-600 mb-2">Reset Dashboard</h4>
                <p className="text-sm text-gray-600 mb-4">This will reset all dashboard settings to default values.</p>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Reset All Settings</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will reset all your dashboard settings to their default values. 
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                        Yes, Reset Settings
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPanel;
