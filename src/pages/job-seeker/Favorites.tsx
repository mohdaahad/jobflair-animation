
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Heart, MapPin, Clock, Briefcase, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Favorites = () => {
  const favoriteJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc",
      location: "New York, NY",
      salary: "$80,000 - $120,000",
      type: "Full Time",
      saved: "2 days ago",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$70,000 - $100,000",
      type: "Remote",
      saved: "1 week ago",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=50&h=50&fit=crop",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Austin, TX",
      salary: "$60,000 - $90,000",
      type: "Part Time",
      saved: "3 days ago",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=50&h=50&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Favorite Jobs</h1>
            <p className="text-lg text-foreground/70">
              Jobs you've saved for later review
            </p>
          </div>

          {favoriteJobs.length > 0 ? (
            <div className="space-y-6">
              {favoriteJobs.map((job) => (
                <div key={job.id} className="glass-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-foreground/70">{job.company}</p>
                        <div className="flex items-center gap-4 text-sm text-foreground/60 mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Saved {job.saved}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{job.salary}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-foreground/30" />
              <h2 className="text-xl font-semibold mb-2">No favorite jobs yet</h2>
              <p className="text-foreground/70 mb-4">
                Start browsing jobs and save the ones you're interested in
              </p>
              <Button>Browse Jobs</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
