
import { Briefcase, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
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
            <h3 className="font-medium mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Salary Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Resume Builder
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Employer Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Recruiting Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  About Us
                </a>
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
                <a href="#" className="text-foreground/70 hover:text-job transition-colors duration-200">
                  Contact Us
                </a>
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
