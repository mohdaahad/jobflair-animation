
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Star, Building } from "lucide-react";
import { useState } from "react";

const RateProvider = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Rating provider:", { id, rating, comment });
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">Rate Job Provider</h1>
              <p className="text-foreground/70">Share your experience with this employer</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Rating</label>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1 transition-colors ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      <Star className="h-8 w-8 fill-current" />
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-foreground/60 mt-2">
                  {rating > 0 && `${rating} out of 5 stars`}
                </p>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-2">
                  Your Review (Optional)
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                  rows={4}
                  placeholder="Share your experience working with this company..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={rating === 0}>
                Submit Rating
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RateProvider;
