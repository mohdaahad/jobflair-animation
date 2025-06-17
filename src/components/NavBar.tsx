
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { UserProfileMenu } from "./UserProfileMenu";
import { useUser } from "@/contexts/UserContext";
import { Briefcase, Menu, Search, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, userType } = useUser();

  const getNavigationLinks = () => {
    if (!isAuthenticated) {
      return [
        { to: "/companies", label: "Companies" },
        { to: "/resources", label: "Resources" },
        { to: "/for-employers", label: "For Employers" },
        { to: "/about-us", label: "About Us" },
        { to: "/contact-us", label: "Contact Us" },
      ];
    }

    switch (userType) {
      case 'admin':
        return [
          { to: "/admin", label: "Dashboard" },
          { to: "/admin/job-seekers", label: "Job Seekers" },
          { to: "/admin/job-providers", label: "Job Providers" },
          { to: "/admin/job-requests", label: "Job Requests" },
        ];
      case 'job-provider':
        return [
          { to: "/job-provider", label: "Dashboard" },
          { to: "/job-provider/post-job", label: "Post Job" },
          { to: "/job-provider/browse-seekers", label: "Browse Seekers" },
          { to: "/job-provider/manage-requests", label: "Applications" },
          { to: "/job-provider/messages", label: "Messages" },
        ];
      case 'job-seeker':
        return [
          { to: "/job-seeker", label: "Dashboard" },
          { to: "/job-seeker/jobs", label: "Browse Jobs" },
          { to: "/job-seeker/applications", label: "My Applications" },
          { to: "/job-seeker/favorites", label: "Favorites" },
          { to: "/job-seeker/messages", label: "Messages" },
        ];
      default:
        return [];
    }
  };

  const navigationLinks = getNavigationLinks();

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
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-foreground/80 hover:text-job transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 glass px-3 py-1.5 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200">
            <Search className="h-4 w-4 text-foreground/70" />
            <span className="text-sm text-foreground/70">Search...</span>
          </button>
          
          <ThemeToggle />
          
          {isAuthenticated ? (
            <UserProfileMenu />
          ) : (
            <Link 
              to="/sign-in" 
              className="hidden md:flex glass px-4 py-2 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200 text-sm font-medium"
            >
              Sign In
            </Link>
          )}
          
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
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-job transition-colors duration-200 py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-8 flex flex-col space-y-3">
            <button className="flex items-center gap-2 w-full glass px-3 py-2 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200">
              <Search className="h-4 w-4 text-foreground/70" />
              <span className="text-sm text-foreground/70">Search...</span>
            </button>
            
            {!isAuthenticated && (
              <Link 
                to="/sign-in"
                className="flex justify-center items-center gap-2 w-full glass px-4 py-2 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
