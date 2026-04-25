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
    value: "persian-foods",
    label: "غذاهای ایرانی",
  },
  {
    key: "category",
    value: "forign-foods",
    label: "غذاهای غیر ایرانی",
  },
  {
    key: "category",
    value: "pizza",
    label: "پیتزاها",
  },
  {
    key: "category",
    value: "sandwich",
    label: "ساندویچ‌ها",
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

function MainFoodLayout() {
  const [result, setResult] = useState<Food[]>([]);
  const [searchParams] = useSearchParams();
  const { mainFood } = useMenu();

  const isFiltered = searchParams.size > 0;

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const search = searchParams.get("q");

  useEffect(() => {
    if (!mainFood || !isFiltered) return;

    const allFoods = [
      ...(mainFood.persian_foods || []),
      ...(mainFood.foreign_foods || []),
      ...(mainFood.pizzas || []),
      ...(mainFood.sandwiches || []),
    ];

    let filteredFoods = allFoods;

    if (category) {
      if (category === "persian-foods") {
        filteredFoods = mainFood.persian_foods;
      } else if (category === "forign-foods") {
        filteredFoods = mainFood.foreign_foods;
      } else if (category === "pizza") {
        filteredFoods = mainFood.pizzas;
      } else if (category === "sandwich") {
        filteredFoods = mainFood.sandwiches;
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
  }, [mainFood, category, sort, isFiltered, search]);

  return (
    <div className="minimum-height">
      <FilterSection filters={FILTERS} />

      <div className="container mx-auto mb-6 lg:mb-12">
        {isFiltered ? (
          <div>
            <div className="mb-3 flex items-center justify-between lg:mb-5">
              <h2 className="font-bold text-gray-800 lg:text-2xl">
                لیست غذاها ({result?.length || 0})
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
                هیچ غذایی یافت نشد.
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:gap-12">
            <div>
              <div className="mb-3 flex items-center justify-between lg:mb-5">
                <h2 className="font-bold text-gray-800 lg:text-2xl">
                  غذاهای ایرانی
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

              {mainFood &&
              mainFood.persian_foods &&
              mainFood.persian_foods.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {mainFood.persian_foods.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ غذای ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                غذاهای غیر ایرانی
              </h2>

              {mainFood &&
              mainFood.foreign_foods &&
              mainFood.foreign_foods.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {mainFood.foreign_foods.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ غذای غیر ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                پیتزاها
              </h2>

              {mainFood && mainFood.pizzas && mainFood.pizzas.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {mainFood.pizzas.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ پیتزایی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                ساندویچ‌ها
              </h2>

              {mainFood &&
              mainFood.sandwiches &&
              mainFood.sandwiches.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {mainFood.sandwiches.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ ساندویچی یافت نشد.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default MainFoodLayout;
