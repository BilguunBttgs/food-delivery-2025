import { Schema } from "mongoose";
import { UserModelType } from "./user.type";
import { FoodOrderStatusEnum } from "../constants";
import { FoodOrderItemModelType } from "./food-order-item.type";

export type FoodOrderModelType = {
  /* Order Identity */
  _id: Schema.Types.ObjectId;
  user: UserModelType;

  /* Order Details */
  totalPrice: number;
  foodOrderItems: FoodOrderItemModelType[];

  /* Order Status */
  status: FoodOrderStatusEnum;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};
