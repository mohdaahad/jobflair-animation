
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ban, Search, User, AlertTriangle } from "lucide-react";
import { useState } from "react";

const BanUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [banReason, setBanReason] = useState("");

  const bannedUsers = [
    { id: 1, name: "John Spam", email: "spam@example.com", type: "Job Seeker", reason: "Spam behavior", date: "2024-01-15" },
    { id: 2, name: "Fake Company", email: "fake@company.com", type: "Job Provider", reason: "Fake job postings", date: "2024-01-10" },
  ];

  const handleBanUser = () => {
    console.log("Banning user:", { searchQuery, banReason });
  };

  const handleUnbanUser = (userId: number) => {
    console.log("Unbanning user:", userId);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Ban Management</h1>
            <p className="text-lg text-foreground/70">
              Manage banned users and job providers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ban User Section */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Ban className="h-5 w-5 text-red-500" />
                Ban User
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="search">Search User (Email or ID)</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                    <Input
                      id="search"
                      className="pl-10"
                      placeholder="Enter email or user ID"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="reason">Ban Reason</Label>
                  <Input
                    id="reason"
                    placeholder="Enter reason for ban"
                    value={banReason}
                    onChange={(e) => setBanReason(e.target.value)}
                  />
                </div>

                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={handleBanUser}
                  disabled={!searchQuery || !banReason}
                >
                  <Ban className="h-4 w-4 mr-2" />
                  Ban User
                </Button>
              </div>
            </div>

            {/* Currently Banned Users */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Banned Users ({bannedUsers.length})
              </h3>
              
              <div className="space-y-4">
                {bannedUsers.map((user) => (
                  <div key={user.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-foreground/50 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-foreground/70">{user.email}</p>
                          <p className="text-xs text-foreground/50">{user.type}</p>
                          <p className="text-xs text-red-500 mt-1">Reason: {user.reason}</p>
                          <p className="text-xs text-foreground/50">Banned: {user.date}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleUnbanUser(user.id)}
                      >
                        Unban
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BanUser;
