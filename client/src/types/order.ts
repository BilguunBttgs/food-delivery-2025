import { FoodOrderStatusEnum } from "./common";
import { Food } from "./food";
import { User } from "./user";

export type FoodOrderItem = {
  quantity: number;
  food: Food;
};

export type FoodOrder = {
  total: number;
  allFoodOrders: AllFoodOrders[];
};

export type AllFoodOrders = {
  _id: string;
  user: User;
  totalPrice: number;
  status: FoodOrderStatusEnum;
  foodOrderItems: FoodOrderItem[];
  createdAt: Date;
  updatedAt: Date;
};
