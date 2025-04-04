import { FoodModel } from "../../models";
import { Request, Response } from "express";

export const updateFoodById = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const { foodId } = req.params;

    const updatedFood = await FoodModel.findByIdAndUpdate(foodId, foodData, {
      new: true,
    });

    if (!updatedFood) {
      res.status(404).json({ message: "Food not found" });
      return;
    }

    res.status(200).json({ message: "Food updated successfully", updatedFood });
  } catch (error) {
    console.error("Error updating food:", error);

    res.status(500).json({
      message: "An error occurred while updating the food",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
