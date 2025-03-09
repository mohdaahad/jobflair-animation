
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to advance your career?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Create your profile, upload your resume, and start connecting with leading companies looking for talent like yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass px-6 py-3 rounded-full bg-job hover:bg-job-hover text-white transition-all duration-200 font-medium">
              Find Your Dream Job
            </button>
            <button className="glass px-6 py-3 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200 font-medium flex items-center justify-center gap-2">
              <span>For Employers</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
