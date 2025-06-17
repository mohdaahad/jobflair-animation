
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, AlertTriangle, Calendar } from "lucide-react";
import { useState } from "react";

const ClearJobs = () => {
  const [selectedAction, setSelectedAction] = useState("");

  const jobStats = [
    { type: "Expired Jobs", count: 156, color: "text-orange-500" },
    { type: "Inactive Jobs", count: 23, color: "text-red-500" },
    { type: "Duplicate Jobs", count: 8, color: "text-yellow-500" },
  ];

  const handleClearJobs = (type: string) => {
    console.log(`Clearing ${type}`);
    setSelectedAction(type);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Clear Jobs</h1>
            <p className="text-lg text-foreground/70">
              Manage and remove expired or invalid job postings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {jobStats.map((stat, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-foreground/70">{stat.type}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.count}</p>
                  </div>
                  <Trash2 className={`h-8 w-8 ${stat.color}`} />
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleClearJobs(stat.type)}
                >
                  Clear {stat.type}
                </Button>
              </div>
            ))}
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Bulk Actions
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">Clear All Expired Jobs</h4>
                  <p className="text-sm text-foreground/70">Remove jobs older than 30 days</p>
                </div>
                <Button variant="destructive">
                  <Calendar className="h-4 w-4 mr-2" />
                  Clear Expired
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">Clear All Inactive Jobs</h4>
                  <p className="text-sm text-foreground/70">Remove jobs with no applications</p>
                </div>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Inactive
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">Clear All Jobs</h4>
                  <p className="text-sm text-foreground/70 text-red-500">⚠️ This action cannot be undone</p>
                </div>
                <Button variant="destructive">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClearJobs;
