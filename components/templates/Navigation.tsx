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
  <nav className="flex items-center justify-between p-4 md:p-6">
    <div className="text-xl font-bold">{logo}</div>
    <div className="hidden md:flex space-x-6">
      {links.map((link: NavigationLink) => (
        <a key={link.href} href={link.href} className="hover:text-gray-600">
          {link.text}
        </a>
      ))}
    </div>
    <Button>{buttonText}</Button>
  </nav>
);