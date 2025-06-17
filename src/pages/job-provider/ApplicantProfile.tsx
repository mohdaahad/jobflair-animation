
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { User, Mail, Phone, MapPin, FileText } from "lucide-react";

const ApplicantProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-20 w-20 rounded-full bg-job/20 flex items-center justify-center">
                <User className="h-10 w-10 text-job" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-foreground/70">Software Developer</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-foreground/60" />
                    <span>john.doe@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-foreground/60" />
                    <span>+1 234 567 8900</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-foreground/60" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-job/20 text-job rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-8 flex gap-4">
              <Button className="flex-1">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="flex-1">
                <FileText className="h-4 w-4 mr-2" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicantProfile;
