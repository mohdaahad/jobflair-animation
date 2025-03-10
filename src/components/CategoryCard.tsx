
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  color: string;
  className?: string;
  style?: CSSProperties;
}

export function CategoryCard({ 
  icon: Icon, 
  title, 
  count, 
  color, 
  className,
  style 
}: CategoryCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-5 hover:scale-105 transition-all duration-300 cursor-pointer group",
        className
      )}
      style={style}
    >
      <div 
        className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="h-6 w-6" style={{ color }} />
      </div>
      
      <h3 className="text-lg font-medium mb-1 group-hover:text-job transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-sm text-foreground/70">
        {count.toLocaleString()} jobs available
      </p>
    </div>
  );
}
