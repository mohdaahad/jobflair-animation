
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut, ChevronDown, Shield, Briefcase, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const UserProfileMenu = () => {
  const { user, userType, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const getProfileLinks = () => {
    switch (userType) {
      case 'admin':
        return [
          { to: "/admin", label: "Dashboard", icon: Shield },
          { to: "/admin/job-seekers", label: "Manage Job Seekers", icon: UserIcon },
          { to: "/admin/job-providers", label: "Manage Providers", icon: Briefcase },
          { to: "/admin/change-password", label: "Change Password", icon: Settings },
        ];
      case 'job-provider':
        return [
          { to: "/job-provider", label: "Dashboard", icon: Briefcase },
          { to: "/job-provider/post-job", label: "Post Job", icon: Briefcase },
          { to: "/job-provider/manage-requests", label: "Applications", icon: UserIcon },
          { to: "/job-provider/settings", label: "Settings", icon: Settings },
        ];
      case 'job-seeker':
        return [
          { to: "/job-seeker", label: "Dashboard", icon: UserIcon },
          { to: "/job-seeker/profile", label: "Profile", icon: User },
          { to: "/job-seeker/jobs", label: "Browse Jobs", icon: Briefcase },
          { to: "/job-seeker/applications", label: "My Applications", icon: Briefcase },
        ];
      default:
        return [];
    }
  };

  const profileLinks = getProfileLinks();

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-2 glass"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-4 w-4" />
        <span className="hidden md:inline">{user.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/30 dark:border-gray-700/50 z-50">
          <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-job/10 to-job-accent/10 rounded-t-lg">
            <p className="font-semibold text-gray-900 dark:text-white truncate">{user.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{user.email}</p>
            <span className="inline-block mt-2 text-xs bg-job/20 dark:bg-job/30 text-job dark:text-job-light px-2 py-1 rounded-full capitalize font-medium">
              {userType?.replace('-', ' ')}
            </span>
          </div>
          
          <div className="p-2 bg-white/80 dark:bg-gray-900/80 rounded-b-lg">
            {profileLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-md hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-job dark:hover:text-job-light"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
            
            <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-2 pt-2">
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
              >
                <LogOut className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
