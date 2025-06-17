
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Building, MapPin, Users, Star, MessageCircle } from "lucide-react";

const ProviderProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-20 w-20 rounded-full bg-job/20 flex items-center justify-center">
                <Building className="h-10 w-10 text-job" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Tech Solutions Inc</h1>
                <p className="text-foreground/70">Leading Technology Company</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.5 (120 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-foreground/60" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Company Overview</h3>
                <p className="text-foreground/70">
                  We are a leading technology company focused on innovative solutions 
                  for the modern digital world. Our team of experts works on cutting-edge 
                  projects that shape the future.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Company Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-foreground/60" />
                    <span>500+ Employees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-4 w-4 text-foreground/60" />
                    <span>Founded in 2010</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Company
              </Button>
              <Button variant="outline" className="flex-1">
                Follow Company
              </Button>
              <Button variant="outline">
                View Jobs
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderProfile;
