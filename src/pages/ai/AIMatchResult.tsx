
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Star, CheckCircle, User, Briefcase } from "lucide-react";

const AIMatchResult = () => {
  const matchResults = [
    {
      jobTitle: "Senior React Developer",
      company: "TechCorp Inc",
      matchScore: 95,
      skills: ["React", "TypeScript", "Node.js"],
      missing: ["GraphQL"],
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop"
    },
    {
      jobTitle: "Frontend Developer",
      company: "StartupXYZ",
      matchScore: 87,
      skills: ["JavaScript", "React", "CSS"],
      missing: ["Vue.js", "Angular"],
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=50&h=50&fit=crop"
    },
    {
      jobTitle: "Full Stack Developer",
      company: "DevStudio",
      matchScore: 78,
      skills: ["React", "Python", "SQL"],
      missing: ["Docker", "AWS"],
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=50&h=50&fit=crop"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 75) return "text-yellow-500";
    return "text-red-500";
  };

  const getProgressColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-8 w-8 text-purple-500" />
              <h1 className="text-3xl font-bold">AI Match Results</h1>
            </div>
            <p className="text-lg text-foreground/70">
              AI-powered job matching based on your profile and skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <h3 className="font-semibold">Best Match</h3>
              <p className="text-2xl font-bold text-green-500">95%</p>
            </div>
            <div className="glass-card p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h3 className="font-semibold">Total Matches</h3>
              <p className="text-2xl font-bold">{matchResults.length}</p>
            </div>
            <div className="glass-card p-6 text-center">
              <User className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <h3 className="font-semibold">Profile Score</h3>
              <p className="text-2xl font-bold text-blue-500">92%</p>
            </div>
          </div>

          <div className="space-y-6">
            {matchResults.map((match, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={match.logo}
                      alt={match.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{match.jobTitle}</h3>
                      <p className="text-foreground/70">{match.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getScoreColor(match.matchScore)}`}>
                      {match.matchScore}%
                    </p>
                    <p className="text-sm text-foreground/70">Match Score</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Match Percentage</span>
                    <span className="text-sm text-foreground/70">{match.matchScore}%</span>
                  </div>
                  <Progress value={match.matchScore} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Matching Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {match.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Skills to Develop</h4>
                    <div className="flex flex-wrap gap-2">
                      {match.missing.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Briefcase className="h-4 w-4 mr-2" />
                    View Job
                  </Button>
                  <Button size="sm">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIMatchResult;
