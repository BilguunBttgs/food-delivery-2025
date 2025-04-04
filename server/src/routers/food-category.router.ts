import { Router } from "express";
import { UserRoleEnum } from "../constants";
import { authenticateUser, authorize } from "../middleware";
import {
  createFoodCategory,
  deleteFoodCategoryById,
  updateFoodCategoryById,
  getAllFoodCategories,
  getFoodCategoriesWithCount,
} from "../controllers";

export const foodCategoryRouter = Router();

foodCategoryRouter
  .route("/")
  .get(getAllFoodCategories)
  .post(authenticateUser, authorize(UserRoleEnum.ADMIN), createFoodCategory);

foodCategoryRouter
  .route("/with-count")
  .patch(authenticateUser, authorize(UserRoleEnum.ADMIN))
  .get(getFoodCategoriesWithCount);

foodCategoryRouter
  .route("/:foodCategoryId")
  .patch(
    authenticateUser,
    authorize(UserRoleEnum.ADMIN),
    updateFoodCategoryById
  )
  .delete(
    authenticateUser,
    authorize(UserRoleEnum.ADMIN),
    deleteFoodCategoryById
  );
