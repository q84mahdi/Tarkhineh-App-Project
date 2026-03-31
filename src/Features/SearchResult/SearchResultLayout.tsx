import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMenu } from "../../Contexts/MenuContext";
import SearchBar from "../../UI/SearchBar";
import FoodCard from "../../UI/FoodCard";
import type { Food } from "../../Types/menuTypes";

function SearchResultLayout() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<Food[]>([]);

  const [searchParams] = useSearchParams();

  const { menu } = useMenu();

  const searchQuery = searchParams.get("q")?.split("+").join(" ") || "";

  useEffect(() => {
    if (searchQuery === "") return;

    setSearchValue(searchQuery);

    const filteredItems = menu
      ? menu.filter((item) => item.title.includes(searchQuery))
      : [];

    setResult(filteredItems);
  }, [menu, searchParams, searchQuery]);

  return (
    <div className="minimum-height flex flex-col items-center justify-center py-6 lg:py-12">
      <div>
        {result.length === 0 ? (
          <p className="text-sm font-medium md:text-base">
            موردی با این مشخصات پیدا نکردیم!
          </p>
        ) : (
          <div className="font-bold md:text-lg">
            <span>نتایج جستجو برای: </span>
            <span className="text-primary">{searchQuery}</span>
          </div>
        )}
      </div>

      <div className="w-[300px] pb-10 md:w-[400px]">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div>
        {result.length === 0 ? (
          <img
            className="aspect-square h-64 w-64 object-contain md:h-80 md:w-80 lg:h-96 lg:w-96"
            src="/Images/search-result.png"
            alt="no-result"
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {result.map((item) => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchResultLayout;
