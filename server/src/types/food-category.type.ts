import { Schema } from "mongoose";

export type FoodCategoryModelType = {
  /* Category Identity */
  _id: Schema.Types.ObjectId;
  categoryName: string;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};
