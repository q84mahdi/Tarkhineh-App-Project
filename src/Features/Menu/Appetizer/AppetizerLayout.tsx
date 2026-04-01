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
    value: "persian-appetizers",
    label: "پیش‌غذاهای ایرانی",
  },
  {
    key: "category",
    value: "foreign-appetizers",
    label: "پیش‌غذاهای غیر ایرانی",
  },
  {
    key: "category",
    value: "soups",
    label: "سوپ‌ها",
  },
  {
    key: "category",
    value: "finger-foods",
    label: "فینگرفود‌ها",
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

function AppetizerLayout() {
  const [result, setResult] = useState<Food[]>([]);
  const [searchParams] = useSearchParams();
  const { appetizer } = useMenu();

  const isFiltered = searchParams.size > 0;

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const search = searchParams.get("q");

  useEffect(() => {
    if (!appetizer || !isFiltered) return;

    const allFoods = [
      ...(appetizer.persian_appetizers || []),
      ...(appetizer.foreign_appetizers || []),
      ...(appetizer.soups || []),
      ...(appetizer.finger_foods || []),
    ];

    let filteredFoods = allFoods;

    if (category) {
      if (category === "persian-appetizers") {
        filteredFoods = appetizer.persian_appetizers;
      } else if (category === "foreign-appetizers") {
        filteredFoods = appetizer.foreign_appetizers;
      } else if (category === "soups") {
        filteredFoods = appetizer.soups;
      } else if (category === "finger-foods") {
        filteredFoods = appetizer.finger_foods;
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
  }, [appetizer, category, sort, isFiltered, search]);

  return (
    <div className="minimum-height">
      <FilterSection filters={FILTERS} />

      <div className="container mx-auto mb-6 lg:mb-12">
        {isFiltered ? (
          <div>
            <div className="mb-3 flex items-center justify-between lg:mb-5">
              <h2 className="font-bold text-gray-800 lg:text-2xl">
                لیست پیش‌غذاها ({result?.length || 0})
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
                هیچ پیش‌غذایی یافت نشد.
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:gap-12">
            <div>
              <div className="mb-3 flex items-center justify-between lg:mb-5">
                <h2 className="font-bold text-gray-800 lg:text-2xl">
                  پیش‌غذاهای ایرانی
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

              {appetizer &&
              appetizer.persian_appetizers &&
              appetizer.persian_appetizers.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {appetizer.persian_appetizers.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ پیش‌غذای ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                پیش‌غذاهای غیر ایرانی
              </h2>

              {appetizer &&
              appetizer.foreign_appetizers &&
              appetizer.foreign_appetizers.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {appetizer.foreign_appetizers.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ پیش‌غذای غیر ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                سوپ‌ها
              </h2>

              {appetizer && appetizer.soups && appetizer.soups.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {appetizer.soups.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ سوپی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                فینگرفود‌ها
              </h2>

              {appetizer &&
              appetizer.finger_foods &&
              appetizer.finger_foods.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {appetizer.finger_foods.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ فینگرفود‌ی یافت نشد.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default AppetizerLayout;
