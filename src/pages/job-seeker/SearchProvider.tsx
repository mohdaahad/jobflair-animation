
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Building, Star } from "lucide-react";
import { useState } from "react";

const SearchProvider = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const providers = [
    {
      id: 1,
      name: "Tech Solutions Inc",
      location: "New York, NY",
      rating: 4.5,
      jobs: 12,
      description: "Leading technology company"
    },
    {
      id: 2,
      name: "Innovation Labs",
      location: "San Francisco, CA",
      rating: 4.8,
      jobs: 8,
      description: "Cutting-edge software development"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Search className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">Search Job Providers</h1>
              <p className="text-foreground/70">Find companies by location and preferences</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                <Input
                  className="pl-10"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                <Input
                  className="pl-10"
                  placeholder="Location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <Button className="w-full mb-8">
              Search Providers
            </Button>

            <div className="space-y-6">
              {providers.map((provider) => (
                <Card key={provider.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-job/20 flex items-center justify-center">
                        <Building className="h-6 w-6 text-job" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{provider.name}</h3>
                        <p className="text-foreground/70">{provider.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{provider.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-foreground/60" />
                      <span className="text-sm">{provider.location}</span>
                    </div>
                    <span className="text-sm text-foreground/60">{provider.jobs} open positions</span>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">View Profile</Button>
                    <Button className="flex-1">Follow</Button>
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

export default SearchProvider;
