import { useSearchParams } from "react-router-dom";
import { useMenu } from "../../../Contexts/MenuContext";
import CartIcon from "../../../Icons/CartIcon";
import FilterSection from "../FilterSection";
import MenuFoodCard from "../MenuFoodCard";
import { useEffect, useState } from "react";
import { toEnglishNumbersWithoutComma } from "../../../Utils/formatNumber";
import toast from "react-hot-toast";
import type { Food } from "../../../Types/menuTypes";

const FILTERS = [
  {
    key: "category",
    value: "persian-drinks",
    label: "نوشیدنی‌های ایرانی",
  },
  {
    key: "category",
    value: "forign-drinks",
    label: "نوشیدنی‌های غیر ایرانی",
  },
  {
    key: "category",
    value: "cold-drinks",
    label: "نوشیدنی‌های سرد",
  },
  {
    key: "category",
    value: "hot-drinks",
    label: "نوشیدنی‌های گرم",
  },
  {
    key: "sort",
    value: "bestseller",
    label: "پرفروش‌ترین",
  },
  {
    key: "sort",
    value: "economical",
    label: "اقتصادی‌ترین",
  },
  {
    key: "sort",
    value: "popular",
    label: "محبوب‌ترین",
  },
];

function DrinkLayout() {
  const [result, setResult] = useState<Food[]>([]);
  const [searchParams] = useSearchParams();
  const { drink } = useMenu();

  const isFiltered = searchParams.size > 0;

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const search = searchParams.get("q");

  useEffect(() => {
    if (!drink || !isFiltered) return;

    const allFoods = [
      ...(drink.persian_drinks || []),
      ...(drink.foreign_drinks || []),
      ...(drink.cold_drinks || []),
      ...(drink.hot_drinks || []),
    ];

    let filteredFoods = allFoods;

    if (category) {
      if (category === "persian-drinks") {
        filteredFoods = drink.persian_drinks;
      } else if (category === "forign-drinks") {
        filteredFoods = drink.foreign_drinks;
      } else if (category === "cold-drinks") {
        filteredFoods = drink.cold_drinks;
      } else if (category === "hot-drinks") {
        filteredFoods = drink.hot_drinks;
      }
    }

    if (sort) {
      if (sort === "bestseller") {
        filteredFoods = [...filteredFoods].sort(
          (a, b) =>
            Number(toEnglishNumbersWithoutComma(b.score)) -
            Number(toEnglishNumbersWithoutComma(a.score)),
        );
      } else if (sort === "economical") {
        filteredFoods = [...filteredFoods].sort(
          (a, b) =>
            Number(toEnglishNumbersWithoutComma(a.price)) -
            Number(toEnglishNumbersWithoutComma(b.price)),
        );
      } else if (sort === "popular") {
        filteredFoods = [...filteredFoods].sort(
          (a, b) => Number(b.rate) - Number(a.rate),
        );
      }
    }

    if (search) {
      filteredFoods =
        filteredFoods && filteredFoods.length > 0
          ? filteredFoods.filter((food) =>
              food.title.toLowerCase().includes(search.toLowerCase()),
            )
          : [];
    }

    setResult(filteredFoods);
  }, [drink, category, sort, isFiltered, search]);

  return (
    <div className="minimum-height">
      <FilterSection filters={FILTERS} />

      <div className="container mx-auto mb-6 lg:mb-12">
        {isFiltered ? (
          <div>
            <div className="mb-3 flex items-center justify-between lg:mb-5">
              <h2 className="font-bold text-gray-800 lg:text-2xl">
                لیست نوشیدنی‌ها ({result?.length || 0})
              </h2>

              <button
                onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
                className="outline-primary-button lg:px-4"
              >
                <CartIcon className="h-4 w-4 lg:h-6 lg:w-6" />

                <span className="text-sm lg:text-base lg:font-medium">
                  تکمیل خرید
                </span>
              </button>
            </div>

            {result && result.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                {result.map((item) => (
                  <MenuFoodCard key={item.id} food={item} />
                ))}
              </div>
            ) : (
              <p className="my-6 text-center text-gray-500">
                هیچ نوشیدنی‌ای یافت نشد.
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:gap-12">
            <div>
              <div className="mb-3 flex items-center justify-between lg:mb-5">
                <h2 className="font-bold text-gray-800 lg:text-2xl">
                  نوشیدنی‌های ایرانی
                </h2>

                <button
                  onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
                  className="outline-primary-button lg:px-4"
                >
                  <CartIcon className="h-4 w-4 lg:h-6 lg:w-6" />

                  <span className="text-sm lg:text-base lg:font-medium">
                    تکمیل خرید
                  </span>
                </button>
              </div>

              {drink &&
              drink.persian_drinks &&
              drink.persian_drinks.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {drink.persian_drinks.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ نوشیدنی‌ ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                نوشیدنی‌های غیر ایرانی
              </h2>

              {drink &&
              drink.foreign_drinks &&
              drink.foreign_drinks.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {drink.foreign_drinks.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ نوشیدنی‌ غیر ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                نوشیدنی‌های سرد
              </h2>

              {drink && drink.cold_drinks && drink.cold_drinks.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {drink.cold_drinks.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ نوشیدنی‌ سردی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                نوشیدنی‌های گرم
              </h2>

              {drink && drink.hot_drinks && drink.hot_drinks.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {drink.hot_drinks.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ نوشیدنی‌ گرمی یافت نشد.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default DrinkLayout;
