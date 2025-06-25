
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { UserProfileMenu } from "./UserProfileMenu";
import { useUser } from "@/contexts/UserContext";
import { Briefcase, Menu, Search, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
          
          {/* Mobile Menu Drawer */}
          <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DrawerTrigger asChild>
              <button className="md:hidden glass p-2 rounded-full">
                <Menu className="h-5 w-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-background border-border">
              <DrawerHeader className="border-b border-border">
                <div className="flex justify-between items-center">
                  <DrawerTitle className="text-xl font-bold">Menu</DrawerTitle>
                  <DrawerClose asChild>
                    <button className="p-1 rounded-full hover:bg-muted">
                      <X className="h-5 w-5" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              
              <div className="p-6">
                <nav className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-foreground hover:text-job transition-colors duration-200 py-3 border-b border-border/50 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 flex flex-col space-y-4">
                  <button className="flex items-center gap-2 w-full bg-muted px-4 py-3 rounded-lg hover:bg-muted/80 transition-all duration-200">
                    <Search className="h-4 w-4 text-foreground/70" />
                    <span className="text-sm text-foreground/70">Search...</span>
                  </button>
                  
                  {!isAuthenticated && (
                    <Link 
                      to="/sign-in"
                      className="flex justify-center items-center gap-2 w-full bg-job hover:bg-job-hover text-white px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Sign In</span>
                    </Link>
                  )}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
