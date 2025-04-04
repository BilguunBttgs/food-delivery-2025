import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const getAllFoodCategories = async (_: Request, res: Response) => {
  try {
    const allFoodCategories = await FoodCategoryModel.find();

    res.status(200).json(allFoodCategories);
  } catch (error) {
    console.error("Error fetching food categories:", error);

    res.status(500).json({
      message: "An error occurred while fetching food categories",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
