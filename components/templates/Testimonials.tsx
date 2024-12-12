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
  <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.author} 
            className={`p-8 group hover:shadow-xl transition-all duration-300 
              ${index % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'}
              bg-white/80 backdrop-blur-sm relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-12 -mt-12 opacity-50" />
            <div className="relative">
              <div className="text-4xl text-purple-400 mb-4">&quot;</div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold group-hover:text-purple-600 transition-colors">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);