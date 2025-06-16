
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Eye, MessageSquare, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Applications = () => {
  const applications = [
    {
      id: 1,
      company: "TechCorp Inc",
      position: "Senior Frontend Developer",
      status: "interview",
      applied: "2024-01-15",
      salary: "$80,000 - $120,000",
      location: "New York, NY",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "React Developer",
      status: "review",
      applied: "2024-01-12",
      salary: "$70,000 - $100,000",
      location: "San Francisco, CA",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=50&h=50&fit=crop"
    },
    {
      id: 3,
      company: "BigTech Solutions",
      position: "UI/UX Designer",
      status: "accepted",
      applied: "2024-01-08",
      salary: "$90,000 - $130,000",
      location: "Austin, TX",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=50&h=50&fit=crop"
    },
    {
      id: 4,
      company: "InnovateCorp",
      position: "Full Stack Developer",
      status: "rejected",
      applied: "2024-01-05",
      salary: "$75,000 - $110,000",
      location: "Seattle, WA",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=50&h=50&fit=crop"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'interview':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'review':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'Accepted';
      case 'interview':
        return 'Interview Scheduled';
      case 'review':
        return 'Under Review';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">My Applications</h1>
            <p className="text-lg text-foreground/70">
              Track the status of all your job applications
            </p>
          </div>

          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="glass-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <img
                      src={app.logo}
                      alt={app.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{app.position}</h3>
                      <p className="text-foreground/70">{app.company}</p>
                      <p className="text-sm text-foreground/60">{app.location} • {app.salary}</p>
                      <p className="text-xs text-foreground/50">Applied on {new Date(app.applied).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(app.status)}
                    <span className="text-sm font-medium">{getStatusText(app.status)}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message Employer
                  </Button>
                  {app.status === 'interview' && (
                    <Button size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Interview
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Applications;
