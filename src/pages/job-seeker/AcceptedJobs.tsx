
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

const AcceptedJobs = () => {
  const acceptedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "New York, NY",
      startDate: "2024-01-15",
      status: "Active"
    },
    {
      id: 2,
      title: "React Developer",
      company: "Innovation Labs",
      location: "San Francisco, CA",
      startDate: "2024-02-01",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h1 className="text-3xl font-bold mb-2">Accepted Jobs</h1>
              <p className="text-foreground/70">Your confirmed job positions</p>
            </div>

            <div className="space-y-6">
              {acceptedJobs.map((job) => (
                <Card key={job.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-foreground/70">{job.company}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-foreground/60" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-foreground/60" />
                      <span className="text-sm">Start: {job.startDate}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcceptedJobs;
