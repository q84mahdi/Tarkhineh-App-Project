import { Link } from "react-router-dom";
import TwitterIcon from "../../Icons/TwitterIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import TelegramIcon from "../../Icons/TelegramIcon";

const access = [
  { title: "پرسش های متداول", link: "FAQ" },
  { title: "قوانین ترخینه", link: "rules" },
  { title: "حریم خصوصی", link: "privacy" },
];

const branches = [
  { title: "شعبه اکباتان", link: "branch/ekbatan" },
  { title: "شعبه چالوس", link: "branch/chalos" },
  { title: "شعبه اقدسیه", link: "branch/aghdasiyeh" },
  { title: "شعبه ونک", link: "branch/vanak" },
];

function FooterLinks() {
  return (
    <div className="flex flex-row items-start gap-x-16 text-white xl:gap-x-32">
      <div>
        <h2 className="font-medium lg:text-lg lg:font-bold">دسترسی آسان</h2>

        <ul className="mt-2 space-y-2 pr-3 text-sm font-light lg:mt-4 lg:space-y-4 lg:text-base">
          {access.map((item) => (
            <li
              key={item.link}
              className="transition-all duration-200 hover:text-tint-600"
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

          <li>
            <ul className="flex items-center gap-x-3 lg:gap-x-6">
              <li>
                <Link target="_blank" to="https://x.com/">
                  <TwitterIcon className="icon fill-white transition-all duration-200 hover:fill-tint-600" />
                </Link>
              </li>

              <li>
                <Link target="_blank" to="https://instagram.com/">
                  <InstagramIcon className="icon fill-white transition-all duration-200 hover:fill-tint-600" />
                </Link>
              </li>

              <li>
                <Link target="_blank" to="https://telegram.org/">
                  <TelegramIcon className="icon fill-white transition-all duration-200 hover:fill-tint-600" />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-medium lg:text-lg lg:font-bold">شعبه های ترخینه</h2>

        <ul className="mt-2 space-y-2 pr-3 text-sm font-light lg:mt-4 lg:space-y-4 lg:text-base">
          {branches.map((item) => (
            <li
              key={item.link}
              className="transition-all duration-200 hover:text-tint-600"
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default FooterLinks;
