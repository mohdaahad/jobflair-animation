
import { Briefcase, Users, Building } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

function StatCard({ icon, value, label, className }: StatCardProps) {
  return (
    <div className={cn("glass-card p-6 text-center", className)}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2 animate-pulse-light">
        {value}
      </h3>
      <p className="text-foreground/70">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join thousands of job seekers and companies already using JobFlair
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<Briefcase className="h-10 w-10 text-job" />}
            value="10,000+"
            label="Active Jobs"
            className="animate-fade-in"
          />
          <StatCard 
            icon={<Users className="h-10 w-10 text-job-accent" />}
            value="1M+"
            label="Job Seekers"
            className="animate-fade-in animation-delay-100"
          />
          <StatCard 
            icon={<Building className="h-10 w-10 text-job" />}
            value="5,000+"
            label="Companies"
            className="animate-fade-in animation-delay-200"
          />
        </div>
      </div>
    </section>
  );
}
