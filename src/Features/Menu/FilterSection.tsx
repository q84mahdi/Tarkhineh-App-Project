import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import SearchBar from "../../UI/SearchBar";
import { useState } from "react";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

interface FilterSectionProps {
  filters: {
    key: string;
    value: string;
    label: string;
  }[];
}

function FilterSection({ filters }: FilterSectionProps) {
  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  const clickHandler = (key: string, value: string) => {
    if (searchParams.get(key) === value) {
      searchParams.delete(key);

      navigate({
        pathname: pathname,
        search: createSearchParams({
          ...Object.fromEntries([...searchParams]),
        }).toString(),
      });
    } else {
      searchParams.delete(key);

      navigate({
        pathname: pathname,
        search: createSearchParams({
          ...Object.fromEntries([...searchParams]),
          [key]: value.trim().replace(/\s+/g, " ").split(" ").join("+"),
        }).toString(),
      });
    }
  };

  return (
    <div className="container mb-11 flex flex-col items-center justify-between gap-3 px-0 py-2 lg:py-3 xl:flex-row">
      <div className="relative w-full">
        <Swiper
          modules={[FreeMode]}
          slidesPerView="auto"
          freeMode
          className="flex !w-full"
        >
          <SwiperSlide className="flex-1">
            <div className="w-3 lg:w-8"></div>
          </SwiperSlide>

          {filters.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => clickHandler(item.key, item.value)}
              className="flex-1 px-1"
            >
              <div
                className={`flex cursor-pointer items-center gap-1 text-nowrap rounded-lg border border-gray-200 bg-gray-200 p-2 text-xs transition-all duration-200 hover:border-gray-400 lg:rounded-2xl lg:text-sm ${item.value === category || item.value === sort ? "border-primary !bg-primary fill-white stroke-white text-white" : ""}`}
              >
                <span>{item.label}</span>
                <ArrowLeftIcon className="h-3 w-3 fill-gray-800 lg:h-4 lg:w-4" />
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide className="flex-1">
            <div className="w-3 lg:w-8"></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex w-full items-center justify-center px-4 lg:pr-0 xl:justify-end">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          className="!mx-0 !mt-0 w-full max-w-lg"
        />
      </div>
    </div>
  );
}
export default FilterSection;
