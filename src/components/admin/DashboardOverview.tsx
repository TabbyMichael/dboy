
import { Activity, CheckCheck, Clock, DollarSign, Users, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  LineChart, 
  Line 
} from 'recharts';

const revenueData = [
  { month: 'Jan', amount: 150000 },
  { month: 'Feb', amount: 180000 },
  { month: 'Mar', amount: 130000 },
  { month: 'Apr', amount: 210000 },
  { month: 'May', amount: 240000 },
  { month: 'Jun', amount: 190000 },
];

const projectStats = [
  { month: 'Jan', completed: 4, ongoing: 2 },
  { month: 'Feb', completed: 3, ongoing: 4 },
  { month: 'Mar', completed: 5, ongoing: 3 },
  { month: 'Apr', completed: 2, ongoing: 5 },
  { month: 'May', completed: 6, ongoing: 4 },
  { month: 'Jun', completed: 3, ongoing: 7 },
];

const recentActivity = [
  { id: 1, type: 'message', content: 'New message from Sarah Johnson', time: '10 minutes ago' },
  { id: 2, type: 'project', content: 'Project "Tech Product Showcase" marked as complete', time: '1 hour ago' },
  { id: 3, type: 'payment', content: 'Payment of Ksh 320,000 received from Cosmic Cafe', time: '3 hours ago' },
  { id: 4, type: 'project', content: 'New project request from Pure Harvest', time: '5 hours ago' },
  { id: 5, type: 'client', content: 'New client signup: Summit Outdoors', time: '1 day ago' },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ongoing Projects</p>
                <h3 className="text-2xl font-bold mt-1">7</h3>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 16% from last month
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Projects</p>
                <h3 className="text-2xl font-bold mt-1">23</h3>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 8% from last month
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Clients</p>
                <h3 className="text-2xl font-bold mt-1">42</h3>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 12% from last month
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                <h3 className="text-2xl font-bold mt-1">Ksh 240K</h3>
                <p className="text-xs text-red-600 flex items-center mt-1">
                  <ArrowDown className="h-3 w-3 mr-1" /> 5% from last month
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the past 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`Ksh ${value.toLocaleString()}`, 'Revenue']} />
                <Legend />
                <Bar dataKey="amount" name="Revenue (Ksh)" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Completed vs Ongoing projects</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={projectStats}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#82ca9d" name="Completed" />
                <Line type="monotone" dataKey="ongoing" stroke="#8884d8" name="Ongoing" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center ${
                  activity.type === 'message' ? 'bg-blue-100 text-blue-600' : 
                  activity.type === 'project' ? 'bg-violet-100 text-violet-600' : 
                  activity.type === 'payment' ? 'bg-green-100 text-green-600' : 
                  'bg-orange-100 text-orange-600'
                }`}>
                  {activity.type === 'message' && <Clock className="h-4 w-4" />}
                  {activity.type === 'project' && <Activity className="h-4 w-4" />}
                  {activity.type === 'payment' && <DollarSign className="h-4 w-4" />}
                  {activity.type === 'client' && <Users className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.content}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
