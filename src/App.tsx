
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

// Admin Routes
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageJobSeekers from "./pages/admin/ManageJobSeekers";
import ManageJobProviders from "./pages/admin/ManageJobProviders";
import ManageJobRequests from "./pages/admin/ManageJobRequests";

// Job Provider Routes
import JobProviderDashboard from "./pages/JobProviderDashboard";
import PostJob from "./pages/job-provider/PostJob";
import BrowseJobSeekers from "./pages/job-provider/BrowseJobSeekers";
import AIScreening from "./pages/job-provider/AIScreening";
import ManageApplications from "./pages/job-provider/ManageApplications";
import JobProviderMessages from "./pages/job-provider/Messages";
import JobProviderSettings from "./pages/job-provider/Settings";

// Job Seeker Routes
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import Profile from "./pages/job-seeker/Profile";
import Applications from "./pages/job-seeker/Applications";
import Jobs from "./pages/job-seeker/Jobs";
import Favorites from "./pages/job-seeker/Favorites";
import JobSeekerMessages from "./pages/job-seeker/Messages";
import Notifications from "./pages/job-seeker/Notifications";

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
          <Route path="/job-provider/manage-requests" element={<ManageApplications />} />
          <Route path="/job-provider/messages" element={<JobProviderMessages />} />
          <Route path="/job-provider/settings" element={<JobProviderSettings />} />
          
          {/* Job Seeker Routes */}
          <Route path="/job-seeker" element={<JobSeekerDashboard />} />
          <Route path="/job-seeker/profile" element={<Profile />} />
          <Route path="/job-seeker/applications" element={<Applications />} />
          <Route path="/job-seeker/jobs" element={<Jobs />} />
          <Route path="/job-seeker/favorites" element={<Favorites />} />
          <Route path="/job-seeker/messages" element={<JobSeekerMessages />} />
          <Route path="/job-seeker/notifications" element={<Notifications />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
