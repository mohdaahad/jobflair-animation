
import { useState } from "react";
import { Bookmark, BookmarkCheck, Briefcase, Building, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  description: string;
  skills: string[];
  posted: string;
  className?: string;
}

export function JobCard({
  title,
  company,
  location,
  salary,
  logo,
  description,
  skills,
  posted,
  className,
}: JobCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div 
      className={cn(
        "preserve-3d cursor-pointer group h-[280px] w-full max-w-sm mx-auto",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front of Card */}
      <div 
        className={cn(
          "backface-hidden absolute inset-0 glass-card p-5 transition-all duration-500 ease-in-out",
          isFlipped ? "animate-flip-card" : "animate-flip-card-back",
        )}
      >
        <div className="flex justify-between items-start">
          <div className="h-14 w-14 rounded-xl glass flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="h-10 w-10 object-contain"
            />
          </div>
          <button 
            onClick={toggleSave} 
            className="glass p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            {isSaved ? (
              <BookmarkCheck className="h-5 w-5 text-job" />
            ) : (
              <Bookmark className="h-5 w-5 text-foreground/70" />
            )}
          </button>
        </div>
        
        <h3 className="mt-4 text-lg font-semibold line-clamp-2 group-hover:text-job transition-colors duration-200">
          {title}
        </h3>
        
        <div className="mt-2 flex items-center text-sm text-foreground/70">
          <Building className="h-4 w-4 mr-1" />
          <span>{company}</span>
        </div>
        
        <div className="mt-1 flex items-center text-sm text-foreground/70">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index} 
              className="text-xs py-1 px-2 glass rounded-full"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="text-xs py-1 px-2 glass rounded-full">
              +{skills.length - 3}
            </span>
          )}
        </div>
        
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
          <span className="text-sm font-medium text-job">{salary}</span>
          <span className="text-xs text-foreground/60">{posted}</span>
        </div>
        
        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <span className="text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Click to see details
          </span>
        </div>
      </div>

      {/* Back of Card */}
      <div 
        className={cn(
          "backface-hidden absolute inset-0 glass-card p-5 rotate-y-180 transition-all duration-500 ease-in-out",
          isFlipped ? "animate-flip-card-back" : "animate-flip-card",
        )}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button 
            onClick={toggleSave} 
            className="glass p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            {isSaved ? (
              <BookmarkCheck className="h-5 w-5 text-job" />
            ) : (
              <Bookmark className="h-5 w-5 text-foreground/70" />
            )}
          </button>
        </div>
        
        <div className="mt-2 flex items-center text-sm">
          <Building className="h-4 w-4 mr-1 text-foreground/70" />
          <span>{company}</span>
        </div>
        
        <p className="mt-3 text-sm text-foreground/80 line-clamp-5">
          {description}
        </p>

        <div className="mt-4">
          <h4 className="text-sm font-medium">Skills Required:</h4>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {skills.slice(0, 5).map((skill, index) => (
              <span 
                key={index} 
                className="text-xs py-1 px-2 glass rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 5 && (
              <span className="text-xs py-1 px-2 glass rounded-full">
                +{skills.length - 5}
              </span>
            )}
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
          <button className="text-xs py-1.5 px-3 glass bg-job hover:bg-job-hover text-white rounded-full transition-colors duration-200">
            Apply Now
          </button>
          <span className="text-xs text-foreground/60">{posted}</span>
        </div>
      </div>
    </div>
  );
}
