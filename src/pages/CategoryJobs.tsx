
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { SearchBar } from "@/components/SearchBar";
import { LucideIcon } from "lucide-react";
import { useParams } from "react-router-dom";

const CategoryJobs = () => {
  const { category } = useParams();
  
  // This would normally come from an API call based on the category
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "New York, NY",
      salary: "$120K - $150K",
      logo: "/placeholder.svg",
      description: "We're looking for a Senior Frontend Developer with React experience to join our team. You'll be responsible for building user interfaces, collaborating with designers, and implementing new features.",
      skills: ["React", "TypeScript", "CSS", "Git"],
      posted: "2 days ago"
    },
    {
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Remote",
      salary: "$90K - $110K",
      logo: "/placeholder.svg",
      description: "Join our creative team as a UX/UI Designer. You'll create user-centered designs, wireframes, and prototypes while collaborating with product managers and developers.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      posted: "1 week ago"
    },
    {
      title: "Marketing Manager",
      company: "GrowthLabs",
      location: "Chicago, IL",
      salary: "$85K - $105K",
      logo: "/placeholder.svg",
      description: "We're seeking a Marketing Manager to oversee our digital marketing campaigns, develop marketing strategies, and analyze campaign performance.",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      posted: "3 days ago"
    },
    {
      title: "Product Manager",
      company: "InnovateCo",
      location: "San Francisco, CA",
      salary: "$130K - $160K",
      logo: "/placeholder.svg",
      description: "Looking for a Product Manager to lead product development, gather user requirements, and coordinate with engineering and design teams to deliver innovative solutions.",
      skills: ["Product Strategy", "Agile", "Market Research", "Roadmapping"],
      posted: "Just now"
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Boston, MA",
      salary: "$115K - $140K",
      logo: "/placeholder.svg",
      description: "Join our DevOps team to build and maintain CI/CD pipelines, automate infrastructure, and improve system reliability and performance.",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      posted: "5 days ago"
    },
    {
      title: "Data Scientist",
      company: "DataInsights",
      location: "Austin, TX",
      salary: "$125K - $155K",
      logo: "/placeholder.svg",
      description: "We're looking for a Data Scientist to analyze complex datasets, develop machine learning models, and provide actionable insights to drive business decisions.",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      posted: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{category} Jobs</h1>
            <p className="text-lg text-foreground/70">
              Explore the latest {category?.toLowerCase()} opportunities
            </p>
          </div>
          
          <div className="mb-8">
            <SearchBar />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard 
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                logo={job.logo}
                description={job.description}
                skills={job.skills}
                posted={job.posted}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryJobs;
