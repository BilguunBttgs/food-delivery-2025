import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const updateFoodCategoryById = async (req: Request, res: Response) => {
  try {
    const { user, ...categoryData } = req.body;
    const { foodCategoryId } = req.params;

    const updatedFoodCategory = await FoodCategoryModel.findByIdAndUpdate(
      foodCategoryId,
      { ...categoryData },
      {
        new: true,
      }
    );

    if (!updatedFoodCategory) {
      res.status(404).json({ message: "Food category not found" });
      return;
    }

    res.status(200).json({ message: "Food category updated successfully", updatedFoodCategory });
  } catch (error) {
    console.error("Error updating food category:", error);

    res.status(500).json({
      message: "Error occurred while updating the food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
