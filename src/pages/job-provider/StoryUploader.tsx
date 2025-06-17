
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image } from "lucide-react";
import { useState } from "react";

const StoryUploader = () => {
  const [story, setStory] = useState({
    title: "",
    description: "",
    image: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Uploading story:", story);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Image className="h-12 w-12 mx-auto mb-4 text-job" />
              <h1 className="text-3xl font-bold mb-2">Share Your Story</h1>
              <p className="text-foreground/70">Tell job seekers about your company</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Story Title</Label>
                <Input
                  id="title"
                  value={story.title}
                  onChange={(e) => setStory({...story, title: e.target.value})}
                  placeholder="Enter story title"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  value={story.description}
                  onChange={(e) => setStory({...story, description: e.target.value})}
                  className="w-full p-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                  rows={4}
                  placeholder="Tell your company story..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">Upload Image</Label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-xl">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <label htmlFor="image" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Upload an image
                        </span>
                        <input
                          id="image"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={(e) => setStory({...story, image: e.target.files?.[0] || null})}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Share Story
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoryUploader;
