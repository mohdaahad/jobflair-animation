
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
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

// Admin Routes
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageJobSeekers from "./pages/admin/ManageJobSeekers";
import ManageJobProviders from "./pages/admin/ManageJobProviders";
import ManageJobRequests from "./pages/admin/ManageJobRequests";
import AdminChangePassword from "./pages/admin/AdminChangePassword";
import ClearJobs from "./pages/admin/ClearJobs";
import BanUser from "./pages/admin/BanUser";

// Job Provider Routes
import JobProviderDashboard from "./pages/JobProviderDashboard";
import PostJob from "./pages/job-provider/PostJob";
import BrowseJobSeekers from "./pages/job-provider/BrowseJobSeekers";
import AIScreening from "./pages/job-provider/AIScreening";
import ManageApplications from "./pages/job-provider/ManageApplications";
import JobProviderMessages from "./pages/job-provider/Messages";
import JobProviderSettings from "./pages/job-provider/Settings";
import JobProviderSignUp from "./pages/job-provider/JobProviderSignUp";
import JobProviderChangePassword from "./pages/job-provider/ChangePassword";
import EvaluateSeeker from "./pages/job-provider/EvaluateSeeker";
import DeleteJob from "./pages/job-provider/DeleteJob";
import StoryUploader from "./pages/job-provider/StoryUploader";
import ApplicantProfile from "./pages/job-provider/ApplicantProfile";

// Job Seeker Routes
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import Profile from "./pages/job-seeker/Profile";
import Applications from "./pages/job-seeker/Applications";
import Jobs from "./pages/job-seeker/Jobs";
import Favorites from "./pages/job-seeker/Favorites";
import JobSeekerMessages from "./pages/job-seeker/Messages";
import Notifications from "./pages/job-seeker/Notifications";
import JobSeekerChangePassword from "./pages/job-seeker/ChangePassword";
import Evaluation from "./pages/job-seeker/Evaluation";
import AcceptedJobs from "./pages/job-seeker/AcceptedJobs";
import PrivateOffers from "./pages/job-seeker/PrivateOffers";
import SearchProvider from "./pages/job-seeker/SearchProvider";
import ProviderProfile from "./pages/job-seeker/ProviderProfile";
import AIScreeningSeeker from "./pages/job-seeker/AIScreeningSeeker";
import RateProvider from "./pages/job-seeker/RateProvider";

// AI Routes
import AIMatchResult from "./pages/ai/AIMatchResult";

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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/job-seekers" element={<ManageJobSeekers />} />
          <Route path="/admin/job-providers" element={<ManageJobProviders />} />
          <Route path="/admin/job-requests" element={<ManageJobRequests />} />
          <Route path="/admin/change-password" element={<AdminChangePassword />} />
          <Route path="/admin/clear-jobs" element={<ClearJobs />} />
          <Route path="/admin/ban-user" element={<BanUser />} />
          
          {/* Job Provider Routes */}
          <Route path="/job-provider" element={<JobProviderDashboard />} />
          <Route path="/job-provider/sign-up" element={<JobProviderSignUp />} />
          <Route path="/job-provider/post-job" element={<PostJob />} />
          <Route path="/job-provider/browse-seekers" element={<BrowseJobSeekers />} />
          <Route path="/job-provider/ai-screening" element={<AIScreening />} />
          <Route path="/job-provider/manage-requests" element={<ManageApplications />} />
          <Route path="/job-provider/messages" element={<JobProviderMessages />} />
          <Route path="/job-provider/settings" element={<JobProviderSettings />} />
          <Route path="/job-provider/change-password" element={<JobProviderChangePassword />} />
          <Route path="/job-provider/evaluate/:seekerId" element={<EvaluateSeeker />} />
          <Route path="/job-provider/delete-job/:jobId" element={<DeleteJob />} />
          <Route path="/job-provider/story" element={<StoryUploader />} />
          <Route path="/job-provider/applicant/:id" element={<ApplicantProfile />} />
          
          {/* Job Seeker Routes */}
          <Route path="/job-seeker" element={<JobSeekerDashboard />} />
          <Route path="/job-seeker/profile" element={<Profile />} />
          <Route path="/job-seeker/applications" element={<Applications />} />
          <Route path="/job-seeker/jobs" element={<Jobs />} />
          <Route path="/job-seeker/favorites" element={<Favorites />} />
          <Route path="/job-seeker/messages" element={<JobSeekerMessages />} />
          <Route path="/job-seeker/notifications" element={<Notifications />} />
          <Route path="/job-seeker/change-password" element={<JobSeekerChangePassword />} />
          <Route path="/job-seeker/evaluation" element={<Evaluation />} />
          <Route path="/job-seeker/accepted-jobs" element={<AcceptedJobs />} />
          <Route path="/job-seeker/private-offers" element={<PrivateOffers />} />
          <Route path="/job-seeker/search-provider" element={<SearchProvider />} />
          <Route path="/job-seeker/provider/:id" element={<ProviderProfile />} />
          <Route path="/job-seeker/ai-screening" element={<AIScreeningSeeker />} />
          <Route path="/job-seeker/rate-provider/:id" element={<RateProvider />} />
          
          {/* AI Routes */}
          <Route path="/ai/match-result" element={<AIMatchResult />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
