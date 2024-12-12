import { JSX, ReactNode } from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: ReactNode;
}

interface FooterProps {
  columns: FooterColumn[];
  social: SocialLink[];
  copyright: string;
}

export const Footer = ({ columns, social, copyright }: FooterProps): JSX.Element => (
  <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(30deg,#3730a3_12%,transparent_12.5%,transparent_87%,#3730a3_87.5%,#3730a3_0)] opacity-10" />
    
    <div className="relative max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 p-8 md:p-12">
        {columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <h4 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {column.title}
            </h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-[2px] bg-purple-400 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-700/50 p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 hover:text-gray-300 transition-colors">
            {copyright}
          </div>
          <div className="flex space-x-6">
            {social.map((item) => (
              <a 
                key={item.platform} 
                href={item.href} 
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);