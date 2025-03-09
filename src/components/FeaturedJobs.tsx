
import { JobCard } from "./JobCard";

export function FeaturedJobs() {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120K - $150K",
      logo: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder
      description: "We're looking for a senior frontend developer proficient in React, TypeScript, and modern web technologies to join our growing team. You'll be responsible for building scalable, high-performance user interfaces for our SaaS platform.",
      skills: ["React", "TypeScript", "Redux", "Tailwind CSS", "Jest"],
      posted: "2 days ago"
    },
    {
      title: "Product Designer",
      company: "DesignMaster",
      location: "New York, NY",
      salary: "$90K - $110K",
      logo: "https://randomuser.me/api/portraits/women/2.jpg", // Placeholder
      description: "Join our creative team as a Product Designer to craft beautiful, intuitive interfaces for our clients. You'll collaborate with developers and stakeholders to deliver exceptional user experiences from concept to execution.",
      skills: ["Figma", "UI/UX", "Prototyping", "User Research", "Design Systems"],
      posted: "1 week ago"
    },
    {
      title: "Full Stack Developer",
      company: "GrowthLabs",
      location: "Remote",
      salary: "$100K - $130K",
      logo: "https://randomuser.me/api/portraits/men/3.jpg", // Placeholder
      description: "GrowthLabs is seeking a talented Full Stack Developer to help build and scale our marketing analytics platform. You'll work with both frontend and backend technologies to implement features and ensure optimal performance.",
      skills: ["Node.js", "React", "MongoDB", "GraphQL", "AWS", "Docker"],
      posted: "3 days ago"
    },
    {
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston, MA (Hybrid)",
      salary: "$115K - $140K",
      logo: "https://randomuser.me/api/portraits/women/4.jpg", // Placeholder
      description: "We're looking for a Data Scientist to join our research team. You'll analyze complex datasets, develop models, and extract actionable insights to drive business decisions. Strong background in statistics and machine learning required.",
      skills: ["Python", "SQL", "Machine Learning", "Statistics", "PyTorch", "Data Visualization"],
      posted: "5 days ago"
    },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Handpicked opportunities from top companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <JobCard 
              key={index}
              {...job}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="glass px-6 py-3 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200 font-medium">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
}
