import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import { FoodOrderStatusEnum } from "../../constants";

export const getFoodOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const usersFoodOrders = await FoodOrderModel.find({ user: userId });
    const sortedFoodOrderByStatus = usersFoodOrders.sort(({ status }) => (status === FoodOrderStatusEnum.PENDING ? -1 : 1));

    const total = await FoodOrderModel.countDocuments();

    res.status(200).json({ total, userOrders: sortedFoodOrderByStatus });
  } catch (error) {
    console.error("Error fetching food orders:", error);

    res.status(500).json({
      message: "An error occurred while fetching food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
