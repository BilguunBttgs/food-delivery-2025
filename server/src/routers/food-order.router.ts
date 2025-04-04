import { Router } from "express";
import { UserRoleEnum } from "../constants";
import { authenticateUser, authorize } from "../middleware";
import {
  createFoodOrder,
  updateFoodOrderById,
  getAllFoodOrders,
  getFoodOrdersByUserId,
  updateFoodsOrderById,
} from "../controllers";

export const foodOrderRouter = Router();

foodOrderRouter
  .route("/")
  .post(authenticateUser, createFoodOrder)
  .get(authenticateUser, authorize(UserRoleEnum.ADMIN), getAllFoodOrders)
  .put(authenticateUser, authorize(UserRoleEnum.ADMIN), updateFoodsOrderById);

foodOrderRouter.patch(
  "/:foodOrderId",
  authenticateUser,
  authorize(UserRoleEnum.ADMIN),
  updateFoodOrderById
);

foodOrderRouter.get("/:userId", authenticateUser, getFoodOrdersByUserId);
