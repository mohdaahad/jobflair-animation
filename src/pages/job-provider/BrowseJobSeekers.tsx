
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Search, Filter, MapPin, Star, MessageSquare, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BrowseJobSeekers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    experience: "",
    skills: "",
  });

  const jobSeekers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Frontend Developer",
      location: "New York, NY",
      experience: "3 years",
      skills: ["React", "TypeScript", "Node.js"],
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      aiScore: 92,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      experience: "5 years",
      skills: ["Python", "React", "AWS"],
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      aiScore: 88,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "UI/UX Designer",
      location: "Austin, TX",
      experience: "4 years",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      rating: 4.7,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      aiScore: 95,
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Browse Job Seekers</h1>
            <p className="text-lg text-foreground/70">
              Find and connect with talented candidates using AI-powered matching
            </p>
          </div>

          <div className="glass-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                <Input
                  placeholder="Search by name, skills, or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                AI Match
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select onValueChange={(value) => setFilters({ ...filters, location: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                  <SelectItem value="austin">Austin, TX</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setFilters({ ...filters, experience: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Skills (e.g. React, Python)"
                value={filters.skills}
                onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSeekers.map((seeker) => (
              <div key={seeker.id} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={seeker.avatar}
                      alt={seeker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{seeker.name}</h3>
                      <p className="text-sm text-foreground/70">{seeker.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{seeker.rating}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <MapPin className="h-4 w-4" />
                    {seeker.location}
                  </div>
                  <div className="text-sm text-foreground/70">
                    Experience: {seeker.experience}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {seeker.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-job/10 text-job text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/70">AI Match Score</span>
                    <span className="text-sm font-semibold text-green-600">{seeker.aiScore}%</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
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

export default BrowseJobSeekers;
