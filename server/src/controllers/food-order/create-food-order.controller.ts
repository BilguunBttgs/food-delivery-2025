import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const foodOrderData = req.body;

    const newFoodOrder = await FoodOrderModel.create(foodOrderData);

    res.status(201).json({ message: "Order successfully created", newFoodOrder });
  } catch (error) {
    console.error("Error creating order:", error);

    res.status(500).json({
      message: "An error occurred while creating the order",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
