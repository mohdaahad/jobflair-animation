
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Companies from "./pages/Companies";
import Resources from "./pages/Resources";
import ForEmployers from "./pages/ForEmployers";
import CategoryJobs from "./pages/CategoryJobs";
import SignIn from "./pages/SignIn";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageJobSeekers from "./pages/admin/ManageJobSeekers";
import ManageJobProviders from "./pages/admin/ManageJobProviders";
import ManageJobRequests from "./pages/admin/ManageJobRequests";
import JobProviderDashboard from "./pages/JobProviderDashboard";
import PostJob from "./pages/job-provider/PostJob";
import BrowseJobSeekers from "./pages/job-provider/BrowseJobSeekers";
import AIScreening from "./pages/job-provider/AIScreening";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/category/:category" element={<CategoryJobs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/job-seekers" element={<ManageJobSeekers />} />
          <Route path="/admin/job-providers" element={<ManageJobProviders />} />
          <Route path="/admin/job-requests" element={<ManageJobRequests />} />
          
          {/* Job Provider Routes */}
          <Route path="/job-provider" element={<JobProviderDashboard />} />
          <Route path="/job-provider/post-job" element={<PostJob />} />
          <Route path="/job-provider/browse-seekers" element={<BrowseJobSeekers />} />
          <Route path="/job-provider/ai-screening" element={<AIScreening />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
