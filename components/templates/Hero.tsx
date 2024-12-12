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
    className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden"
    style={backgroundImage ? {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    } : { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block hover:scale-105 transition-transform duration-300">
            {word}{' '}
          </span>
        ))}
      </h1>
      <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
      <Button 
        size="lg" 
        className="bg-white text-black hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        {buttonText}
      </Button>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </div>
);