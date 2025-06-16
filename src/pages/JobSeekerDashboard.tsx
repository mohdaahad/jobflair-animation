
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { User, Briefcase, MessageSquare, Star, Heart, Bell, Settings, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const JobSeekerDashboard = () => {
  const stats = [
    { title: "Applications", count: 8, icon: Briefcase, color: "#3B82F6" },
    { title: "Messages", count: 3, icon: MessageSquare, color: "#10B981" },
    { title: "Favorites", count: 12, icon: Heart, color: "#EF4444" },
    { title: "Profile Views", count: 45, icon: Eye, color: "#8B5CF6" },
  ];

  const recentApplications = [
    { id: 1, company: "TechCorp Inc", position: "Frontend Developer", status: "Under Review", applied: "2 days ago" },
    { id: 2, company: "StartupXYZ", position: "React Developer", status: "Interview Scheduled", applied: "5 days ago" },
    { id: 3, company: "BigTech Solutions", position: "UI/UX Designer", status: "Accepted", applied: "1 week ago" },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Job Seeker Dashboard</h1>
            <p className="text-lg text-foreground/70">
              Track your applications, manage your profile, and discover new opportunities
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
            <Link to="/job-seeker/profile" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <User className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Edit Profile</h3>
              <p className="text-sm text-foreground/70">Update your profile and resume</p>
            </Link>

            <Link to="/job-seeker/applications" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Briefcase className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Track Applications</h3>
              <p className="text-sm text-foreground/70">Monitor your job application status</p>
            </Link>

            <Link to="/job-seeker/jobs" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <FileText className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Browse Jobs</h3>
              <p className="text-sm text-foreground/70">Find new job opportunities</p>
            </Link>

            <Link to="/job-seeker/favorites" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Heart className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Favorites</h3>
              <p className="text-sm text-foreground/70">View your saved jobs</p>
            </Link>

            <Link to="/job-seeker/messages" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <MessageSquare className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Messages</h3>
              <p className="text-sm text-foreground/70">Chat with employers</p>
            </Link>

            <Link to="/job-seeker/notifications" className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <Bell className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Notifications</h3>
              <p className="text-sm text-foreground/70">View alerts and updates</p>
            </Link>
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
              <Link to="/job-seeker/applications" className="text-job hover:underline">View All</Link>
            </div>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 glass rounded-lg">
                  <div>
                    <h3 className="font-medium">{app.position}</h3>
                    <p className="text-sm text-foreground/70">{app.company} • Applied {app.applied}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    app.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                    app.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status}
                  </span>
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

export default JobSeekerDashboard;
