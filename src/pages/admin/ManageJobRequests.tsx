
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Search, Check, X, Eye, Clock } from "lucide-react";
import { useState } from "react";

const ManageJobRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const jobRequests = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "New York, NY",
      salary: "$120K - $150K",
      status: "Pending",
      submittedDate: "2024-06-15",
      type: "Full-time"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "Remote",
      salary: "$90K - $110K",
      status: "Approved",
      submittedDate: "2024-06-14",
      type: "Contract"
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "StartupXYZ",
      location: "Austin, TX",
      salary: "$80K - $100K",
      status: "Rejected",
      submittedDate: "2024-06-13",
      type: "Full-time"
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Manage Job Requests</h1>
            <p className="text-lg text-foreground/70">
              Review and approve job posting requests
            </p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search job requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 glass rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-job"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobRequests.map((job) => (
              <div key={job.id} className="glass-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/70 mb-2">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium text-job">{job.salary}</span>
                      <span className="text-foreground/50">Submitted: {job.submittedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex px-3 py-1 text-xs rounded-full ${
                      job.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      job.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {job.status === 'Pending' && <Clock className="h-3 w-3 mr-1" />}
                      {job.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <button className="glass px-4 py-2 rounded-lg hover:bg-foreground/10 flex items-center gap-2 text-sm">
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                  {job.status === 'Pending' && (
                    <>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4" />
                        Approve
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                        <X className="h-4 w-4" />
                        Reject
                      </button>
                    </>
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

export default ManageJobRequests;
