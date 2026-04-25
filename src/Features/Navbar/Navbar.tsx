import NavbarBtns from "./NavbarBtns";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-b-gray-200 bg-white bg-opacity-90 py-4 shadow-sm lg:px-8">
      <div className="container flex flex-row items-center justify-between">
        <Sidebar />

        <Link to="/">
          <img
            src="/Images/Logo.svg"
            alt="tharkhineh-logo"
            className="h-10 w-32 lg:h-12 lg:w-36"
          />
        </Link>

        <div className="hidden md:block">
          <NavbarLinks />
        </div>

        <NavbarBtns />
      </div>
    </div>
  );
}
export default Navbar;
