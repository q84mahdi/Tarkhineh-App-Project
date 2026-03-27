import type { Food } from "./menuTypes";

export interface Comment {
  id: string;
  image: string;
  name: string;
  date: string;
  description: string;
  rate: string;
}

export interface Branch {
  id: number;
  name: string;
  title: string;
  image: string;
  phone_numberes: {
    mobile: string;
    desktop_1: string;
    desktop_2: string;
  };
  location: string;
  work_time: string;
  special_foods: Omit<Food, "details">[];
  famous_foods: Omit<Food, "details">[];
  foreign_foods: Omit<Food, "details">[];
  comments: Comment[];
}
