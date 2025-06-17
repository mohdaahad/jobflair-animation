
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";

const Evaluation = () => {
  const evaluations = [
    { company: "Tech Corp", rating: 4.5, comment: "Excellent communication skills" },
    { company: "StartupXYZ", rating: 4.0, comment: "Great technical abilities" },
    { company: "BigCorp Inc", rating: 5.0, comment: "Outstanding performance" }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">Your Evaluations</h1>
              <p className="text-foreground/70">See feedback from employers</p>
            </div>

            <div className="space-y-6">
              {evaluations.map((evaluation, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{evaluation.company}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{evaluation.rating}</span>
                    </div>
                  </div>
                  <p className="text-foreground/70">{evaluation.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Evaluation;
