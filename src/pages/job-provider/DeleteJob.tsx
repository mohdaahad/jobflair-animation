
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Trash2, AlertTriangle } from "lucide-react";

const DeleteJob = () => {
  const { jobId } = useParams();

  const handleDelete = () => {
    console.log("Deleting job:", jobId);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-md">
          <div className="glass-card p-8 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-2xl font-bold mb-4">Delete Job</h1>
            <p className="text-foreground/70 mb-6">
              Are you sure you want to delete this job posting? This action cannot be undone.
            </p>
            
            <div className="space-y-3">
              <Button onClick={handleDelete} variant="destructive" className="w-full">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Job
              </Button>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteJob;
