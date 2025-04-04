import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const deleteFoodCategoryById = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;

    const deletedFoodCategory = await FoodCategoryModel.findByIdAndDelete(foodCategoryId);

    if (!deletedFoodCategory) {
      res.status(404).json({ message: "Food category not found" });
      return;
    }

    res.status(200).json({ message: "Food category deleted successfully", deletedFoodCategory });
  } catch (error) {
    console.error("Error deleting food category:", error);

    res.status(500).json({
      message: "Error occurred while deleting the food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
