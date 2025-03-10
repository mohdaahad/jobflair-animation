
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BookOpen, FileText, Video, Headphones } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Career Resources</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Helpful guides, tips, and tools to advance your career
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: "#3B82F620" }}>
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold">Resume Guides</h2>
              </div>
              <p className="text-foreground/80 mb-4">Learn how to craft a resume that stands out and gets you noticed by top employers.</p>
              <ul className="space-y-2">
                {["Resume Templates", "ATS-Friendly Tips", "Cover Letter Samples"].map((item, i) => (
                  <li key={i} className="text-sm hover:text-job cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: "#10B98120" }}>
                  <FileText className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold">Interview Prep</h2>
              </div>
              <p className="text-foreground/80 mb-4">Prepare for your interviews with our comprehensive guides and practice questions.</p>
              <ul className="space-y-2">
                {["Common Questions", "Behavioral Interviews", "Technical Interviews"].map((item, i) => (
                  <li key={i} className="text-sm hover:text-job cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: "#EC489920" }}>
                  <Video className="h-6 w-6 text-pink-500" />
                </div>
                <h2 className="text-xl font-semibold">Video Tutorials</h2>
              </div>
              <p className="text-foreground/80 mb-4">Watch expert-led videos on job searching, career development, and more.</p>
              <ul className="space-y-2">
                {["Job Search Strategies", "Networking Tips", "Career Transitions"].map((item, i) => (
                  <li key={i} className="text-sm hover:text-job cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: "#F59E0B20" }}>
                  <Headphones className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="text-xl font-semibold">Career Podcasts</h2>
              </div>
              <p className="text-foreground/80 mb-4">Listen to industry experts share insights and advice on various career topics.</p>
              <ul className="space-y-2">
                {["Industry Trends", "Leadership Skills", "Work-Life Balance"].map((item, i) => (
                  <li key={i} className="text-sm hover:text-job cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
