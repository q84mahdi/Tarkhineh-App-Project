import { NavLink, type To } from "react-router-dom";

interface LinksSectionProps {
  links: {
    href: To;
    label: string;
  }[];
}

function LinksSection({ links }: LinksSectionProps) {
  return (
    <div className="h-10 w-full bg-gray-200 lg:h-16">
      <ul className="container flex h-full items-center gap-4 lg:gap-8">
        {links.map((item, index) => (
          <li key={index} className="flex">
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `text-xs leading-[40px] text-gray-700 lg:text-lg lg:leading-[64px] ${isActive && "border-b border-b-primary font-medium text-primary lg:border-b-2 lg:font-bold"}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default LinksSection;
