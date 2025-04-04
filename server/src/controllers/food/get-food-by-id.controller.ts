import { FoodModel } from "../../models";
import { Request, Response } from "express";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;

    const food = await FoodModel.findById(foodId);

    if (!food) {
      res.status(404).json({ message: "Food not found" });
      return;
    }

    res.status(200).json({ message: "Success", food });
  } catch (error) {
    console.error("Error fetching food:", error);

    res.status(500).json({
      message: "An error occurred while fetching the food",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
