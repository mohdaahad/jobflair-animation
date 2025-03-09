
import { ArrowRight } from "lucide-react";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-job to-job-accent bg-clip-text text-transparent">
            Discover
          </span>{" "}
          Your Next Career Opportunity
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-100">
          Connect with top companies and find the perfect job that matches your skills and ambitions.
        </p>
        
        <div className="mb-8 animate-fade-in animation-delay-200">
          <SearchBar />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 text-sm text-foreground/70 animate-fade-in animation-delay-300">
          <span>Popular searches:</span>
          <a href="#" className="hover:text-job transition-colors duration-200">
            Software Engineer
          </a>
          <span>•</span>
          <a href="#" className="hover:text-job transition-colors duration-200">
            Product Manager
          </a>
          <span>•</span>
          <a href="#" className="hover:text-job transition-colors duration-200">
            UX Designer
          </a>
          <span>•</span>
          <a href="#" className="hover:text-job transition-colors duration-200">
            Marketing
          </a>
          <span>•</span>
          <a href="#" className="hover:text-job transition-colors duration-200">
            Remote Jobs
          </a>
        </div>
        
        <div className="mt-12 flex justify-center animate-fade-in animation-delay-400">
          <a 
            href="#trending-categories" 
            className="flex items-center gap-2 text-job hover:text-job-dark transition-colors duration-200"
          >
            <span>Explore trending categories</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
