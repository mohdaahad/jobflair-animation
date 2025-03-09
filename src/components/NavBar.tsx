
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Briefcase, Menu, Search, User, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-job" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-job to-job-accent bg-clip-text text-transparent">
            JobFlair
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground/80 hover:text-job transition-colors duration-200">
            Find Jobs
          </a>
          <a href="#" className="text-foreground/80 hover:text-job transition-colors duration-200">
            Companies
          </a>
          <a href="#" className="text-foreground/80 hover:text-job transition-colors duration-200">
            Resources
          </a>
          <a href="#" className="text-foreground/80 hover:text-job transition-colors duration-200">
            For Employers
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 glass px-3 py-1.5 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200">
            <Search className="h-4 w-4 text-foreground/70" />
            <span className="text-sm text-foreground/70">Search...</span>
          </button>
          
          <ThemeToggle />
          
          <button className="hidden md:flex glass px-4 py-2 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200 text-sm font-medium">
            Sign In
          </button>
          
          <button 
            className="md:hidden glass p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden transition-all duration-300",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 w-3/4 bg-card glass p-6 shadow-xl transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full glass"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
            >
              Find Jobs
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
            >
              Companies
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
            >
              Resources
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
            >
              For Employers
            </a>
          </nav>
          
          <div className="mt-auto pt-8 flex flex-col space-y-3">
            <button className="flex items-center gap-2 w-full glass px-3 py-2 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200">
              <Search className="h-4 w-4 text-foreground/70" />
              <span className="text-sm text-foreground/70">Search...</span>
            </button>
            
            <button className="flex justify-center items-center gap-2 w-full glass px-4 py-2 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
