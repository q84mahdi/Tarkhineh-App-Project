import { useState } from "react";
import HeartIcon from "../../Icons/HeartIcon";
import Rate from "../../UI/Rate";
import Modal from "../../UI/Modal";
import CloseIcon from "../../Icons/CloseIcon";
import toast from "react-hot-toast";
import HeartFillIcon from "../../Icons/HeartFillIcon";
import makeImageKitUrl from "../../Utils/makeImageKitUrl";
import type { Food } from "../../Types/menuTypes";

interface MenuFoodCardProps {
  food: Food;
}

function MenuFoodCard({ food }: MenuFoodCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    if (isLiked) toast.success("از لیست علاقمندی‌ها حذف شد.");
    if (!isLiked) toast.success("به لیست علاقمندی‌ها افزوده شد.");
    setIsLiked((is) => !is);
  };

  return (
    <div className="flex h-[110px] w-full rounded border border-gray-400 transition-all duration-300 hover:shadow-md hover:shadow-gray-400 lg:h-[160px]">
      {/* Card Image */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="h-full w-[30%] min-w-[30%] cursor-pointer overflow-hidden rounded-r"
      >
        <img
          src={makeImageKitUrl(food.image, 400, 75)}
          alt={food.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Detail */}
      <div className="flex flex-1 flex-col justify-between gap-1 px-2 py-2.5 lg:gap-2 lg:px-4">
        <div className="flex h-full justify-between gap-2">
          <div className="flex flex-col justify-between gap-2 text-gray-800">
            <h3 className="text-sm lg:text-xl lg:font-semibold">
              {food.title}
            </h3>

            <p className="max-w-36 truncate text-xs md:max-w-64 lg:max-w-36 lg:text-sm xl:max-w-none xl:text-wrap">
              {food.detail}
            </p>
          </div>

          <div className="flex flex-col items-end justify-between gap-1">
            <button onClick={likeHandler} className="hidden lg:block">
              {isLiked ? (
                <HeartFillIcon className="h-6 w-6 fill-error-200" />
              ) : (
                <HeartIcon className="h-6 w-6 fill-gray-800 transition-all duration-200 hover:fill-error-200" />
              )}
            </button>

            {food.discount ? (
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500 line-through lg:text-base">
                  {food.main_price}
                </span>

                <span className="badge-error">{food.discount}</span>
              </div>
            ) : (
              <div></div>
            )}

            <span className="text-nowrap text-left text-xs text-gray-800 lg:text-lg">
              {food.price} تومان
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 lg:gap-6">
          <button onClick={likeHandler} className="lg:hidden">
            {isLiked ? (
              <HeartFillIcon className="h-4 w-4 fill-error-200" />
            ) : (
              <HeartIcon className="h-4 w-4 fill-gray-800 transition-all duration-200 hover:fill-error-200" />
            )}
          </button>

          <Rate rate={food.rate} />

          <button
            onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
            className="primary-button flex-1 p-2 text-xs lg:text-base lg:font-medium"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>

      {/* Card Modal */}
      <div className="hidden lg:block">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="w-[800px] rounded-lg bg-gray-200">
            <div className="relative flex items-center justify-center p-4">
              <h4 className="text-center text-xl font-semibold leading-9 text-gray-800">
                اطلاعات محصول
              </h4>

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute left-5 top-1/2 -translate-y-1/2"
              >
                <CloseIcon className="h-9 w-9 fill-gray-700" />
              </button>
            </div>

            <div className="h-[400px] w-full overflow-hidden">
              <img
                src={makeImageKitUrl(food.image, 400, 75)}
                alt={food.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-800">
                  {food.title}
                </h3>

                <Rate rate={food.rate} />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800">{food.detail}</span>

                <span className="text-sm text-gray-500">
                  ({food.score} نظر)
                </span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default MenuFoodCard;
