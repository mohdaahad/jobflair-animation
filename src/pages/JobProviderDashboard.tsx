
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Plus, Users, MessageSquare, Search, Star, Settings, Eye, Trash2, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const JobProviderDashboard = () => {
  const stats = [
    { title: "Active Jobs", count: 12, icon: FileText, color: "#3B82F6" },
    { title: "Applications", count: 45, icon: Users, color: "#10B981" },
    { title: "Messages", count: 8, icon: MessageSquare, color: "#F59E0B" },
    { title: "Reviews", count: 24, icon: Star, color: "#8B5CF6" },
  ];

  const recentJobs = [
    { id: 1, title: "Senior React Developer", applications: 15, status: "Active", posted: "2 days ago" },
    { id: 2, title: "UI/UX Designer", applications: 23, status: "Active", posted: "5 days ago" },
    { id: 3, title: "Product Manager", applications: 8, status: "Draft", posted: "1 week ago" },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Job Provider Dashboard</h1>
            <p className="text-lg text-foreground/70">
              Manage your job postings, review candidates, and grow your team
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/job-provider/post-job" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Plus className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Post New Job</h3>
              <p className="text-sm text-foreground/70">Create a new job posting to find candidates</p>
            </Link>

            <Link to="/job-provider/browse-seekers" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Search className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Browse Job Seekers</h3>
              <p className="text-sm text-foreground/70">Search and discover talented candidates</p>
            </Link>

            <Link to="/job-provider/ai-screening" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Star className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Resume Screening</h3>
              <p className="text-sm text-foreground/70">Use AI to screen and match candidates</p>
            </Link>

            <Link to="/job-provider/manage-requests" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Users className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Applications</h3>
              <p className="text-sm text-foreground/70">Review and respond to job applications</p>
            </Link>

            <Link to="/job-provider/messages" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <MessageSquare className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Messages</h3>
              <p className="text-sm text-foreground/70">Chat with candidates and manage conversations</p>
            </Link>

            <Link to="/job-provider/settings" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Settings className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
              <p className="text-sm text-foreground/70">Update profile and change password</p>
            </Link>
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Job Posts</h2>
              <Link to="/job-provider/all-jobs" className="text-job hover:underline">View All</Link>
            </div>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 glass rounded-lg">
                  <div>
                    <h3 className="font-medium">{job.title}</h3>
                    <p className="text-sm text-foreground/70">{job.applications} applications • Posted {job.posted}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.status}
                    </span>
                    <button className="p-2 hover:bg-foreground/10 rounded-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-foreground/10 rounded-lg">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobProviderDashboard;
