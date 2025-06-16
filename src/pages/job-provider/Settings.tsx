
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Building, User, Bell, Shield, Upload } from "lucide-react";

const Settings = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "TechCorp Inc",
    website: "https://techcorp.com",
    description: "Leading technology company focused on innovation...",
    industry: "Technology",
    size: "51-200 employees",
    location: "New York, NY",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    applicationAlerts: true,
    messageAlerts: true,
    weeklyReports: false,
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Company profile updated:", companyData);
  };

  const handleSaveNotifications = () => {
    console.log("Notification settings updated:", notifications);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
            <p className="text-lg text-foreground/70">
              Manage your company profile and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Settings Navigation */}
            <div className="space-y-2">
              <div className="glass-card p-4">
                <nav className="space-y-2">
                  <a href="#profile" className="flex items-center gap-3 p-2 rounded-lg bg-job/10 text-job">
                    <Building className="h-5 w-5" />
                    Company Profile
                  </a>
                  <a href="#notifications" className="flex items-center gap-3 p-2 rounded-lg hover:bg-foreground/5 transition-colors">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </a>
                  <a href="#security" className="flex items-center gap-3 p-2 rounded-lg hover:bg-foreground/5 transition-colors">
                    <Shield className="h-5 w-5" />
                    Security
                  </a>
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Company Profile */}
              <div id="profile" className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="h-6 w-6 text-job" />
                  <h2 className="text-xl font-semibold">Company Profile</h2>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-job to-job-accent rounded-lg flex items-center justify-center">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <Button type="button" variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Logo
                      </Button>
                      <p className="text-sm text-foreground/70 mt-1">JPG, PNG up to 5MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={companyData.companyName}
                        onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={companyData.website}
                        onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Company Description</Label>
                    <Textarea
                      id="description"
                      value={companyData.description}
                      onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        value={companyData.industry}
                        onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="size">Company Size</Label>
                      <Input
                        id="size"
                        value={companyData.size}
                        onChange={(e) => setCompanyData({ ...companyData, size: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={companyData.location}
                        onChange={(e) => setCompanyData({ ...companyData, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button type="submit">Save Profile</Button>
                </form>
              </div>

              {/* Notification Settings */}
              <div id="notifications" className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="h-6 w-6 text-job" />
                  <h2 className="text-xl font-semibold">Notification Preferences</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-foreground/70">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, emailNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Application Alerts</Label>
                      <p className="text-sm text-foreground/70">Get notified when someone applies to your jobs</p>
                    </div>
                    <Switch
                      checked={notifications.applicationAlerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, applicationAlerts: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Message Alerts</Label>
                      <p className="text-sm text-foreground/70">Notifications for new messages from candidates</p>
                    </div>
                    <Switch
                      checked={notifications.messageAlerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, messageAlerts: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-foreground/70">Weekly summary of your job postings and applications</p>
                    </div>
                    <Switch
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveNotifications} className="mt-6">
                  Save Preferences
                </Button>
              </div>

              {/* Security Settings */}
              <div id="security" className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-job" />
                  <h2 className="text-xl font-semibold">Security</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Change Password</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
