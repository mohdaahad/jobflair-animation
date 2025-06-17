
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Brain, FileText } from "lucide-react";
import { useState } from "react";

const AIScreeningSeeker = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Brain className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">AI Resume Screening</h1>
              <p className="text-foreground/70">Get AI-powered analysis of your resume</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Upload Your Resume</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div>
                    <label htmlFor="resume" className="cursor-pointer">
                      <span className="text-job font-medium">Choose file</span>
                      <input
                        id="resume"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setResume(e.target.files?.[0] || null)}
                      />
                    </label>
                    <p className="text-sm text-foreground/60 mt-2">PDF, DOC, or DOCX</p>
                  </div>
                </div>

                {resume && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600">{resume.name}</span>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleAnalyze} 
                  className="w-full mt-4" 
                  disabled={!resume || isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Analysis Results</h3>
                {isAnalyzing ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-job mx-auto"></div>
                    <p className="mt-4 text-foreground/70">Analyzing your resume...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Overall Score</h4>
                      <p className="text-2xl font-bold text-blue-600">85/100</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Strengths</h4>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Strong technical skills</li>
                        <li>• Relevant work experience</li>
                        <li>• Clear formatting</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Recommendations</h4>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Add more quantified achievements</li>
                        <li>• Include relevant keywords</li>
                        <li>• Expand project descriptions</li>
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIScreeningSeeker;
