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
  <div className="py-12 md:py-20 px-4">
    {(title || subtitle) && (
      <div className="text-center mb-12">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      </div>
    )}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <Card key={index} className="p-6">
          {item.icon && <div className="mb-4">{item.icon}</div>}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </Card>
      ))}
    </div>
  </div>
);