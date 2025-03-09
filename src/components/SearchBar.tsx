
import { Search, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        className={cn(
          "glass-card p-3 md:p-4 transition-all duration-300",
          isExpanded ? "ring-2 ring-primary/50" : ""
        )}
      >
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-foreground/60" />
            </div>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full h-12 pl-10 pr-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setIsExpanded(false)}
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-foreground/60" />
            </div>
            <input
              type="text"
              placeholder="City, state, or remote"
              className="w-full h-12 pl-10 pr-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setIsExpanded(false)}
            />
          </div>
          
          <div className="flex-none">
            <button className="w-full md:w-auto h-12 px-6 glass bg-job hover:bg-job-hover text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-medium">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium">Popular:</span>
              {["Remote", "Part-time", "Full-time", "Developer", "Designer", "Marketing"].map((tag, index) => (
                <button 
                  key={index}
                  className="text-sm py-1 px-3 glass rounded-full hover:bg-job/10 transition-colors duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
