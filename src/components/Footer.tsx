
import { Briefcase, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { isAuthenticated, userType } = useUser();

  const getFooterLinks = () => {
    if (!isAuthenticated) {
      return {
        seekers: [
          { to: "/companies", label: "Browse Jobs" },
          { to: "/companies", label: "Companies" },
          { to: "/resources", label: "Salary Guide" },
          { to: "/resources", label: "Career Resources" },
          { to: "/resources", label: "Resume Builder" },
        ],
        employers: [
          { to: "/for-employers", label: "Post a Job" },
          { to: "/for-employers", label: "Pricing" },
          { to: "/for-employers", label: "Employer Resources" },
          { to: "/for-employers", label: "Recruiting Solutions" },
          { to: "/for-employers", label: "Success Stories" },
        ],
      };
    }

    switch (userType) {
      case 'admin':
        return {
          seekers: [
            { to: "/admin/job-seekers", label: "Manage Job Seekers" },
            { to: "/admin/job-providers", label: "Manage Providers" },
            { to: "/admin/job-requests", label: "Job Requests" },
            { to: "/admin/clear-jobs", label: "Clear Jobs" },
            { to: "/admin/ban-user", label: "User Management" },
          ],
          employers: [
            { to: "/admin", label: "Admin Dashboard" },
            { to: "/admin/change-password", label: "Change Password" },
          ],
        };
      case 'job-provider':
        return {
          seekers: [
            { to: "/job-provider/browse-seekers", label: "Browse Job Seekers" },
            { to: "/job-provider/ai-screening", label: "AI Screening" },
            { to: "/job-provider/manage-requests", label: "Applications" },
          ],
          employers: [
            { to: "/job-provider/post-job", label: "Post a Job" },
            { to: "/job-provider/settings", label: "Account Settings" },
            { to: "/job-provider/messages", label: "Messages" },
            { to: "/job-provider/story", label: "Company Story" },
          ],
        };
      case 'job-seeker':
        return {
          seekers: [
            { to: "/job-seeker/jobs", label: "Browse Jobs" },
            { to: "/job-seeker/search-provider", label: "Search Companies" },
            { to: "/job-seeker/favorites", label: "Saved Jobs" },
            { to: "/job-seeker/applications", label: "My Applications" },
            { to: "/job-seeker/accepted-jobs", label: "Accepted Jobs" },
          ],
          employers: [
            { to: "/job-seeker/profile", label: "My Profile" },
            { to: "/job-seeker/evaluation", label: "My Reviews" },
            { to: "/job-seeker/messages", label: "Messages" },
            { to: "/job-seeker/notifications", label: "Notifications" },
          ],
        };
      default:
        return { seekers: [], employers: [] };
    }
  };

  const footerLinks = getFooterLinks();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-6 w-6 text-job" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-job to-job-accent bg-clip-text text-transparent">
                JobFlair
              </h2>
            </div>
            <p className="text-foreground/70 mb-4">
              Connecting talent with opportunity through beautiful, engaging experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">
              {userType === 'admin' ? 'Admin Tools' : 
               userType === 'job-provider' ? 'Job Seeker Tools' :
               userType === 'job-seeker' ? 'Job Search' : 'For Job Seekers'}
            </h3>
            <ul className="space-y-2">
              {footerLinks.seekers.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-foreground/70 hover:text-job transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">
              {userType === 'admin' ? 'System' : 
               userType === 'job-provider' ? 'My Account' :
               userType === 'job-seeker' ? 'My Account' : 'For Employers'}
            </h3>
            <ul className="space-y-2">
              {footerLinks.employers.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-foreground/70 hover:text-job transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact-us" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © 2023 JobFlair. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-job transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-job transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-job transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
