import { Schema } from "mongoose";
import { UserRoleEnum } from "../constants";
import { FoodOrderModelType } from "./food-order.type";

export type UserModelType = {
  /* Identity and Authentication Info */
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;

  /* Contact Information */
  address: string;

  /* Role and Permissions */
  role: UserRoleEnum;

  /* Order Information */
  orderedFoods: FoodOrderModelType[];

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};
