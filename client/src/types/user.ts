import { UserRoleEnum } from "./common";
import { FoodOrder } from "./order";

export type User = {
  _id: string;
  email: string;
  address: string;
  role: UserRoleEnum;
  orderedFoods: FoodOrder[];
  createdAt: Date;
  updatedAt: Date;
};
