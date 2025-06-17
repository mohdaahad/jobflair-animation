
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
        <div className="absolute right-0 top-full mt-2 w-56 glass rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-border">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-foreground/60">{user.email}</p>
            <span className="text-xs bg-job/20 text-job px-2 py-1 rounded-full capitalize">
              {userType?.replace('-', ' ')}
            </span>
          </div>
          
          <div className="p-2">
            {profileLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-foreground/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-foreground/10 transition-colors text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
