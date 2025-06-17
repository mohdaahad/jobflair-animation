
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Building, MapPin, DollarSign } from "lucide-react";

const PrivateOffers = () => {
  const privateOffers = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Elite Tech Corp",
      location: "Remote",
      salary: "$120,000 - $150,000",
      description: "Exclusive opportunity for an experienced developer"
    },
    {
      id: 2,
      title: "Lead Product Designer",
      company: "Design Studio Pro",
      location: "Los Angeles, CA",
      salary: "$110,000 - $130,000",
      description: "Private invitation to join our design team"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Lock className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">Private Offers</h1>
              <p className="text-foreground/70">Exclusive job opportunities just for you</p>
            </div>

            <div className="space-y-6">
              {privateOffers.map((offer) => (
                <Card key={offer.id} className="p-6 border-job/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-job/20 flex items-center justify-center">
                        <Building className="h-6 w-6 text-job" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{offer.title}</h3>
                        <p className="text-foreground/70">{offer.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-job/20 text-job rounded-full text-sm font-medium">
                      Private
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-foreground/60" />
                      <span className="text-sm">{offer.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-foreground/60" />
                      <span className="text-sm">{offer.salary}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1">Accept Offer</Button>
                    <Button variant="outline" className="flex-1">View Details</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivateOffers;
