import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { toEnglishNumbersWithoutComma } from "../../Utils/formatNumber";
import Star from "../../UI/Star";
import type { Comment } from "../../Types/BranchTypes";

interface CommentsSliderProps {
  comments: Comment[];
}

function CommentsSlider({ comments }: CommentsSliderProps) {
  return (
    <div>
      <div className="container px-0 py-6 md:py-8 lg:py-12">
        {/* Title */}
        <h2 className="mb-3 px-5 text-center text-base font-bold md:mb-4 md:text-lg lg:mb-6 lg:px-12 lg:text-2xl">
          نظرات کاربران
        </h2>

        <div className="relative w-full">
          {/* Cards Scrollbar */}
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={20}
            freeMode={true}
            slidesPerView="auto"
            pagination={{
              clickable: true,
            }}
            className="flex items-stretch"
            wrapperClass="cursor-grab"
          >
            <SwiperSlide className="flex-1">
              <div className="w-4 lg:w-8"></div>
            </SwiperSlide>

            {comments.map((comment) => (
              <SwiperSlide key={comment.id} className="flex-1">
                <div className="scroll-none flex h-[190px] w-[272px] items-center justify-between gap-2 overflow-auto rounded border border-gray-400 px-4 py-5 md:w-[400px] lg:h-[230px] lg:w-[600px] lg:gap-3 lg:rounded-lg lg:px-8 lg:py-6">
                  <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
                    <div className="h-14 w-14 overflow-hidden rounded-full lg:h-24 lg:w-24">
                      <img
                        className="object-cover"
                        src={comment.image}
                        alt="user-profile"
                      />
                    </div>

                    <div>
                      <span className="block text-nowrap text-center text-xs leading-[1.8] text-gray-700 lg:text-base">
                        {comment.name}
                      </span>

                      <span className="block text-nowrap text-center text-xs leading-[1.8] text-gray-700 lg:text-base">
                        {comment.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-justify text-xs font-medium leading-[1.8] text-gray-800 lg:text-base">
                      {comment.description}
                    </p>

                    <div className="flex items-center gap-1 self-end text-xs lg:text-base">
                      <Star rate={toEnglishNumbersWithoutComma(comment.rate)} />

                      <span>{comment.rate}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="flex-1">
              <div className="w-4 lg:w-8"></div>
            </SwiperSlide>
          </Swiper>

          {/* Sides Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent lg:w-20"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent lg:w-20"></div>
        </div>
      </div>
    </div>
  );
}
export default CommentsSlider;
