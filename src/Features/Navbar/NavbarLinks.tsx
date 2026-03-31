import CustomNavLink from "../../UI/CustomNavLink";
import { useState } from "react";
import NavbarDropDown from "./NavbarDropDown";
import { useLocation } from "react-router-dom";
import MainHomeIcon from "../../Icons/MainHomeIcon";
import BranchIcon from "../../Icons/BranchIcon";
import MenuBoardIcon from "../../Icons/MenuBoardIcon";
import UsersIcon from "../../Icons/UsersIcon";
import PhoneIcon from "../../Icons/PhoneIcon";

const branches = {
  ekbatan: "اکباتان",
  aghdasiyeh: "اقدسیه",
  chalos: "چالوس",
  vanak: "ونک",
} as const;

const menus = ["main-food", "appetizer", "dessert", "drink"];

function NavbarLinks() {
  const navbarLinkClass =
    "relative flex items-center gap-x-1 border-b border-b-gray-400 pb-2 text-sm text-gray-800 last:border-none md:border-none md:font-medium md:text-gray-700 md:hover:text-primary lg:text-base";

  const [isOpenBranch, setIsOpenBranch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { pathname } = useLocation();

  const branchKey = pathname.split("/").at(2);
  const isValidBranch = branchKey != null && branchKey in branches;
  const branchText = isValidBranch
    ? branches[branchKey as keyof typeof branches]
    : "شعبه";

  return (
    <ul className="flex min-w-64 flex-col gap-y-3 px-4 md:flex-row md:items-center md:gap-x-4 md:px-0 lg:gap-x-6">
      <li className={navbarLinkClass}>
        <CustomNavLink to="/">
          <MainHomeIcon
            className={`${pathname === "/" && "fill-primary"} icon fill-gray-800 md:hidden`}
          />
          <span>صفحه اصلی</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <BranchIcon
          className={`${pathname.includes("/branch") && "fill-primary"} icon self-start fill-gray-800 md:hidden`}
        />

        <NavbarDropDown
          state={isOpenBranch}
          setState={setIsOpenBranch}
          text={branchText}
          isSelected={isValidBranch}
          items={[
            { title: "اکباتان", link: "/branch/ekbatan" },
            { title: "چالوس", link: "/branch/chalos" },
            { title: "اقدسیه", link: "/branch/aghdasiyeh" },
            { title: "ونک", link: "/branch/vanak" },
          ]}
        />
      </li>

      <li className={navbarLinkClass}>
        <MenuBoardIcon
          className={`${pathname.includes("/menu") && "fill-primary"} icon mt-1 self-start fill-gray-800 md:hidden`}
        />

        <NavbarDropDown
          state={isOpenMenu}
          setState={setIsOpenMenu}
          text="منو"
          isSelected={menus.includes(pathname.split("/")[2])}
          items={[
            { title: "غذای اصلی", link: "/menu/main-food" },
            { title: "پیش غذا", link: "/menu/appetizer" },
            { title: "دسر", link: "/menu/dessert" },
            { title: "نوشیدنی", link: "/menu/drink" },
          ]}
        />
      </li>

      <li className={`${navbarLinkClass} hidden md:block`}>
        <CustomNavLink to="franchise">
          <span>اعطای نمایندگی</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <CustomNavLink to="about-us">
          <UsersIcon
            className={`${pathname === "/about-us" && "fill-primary"} icon fill-gray-800 md:hidden`}
          />
          <span>درباره ما</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <CustomNavLink to="contact-us">
          <PhoneIcon
            className={`${pathname === "/contact-us" && "fill-primary"} icon fill-gray-800 md:hidden`}
          />
          <span>تماس با ما</span>
        </CustomNavLink>
      </li>
    </ul>
  );
}
export default NavbarLinks;
