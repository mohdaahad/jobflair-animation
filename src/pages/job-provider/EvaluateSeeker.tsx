
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Star, User } from "lucide-react";
import { useState } from "react";

const EvaluateSeeker = () => {
  const { seekerId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Evaluating seeker:", { seekerId, rating, comment });
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <User className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">Evaluate Job Seeker</h1>
              <p className="text-foreground/70">Rate and provide feedback</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-2">Comments</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                  rows={4}
                  placeholder="Share your feedback..."
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Evaluation
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EvaluateSeeker;
