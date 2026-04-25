import { useState } from "react";
import Header from "../../UI/Header";
import SearchBar from "../../UI/SearchBar";
import About from "./About";
import BranchCards from "./BranchCards";
import MenuCards from "./MenuCards";

const slides = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-5.webp",
    text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    buttonText: "سفارش آنلاین غذا",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-2.webp",
    text: "غذای دلخواه شما با بهترین کیفیت",
    buttonText: "اکنون سفارش دهید",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-3.webp",
    text: "تنوعی بی‌نظیر از غذاهای گیاهی",
    buttonText: "همین حالا سفارش دهید",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-4.webp",
    text: "غذاهایی متناسب با رژیم شما",
    buttonText: "سفارش دهید",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-1.webp",
    text: "لذت طعمی فراموش‌نشدنی",
    buttonText: "امروز امتحان کنید",
  },
];

function HomeLayout() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="minimum-height">
      <Header slides={slides} />

      <div className="lg:hidden">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <MenuCards />

      <About />

      <BranchCards />
    </div>
  );
}
export default HomeLayout;
