import { UserModelType } from "../types";
import { UserRoleEnum } from "../constants";
import { Model, Schema, model, models } from "mongoose";

const UserSchema = new Schema<UserModelType>(
  {
    /* Identity and Authentication Info */
    email: { type: String, unique: true },
    password: { type: String, required: true, select: false },

    /* Contact Information */
    address: { type: String, default: "" },

    /* Role and Permissions */
    role: {
      type: String,
      enum: Object.values(UserRoleEnum),
      default: UserRoleEnum.USER,
      required: true,
    },

    /* Order Information */
    orderedFoods: [
      { type: Schema.Types.ObjectId, ref: "FoodOrders", default: [] },
    ],
  },
  { timestamps: true }
);

export const UserModel: Model<UserModelType> =
  models["Users"] || model<UserModelType>("Users", UserSchema);
