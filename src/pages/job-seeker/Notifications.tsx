
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Bell, CheckCircle, Clock, MessageSquare, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "application",
      title: "Application Status Update",
      message: "Your application for Senior React Developer at TechCorp Inc has been reviewed",
      time: "2 hours ago",
      read: false,
      icon: Briefcase,
    },
    {
      id: 2,
      type: "message",
      title: "New Message",
      message: "Sarah Wilson from TechCorp Inc sent you a message",
      time: "4 hours ago",
      read: false,
      icon: MessageSquare,
    },
    {
      id: 3,
      type: "profile",
      title: "Profile View",
      message: "Your profile was viewed by 3 employers this week",
      time: "1 day ago",
      read: true,
      icon: User,
    },
    {
      id: 4,
      type: "interview",
      title: "Interview Scheduled",
      message: "Interview scheduled for Frontend Developer position at StartupXYZ",
      time: "2 days ago",
      read: true,
      icon: Clock,
    },
    {
      id: 5,
      type: "acceptance",
      title: "Job Offer Received",
      message: "Congratulations! You received a job offer from BigTech Solutions",
      time: "1 week ago",
      read: true,
      icon: CheckCircle,
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'application':
        return 'text-blue-500';
      case 'message':
        return 'text-green-500';
      case 'profile':
        return 'text-purple-500';
      case 'interview':
        return 'text-yellow-500';
      case 'acceptance':
        return 'text-emerald-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">Notifications</h1>
                <p className="text-lg text-foreground/70">
                  Stay updated with your job search activities
                </p>
              </div>
              <Button variant="outline">Mark All as Read</Button>
            </div>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`glass-card p-6 ${
                  !notification.read ? 'border-l-4 border-l-job' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full bg-foreground/5 ${getIconColor(notification.type)}`}>
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <span className="text-sm text-foreground/50">{notification.time}</span>
                    </div>
                    <p className="text-foreground/70">{notification.message}</p>
                    {!notification.read && (
                      <div className="flex items-center gap-2 mt-3">
                        <Button size="sm">View Details</Button>
                        <Button size="sm" variant="outline">Mark as Read</Button>
                      </div>
                    )}
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-job rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {notifications.length === 0 && (
            <div className="glass-card p-12 text-center">
              <Bell className="h-16 w-16 mx-auto mb-4 text-foreground/30" />
              <h2 className="text-xl font-semibold mb-2">No notifications</h2>
              <p className="text-foreground/70">
                You're all caught up! Check back later for new updates.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
