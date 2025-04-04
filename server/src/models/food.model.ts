import { FoodModelType } from "../types";
import { Model, Schema, model, models } from "mongoose";

const FoodSchema = new Schema<FoodModelType>(
  {
    /* Food Identity */
    foodName: { type: String, required: true },

    /* Food Details */
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },

    /* Category Information */
    category: { type: Schema.Types.ObjectId, ref: "FoodCategories", required: true },
  },
  { timestamps: true }
);

export const FoodModel: Model<FoodModelType> = models["Foods"] || model<FoodModelType>("Foods", FoodSchema);
