import { useState } from "react";
import { useBranches } from "../../../Contexts/BranchesContext";
import Header from "../../../UI/Header";
import SearchBar from "../../../UI/SearchBar";
import CardsSlider from "../CardsSlider";
import BranchInfo from "../BranchInfo";
import CommentsSlider from "../CommentsSlider";

const slides = [
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
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-5.webp",
    text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    buttonText: "سفارش آنلاین غذا",
  },
];

function EkbatanLayout() {
  const [searchValue, setSearchValue] = useState("");
  const { ekbatanBranch } = useBranches();

  if (
    !ekbatanBranch ||
    !ekbatanBranch.special_foods ||
    ekbatanBranch.special_foods.length <= 0
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

      <CardsSlider title="پیشنهاد ویژه" cards={ekbatanBranch.special_foods} />

      <CardsSlider
        title="غذاهای محبوب"
        cards={ekbatanBranch.famous_foods}
        isPrimary
      />

      <CardsSlider
        title="غذاهای غیر ایرانی"
        cards={ekbatanBranch.foreign_foods}
        isLast
      />

      <BranchInfo
        title={ekbatanBranch.title}
        image={ekbatanBranch.image}
        phone_numberes={ekbatanBranch.phone_numberes}
        location={ekbatanBranch.location}
        work_time={ekbatanBranch.work_time}
      />

      <CommentsSlider comments={ekbatanBranch.comments} />
    </div>
  );
}
export default EkbatanLayout;
