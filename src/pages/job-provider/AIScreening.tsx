
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Upload, Brain, FileText, Target, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AIScreening = () => {
  const [uploadedResumes, setUploadedResumes] = useState([
    {
      id: 1,
      name: "John_Doe_Resume.pdf",
      aiScore: 85,
      skills: ["React", "JavaScript", "Node.js", "AWS"],
      experience: "5 years",
      status: "analyzed",
    },
    {
      id: 2,
      name: "Jane_Smith_Resume.pdf",
      aiScore: 92,
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      experience: "3 years",
      status: "analyzed",
    },
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Files uploaded:", files);
      // Handle file upload logic
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">AI Resume Screening Tool</h1>
            <p className="text-lg text-foreground/70">
              Automatically analyze resumes, extract skills, and generate AI-powered candidate scores
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload Resumes
                  </CardTitle>
                  <CardDescription>
                    Upload candidate resumes for AI analysis and scoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-foreground/20 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-foreground/50" />
                    <p className="text-lg mb-2">Drop resumes here or click to upload</p>
                    <p className="text-sm text-foreground/70 mb-4">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload">
                      <Button className="cursor-pointer">Choose Files</Button>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analyzed Resumes</CardTitle>
                  <CardDescription>
                    View AI analysis results and candidate scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {uploadedResumes.map((resume) => (
                      <div key={resume.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-blue-500" />
                            <span className="font-medium">{resume.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-foreground/70">AI Score:</span>
                            <span className="font-bold text-green-600">{resume.aiScore}/100</span>
                          </div>
                        </div>
                        
                        <Progress value={resume.aiScore} className="mb-3" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-foreground/70">Experience: </span>
                            <span className="font-medium">{resume.experience}</span>
                          </div>
                          <div>
                            <span className="text-foreground/70">Skills: </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {resume.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-job/10 text-job text-xs rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Contact Candidate
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <Target className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">Smart Matching</p>
                      <p className="text-xs text-foreground/70">Match candidates to job requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <FileText className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">Skill Extraction</p>
                      <p className="text-xs text-foreground/70">Automatically extract skills from resumes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <Award className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-sm">AI Scoring</p>
                      <p className="text-xs text-foreground/70">Generate candidate compatibility scores</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analysis Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/70">Total Resumes</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/70">Average Score</span>
                      <span className="font-medium">88.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/70">High Matches</span>
                      <span className="font-medium text-green-600">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/70">Processing Time</span>
                      <span className="font-medium">~2 minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIScreening;
