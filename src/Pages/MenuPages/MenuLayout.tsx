import { Outlet } from "react-router-dom";
import Header from "../../UI/Header";
import LinksSection from "../../UI/LinksSection";

const SLIDES = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-7.webp",
    text: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-5.webp",
    text: "غذای دلخواه شما با بهترین کیفیت",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-3.webp",
    text: "تنوعی بی‌نظیر از غذاهای گیاهی",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-4.webp",
    text: "غذاهایی متناسب با رژیم شما",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-1.webp",
    text: "لذت طعمی فراموش‌نشدنی",
  },
];

const MENU_LINKS = [
  {
    label: "غذای اصلی",
    href: "/menu/main-food",
  },
  {
    label: "پیش غذا",
    href: "/menu/appetizer",
  },
  {
    label: "دسر",
    href: "/menu/dessert",
  },
  {
    label: "نوشیدنی",
    href: "/menu/drink",
  },
];

function MenuLayout() {
  return (
    <div>
      <Header slides={SLIDES} />

      {/* Menu Links */}
      <LinksSection links={MENU_LINKS} />

      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default MenuLayout;
