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
  <div className="grid md:grid-cols-3 gap-8 p-8">
    {plans.map((plan) => (
      <Card key={plan.name} className="p-6">
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <div className="text-3xl font-bold my-4">${plan.price}</div>
        <ul className="space-y-2 mb-6">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 mr-2" /> {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full">{plan.buttonText}</Button>
      </Card>
    ))}
  </div>
);