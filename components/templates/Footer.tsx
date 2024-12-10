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
  <footer className="bg-gray-900 text-white">
    <div className="grid md:grid-cols-4 gap-8 p-8">
      {columns.map((column) => (
        <div key={column.title}>
          <h4 className="font-bold mb-4">{column.title}</h4>
          <ul className="space-y-2">
            {column.links.map((link) => (
              <li key={link.text}>
                <a href={link.href} className="hover:text-gray-300">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-gray-800 p-8">
      <div className="flex justify-between items-center">
        <div>{copyright}</div>
        <div className="flex space-x-4">
          {social.map((item) => (
            <a key={item.platform} href={item.href} className="hover:text-gray-300">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);