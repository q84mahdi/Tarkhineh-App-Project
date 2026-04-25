import { useNavigate } from "react-router-dom";
import UserIcon from "../../Icons/UserIcon";
import DiagramIcon from "../../Icons/DiagramIcon";
import HomeIcon from "../../Icons/HomeIcon";
import MenuBoardIcon from "../../Icons/MenuBoardIcon";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";

function About() {
  const aboutIconClass =
    "flex flex-col items-center justify-center gap-y-1 px-2 text-sm text-nowrap font-light lg:gap-y-2 lg:py-4 lg:text-base";

  const navigate = useNavigate();

  return (
    <div className="w-full bg-[url(https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/about-image.webp)] bg-cover bg-center">
      <div className="backdrop-brightness-80 h-full w-full bg-black/60">
        <div className="container mt-4 flex flex-col items-center justify-between gap-y-6 px-5 py-6 text-white lg:flex-row lg:py-12">
          <div className="flex flex-col gap-y-3 lg:w-1/2">
            <h2 className="lg:text-lg lg:font-bold">
              رستوران‌ های زنجیره‌ای ترخینه
            </h2>

            <p className="text-justify text-sm font-light leading-6 lg:text-base lg:leading-8">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>

            <button
              onClick={() => navigate("/about-us")}
              className="outline-button group self-end"
            >
              <span>اطلاعات بیشتر</span>
              <ArrowLeftIcon className="icon fill-white transition-all duration-200 group-hover:fill-primary" />
            </button>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 justify-between justify-items-center gap-x-12 gap-y-4 md:grid-cols-4 md:grid-rows-1 md:gap-x-8 lg:grid-cols-2 lg:grid-rows-2">
            <div className={aboutIconClass}>
              <UserIcon className="h-7 w-7 fill-white lg:h-9 lg:w-9" />
              <span className="">پرسنلی مجرب و حرفه‌ای</span>
            </div>

            <div className={aboutIconClass}>
              <DiagramIcon className="h-7 w-7 fill-white lg:h-9 lg:w-9" />
              <span className="text-sm font-light lg:text-base">
                کیفیت بالای غذاها
              </span>
            </div>

            <div className={aboutIconClass}>
              <HomeIcon className="h-7 w-7 fill-white lg:h-9 lg:w-9" />
              <span className="text-sm font-light lg:text-base">
                محیطی دلنشین و آرام
              </span>
            </div>

            <div className={aboutIconClass}>
              <MenuBoardIcon className="h-7 w-7 fill-white lg:h-9 lg:w-9" />
              <span className="text-sm font-light lg:text-base">
                منوی متنوع
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
