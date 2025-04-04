import { FoodCategoryModelType } from "../types";
import { Model, Schema, model, models } from "mongoose";

const FoodCategorySchema = new Schema<FoodCategoryModelType>(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export const FoodCategoryModel: Model<FoodCategoryModelType> = models["FoodCategories"] || model<FoodCategoryModelType>("FoodCategories", FoodCategorySchema);
