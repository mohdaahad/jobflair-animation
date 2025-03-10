
import { Code, Briefcase, Brush, LineChart, Globe, Laptop, MessageSquare, Smartphone } from "lucide-react";
import { CategoryCard } from "./CategoryCard";
import { Link } from "react-router-dom";

export function TrendingCategories() {
  const categories = [
    { 
      icon: Code, 
      title: "Development", 
      count: 1234, 
      color: "#8B5CF6" // Purple 
    },
    { 
      icon: Brush, 
      title: "Design", 
      count: 873, 
      color: "#EC4899" // Pink
    },
    { 
      icon: LineChart, 
      title: "Marketing", 
      count: 621, 
      color: "#10B981" // Green
    },
    { 
      icon: Briefcase, 
      title: "Business", 
      count: 427, 
      color: "#F59E0B" // Amber
    },
    { 
      icon: Globe, 
      title: "Remote", 
      count: 1893, 
      color: "#3B82F6" // Blue 
    },
    { 
      icon: Laptop, 
      title: "IT & Software", 
      count: 753, 
      color: "#6366F1" // Indigo
    },
    { 
      icon: MessageSquare, 
      title: "Customer Service", 
      count: 539, 
      color: "#14B8A6" // Teal
    },
    { 
      icon: Smartphone, 
      title: "Mobile", 
      count: 412, 
      color: "#F43F5E" // Rose
    },
  ];

  return (
    <section id="trending-categories" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Trending Job Categories</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore opportunities in the most in-demand industries and specializations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to={`/category/${category.title}`} key={index}>
              <CategoryCard 
                icon={category.icon}
                title={category.title}
                count={category.count}
                color={category.color}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
