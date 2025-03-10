
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">About JobFlair</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Connecting talented professionals with their dream careers through innovation and technology
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-foreground/80 mb-4">
                JobFlair was founded in 2023 with a vision to revolutionize the job search experience. We recognized the challenges that both job seekers and employers face in the hiring process and set out to create a platform that makes finding the perfect match simpler and more efficient.
              </p>
              <p className="text-foreground/80 mb-4">
                Our team of industry experts and tech enthusiasts combined their knowledge to build an innovative job portal that leverages the latest technologies, including AI and machine learning, to provide personalized job recommendations and streamline the hiring process.
              </p>
              <p className="text-foreground/80">
                Today, JobFlair is trusted by thousands of job seekers and hundreds of companies worldwide, facilitating meaningful connections that drive careers and businesses forward.
              </p>
            </div>
            <div className="flex-1 glass-card p-6 flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Team at work" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "People First",
                  description: "We believe in putting people at the center of everything we do, focusing on their needs and aspirations.",
                  color: "#3B82F6"
                },
                {
                  icon: Target,
                  title: "Innovation",
                  description: "We constantly explore new technologies and approaches to improve the job search and hiring experience.",
                  color: "#10B981"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for excellence in our platform, our service, and the connections we facilitate.",
                  color: "#F59E0B"
                },
                {
                  icon: Heart,
                  title: "Inclusion",
                  description: "We're committed to creating an inclusive platform that celebrates diversity and provides equal opportunities.",
                  color: "#EC4899"
                }
              ].map((value, index) => (
                <div key={index} className="glass-card p-6">
                  <div 
                    className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <value.icon className="h-6 w-6" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Alex Morgan", role: "CEO & Founder", image: "/placeholder.svg" },
                { name: "Jamie Chen", role: "CTO", image: "/placeholder.svg" },
                { name: "Sam Wilson", role: "Head of Product", image: "/placeholder.svg" },
                { name: "Taylor Kim", role: "Lead Designer", image: "/placeholder.svg" }
              ].map((member, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <div className="mb-4 h-32 w-32 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-foreground/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
