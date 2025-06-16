
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Users, Briefcase, AlertTriangle, Settings, Ban, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", count: 1250, icon: Users, color: "#3B82F6" },
    { title: "Active Jobs", count: 856, icon: Briefcase, color: "#10B981" },
    { title: "Pending Requests", count: 23, icon: AlertTriangle, color: "#F59E0B" },
    { title: "Banned Accounts", count: 12, icon: Ban, color: "#EF4444" },
  ];

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
