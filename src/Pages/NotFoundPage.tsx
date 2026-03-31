import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="minimum-height flex flex-col items-center justify-center gap-y-4 py-8">
      <span className="text-8xl font-bold text-primary lg:text-9xl">404</span>

      <span className="text-lg font-semibold text-black">
        صفحه مورد نظر یافت نشد!
      </span>

      <button
        onClick={() => navigate(-1)}
        className="primary-button group flex flex-row items-center gap-x-2 border border-primary"
      >
        <span className="text-base font-normal">بازگشت</span>

        <ArrowLeftIcon className="icon fill-white transition-all duration-200 group-hover:fill-primary" />
      </button>
    </div>
  );
}
export default NotFoundPage;
