
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock, User } from "lucide-react";
import { useState } from "react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin login:", formData);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-md">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Shield className="h-12 w-12 mx-auto mb-4 text-red-500" />
              <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
              <p className="text-foreground/70">Access the administrative dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                  <Input
                    id="username"
                    type="text"
                    className="pl-10"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    placeholder="Enter admin username"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                  <Input
                    id="password"
                    type="password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Enter admin password"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Login as Admin
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-foreground/60">
                Authorized personnel only
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;
