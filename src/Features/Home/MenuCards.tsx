import { useNavigate } from "react-router-dom";
import MenuCard from "./MenuCard";

function MenuCards() {
  const navigate = useNavigate();

  return (
    <div className="container py-6 lg:py-12">
      <h2 className="mb-16 text-center font-bold text-black md:mb-28 md:text-lg lg:text-xl xl:mb-40 xl:text-2xl">
        منو رستوران
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-y-32 py-2 lg:grid-cols-4 lg:grid-rows-1">
        <MenuCard
          image="/Images/menu-image-1.png"
          alt="menu-image-main"
          text="غذای اصلی"
          onClick={() => navigate("/menu/main-food")}
        />

        <MenuCard
          image="/Images/menu-image-2.png"
          alt="menu-image-appetizer"
          text="پیش غذا"
          onClick={() => navigate("/menu/appetizer")}
        />

        <MenuCard
          image="/Images/menu-image-3.png"
          alt="menu-image-dessert"
          text="دسر"
          onClick={() => navigate("/menu/dessert")}
        />

        <MenuCard
          image="/Images/menu-image-4.png"
          alt="menu-image-drink"
          text="نوشیدنی"
          onClick={() => navigate("/menu/drink")}
        />
      </div>
    </div>
  );
}
export default MenuCards;
