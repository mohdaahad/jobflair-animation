
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Briefcase, Menu, Search, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-job" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-job to-job-accent bg-clip-text text-transparent">
              JobFlair
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/companies" className="text-foreground/80 hover:text-job transition-colors duration-200">
            Companies
          </Link>
          <Link to="/resources" className="text-foreground/80 hover:text-job transition-colors duration-200">
            Resources
          </Link>
          <Link to="/for-employers" className="text-foreground/80 hover:text-job transition-colors duration-200">
            For Employers
          </Link>
          <Link to="/about-us" className="text-foreground/80 hover:text-job transition-colors duration-200">
            About Us
          </Link>
          <Link to="/contact-us" className="text-foreground/80 hover:text-job transition-colors duration-200">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 glass px-3 py-1.5 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200">
            <Search className="h-4 w-4 text-foreground/70" />
            <span className="text-sm text-foreground/70">Search...</span>
          </button>
          
          <ThemeToggle />
          
          <Link 
            to="/sign-in" 
            className="hidden md:flex glass px-4 py-2 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200 text-sm font-medium"
          >
            Sign In
          </Link>
          
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
            <Link 
              to="/companies" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              to="/resources" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/for-employers" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link 
              to="/about-us" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us" 
              className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          
          <div className="mt-auto pt-8 flex flex-col space-y-3">
            <button className="flex items-center gap-2 w-full glass px-3 py-2 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200">
              <Search className="h-4 w-4 text-foreground/70" />
              <span className="text-sm text-foreground/70">Search...</span>
            </button>
            
            <Link 
              to="/sign-in"
              className="flex justify-center items-center gap-2 w-full glass px-4 py-2 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
