import useFetch from "../Hooks/useFetch";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  Appetizer,
  Dessert,
  Drink,
  Food,
  MainDish,
} from "../Types/menuTypes";

interface MenuContextValues {
  menu: Food[] | null;
  setMenu: React.Dispatch<React.SetStateAction<Food[] | null>>;
  mainFood: MainDish | null;
  appetizer: Appetizer | null;
  dessert: Dessert | null;
  drink: Drink | null;
}

const MenuContext = createContext<MenuContextValues>({} as MenuContextValues);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<Food[] | null>(null);
  const [mainFood, setMainFood] = useState<MainDish | null>(null);
  const [appetizer, setAppetizer] = useState<Appetizer | null>(null);
  const [dessert, setDessert] = useState<Dessert | null>(null);
  const [drink, setDrink] = useState<Drink | null>(null);

  const { data: mainResponse } = useFetch<MainDish>(
    "https://tarkhineh-app-api.vercel.app/menu/1",
  );
  const { data: appetizerResponse } = useFetch<Appetizer>(
    "https://tarkhineh-app-api.vercel.app/menu/2",
  );
  const { data: dessertRespomse } = useFetch<Dessert>(
    "https://tarkhineh-app-api.vercel.app/menu/3",
  );
  const { data: drinkResponse } = useFetch<Drink>(
    "https://tarkhineh-app-api.vercel.app/menu/4",
  );

  useEffect(() => {
    if (
      !mainResponse ||
      !appetizerResponse ||
      !dessertRespomse ||
      !drinkResponse
    )
      return;

    setMenu([
      ...mainResponse.persian_foods,
      ...mainResponse.foreign_foods,
      ...mainResponse.pizzas,
      ...mainResponse.sandwiches,
      ...appetizerResponse.persian_appetizers,
      ...appetizerResponse.foreign_appetizers,
      ...appetizerResponse.soups,
      ...appetizerResponse.finger_foods,
      ...dessertRespomse.persian_desserts,
      ...dessertRespomse.foreign_desserts,
      ...dessertRespomse.jellies,
      ...dessertRespomse.cakes,
      ...drinkResponse.persian_drinks,
      ...drinkResponse.foreign_drinks,
      ...drinkResponse.cold_drinks,
      ...drinkResponse.hot_drinks,
    ]);

    setMainFood(mainResponse);

    setAppetizer(appetizerResponse);

    setDessert(dessertRespomse);

    setDrink(drinkResponse);
  }, [mainResponse, appetizerResponse, dessertRespomse, drinkResponse]);

  return (
    <MenuContext.Provider
      value={{ menu, setMenu, mainFood, appetizer, dessert, drink }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined)
    throw new Error("MenuContext was used outside of MenuProvider");

  return context;
}
