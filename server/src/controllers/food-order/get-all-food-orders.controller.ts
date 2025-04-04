import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import { FoodOrderStatusEnum } from "../../constants";

export const getAllFoodOrders = async (req: Request, res: Response) => {
  try {
    const {
      status = FoodOrderStatusEnum.PENDING,
      offset = 0,
      limit = 20,
    } = req.query;

    // const filter = status ? { status } : {};

    const allFoodOrders = await FoodOrderModel.find()
      .populate("user")
      .populate({
        path: "foodOrderItems.food",
        model: "Foods",
      })
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip(Number(offset));

    const totalFoods = await FoodOrderModel.countDocuments();

    res.status(200).json({ total: totalFoods, allFoodOrders });
  } catch (error) {
    console.error("Error fetching food orders:", error);

    res.status(500).json({
      message: "An error occurred while fetching food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
