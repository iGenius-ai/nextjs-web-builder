import { Button } from "../ui/button";
import { JSX } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage?: string;
}

export const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  backgroundImage 
}: HeroProps): JSX.Element => (
  <div 
    className="relative px-4 py-20 md:py-32 text-center bg-cover bg-center"
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : { backgroundColor: '#f3f4f6' }}
  >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{title}</h1>
      <p className="text-lg md:text-xl mb-8">{subtitle}</p>
      <Button size="lg">{buttonText}</Button>
    </div>
  </div>
);