export interface Food {
  id: string;
  image: string;
  title: string;
  detail: string;
  main_price: string;
  discount: string;
  price: string;
  rate: string;
  score: string;
  isLiked: boolean;
}

export interface MainDish {
  id: number;
  name: string;
  persian_foods: Food[];
  foreign_foods: Food[];
  pizzas: Food[];
  sandwiches: Food[];
}

export interface Appetizer {
  id: number;
  name: string;
  persian_appetizers: Food[];
  foreign_appetizers: Food[];
  soups: Food[];
  finger_foods: Food[];
}

export interface Dessert {
  id: number;
  name: string;
  persian_desserts: Food[];
  foreign_desserts: Food[];
  jellies: Food[];
  cakes: Food[];
}

export interface Drink {
  id: number;
  name: string;
  persian_drinks: Food[];
  foreign_drinks: Food[];
  cold_drinks: Food[];
  hot_drinks: Food[];
}
