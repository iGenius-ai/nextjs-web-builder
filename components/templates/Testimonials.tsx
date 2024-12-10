import { Card } from "@/components/ui/card";
import { JSX } from "react";

interface Testimonial {
  author: string;
  content: string;
  title: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps): JSX.Element => (
  <div className="bg-gray-50 py-12">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.author} className="p-6">
          <div className="text-gray-600 mb-4">{testimonial.content}</div>
          <div className="font-bold">{testimonial.author}</div>
          <div className="text-sm text-gray-500">{testimonial.title}</div>
        </Card>
      ))}
    </div>
  </div>
);