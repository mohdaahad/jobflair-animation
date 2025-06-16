
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Eye, MessageSquare, CheckCircle, XCircle, Clock, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ManageApplications = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const applications = [
    {
      id: 1,
      candidateName: "John Doe",
      position: "Senior React Developer",
      appliedDate: "2024-01-15",
      status: "pending",
      experience: "5 years",
      skills: ["React", "TypeScript", "Node.js"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      aiScore: 92,
      resumeUrl: "#",
    },
    {
      id: 2,
      candidateName: "Sarah Johnson",
      position: "Frontend Developer",
      appliedDate: "2024-01-12",
      status: "interview",
      experience: "3 years",
      skills: ["React", "JavaScript", "CSS"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face",
      aiScore: 88,
      resumeUrl: "#",
    },
    {
      id: 3,
      candidateName: "Mike Chen",
      position: "UI/UX Designer",
      appliedDate: "2024-01-10",
      status: "accepted",
      experience: "4 years",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      aiScore: 95,
      resumeUrl: "#",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'interview':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'Accepted';
      case 'interview':
        return 'Interview';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Pending';
    }
  };

  const filteredApplications = statusFilter === "all" 
    ? applications 
    : applications.filter(app => app.status === statusFilter);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Manage Applications</h1>
            <p className="text-lg text-foreground/70">
              Review and manage candidate applications
            </p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-foreground/70">
              {filteredApplications.length} applications
            </div>
          </div>

          <div className="space-y-4">
            {filteredApplications.map((application) => (
              <div key={application.id} className="glass-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <img
                      src={application.avatar}
                      alt={application.candidateName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{application.candidateName}</h3>
                      <p className="text-foreground/70">{application.position}</p>
                      <p className="text-sm text-foreground/60">
                        Applied on {new Date(application.appliedDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-foreground/60">
                        Experience: {application.experience}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {application.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-job/10 text-job text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(application.status)}
                      <span className="text-sm font-medium">{getStatusText(application.status)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{application.aiScore}% Match</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline">
                    Download Resume
                  </Button>
                  
                  {application.status === 'pending' && (
                    <>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                  
                  {application.status === 'interview' && (
                    <Button size="sm">
                      <Clock className="h-4 w-4 mr-2" />
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

export default ManageApplications;
