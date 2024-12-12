import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { JSX } from "react";

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  buttonText: string;
}

interface PricingProps {
  plans: PricingPlan[];
}

export const Pricing = ({ plans }: PricingProps): JSX.Element => (
  <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`p-8 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden
              ${index === 1 ? 'border-purple-500 md:scale-105' : 'border-gray-200'}`}
          >
            {index === 1 && (
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Popular
              </div>
            )}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ${plan.price}
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3 text-gray-600">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${index === 1 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90' 
                : 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50'}`}
            >
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </div>
);