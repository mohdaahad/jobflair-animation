import React, { useState, useMemo, useCallback } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Search, Filter, MapPin, Clock, Heart, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OptimizedImage } from "@/components/ui/optimized-image";

const JobCard = React.memo(({ job }: { job: any }) => (
  <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-4">
        <OptimizedImage
          src={job.logo}
          alt={job.company}
          className="w-12 h-12 rounded-lg object-cover"
          width={48}
          height={48}
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
              {job.posted}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-lg font-semibold text-green-600">{job.aiMatch}% Match</span>
        <Button size="sm" variant="outline">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
    
    <p className="text-foreground/70 mb-4">{job.description}</p>
    <div className="flex items-center justify-between">
      <span className="text-lg font-semibold">{job.salary}</span>
      <div className="flex gap-2">
        <Button size="sm" variant="outline">View Details</Button>
        <Button size="sm">Apply Now</Button>
      </div>
    </div>
  </div>
));

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    salary: "",
  });

  const jobs = useMemo(() => [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc",
      location: "New York, NY",
      salary: "$80,000 - $120,000",
      type: "Full Time",
      posted: "2 days ago",
      description: "We are looking for an experienced React developer...",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
      aiMatch: 95,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$70,000 - $100,000",
      type: "Remote",
      posted: "1 week ago",
      description: "Join our innovative team building the next generation...",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=50&h=50&fit=crop",
      aiMatch: 88,
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Austin, TX",
      salary: "$60,000 - $90,000",
      type: "Part Time",
      posted: "3 days ago",
      description: "Create beautiful and intuitive user experiences...",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=50&h=50&fit=crop",
      aiMatch: 82,
    },
  ], []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Browse Jobs</h1>
            <p className="text-lg text-foreground/70">
              Discover your next career opportunity with AI-powered matching
            </p>
          </div>

          <div className="glass-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                <Input
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
              <Button className="whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                AI Match Jobs
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select onValueChange={(value) => handleFilterChange('location', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                  <SelectItem value="austin">Austin, TX</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleFilterChange('jobType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="part-time">Part Time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleFilterChange('salary', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k+">$100,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Jobs);
