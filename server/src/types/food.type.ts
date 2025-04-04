import { Schema } from "mongoose";
import { FoodCategoryModelType } from "./food-category.type";

export type FoodModelType = {
  /* Food Identity */
  _id: Schema.Types.ObjectId;
  foodName: string;

  /* Food Details */
  price: number;
  image: string;
  ingredients: string;

  /* Category Information */
  category: FoodCategoryModelType;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};
