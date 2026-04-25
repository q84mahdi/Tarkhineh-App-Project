import { NavLink, type To } from "react-router-dom";
import { useToggle } from "../Contexts/ToggleContext";
import type { ReactNode } from "react";

interface CustomNavLinkProps {
  to: To;
  children: ReactNode;
  className?: string;
}

function CustomNavLink({ to, children, className }: CustomNavLinkProps) {
  const { setIsToggleOpen } = useToggle();

  return (
    <NavLink
      to={to}
      onClick={() => setIsToggleOpen(false)}
      className={({ isActive }) =>
        isActive
          ? `${className} flex flex-row items-center gap-x-2 text-primary md:border-b md:border-b-primary md:pb-1 md:font-bold`
          : "flex flex-row items-center gap-x-2"
      }
    >
      {children}
    </NavLink>
  );
}
export default CustomNavLink;
