import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import HeaderPagination from "../Icons/HeaderPagination";

interface HeaderProps {
  slides: {
    id: number;
    image: string;
    text: string;
    buttonText?: string;
  }[];
}

function Header({ slides }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={slides.length > 1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className} custom-bullet !mx-0 !cursor-pointer"></span>`,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              className="relative min-h-44 w-full bg-cover bg-center transition-all duration-300 ease-in-out md:min-h-60 lg:min-h-80"
            >
              <div className="h-full w-full bg-black/40 backdrop-brightness-50">
                <div className="flex min-h-44 flex-row flex-wrap content-end items-start justify-between pb-[50px] text-white md:min-h-60 md:px-4 md:pb-[55px] lg:min-h-80 lg:pb-[70px]">
                  {/* Next Button */}
                  <div>
                    <button
                      className={`swiper-button-prev-custom ${
                        slides.length > 1
                          ? "opacity-0 md:opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <ArrowLeftIcon className="icon rotate-180 fill-white transition-all duration-200 hover:fill-primary" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
                    <h1 className="text-center font-semibold md:text-lg md:font-bold lg:text-2xl xl:text-3xl">
                      {slide.text}
                    </h1>

                    <button
                      onClick={() => navigate("/menu/main-food")}
                      className={
                        slide.buttonText
                          ? "primary-button"
                          : "mb-4 opacity-0 md:mb-8 lg:mb-10"
                      }
                    >
                      {slide.buttonText}
                    </button>
                  </div>

                  {/* Prev Button */}
                  <div>
                    <button
                      className={`swiper-button-next-custom ${
                        slides.length > 1
                          ? "opacity-0 md:opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <ArrowLeftIcon className="icon fill-white transition-all duration-200 hover:fill-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div
        className={`${
          slides.length > 1 ? "opacity-100" : "opacity-0"
        } absolute bottom-0 left-1/2 z-10 -translate-x-1/2`}
      >
        <HeaderPagination />
      </div>

      <div
        className={`${
          slides.length > 1 ? "opacity-100" : "opacity-0"
        } swiper-pagination-custom absolute !bottom-0 !left-1/2 z-20 flex !w-fit !-translate-x-1/2 transform items-center justify-center gap-x-2 rounded-t-xl px-4 py-2 md:px-6`}
      />
    </div>
  );
}

export default Header;
