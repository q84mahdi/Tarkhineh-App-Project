import CustomNavLink from "../../UI/CustomNavLink";
import useOutsideClick from "../../Hooks/useOutsideClick";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";
import type { Dispatch } from "react";

interface NavbarDropDownProps {
  state: boolean;
  setState: Dispatch<React.SetStateAction<boolean>>;
  text: string;
  items: {
    title: string;
    link: string;
  }[];
  isSelected: boolean;
}

function NavbarDropDown({
  state,
  setState,
  text,
  items,
  isSelected,
}: NavbarDropDownProps) {
  const dropDownLinkClass =
    "border-b border-b-gray-300 px-2 py-2 text-sm text-gray-800 last:border-none md:hover:text-primary";

  const ref = useOutsideClick<HTMLDivElement>(() => setState(false));

  return (
    <div ref={ref}>
      <button
        className={`${isSelected ? "text-primary md:border-b md:border-b-primary md:pb-1 md:font-bold" : ""} flex min-w-60 items-center justify-between gap-x-2 md:min-w-max`}
        onClick={() => setState((is) => !is)}
      >
        <span>{text}</span>
        <ArrowLeftIcon
          className={`${state ? "rotate-90" : "-rotate-90"} ${isSelected ? "fill-primary" : "fill-gray-800"} h-4 w-4 transition-all duration-300`}
        />
      </button>

      <ul
        className={
          state
            ? "w-56 rounded px-4 md:absolute md:-left-10 md:top-8 md:w-36 md:bg-gray-100 md:px-1 md:shadow"
            : "hidden"
        }
      >
        {items.map((item) => (
          <li
            onClick={() => setState(false)}
            key={item.link}
            className={dropDownLinkClass}
          >
            <CustomNavLink
              to={item.link}
              className="md:border-none md:font-semibold"
            >
              <span>{item.title}</span>
            </CustomNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NavbarDropDown;
