import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";
import { useToggle } from "../../Contexts/ToggleContext";
import useOutsideClick from "../../Hooks/useOutsideClick";
import CloseIcon from "../../Icons/CloseIcon";
import BarsIcon from "../../Icons/BarsIcon";

function Sidebar() {
  const { isToggleOpen, setIsToggleOpen } = useToggle();

  const ref = useOutsideClick<HTMLDivElement>(() => setIsToggleOpen(false));

  return (
    <div
      className={
        isToggleOpen
          ? "fixed left-0 top-0 h-screen w-full bg-gray-600/30 backdrop-blur-sm md:hidden"
          : "md:hidden"
      }
    >
      <div ref={ref}>
        <button onClick={() => setIsToggleOpen(true)}>
          <BarsIcon className="block h-6 w-6 fill-primary md:hidden" />
        </button>

        <div
          className={`${isToggleOpen ? "absolute right-0 top-0 z-10 flex h-screen min-w-60 flex-col bg-white" : "hidden"}`}
        >
          <div className="mb-2 h-28 w-full bg-[url(https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/sidebar-image.webp)] bg-cover bg-center">
            <div className="relative flex h-full w-full items-center bg-gray-800/20 backdrop-brightness-50">
              <Link onClick={() => setIsToggleOpen(false)} to="/">
                <img
                  src="/Images/Logo-White.svg"
                  alt="tarkhineh-logo"
                  className="w-18 h-10 pr-4"
                />
              </Link>

              <button onClick={() => setIsToggleOpen(false)}>
                <CloseIcon className="absolute left-4 top-4 h-6 w-6 fill-white" />
              </button>
            </div>
          </div>

          <NavbarLinks />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
