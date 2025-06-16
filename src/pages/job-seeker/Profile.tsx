
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, User, Mail, Phone, MapPin } from "lucide-react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    title: "Frontend Developer",
    summary: "Experienced frontend developer with 3+ years in React and TypeScript...",
    skills: "React, TypeScript, JavaScript, CSS, HTML",
    experience: "3 years",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
            <p className="text-lg text-foreground/70">
              Update your profile information and resume
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-job to-job-accent rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <Button type="button" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
                <p className="text-sm text-foreground/70 mt-1">JPG, PNG up to 5MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                  <Input
                    id="phone"
                    className="pl-10"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                  <Input
                    id="location"
                    className="pl-10"
                    value={profileData.location}
                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                value={profileData.title}
                onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                placeholder="e.g. Senior React Developer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={profileData.summary}
                onChange={(e) => setProfileData({ ...profileData, summary: e.target.value })}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                value={profileData.skills}
                onChange={(e) => setProfileData({ ...profileData, skills: e.target.value })}
                placeholder="React, TypeScript, Node.js..."
              />
            </div>

            <div className="space-y-2">
              <Label>Resume Upload</Label>
              <div className="border-2 border-dashed border-foreground/20 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-foreground/50" />
                <p className="text-sm text-foreground/70">Upload your resume (PDF, DOC)</p>
                <Button type="button" variant="outline" className="mt-2">Choose File</Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">Save Changes</Button>
              <Button type="button" variant="outline" className="flex-1">Cancel</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
