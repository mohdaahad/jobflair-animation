
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Users, Briefcase, AlertTriangle, Settings, Ban, Trash2, TrendingUp, Activity, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", count: 1250, icon: Users, color: "#3B82F6" },
    { title: "Active Jobs", count: 856, icon: Briefcase, color: "#10B981" },
    { title: "Pending Requests", count: 23, icon: AlertTriangle, color: "#F59E0B" },
    { title: "Banned Accounts", count: 12, icon: Ban, color: "#EF4444" },
  ];

  const userGrowth = [
    { month: "Jan", jobSeekers: 180, jobProviders: 45, total: 225 },
    { month: "Feb", jobSeekers: 220, jobProviders: 52, total: 272 },
    { month: "Mar", jobSeekers: 280, jobProviders: 68, total: 348 },
    { month: "Apr", jobSeekers: 320, jobProviders: 75, total: 395 },
    { month: "May", jobSeekers: 380, jobProviders: 88, total: 468 },
    { month: "Jun", jobSeekers: 420, jobProviders: 95, total: 515 },
  ];

  const platformActivity = [
    { day: "Mon", applications: 45, jobPosts: 12, messages: 85 },
    { day: "Tue", applications: 52, jobPosts: 8, messages: 92 },
    { day: "Wed", applications: 38, jobPosts: 15, messages: 78 },
    { day: "Thu", applications: 48, jobPosts: 10, messages: 88 },
    { day: "Fri", applications: 65, jobPosts: 18, messages: 110 },
    { day: "Sat", applications: 25, jobPosts: 5, messages: 45 },
    { day: "Sun", applications: 18, jobPosts: 3, messages: 32 },
  ];

  const userDistribution = [
    { name: "Job Seekers", value: 78, color: "#3B82F6" },
    { name: "Job Providers", value: 18, color: "#10B981" },
    { name: "Admins", value: 4, color: "#F59E0B" },
  ];

  const jobCategories = [
    { category: "Technology", jobs: 245 },
    { category: "Healthcare", jobs: 189 },
    { category: "Finance", jobs: 156 },
    { category: "Education", jobs: 123 },
    { category: "Marketing", jobs: 98 },
    { category: "Sales", jobs: 76 },
  ];

  const systemHealth = [
    { metric: "Server Response", value: 98, color: "#10B981" },
    { metric: "Database Performance", value: 95, color: "#10B981" },
    { metric: "User Satisfaction", value: 92, color: "#10B981" },
    { metric: "Error Rate", value: 2, color: "#EF4444" },
  ];

  const chartConfig = {
    jobSeekers: { label: "Job Seekers", color: "#3B82F6" },
    jobProviders: { label: "Job Providers", color: "#10B981" },
    total: { label: "Total Users", color: "#8B5CF6" },
    applications: { label: "Applications", color: "#3B82F6" },
    jobPosts: { label: "Job Posts", color: "#10B981" },
    messages: { label: "Messages", color: "#F59E0B" },
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-lg text-foreground/70">
              Manage users, jobs, and platform settings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/70">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.count}</p>
                  </div>
                  <div 
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <h3 className="text-lg font-semibold">User Growth</h3>
              </div>
              <ChartContainer config={chartConfig} className="h-64">
                <AreaChart data={userGrowth}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="jobSeekers" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="jobProviders" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} />
                </AreaChart>
              </ChartContainer>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-green-500" />
                <h3 className="text-lg font-semibold">Platform Activity</h3>
              </div>
              <ChartContainer config={chartConfig} className="h-64">
                <LineChart data={platformActivity}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="jobPosts" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="messages" stroke="#F59E0B" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
              <ChartContainer config={chartConfig} className="h-64">
                <PieChart>
                  <Pie
                    data={userDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {userDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold">Job Categories</h3>
              </div>
              <ChartContainer config={chartConfig} className="h-64">
                <BarChart data={jobCategories} layout="horizontal">
                  <XAxis type="number" />
                  <YAxis dataKey="category" type="category" width={80} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="jobs" fill="#8B5CF6" />
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          <div className="glass-card p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">System Health Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {systemHealth.map((metric, index) => (
                <div key={index} className="glass p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-foreground/70">{metric.metric}</p>
                    <span className={`text-lg font-bold ${metric.color === '#EF4444' ? 'text-red-500' : 'text-green-500'}`}>
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${metric.value}%`, 
                        backgroundColor: metric.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/admin/job-seekers" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Users className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Job Seekers</h3>
              <p className="text-sm text-foreground/70">View and manage job seeker accounts</p>
            </Link>

            <Link to="/admin/job-providers" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Briefcase className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Job Providers</h3>
              <p className="text-sm text-foreground/70">View and manage employer accounts</p>
            </Link>

            <Link to="/admin/job-requests" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <AlertTriangle className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Job Requests</h3>
              <p className="text-sm text-foreground/70">Review and approve job postings</p>
            </Link>

            <Link to="/admin/settings" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Settings className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Settings</h3>
              <p className="text-sm text-foreground/70">Configure platform settings</p>
            </Link>

            <div className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Ban className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ban Management</h3>
              <p className="text-sm text-foreground/70">Manage banned users and providers</p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Trash2 className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Clear Jobs</h3>
              <p className="text-sm text-foreground/70">Remove expired or invalid jobs</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
