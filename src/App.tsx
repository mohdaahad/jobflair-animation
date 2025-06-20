
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

// Job Seeker Pages
const JobSeekerDashboard = React.lazy(() => import('./pages/JobSeekerDashboard'));
const Jobs = React.lazy(() => import('./pages/job-seeker/Jobs'));
const SearchProvider = React.lazy(() => import('./pages/job-seeker/SearchProvider'));
const Favorites = React.lazy(() => import('./pages/job-seeker/Favorites'));
const Applications = React.lazy(() => import('./pages/job-seeker/Applications'));

// Job Provider Pages
const JobProviderDashboard = React.lazy(() => import('./pages/JobProviderDashboard'));

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
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
              
              {/* Job Seeker Routes */}
              <Route path="/job-seeker" element={<JobSeekerDashboard />} />
              <Route path="/job-seeker/jobs" element={<Jobs />} />
              <Route path="/job-seeker/search-provider" element={<SearchProvider />} />
              <Route path="/job-seeker/favorites" element={<Favorites />} />
              <Route path="/job-seeker/applications" element={<Applications />} />
              
              {/* Job Provider Routes */}
              <Route path="/job-provider" element={<JobProviderDashboard />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
