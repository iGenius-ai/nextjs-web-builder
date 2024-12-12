import { Card } from "@/components/ui/card";
import { JSX, ReactNode } from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
}

export const Features = ({ title, subtitle, items }: FeaturesProps): JSX.Element => (
  <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
    {(title || subtitle) && (
      <div className="text-center mb-16">
        {title && (
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {title}
          </h2>
        )}
        {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    )}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <Card 
          key={index} 
          className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-white/50 backdrop-blur-sm"
        >
          {item.icon && (
            <div className="mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
          )}
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </Card>
      ))}
    </div>
  </div>
);