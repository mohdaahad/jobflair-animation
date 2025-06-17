
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Mail, Lock, User, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<"job-seeker" | "job-provider">("job-seeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo login - in real app this would be API calls
    const userData = {
      id: "1",
      name: formData.name || "Demo User",
      email: formData.email,
      type: userType as "job-seeker" | "job-provider"
    };

    login(userData);

    // Redirect based on user type
    switch (userType) {
      case 'job-provider':
        navigate('/job-provider');
        break;
      case 'job-seeker':
        navigate('/job-seeker');
        break;
      default:
        navigate('/');
    }
  };

  // Demo admin login
  const handleAdminLogin = () => {
    const adminUser = {
      id: "admin",
      name: "Admin User",
      email: "admin@jobflair.com",
      type: "admin" as const
    };
    login(adminUser);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-md">
          <div className="glass-card p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">
                {isLogin ? "Welcome Back" : "Create an Account"}
              </h1>
              <p className="text-foreground/70">
                {isLogin 
                  ? "Sign in to access your account" 
                  : "Join our platform to find your dream job"}
              </p>
            </div>

            {!isLogin && (
              <div className="mb-6">
                <div className="flex gap-4">
                  <button
                    onClick={() => setUserType("job-seeker")}
                    className={`flex-1 flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
                      userType === "job-seeker" 
                        ? "glass bg-job/10 border border-job/20" 
                        : "glass hover:bg-foreground/5"
                    }`}
                  >
                    <User className={`h-6 w-6 mb-2 ${userType === "job-seeker" ? "text-job" : "text-foreground/60"}`} />
                    <span className={userType === "job-seeker" ? "text-job font-medium" : "text-foreground/60"}>
                      Job Seeker
                    </span>
                  </button>
                  <button
                    onClick={() => setUserType("job-provider")}
                    className={`flex-1 flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
                      userType === "job-provider" 
                        ? "glass bg-job/10 border border-job/20" 
                        : "glass hover:bg-foreground/5"
                    }`}
                  >
                    <Briefcase className={`h-6 w-6 mb-2 ${userType === "job-provider" ? "text-job" : "text-foreground/60"}`} />
                    <span className={userType === "job-provider" ? "text-job font-medium" : "text-foreground/60"}>
                      Employer
                    </span>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium block">Full Name</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      className="w-full py-2 pl-10 pr-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className="w-full py-2 pl-10 pr-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium block">Password</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="w-full py-2 pl-10 pr-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-1">
                  <label htmlFor="confirmPassword" className="text-sm font-medium block">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50">
                      <Lock className="h-5 w-5" />
                    </div>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="w-full py-2 pl-10 pr-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-job focus:ring-job"
                    />
                    <label htmlFor="remember" className="ml-2 block text-foreground/70">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-job hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 glass bg-job hover:bg-job-hover text-white rounded-xl transition-colors duration-200 font-medium"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Demo Admin Login Button */}
            <div className="mt-4">
              <button
                onClick={handleAdminLogin}
                className="w-full py-2.5 glass bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors duration-200 font-medium"
              >
                Demo Admin Login
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="text-foreground/70">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-job hover:underline"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
