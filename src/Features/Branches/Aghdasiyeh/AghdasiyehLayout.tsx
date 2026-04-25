import { useState } from "react";
import { useBranches } from "../../../Contexts/BranchesContext";
import Header from "../../../UI/Header";
import SearchBar from "../../../UI/SearchBar";
import CardsSlider from "../CardsSlider";
import BranchInfo from "../BranchInfo";
import CommentsSlider from "../CommentsSlider";

const slides = [
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
];

function AghdasiyehLayout() {
  const [searchValue, setSearchValue] = useState("");
  const { aghdasiyehBranch } = useBranches();

  if (
    !aghdasiyehBranch ||
    !aghdasiyehBranch.special_foods ||
    aghdasiyehBranch.special_foods.length <= 0
  )
    return (
      <div className="minimum-height flex animate-pulse items-center justify-center font-bold lg:text-lg">
        در حال بارگذاری اطلاعات ...
      </div>
    );

  return (
    <div className="minimum-height">
      <Header slides={slides} />

      <div className="lg:hidden">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <CardsSlider
        title="پیشنهاد ویژه"
        cards={aghdasiyehBranch.special_foods}
      />

      <CardsSlider
        title="غذاهای محبوب"
        cards={aghdasiyehBranch.famous_foods}
        isPrimary
      />

      <CardsSlider
        title="غذاهای غیر ایرانی"
        cards={aghdasiyehBranch.foreign_foods}
        isLast
      />

      <BranchInfo
        title={aghdasiyehBranch.title}
        image={aghdasiyehBranch.image}
        phone_numberes={aghdasiyehBranch.phone_numberes}
        location={aghdasiyehBranch.location}
        work_time={aghdasiyehBranch.work_time}
      />

      <CommentsSlider comments={aghdasiyehBranch.comments} />
    </div>
  );
}
export default AghdasiyehLayout;
