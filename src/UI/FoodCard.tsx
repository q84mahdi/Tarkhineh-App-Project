import Star from "./Star";
import HeartIcon from "../Icons/HeartIcon";
import toast from "react-hot-toast";
import { toEnglishNumbersWithoutComma } from "../Utils/formatNumber";
import { useState } from "react";
import HeartFillIcon from "../Icons/HeartFillIcon";
import makeImageKitUrl from "../Utils/makeImageKitUrl";
import type { Food } from "../Types/menuTypes";

interface FoodCardProps {
  food: Food;
}

function FoodCard({ food }: FoodCardProps) {
  const { image, title, main_price, discount, price, rate, score } = food;

  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    if (isLiked) toast.success("از لیست علاقمندی‌ها حذف شد.");
    if (!isLiked) toast.success("به لیست علاقمندی‌ها افزوده شد.");
    setIsLiked((is) => !is);
  };

  return (
    <div className="flex w-[198px] flex-col justify-between rounded border border-gray-400 bg-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary hover:shadow-sm hover:shadow-tint-200 lg:h-[436px] lg:w-[288px] lg:rounded-lg">
      <img
        className="h-[120px] w-full rounded-t object-cover lg:h-[256px] lg:rounded-t-lg"
        src={makeImageKitUrl(image, 400, 75)}
        loading="lazy"
        alt={title}
      />

      <div className="flex flex-1 flex-col items-center justify-between p-2 lg:p-4">
        <h4 className="mb-1 font-medium lg:mb-2 lg:text-lg lg:font-semibold">
          {title}
        </h4>

        <div className="flow-row mb-2 flex w-full items-stretch justify-between lg:mb-4">
          <div className="space-y-1 lg:space-y-2">
            <button
              onClick={likeHandler}
              className="flow-row group flex items-center gap-1 text-gray-500"
            >
              <span>
                {isLiked ? (
                  <HeartFillIcon className="h-4 w-4 fill-error-200" />
                ) : (
                  <HeartIcon className="h-4 w-4 fill-gray-800 transition-all duration-200 group-hover:fill-error-200" />
                )}
              </span>

              <span className="hidden text-xs lg:inline-block">
                {isLiked ? "حذف از علاقمندی‌ها" : "افزودن به علاقمندی‌ها"}
              </span>
            </button>

            <div className="flow-row flex items-center gap-1 text-sm">
              <span>
                <Star rate={toEnglishNumbersWithoutComma(rate)} />
              </span>

              <span>{rate}</span>

              <span className="hidden text-xs text-gray-500 lg:inline-block">
                ({score} امتیاز)
              </span>
            </div>
          </div>

          <div className="space-y-1 lg:space-y-2">
            <div
              className={`${discount ? "opacity-100" : "h-6 opacity-0"} flex flex-row items-center justify-end gap-x-1`}
            >
              <span className="text-xs leading-6 text-gray-500 line-through lg:text-sm">
                {main_price}
              </span>

              <span className="badge-error">{discount}</span>
            </div>

            <span className="text-sm font-medium lg:text-base">
              {price} تومان
            </span>
          </div>
        </div>

        <button
          onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
          className="primary-button w-full"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
export default FoodCard;
