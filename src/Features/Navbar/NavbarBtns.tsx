import SearchBtn from "./SearchBtn";
import toast from "react-hot-toast";
import UserIcon from "../../Icons/UserIcon";
import CartIcon from "../../Icons/CartIcon";

function NavbarBtns() {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-2">
      <SearchBtn />

      <button
        onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
        className="rounded bg-tint-100 p-1 lg:p-2"
      >
        <CartIcon className="icon" />
      </button>

      <button
        onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
        className="rounded bg-tint-100 p-1 lg:p-2"
      >
        <UserIcon className="icon fill-primary" />
      </button>
    </div>
  );
}
export default NavbarBtns;
