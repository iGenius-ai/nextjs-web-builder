import { Button } from "../ui/button";
import { JSX } from "react";

interface NavigationLink {
  href: string;
  text: string;
}

interface NavigationProps {
  logo: string | JSX.Element;
  links: NavigationLink[];
  buttonText: string;
}

export const Navigation = ({ logo, links, buttonText }: NavigationProps): JSX.Element => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/75 border-b border-gray-200">
    <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
      <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {logo}
      </div>
      <div className="hidden md:flex space-x-8">
        {links.map((link: NavigationLink) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            {link.text}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-200" />
          </a>
        ))}
      </div>
      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity">
        {buttonText}
      </Button>
    </div>
  </nav>
);