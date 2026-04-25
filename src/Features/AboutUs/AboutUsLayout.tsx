import DiagramIcon from "../../Icons/DiagramIcon";
import HomeIcon from "../../Icons/HomeIcon";
import MenuBoardIcon from "../../Icons/MenuBoardIcon";
import UserIcon from "../../Icons/UserIcon";
import Header from "../../UI/Header";

const slides = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/about-us.webp",
    text: "درباره ترخینه بیشتر بدانید!",
  },
];

function AboutUsLayout() {
  return (
    <div className="minimum-height flex flex-col justify-between">
      <Header slides={slides} />

      <div className="container py-12 lg:px-8">
        <h2 className="mb-2 font-bold text-gray-800 lg:mb-6 lg:text-2xl">
          درباره‌ما
        </h2>

        <div className="lg:flex lg:flex-row-reverse">
          <div className="float-left my-2 mr-4 h-[120px] w-[150px] overflow-hidden rounded md:mr-8 md:h-[190px] md:w-[260px] lg:float-none lg:h-[400px] lg:w-[500px] lg:shrink-0 xl:h-[500px] xl:w-[600px]">
            <img
              src="Images/about-us.jpg"
              alt="about us"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="whitespace-pre-line text-justify text-xs !leading-[1.8] text-gray-700 md:text-sm lg:text-lg lg:!leading-loose xl:text-xl">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در
            طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با
            نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است.
            ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
            برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. {`\n`} چشم انداز: در آینده‌ای نزدیک تالار
            پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ
            شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
      </div>

      <div className="bg-gray-200 py-3 lg:py-8">
        <div className="container flex items-stretch justify-between">
          <div className="flex flex-1 flex-col items-center justify-stretch gap-1 border-l border-l-gray-400 text-center text-xs text-gray-700 lg:text-lg">
            <UserIcon className="h-4 w-4 fill-gray-800 lg:h-12 lg:w-12" />

            <span className="px-2">پرسنلی مجرب و حرفه‌ای</span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-stretch gap-1 border-l border-l-gray-400 text-center text-xs text-gray-700 lg:text-lg">
            <DiagramIcon className="h-4 w-4 fill-gray-800 lg:h-12 lg:w-12" />

            <span className="px-2">کیفیت بالای غذاها</span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-stretch gap-1 border-l border-l-gray-400 text-center text-xs text-gray-700 lg:text-lg">
            <HomeIcon className="h-4 w-4 fill-gray-800 lg:h-12 lg:w-12" />

            <span className="px-2">محیطی دلنشین و آرام</span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-stretch gap-1 text-center text-xs text-gray-700 lg:text-lg">
            <MenuBoardIcon className="h-4 w-4 fill-gray-800 lg:h-12 lg:w-12" />

            <span className="px-2">منوی متنوع</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsLayout;
