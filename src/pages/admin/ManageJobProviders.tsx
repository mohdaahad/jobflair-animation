
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Search, Ban, Eye, Edit, Trash2, Filter, Briefcase } from "lucide-react";
import { useState } from "react";

const ManageJobProviders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const jobProviders = [
    {
      id: 1,
      company: "TechCorp",
      contact: "hr@techcorp.com",
      location: "New York, NY",
      industry: "Technology",
      status: "Verified",
      jobsPosted: 15,
      joinDate: "2024-01-10"
    },
    {
      id: 2,
      company: "DesignHub",
      contact: "hiring@designhub.com",
      location: "San Francisco, CA",
      industry: "Design",
      status: "Pending",
      jobsPosted: 8,
      joinDate: "2024-02-15"
    },
    {
      id: 3,
      company: "StartupXYZ",
      contact: "jobs@startupxyz.com",
      location: "Austin, TX",
      industry: "Startup",
      status: "Banned",
      jobsPosted: 3,
      joinDate: "2023-11-20"
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Manage Job Providers</h1>
            <p className="text-lg text-foreground/70">
              View and manage all employer accounts
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search job providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 glass rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-job"
              />
            </div>
            <button className="glass px-4 py-2 rounded-lg hover:bg-foreground/10 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-foreground/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Jobs Posted</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {jobProviders.map((provider) => (
                    <tr key={provider.id} className="hover:bg-foreground/5">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-lg glass flex items-center justify-center mr-4">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{provider.company}</div>
                            <div className="text-sm text-foreground/70">{provider.contact}</div>
                            <div className="text-xs text-foreground/50">{provider.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{provider.industry}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{provider.jobsPosted}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                          provider.status === 'Verified' ? 'bg-green-100 text-green-800' :
                          provider.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {provider.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-yellow-600 hover:text-yellow-900">
                            <Ban className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageJobProviders;
