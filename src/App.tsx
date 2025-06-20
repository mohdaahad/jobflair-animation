
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { LoadingSpinner } from './components/ui/loading';

// Lazy load components for better performance
const Index = React.lazy(() => import('./pages/Index'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const ForEmployers = React.lazy(() => import('./pages/ForEmployers'));
const Companies = React.lazy(() => import('./pages/Companies'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CategoryJobs = React.lazy(() => import('./pages/CategoryJobs'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Admin Pages
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const ManageJobSeekers = React.lazy(() => import('./pages/admin/ManageJobSeekers'));
const ManageJobProviders = React.lazy(() => import('./pages/admin/ManageJobProviders'));
const ManageJobRequests = React.lazy(() => import('./pages/admin/ManageJobRequests'));
const AdminChangePassword = React.lazy(() => import('./pages/admin/AdminChangePassword'));
const ClearJobs = React.lazy(() => import('./pages/admin/ClearJobs'));
const BanUser = React.lazy(() => import('./pages/admin/BanUser'));

// Job Seeker Pages
const JobSeekerDashboard = React.lazy(() => import('./pages/JobSeekerDashboard'));
const Profile = React.lazy(() => import('./pages/job-seeker/Profile'));
const Applications = React.lazy(() => import('./pages/job-seeker/Applications'));
const Jobs = React.lazy(() => import('./pages/job-seeker/Jobs'));
const Favorites = React.lazy(() => import('./pages/job-seeker/Favorites'));
const JobSeekerMessages = React.lazy(() => import('./pages/job-seeker/Messages'));
const Notifications = React.lazy(() => import('./pages/job-seeker/Notifications'));
const JobSeekerChangePassword = React.lazy(() => import('./pages/job-seeker/ChangePassword'));
const Evaluation = React.lazy(() => import('./pages/job-seeker/Evaluation'));
const AcceptedJobs = React.lazy(() => import('./pages/job-seeker/AcceptedJobs'));
const PrivateOffers = React.lazy(() => import('./pages/job-seeker/PrivateOffers'));
const SearchProvider = React.lazy(() => import('./pages/job-seeker/SearchProvider'));
const ProviderProfile = React.lazy(() => import('./pages/job-seeker/ProviderProfile'));
const AIScreeningSeeker = React.lazy(() => import('./pages/job-seeker/AIScreeningSeeker'));
const RateProvider = React.lazy(() => import('./pages/job-seeker/RateProvider'));

// Job Provider Pages
const JobProviderDashboard = React.lazy(() => import('./pages/JobProviderDashboard'));
const PostJob = React.lazy(() => import('./pages/job-provider/PostJob'));
const BrowseJobSeekers = React.lazy(() => import('./pages/job-provider/BrowseJobSeekers'));
const AIScreening = React.lazy(() => import('./pages/job-provider/AIScreening'));
const ManageApplications = React.lazy(() => import('./pages/job-provider/ManageApplications'));
const JobProviderMessages = React.lazy(() => import('./pages/job-provider/Messages'));
const JobProviderSettings = React.lazy(() => import('./pages/job-provider/Settings'));
const JobProviderSignUp = React.lazy(() => import('./pages/job-provider/JobProviderSignUp'));
const JobProviderChangePassword = React.lazy(() => import('./pages/job-provider/ChangePassword'));
const EvaluateSeeker = React.lazy(() => import('./pages/job-provider/EvaluateSeeker'));
const DeleteJob = React.lazy(() => import('./pages/job-provider/DeleteJob'));
const StoryUploader = React.lazy(() => import('./pages/job-provider/StoryUploader'));
const ApplicantProfile = React.lazy(() => import('./pages/job-provider/ApplicantProfile'));

// AI Pages
const AIMatchResult = React.lazy(() => import('./pages/ai/AIMatchResult'));

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/employers" element={<ForEmployers />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/category/:category" element={<CategoryJobs />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/job-seekers" element={<ManageJobSeekers />} />
              <Route path="/admin/job-providers" element={<ManageJobProviders />} />
              <Route path="/admin/job-requests" element={<ManageJobRequests />} />
              <Route path="/admin/change-password" element={<AdminChangePassword />} />
              <Route path="/admin/clear-jobs" element={<ClearJobs />} />
              <Route path="/admin/ban-user" element={<BanUser />} />
              
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
              
              {/* Job Provider Routes */}
              <Route path="/job-provider" element={<JobProviderDashboard />} />
              <Route path="/job-provider/sign-up" element={<JobProviderSignUp />} />
              <Route path="/job-provider/post-job" element={<PostJob />} />
              <Route path="/job-provider/browse-seekers" element={<BrowseJobSeekers />} />
              <Route path="/job-provider/ai-screening" element={<AIScreening />} />
              <Route path="/job-provider/manage-applications" element={<ManageApplications />} />
              <Route path="/job-provider/messages" element={<JobProviderMessages />} />
              <Route path="/job-provider/settings" element={<JobProviderSettings />} />
              <Route path="/job-provider/change-password" element={<JobProviderChangePassword />} />
              <Route path="/job-provider/evaluate/:seekerId" element={<EvaluateSeeker />} />
              <Route path="/job-provider/delete-job/:jobId" element={<DeleteJob />} />
              <Route path="/job-provider/story" element={<StoryUploader />} />
              <Route path="/job-provider/applicant/:id" element={<ApplicantProfile />} />
              
              {/* AI Routes */}
              <Route path="/ai/match-result" element={<AIMatchResult />} />
              
              {/* 404 Route - Must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
