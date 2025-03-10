
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const Companies = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Top Companies</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Discover top companies hiring across various industries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for company listings */}
            {Array(9).fill(0).map((_, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-xl glass flex items-center justify-center mr-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="Company logo" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Company {index + 1}</h3>
                    <p className="text-sm text-foreground/70">Tech • 50-200 employees</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Leading innovation in their industry with creative solutions and a dynamic workplace culture.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-job">12 open positions</span>
                  <button className="text-xs glass px-3 py-1.5 rounded-full hover:bg-job/10">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
