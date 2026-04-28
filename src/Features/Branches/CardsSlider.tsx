import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import FoodCard from "../../UI/FoodCard";
import MenuIcon from "../../Icons/MenuIcon";
import { useNavigate } from "react-router-dom";
import type { Food } from "../../Types/menuTypes";

interface CardsSliderProps {
  title: string;
  cards: Food[];
  isPrimary?: boolean;
  isLast?: boolean;
}

function CardsSlider({
  title,
  cards,
  isPrimary = false,
  isLast = false,
}: CardsSliderProps) {
  const navigate = useNavigate();

  return (
    <div className={isPrimary ? "bg-primary" : ""}>
      <div className="container px-0 py-6 md:py-8 lg:py-12">
        {/* Title */}
        <h2
          className={`mb-3 px-5 text-base font-bold md:mb-4 md:text-lg lg:mb-6 lg:px-12 lg:text-2xl ${isPrimary && "text-white"}`}
        >
          {title}
        </h2>

        <div className="relative w-full cursor-grab">
          {/* Cards Scrollbar */}
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            freeMode={true}
            slidesPerView="auto"
            className="flex items-stretch"
            wrapperClass="py-4"
          >
            <SwiperSlide className="flex-1">
              <div className="w-4 lg:w-8"></div>
            </SwiperSlide>

            {cards.map((card) => (
              <SwiperSlide key={card.id} className="flex-1">
                <FoodCard food={card} />
              </SwiperSlide>
            ))}

            <SwiperSlide className="flex-1">
              <div className="w-4 lg:w-8"></div>
            </SwiperSlide>
          </Swiper>

          {/* Sides Gradients */}
          <div
            className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent lg:w-20 ${isPrimary && "!from-primary"}`}
          ></div>
          <div
            className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent lg:w-20 ${isPrimary && "!from-primary"}`}
          ></div>
        </div>

        {isLast && (
          <div className="mt-3 flex items-center justify-center lg:mt-6">
            <button
              onClick={() => navigate("/menu")}
              className="outline-primary-button transition-all duration-200 hover:scale-105 hover:bg-primary hover:stroke-white hover:text-white"
            >
              <MenuIcon className="h-4 w-4 lg:h-6 lg:w-6" />

              <span>مشاهده منوی کامل</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CardsSlider;
