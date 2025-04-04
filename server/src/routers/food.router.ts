import { Router } from "express";
import { UserRoleEnum } from "../constants";
import { authenticateUser, authorize } from "../middleware";
import {
  createFood,
  deleteFoodById,
  updateFoodById,
  getAllFoods,
  getFoodById,
  getFoodsWithCategories,
} from "../controllers";

export const foodRouter = Router();

foodRouter.route("/").get(getAllFoods).post(createFood);

foodRouter.route("/with-categories").get(getFoodsWithCategories);

foodRouter
  .route("/:foodId")
  .get(getFoodById)
  .patch(authenticateUser, authorize(UserRoleEnum.ADMIN), updateFoodById)
  .delete(authenticateUser, authorize(UserRoleEnum.ADMIN), deleteFoodById);
