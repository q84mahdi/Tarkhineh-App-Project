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
    value: "persian-desserts",
    label: "دسر‌های ایرانی",
  },
  {
    key: "category",
    value: "forign-desserts",
    label: "دسر‌های غیر ایرانی",
  },
  {
    key: "category",
    value: "jellies",
    label: "ژله‌ها",
  },
  {
    key: "category",
    value: "cakes",
    label: "کیک‌ها",
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

function DessertLayout() {
  const [result, setResult] = useState<Food[]>([]);
  const [searchParams] = useSearchParams();
  const { dessert } = useMenu();

  const isFiltered = searchParams.size > 0;

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const search = searchParams.get("q");

  useEffect(() => {
    if (!dessert || !isFiltered) return;

    const allFoods = [
      ...(dessert.persian_desserts || []),
      ...(dessert.foreign_desserts || []),
      ...(dessert.jellies || []),
      ...(dessert.cakes || []),
    ];

    let filteredFoods = allFoods;

    if (category) {
      if (category === "persian-desserts") {
        filteredFoods = dessert.persian_desserts;
      } else if (category === "forign-desserts") {
        filteredFoods = dessert.foreign_desserts;
      } else if (category === "jellies") {
        filteredFoods = dessert.jellies;
      } else if (category === "cakes") {
        filteredFoods = dessert.cakes;
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
  }, [dessert, category, sort, isFiltered, search]);

  return (
    <div className="minimum-height">
      <FilterSection filters={FILTERS} />

      <div className="container mx-auto mb-6 lg:mb-12">
        {isFiltered ? (
          <div>
            <div className="mb-3 flex items-center justify-between lg:mb-5">
              <h2 className="font-bold text-gray-800 lg:text-2xl">
                لیست دسر‌ها ({result?.length || 0})
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
                هیچ دسر‌ی یافت نشد.
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:gap-12">
            <div>
              <div className="mb-3 flex items-center justify-between lg:mb-5">
                <h2 className="font-bold text-gray-800 lg:text-2xl">
                  دسر‌های ایرانی
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

              {dessert &&
              dessert.persian_desserts &&
              dessert.persian_desserts.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {dessert.persian_desserts.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ دسر‌ ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                دسر‌های غیر ایرانی
              </h2>

              {dessert &&
              dessert.foreign_desserts &&
              dessert.foreign_desserts.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {dessert.foreign_desserts.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ دسر‌ غیر ایرانی یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                ژله‌ها
              </h2>

              {dessert && dessert.jellies && dessert.jellies.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {dessert.jellies.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ ژله‌ای یافت نشد.
                </p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
                کیک‌ها
              </h2>

              {dessert && dessert.cakes && dessert.cakes.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  {dessert.cakes.map((item) => (
                    <MenuFoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <p className="my-6 text-center text-gray-500">
                  هیچ کیکی یافت نشد.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default DessertLayout;
