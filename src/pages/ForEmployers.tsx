
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Users, Target, LineChart, PieChart } from "lucide-react";

const ForEmployers = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Recruit Top Talent</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Post jobs, find candidates, and build your team with our comprehensive hiring solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8">
              <Users className="h-12 w-12 text-job mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Find Quality Candidates</h2>
              <p className="text-foreground/80 mb-4">
                Access our database of qualified candidates and use AI-matching to find the perfect fit for your company.
              </p>
              <button className="glass bg-job hover:bg-job-hover text-white px-4 py-2 rounded-full transition-colors duration-200">
                Start Recruiting
              </button>
            </div>
            
            <div className="glass-card p-8">
              <Target className="h-12 w-12 text-job mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Post Jobs & Get Noticed</h2>
              <p className="text-foreground/80 mb-4">
                Reach thousands of job seekers with our targeted job postings and premium visibility options.
              </p>
              <button className="glass bg-job hover:bg-job-hover text-white px-4 py-2 rounded-full transition-colors duration-200">
                Post a Job
              </button>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Recruiting Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Basic",
                  price: "$99",
                  period: "per month",
                  features: ["5 job postings", "Basic candidate filtering", "Standard support"]
                },
                {
                  name: "Professional",
                  price: "$299",
                  period: "per month",
                  features: ["15 job postings", "Advanced candidate matching", "Priority support", "Featured listings"]
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  features: ["Unlimited job postings", "AI talent matching", "Dedicated account manager", "Custom integration"]
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-card p-6 text-center ${index === 1 ? 'ring-2 ring-job' : ''}`}>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-foreground/70"> {plan.period}</span>
                  </div>
                  <ul className="text-left mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="mr-2 text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 rounded-full ${index === 1 ? 'bg-job text-white' : 'glass hover:bg-foreground/10'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForEmployers;
